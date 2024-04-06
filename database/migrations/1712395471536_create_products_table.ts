import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'products'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('title').notNullable()
      table.string('descriptiion').notNullable()
      table.integer('price').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
