import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'feedbacks'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.uuid('user_id').references('id').inTable('users').onDelete('CASCADE')
      table.string('pseudo').references('pseudo').inTable('users').onDelete('CASCADE')
      table
        .integer('product_id')
        .unsigned()
        .references('id')
        .inTable('products')
        .onDelete('CASCADE')
      table.string('text').notNullable()
    })

    this.defer(async (db) => {
      await db.table(this.tableName).insert({
        id: 1,
        user_id: '1',
        pseudo: 'Enzo',
        product_id: 1,
        text: 'this is a feedback',
      })
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
