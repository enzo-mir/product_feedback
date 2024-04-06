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
        .string('pseudo')
        .references('pseudo')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table.string('text').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
