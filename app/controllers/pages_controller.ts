import Feedback from '#models/feedback'
import PrductServices from '#services/product_service'
import type { HttpContext } from '@adonisjs/core/http'

export default class PagesController {
  async index(ctx: HttpContext) {
    const products = await new PrductServices().getAll()

    return ctx.inertia.render('home', {
      products,
    })
  }

  async product(ctx: HttpContext) {
    const id = ctx.params.id as unknown as number
    const product = await new PrductServices().getOne(id)
    const getFeedBacks = await Feedback.query().select('*').where('product_id', id)

    return ctx.inertia.render('product', {
      product,
      feedbacks: getFeedBacks,
    })
  }
}
