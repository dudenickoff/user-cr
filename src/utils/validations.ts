const namesRegex = /^([A-Z, a-z]){1,50}$/
const userNameRegex = /^([A-Z, a-z, 0-9]){1,50}$/
const phoneRegex = /^([0-9]){12}$/

export const required = {
  required: 'This field is required.',
}

export const firstName = {
  pattern: {
    value: namesRegex,
    message: 'First name should be from 1 to 50 letters long',
  },
}

export const lastName = {
  pattern: {
    value: namesRegex,
    message: 'Last name should be from 1 to 50 letters long',
  },
}

export const userName = {
  pattern: {
    value: userNameRegex,
    message: 'User name field should be from 1 and 50 letters and numbers long',
  },
}

export const phoneNumber = {
  pattern: {
    value: phoneRegex,
    message: 'Phone number should be 12 numbers',
  },
}