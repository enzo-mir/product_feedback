import AuthService from '#services/auth_service'
import { defineConfig } from '@adonisjs/inertia'

export default defineConfig({
  rootView: 'inertia_layout',
  sharedData: {
    errors: (ctx) => ctx.session?.flashMessages.get('errors'),
    user: async (ctx) => await new AuthService().getUserDatas(ctx),
  },

  ssr: {
    enabled: false,
    entrypoint: 'inertia/app/ssr.tsx',
  },
})
