import { Request, Response } from 'express'
import { User } from '../models/User'

class UserController {
  public getUserById (req: Request, res: Response) {
    const user: User = new User('a', 'b', 'c', 'd')

    res.status(200).send({
      user: user.getFullname()
    })
  }

  public updateUser (req: Request, res: Response) {
    res.status(200).send({
      message: 'put request asdf!!!!'
    })
  }

  public deleteUser (req: Request, res: Response) {
    res.status(200).send({
      message: 'delete request asdf!!!!'
    })
  }

  public getUsers (req: Request, res: Response) {
    res.status(200).send({
      message: 'GET request asdf!!!!'
    })
  }

  public createUser (req: Request, res: Response) {
    res.status(200).send({
      message: 'post request asdf!!!!'
    })
  }

}

export { UserController }
