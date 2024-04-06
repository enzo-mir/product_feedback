/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const PagesController = () => import('#controllers/pages_controller')
const AuthController = () => import('#controllers/auth_controller')
import router from '@adonisjs/core/services/router'

router.get('/', [PagesController, 'index'])

router.get('/:id', [PagesController, 'product'])
router
  .group(() => {
    router.post('register', [AuthController, 'register'])
    router.post('login', [AuthController, 'login'])
  })
  .prefix('auth')
