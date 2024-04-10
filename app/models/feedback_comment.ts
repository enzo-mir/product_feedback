import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class FeedbackComment extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare product_id: number

  @column()
  declare feedback_id: number

  @column()
  declare pseudo: string

  @column()
  declare text: string
}
