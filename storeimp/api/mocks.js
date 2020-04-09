import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import users from '../fixtures/users.json'
import reports from '../fixtures/reports.json'
import profiles from '../fixtures/profiles.json'
import brands from '../fixtures/brands.json'
import profileReports from '../fixtures/profileReports.json'



const mock = new MockAdapter(axios, {delayResponse: 300})
const success = {success: true}

mock
  .onGet('/api/auth/user').reply(() => [200, user])
  .onGet('/profiles').reply(() => [200, profiles])
  .onGet('/principal').reply(() => [200, user])
  .onGet('/brands').reply(() => [200, brands])


  .onGet('/api/users').reply(() => [200, users])
  .onGet('/api/users/1').reply(() => [200, users [0]])
  .onGet('/api/users/2').reply(() => [200, users [1]])
  .onGet('/api/users/3').reply(() => [200, users [2]])
  .onGet('/api/users/4').reply(() => [200, users [3]])
  .onGet('/api/users/5').reply(() => [200, users [4]])
  .onGet('/api/brands').reply(() => [200, brands])
  .onGet('/api/brands/1').reply(() => [200, brands [0]])
  .onGet('/api/brands/2').reply(() => [200, brands [1]])
  .onGet('/api/brands/3').reply(() => [200, brands [2]])
  .onGet('/api/brands/4').reply(() => [200, brands [3]])
  .onGet('/api/brands/5').reply(() => [200, brands [4]])
  .onGet('/api/brands/6').reply(() => [200, brands [5]])
  .onGet('/api/brands/7').reply(() => [200, brands [6]])
  .onGet('/api/brands/8').reply(() => [200, brands [7]])
  .onGet('/api/brands/9').reply(() => [200, brands [8]])
  .onGet('/api/reports').reply(() => [200, reports])
  .onGet('/api/reports/1').reply(() => [200, reports [0]])
  .onGet('/api/reports/2').reply(() => [200, reports [1]])
  .onGet('/api/reports/3').reply(() => [200, reports [2]])
  .onGet('/api/reports/4').reply(() => [200, reports [3]])
  .onGet('/api/reports/5').reply(() => [200, reports [4]])
  .onGet('/api/brands').reply(() => [200, brands])
  .onGet('/api/profiles').reply(() => [200, profiles])
  .onGet('/api/profile_reports').reply(() => [200, profileReports])
  .onGet('/api/profile_reports/1').reply(() => [200, profileReports [0]])
  .onPost('/api/profile_reports').reply(() => [200, profile_reports])
  .onPut('/api/profile_reports/1').reply(() => [200, profile_reports [0]])
  .onPut('/api/profile_reports/2').reply(() => [200, profile_reports [1]])
  .onPut('/api/profile_reports/3').reply(() => [200, profile_reports [2]])
  .onPut('/api/profile_reports/4').reply(() => [200, profile_reports] [3])
  .onGet('/api/profile_reports/2').reply(() => [200, profileReports [1]])
  .onGet('/api/profile_reports/3').reply(() => [200, profileReports [2]])
  .onGet('/api/profile_reports/4').reply(() => [200, profileReports [3]])
  .onGet('/api/profile_reports/5').reply(() => [200, profileReports [4]])
  .onGet('/api/profile_reports/6').reply(() => [200, profileReports [5]])
  .onGet('/api/profile_reports/7').reply(() => [200, profileReports [6]])
  .onPost('/api/profile_reports').reply(() => [200, profileReports])
  .onPost('/api/brands').reply(() => [200, brands])
  .onPut('/api/brands/1').reply(() => [200, brands [0]])
  .onPut('/api/brands/2').reply(() => [200, brands [1]])
  .onPut('/api/brands/3').reply(() => [200, brands [2]])
  .onPut('/api/brands/4').reply(() => [200, brands] [3])
  .onPost('/api/profiles').reply(() => [200, profiles])
  .onPost('/api/profiles/${id}').reply(() => [200, profiles])



  .onGet('/logout').reply(() => [200, {user: null, role: 'admin', loggedIn: false}])
  .onGet('http://localhost:8080/monitor').reply(() => [200, {user: null, role: 'admin', loggedIn: true}])
  .onGet('/testerror500').reply(500)
  .onGet('/testerror403').reply(403)
  .onGet('/testtimeout').timeout()


export default 'mock'
