export const rowsPerPageItems = [20, 100]

let doMock = false
let url = '/api'

if (window.location.hostname === 'localhost') {

}

url = 'https://api.takedownwebsite.com'
export const baseURL = url
export const mockApp = doMock
