import User from '#models/user'
import { LoginType, RegisterType } from '#type/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  async register(ctx: HttpContext) {
    const payload: RegisterType = ctx.request.all() as unknown as RegisterType
    try {
      const user = await User.create(payload)
      const verifyCredentials = await User.verifyCredentials(user.email, user.password)
      await ctx.auth.use('web').login(verifyCredentials)
      return ctx.response.redirect().back()
    } catch (error) {
      ctx.session.flash({
        errors: 'Something went wrong',
      })

      return ctx.response.redirect().back()
    }
  }

  async login(ctx: HttpContext) {
    const payload: LoginType = ctx.request.all() as unknown as LoginType

    try {
      const verifyCredentials = await User.verifyCredentials(payload.email, payload.password)
      await ctx.auth.use('web').login(verifyCredentials)
      return ctx.response.redirect().back()
    } catch (error) {
      ctx.session.flash({
        errors: 'Something went wrong',
      })

      return ctx.response.redirect().back()
    }
  }
  async logout(ctx: HttpContext) {
    if (await ctx.auth.check()) {
      ctx.auth.use('web').logout()
      return ctx.response.redirect().back()
    }
  }
}
