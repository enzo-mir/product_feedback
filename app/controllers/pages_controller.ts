import Feedback from '#models/feedback'
import FeedbackComment from '#models/feedback_comment'
import PrductServices from '#services/product_service'
import type { HttpContext } from '@adonisjs/core/http'

export default class PagesController {
  async index(ctx: HttpContext) {
    const products = await new PrductServices().getAll()
    console.log(ctx.auth.user)

    return ctx.inertia.render('home', {
      products,
    })
  }

  async product(ctx: HttpContext) {
    const id = ctx.params.id as unknown as number
    const product = await new PrductServices().getOne(id)
    const getFeedBacks = await Feedback.query().select('*').where('product_id', id)
    const getFeedbackComments = await FeedbackComment.query().select('*').where('product_id', id)

    return ctx.inertia.render('product', {
      product,
      feedbacks: getFeedBacks,
      feedback_comments: getFeedbackComments,
    })
  }
}
