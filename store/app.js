import _has from 'lodash/has'

const menuItems = {
    home: {alwaysActive: true, to: '', label: 'Home', icon: 'mdi-home'},
    user: {alwaysActive: true, to: 'user', label: 'Users', icon: 'account_circle'},
    brand: {alwaysActive: true, to: 'brand', label: 'Brands', icon: 'mdi-ballot'},
    report: {alwaysActive: true, to: 'report', label: 'Submissions', icon: 'mdi-clipboard-arrow-up-outline'},
    profile: {alwaysActive: true, to: 'profile', label: 'Profile', icon: 'account_circle'},
    profilereport: {alwaysActive: false, to: 'profilereport', label: 'Submissions', icon: 'mdi-clipboard-arrow-up-outline'}
}


const menus = {
  admin: [
    menuItems.home,
    // menuItems.brand,
    menuItems.report,
    menuItems.user
  ],
  'user': [
    menuItems.home,
    menuItems.profilereport,
    menuItems.profile
  ],
  guest: [

  ]
}

export const state = () => ({
  locale: 'it',
  title: 'Take Down',
  debugMode: true,
  registrationRecord: {},
  ui: {currentMenuItem: 0, currentTab: 0, activeLoginTab: 0},
  menus
})

export const mutations = {
  setLocale (state, payload) {state.locale = payload},
  setActiveLoginTab (state, payload) {state.ui.activeLoginTab = payload},
  setTitle (state, payload) {
    state.title = payload
  },
  setLanguages (state, payload) {
    state.languages = payload
  },
  setMenu (state, payload) {
    state.menu = payload
  }
}

export const actions = {
  register ({commit, dispatch}, data) {
    return dispatch('api/post', {url: '/api/customer/register', data}, {root: true})
  },
  passwordReset ({commit, dispatch}, email) {
    const data = {email}
    return dispatch('api/post', {url: '/api/customer/reset', data}, {root: true})
  },
  logOut ({commit}, $auth) {
    $auth.setUser({})
  }
}

export const getters = {
  role: (s, g, rs) => !_has(rs, 'auth.user.role') ? 0 : rs.auth.user.role,
  user: (s, g, rs) => !_has(rs, 'auth.user') ? '' : rs.auth.user,
  userName: (s, g, rs) => !_has(rs, 'auth.user.name') ? '' : `${rs.auth.user.name} ${rs.auth.user.surname}`,
  menuItems: (s, g) => {
    let rName = 'user'
    if(g.role === 0) rName = 'admin'
    return s.menus[rName]
  },
  isAdmin: (s,g) => g.role === 0
}
