import React from 'react'
import { FormTaskComplete } from './FormTaskComplete'
import { render, screen, fireEvent } from '@testing-library/react'
import user from '@testing-library/user-event'

describe('test FormTaskComplete', () => {
  it('test required elements', () => {
    render(<FormTaskComplete />)
    const firstName = screen.getByPlaceholderText('John')
    const lastName = screen.getByPlaceholderText('Doe')
    expect(firstName).toBeInTheDocument()
    expect(lastName).toBeInTheDocument()
    clickSaveButton()
  })
  it('test first name and last name empty', () => {
    render(<FormTaskComplete />)
    clickSaveButton()

    expect(
      screen.queryByText(/Please, provide your first name/)
    ).toBeInTheDocument()
    expect(
      screen.queryByText(/Please, provide your last name/)
    ).toBeInTheDocument()
  })
  it('test birthday format', () => {
    render(<FormTaskComplete />)
    const birthday = screen.getByLabelText(/Birthday/i)
    user.type(birthday, 'ABCDEFGH')
    clickSaveButton()

    expect(
      screen.queryByText(/Please, provide valid birthday format/)
    ).toBeInTheDocument()
  })
  it('test birthday range', () => {
    render(<FormTaskComplete />)
    const birthday = screen.getByLabelText(/Birthday/i)
    user.type(birthday, '2023-12-12')
    clickSaveButton()

    expect(
      screen.queryByText(/Please, provide valid birthday range/)
    ).toBeInTheDocument()
  })
  it('test inactive date empty', () => {
    render(<FormTaskComplete />)
    const userTypeSelect = screen.getByLabelText(/User Type/i)
    fireEvent.change(userTypeSelect, { target: { value: 'Inactive' } })
    clickSaveButton()

    expect(
      screen.queryByText(/Please, provide inactive date/)
    ).toBeInTheDocument()
  })
})

function clickSaveButton() {
  user.click(screen.getByRole('button', { name: /Save/i }))
}
