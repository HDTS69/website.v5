const { PHONE_PATTERNS } = require('@/utils/security')

describe('Phone Number Validation', () => {
  const validPhoneNumbers = [
    '0412345678',
    '0412 345 678',
    '0412 345678',
    '0412345 678',
    '+61412345678',
    '+61 412 345 678',
    '02 1234 5678',
    '0212345678',
    '0412  345  678', // multiple spaces
    ' 0412345678 ', // leading/trailing spaces
  ]

  const invalidPhoneNumbers = [
    '123456789', // missing area code
    '04123456', // too short
    '041234567890', // too long
    '0912345678', // invalid area code
    'abcd123456', // contains letters
    '0412 3456 789', // wrong grouping
    '', // empty string
    ' ', // just spaces
  ]

  describe('HTML Pattern', () => {
    const htmlPattern = new RegExp(PHONE_PATTERNS.HTML)

    test.each(validPhoneNumbers)(
      'should accept valid phone number: %s',
      (number) => {
        expect(htmlPattern.test(number.trim())).toBe(true)
      }
    )

    test.each(invalidPhoneNumbers)(
      'should reject invalid phone number: %s',
      (number) => {
        expect(htmlPattern.test(number.trim())).toBe(false)
      }
    )
  })

  describe('JavaScript Pattern', () => {
    const jsPattern = new RegExp(PHONE_PATTERNS.JS)

    test.each(validPhoneNumbers)(
      'should accept valid phone number: %s',
      (number) => {
        expect(jsPattern.test(number.trim())).toBe(true)
      }
    )

    test.each(invalidPhoneNumbers)(
      'should reject invalid phone number: %s',
      (number) => {
        expect(jsPattern.test(number.trim())).toBe(false)
      }
    )
  })
}) 