import { HttpContext } from '@adonisjs/core/http'

export default class AuthService {
  async getUserDatas(ctx: HttpContext) {
    if (await ctx.auth.check()) {
      return {
        email: ctx.auth.user?.email,
        pseudo: ctx.auth.user?.pseudo,
      }
    }
    return undefined
  }
}
