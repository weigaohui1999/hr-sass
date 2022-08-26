import Cookies from 'js-cookie'

const TokenKey = 'hrsaas-ihrm-token'
const TimeKey = 'hrsaas-timestam-key'
export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getTimeStamp() {
  return Cookies.get(TimeKey)
}

export function setTimeStamp(token) {
  return Cookies.set(TimeKey, Date.now())
}
