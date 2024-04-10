import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Feedback extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare user_id: string

  @column()
  declare pseudo: string

  @column()
  declare product_id: number

  @column()
  declare text: string
}
