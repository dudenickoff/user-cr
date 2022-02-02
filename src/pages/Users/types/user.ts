export type User = {
  id: number,
  firstName: string,
  lastName: string,
  timezone: string,
  userName: string,
  phoneNumber: number,
  aboutMe: string
}

export type UsersArray = Array<User>
