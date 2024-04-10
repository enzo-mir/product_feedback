import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'feedback_comments'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('feedback_id')
        .unsigned()
        .references('id')
        .inTable('feedbacks')
        .onDelete('CASCADE')
      table
        .integer('product_id')
        .unsigned()
        .references('id')
        .inTable('products')
        .onDelete('CASCADE')
      table
        .string('pseudo')
        .references('pseudo')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table.string('text').notNullable()
    })

    this.defer(async (db) => {
      await db.table(this.tableName).insert({
        pseudo: 'Enzo',
        feedback_id: 1,
        product_id: 1,
        text: 'this is a comment',
      })
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
