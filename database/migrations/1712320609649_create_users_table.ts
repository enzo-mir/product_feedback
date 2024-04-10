import hash from '@adonisjs/core/services/hash'
import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').defaultTo(this.db.rawQuery('uuid()').knexQuery).primary()
      table.string('pseudo').nullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password').notNullable()
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
    this.defer(async (db) => {
      await db.table(this.tableName).insert({
        id: '1',
        pseudo: 'Enzo',
        password: await hash.make('test'),
        email: 'miraglioenzo93@gmail.com',
      })
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
