export const rowsPerPageItems = [20, 100]

let doMock = false
let url = '/api'
// if (process.env.NODE_ENV === 'development') {
if (window.location.host === 'localhost:3000') {
  let url = 'http://api.test.eu.ngrok.io/api'
}

export const baseURL = url
export const mockApp = doMock
