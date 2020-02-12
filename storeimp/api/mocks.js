import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import users from '../fixtures/users.json'
import reports from '../fixtures/reports.json'



const mock = new MockAdapter(axios, {delayResponse: 300})
const success = {success: true}

mock
  .onGet('/api/auth/user').reply(() => [200, user])
  .onGet('/profile').reply(() => [200, user])
  .onGet('/principal').reply(() => [200, user])

  .onGet('/brandLandingPages').reply(() => [200, brandLandingPages])
  .onGet('/users').reply(() => [200, users])
  .onGet('/reports').reply(() => [200, reports])
  .onGet('/brand').reply(() => [200, brand])
  .onGet('/badwords').reply(() => [200, badwords])
  .onGet('/channels').reply(() => [200, channels])
  .onGet('/roles').reply(() => [200, roles])
  .onGet('/usersRoles').reply(() => [200, usersRoles])
  .onGet('/landingPages').reply(() => [200, landingPages])
  .onGet('/usersBrandsChannels').reply(() => [200, usersBrandsChannels])


  .onGet('/logout').reply(() => [200, {user: null, role: 'admin', loggedIn: false}])
  .onGet('http://localhost:8080/monitor').reply(() => [200, {user: null, role: 'admin', loggedIn: true}])
  .onGet('/testerror500').reply(500)
  .onGet('/testerror403').reply(403)
  .onGet('/testtimeout').timeout()


export default 'mock'
