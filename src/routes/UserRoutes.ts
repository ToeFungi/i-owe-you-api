import { UserController } from '../controllers/UserController'

class UserRoutes {
  private userController: UserController = new UserController()

  public initRoutes (app) {
    app.route('/users')
      .get(this.userController.getUsers)
      .post(this.userController.createUser)

    app.route('/users/:id')
      .get(this.userController.getUserById)
      .put(this.userController.updateUser)
      .delete(this.userController.deleteUser)
  }
}

export { UserRoutes }
