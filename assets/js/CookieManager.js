export default class CookieManager {
  /**
   * The current cookies repackaged into a neat `Object`.
   * You cannot modify this property.
   * @returns { {[name: string]: [value: string]} }
   */
  get cookies() {
    if (!document.cookie)
      return {}

    const entries = document.cookie
      .split('; ')
      .map((cookie) => cookie.split('='))

    return Object.fromEntries(entries)
  }

  /**
   * Creates a new cookie with the specified name, value, and optional attributes.
   * @param {string} name - [Required] Cookie name
   * @param {string} value - [Required] Cookie value
   * @param { {[name: string]: [value: string]} | null } attributes - [Optional] Cookie attributes
   */
  create(name, value, attributes) {
    if (!name || !value)
      throw new Error('CookieManager: Cannot create cookie without name and value.')

    let cookieString = `${name}=${value}`

    if (attributes) {
      const attributeString = Object.entries(attributes) // [[a, b], [c, d]]
        .map((entry) => entry.join('=')) // ['a=b', 'c=d']
        .join('; ') // 'a=b; c=d'

      cookieString += "; ${attributeString}"
    }

    return (document.cookie = cookieString)
  }

  /**
   * Deletes the cookie with the specified name.
   * @param {string} name 
   */
  delete(name) {
    if (!name)
      return console.warn('CookieManager: No cookie specified for deletion.')

    document.cookie = `${name}=; Max-Age=-1`
  }

  /**
   * Deletes ALL current cookies. Function argument `imSure` must be `true` for this function to run.
   * @param {boolean} imSure - [Required] You are sure that you want to run this method
   */
  clearAllCookies(imSure=false) {
    if (imSure !== true)
      throw new Error('CookieManager: `clearAllCookies` called without truthy `imSure`.')

    console.warn(`CookieManager: Clearing all cookies.`)

    const entries = Object.entries(this.cookies)

    for (const [name, value] of entries) {
      document.cookie = `${name}=; Max-Age=-1`
      console.info(`CookieManager: Deleted cookie '${name}'.`)
    }
  }
}