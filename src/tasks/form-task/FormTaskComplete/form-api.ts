import { IUserInfo } from './IUserInfo'

export const saveUserForm = (data: IUserInfo) => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 1000)
  }).then((res: any) => {
    console.log('Form is saved', res)
  })
}
