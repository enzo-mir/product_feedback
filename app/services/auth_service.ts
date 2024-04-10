import { HttpContext } from '@adonisjs/core/http'

export default class AuthService {
  async getUserDatas(ctx: HttpContext) {
    if (await ctx.auth.check()) {
      return {
        id: ctx.auth.user?.id,
        email: ctx.auth.user?.email,
        pseudo: ctx.auth.user?.pseudo,
      }
    }
    return undefined
  }
}
