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
const FeedbacksController = () => import('#controllers/feedbacks_controller')
const CommentsController = () => import('#controllers/comments_controller')
import router from '@adonisjs/core/services/router'

router.get('/', [PagesController, 'index'])

router.get('/:id', [PagesController, 'product'])
router
  .group(() => {
    router.post('register', [AuthController, 'register'])
    router.post('login', [AuthController, 'login'])
    router.get('logout', [AuthController, 'logout'])
  })
  .prefix('auth')

router
  .group(() => {
    router.post('create', [FeedbacksController, 'create'])
    router.post('update', [FeedbacksController, 'update'])
    router.get('/:id/delete', [FeedbacksController, 'delete'])
  })
  .prefix('feedback')

router
  .group(() => {
    router.post('create', [CommentsController, 'create'])
    router.get('/:id/delete', [CommentsController, 'delete'])
  })
  .prefix('comment')
