import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import users from '../fixtures/users.json'
import reports from '../fixtures/reports.json'
import profiles from '../fixtures/profiles.json'
import profileReports from '../fixtures/profileReports.json'



const mock = new MockAdapter(axios, {delayResponse: 300})
const success = {success: true}

mock
  .onGet('/api/auth/user').reply(() => [200, user])
  .onGet('/profile').reply(() => [200, user])
  .onGet('/principal').reply(() => [200, user])

  .onGet('/api/users').reply(() => [200, users])
  .onGet('/api/reports').reply(() => [200, reports])
  .onGet('/api/profiles').reply(() => [200, profiles])
  .onGet('/api/profileReports').reply(() => [200, profileReports])
  .onPost('/api/profiles').reply(() => [200, profiles])
  .onPost('/api/profiles/${id}').reply(() => [200, profiles])



  .onGet('/logout').reply(() => [200, {user: null, role: 'admin', loggedIn: false}])
  .onGet('http://localhost:8080/monitor').reply(() => [200, {user: null, role: 'admin', loggedIn: true}])
  .onGet('/testerror500').reply(500)
  .onGet('/testerror403').reply(403)
  .onGet('/testtimeout').timeout()


export default 'mock'
