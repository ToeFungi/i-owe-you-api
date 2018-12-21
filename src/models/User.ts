class User {
  private readonly id: string
  private readonly firstname: string
  private readonly lastname: string
  private readonly email: string

  constructor (id: string, firstname: string, lastname: string, email: string) {
    this.id = id
    this.firstname = firstname
    this.lastname = lastname
    this.email = email
  }

  public getId (): string {
    return this.id
  }

  public getFirstname (): string {
    return this.firstname
  }

  public getLastname (): string {
    return this.lastname
  }

  public getFullname (): string {
    return `${this.firstname} ${this.lastname}`
  }

  public getEmail (): string {
    return this.email
  }

  public toJson (): object {
    return {
      id: this.id,
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email
    }
  }
}

export { User }
