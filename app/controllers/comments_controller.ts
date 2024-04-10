import FeedbackComment from '#models/feedback_comment'
import { CreateFeedbackComment } from '#type/feedback_comment'
import type { HttpContext } from '@adonisjs/core/http'

export default class CommentsController {
  async create(ctx: HttpContext) {
    const payload: CreateFeedbackComment = ctx.request.all() as unknown as CreateFeedbackComment

    try {
      const comment = await FeedbackComment.create({
        text: payload.text,
        pseudo: payload.pseudo,
        feedback_id: payload.feedbackId,
        product_id: payload.productId,
      })
      if (comment) {
        return ctx.response.redirect().back()
      } else throw new Error()
    } catch (error) {
      ctx.session.flash({
        errors: 'Something went wrong',
      })

      return ctx.response.redirect().back()
    }
  }

  async delete(ctx: HttpContext) {
    const id = ctx.params.id
    try {
      await FeedbackComment.query().delete().where('id', id)
      return ctx.response.redirect().back()
    } catch (error) {
      ctx.session.flash({
        errors: 'Something went wrong',
      })

      return ctx.response.redirect().back()
    }
  }
}
