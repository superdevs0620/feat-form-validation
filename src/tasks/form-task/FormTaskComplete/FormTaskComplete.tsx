import React, { useState } from 'react'
import { saveUserForm } from './form-api'
import { IUserInfo } from './IUserInfo'

const RegExp = {
  date: /^(19|20)\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
}

export const FormTaskComplete = () => {
  const [userInfo, setUserInfo] = useState<IUserInfo>({
    firstName: '',
    lastName: '',
    birthday: '',
    userType: 'Active',
    inActiveDate: '',
  })
  const [isActive, setActive] = useState<boolean>(true)
  const [errors, setErrors] = useState<any>({})

  const isPastDate = (date: string): boolean => {
    const currentDate = new Date()
    const selectedDate = new Date(date)

    return currentDate > selectedDate
  }

  const handleChangeUserInfo = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target

    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }))

    if (name === 'userType') {
      if (value === 'Active') {
        setActive(true)
      } else {
        setActive(false)
      }
    }
  }

  const handleSubmitUserInfo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const validationErrors: any = {}
    if (userInfo.firstName.trim() === '') {
      validationErrors.firstName = 'Please, provide your first name'
    }
    if (userInfo.lastName.trim() === '') {
      validationErrors.lastName = 'Please, provide your last name'
    }
    if (userInfo?.birthday && !RegExp.date.test(userInfo.birthday)) {
      validationErrors.birthday = 'Please, provide valid birthday format'
    } else if (userInfo?.birthday && !isPastDate(userInfo.birthday)) {
      validationErrors.birthday = 'Please, provide valid birthday range'
    }
    if (userInfo.userType === 'Inactive') {
      if (userInfo?.inActiveDate && !RegExp.date.test(userInfo.inActiveDate)) {
        validationErrors.inActiveDate =
          'Please, provide valid inactive date format'
      } else if (userInfo?.inActiveDate && !isPastDate(userInfo.inActiveDate)) {
        validationErrors.inActiveDate =
          'Please, provide valid inactive date range'
      } else if (!userInfo?.inActiveDate) {
        validationErrors.inActiveDate = 'Please, provide inactive date'
      }
    }
    setErrors(validationErrors)
    initErrors()

    if (Object.keys(validationErrors).length === 0) {
      saveUserForm(userInfo)
    }
  }

  const initErrors = () =>
    setTimeout(() => {
      setErrors({})
    }, 3000)

  return (
    <section>
      <form onSubmit={handleSubmitUserInfo}>
        <fieldset className="form-fields">
          <legend className="form-feilds-title">Personal Info</legend>
          <div className="form-input-group">
            <label htmlFor="firstName" className="form-label">
              First Name <span className="text-error">*</span>
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="John"
              className={`form-input ${errors?.firstName && 'border-error'}`}
              onChange={handleChangeUserInfo}
            />
            {errors?.firstName && (
              <span className="text-error">{errors?.firstName}</span>
            )}
          </div>
          <div className="form-input-group">
            <label htmlFor="lastName" className="form-label">
              Last Name <span className="text-error">*</span>
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Doe"
              className={`form-input ${errors?.lastName && 'border-error'}`}
              onChange={handleChangeUserInfo}
            />
            {errors?.lastName && (
              <span className="text-error">{errors?.lastName}</span>
            )}
          </div>
          <div className="form-input-group">
            <label htmlFor="birthday" className="form-label">
              Birthday
            </label>
            <input
              id="birthday"
              name="birthday"
              type="text"
              placeholder="YYYY-MM-DD"
              className={`form-input ${errors?.birthday && 'border-error'}`}
              onChange={handleChangeUserInfo}
            />
            {errors?.birthday && (
              <span className="text-error">{errors?.birthday}</span>
            )}
          </div>
        </fieldset>
        <fieldset className="form-fields">
          <legend className="form-feilds-title">User Management</legend>
          <div className="form-input-group">
            <label htmlFor="userType" className="form-label">
              User Type
            </label>
            <select
              id="userType"
              name="userType"
              className="form-input"
              onChange={handleChangeUserInfo}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <div></div>
          <div className="form-input-group">
            <label className="form-label" htmlFor="inActiveDate">
              User Inactive Date
            </label>
            <input
              id="inActiveDate"
              name="inActiveDate"
              type="text"
              placeholder="YYYY-MM-DD"
              className={`form-input ${errors?.inActiveDate && 'border-error'}`}
              onChange={handleChangeUserInfo}
              disabled={isActive}
            />
            {errors?.inActiveDate && (
              <span className="text-error">{errors?.inActiveDate}</span>
            )}
          </div>
        </fieldset>
        <div className="form-submit">
          <button type="submit" className="button">
            Save
          </button>
        </div>
      </form>
    </section>
  )
}
