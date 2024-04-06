import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'products'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('title').notNullable()
      table.string('description').notNullable()
      table.integer('price').notNullable()
    })
    this.defer(async (db) => {
      await db.table(this.tableName).multiInsert([
        {
          title: 'title1',
          description: 'description1',
          price: '50',
        },
        {
          title: 'title2',
          description: 'description2',
          price: '75',
        },
        {
          title: 'title3',
          description: 'description3',
          price: '5',
        },
        {
          title: 'title4',
          description: 'description4',
          price: '200',
        },
      ])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
