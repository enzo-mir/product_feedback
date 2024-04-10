import Feedback from '#models/feedback'
import { CreateFeedbackType } from '#type/feedbacks'
import type { HttpContext } from '@adonisjs/core/http'

export default class FeedbacksController {
  async create(ctx: HttpContext) {
    const payload: CreateFeedbackType = ctx.request.all() as unknown as CreateFeedbackType
    try {
      if (await ctx.auth.check()) {
        await Feedback.create({
          ...payload,
          user_id: ctx.auth.user!.id,
          pseudo: ctx.auth.user!.pseudo,
        })
        return ctx.response.redirect().back()
      }
      throw new Error()
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
      if (await ctx.auth.check()) {
        await Feedback.query().delete().where('id', Number.parseInt(id))
        return ctx.response.redirect().back()
      }
      throw new Error()
    } catch (error) {
      ctx.session.flash({
        errors: 'Something went wrong',
      })
      return ctx.response.redirect().back()
    }
  }

  async update(ctx: HttpContext) {
    const { text }: CreateFeedbackType = ctx.request.all() as unknown as CreateFeedbackType

    try {
      if (await ctx.auth.check()) {
        await Feedback.query().update({ text }).where('user_id', ctx.auth.user!.id)
        return ctx.response.redirect().back()
      }
    } catch (error) {
      ctx.session.flash({
        errors: 'Something went wrong',
      })
      return ctx.response.redirect().back()
    }
  }
}
