import _has from 'lodash/has'

/**
 * ruoli:
 *    admin
 *
 *
 */
const menuItems = {
    home: {to: '', label: 'Home'},
    user: {to: 'user', label: 'Users'},
    report: {to: 'report', label: 'Reports'},
    profile: {to: 'profile', label: 'Profile'},
    profilereport: {to: 'profilereport', label: 'Reports'}
}


const menus = {
  admin: [
    menuItems.home,
    menuItems.user,
    menuItems.report,
  ],
  'user': [
    menuItems.home,
    menuItems.profile,
    menuItems.profilereport
  ],
  guest: [

  ]
}

export const state = () => ({
  locale: 'it',
  title: 'Take Down',
  debugMode: true,
  ui: {currentMenuItem: 0, currentTab: 0},
  languages: [
    {id: 'it', label: 'ITA'},
    {id: 'en', label: 'ENG'},
    {id: 'de', label: 'DEU'}
  ],
  menus
})

export const mutations = {
  setLocale (state, payload) {
    state.locale = payload
  },
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
}

export const getters = {
  role: (s, g, rs) => !_has(rs, 'auth.user.role') ? 'user' : rs.auth.user.role,
  user: (s, g, rs) => !_has(rs, 'auth.user') ? '' : rs.auth.user,
  userName: (s, g, rs) => !_has(rs, 'auth.user.userName') ? '' : rs.auth.user.userName,
  menuItems: (s, g) => s.menus[g.role],
  isAdmin: (s,g) => g.role === ['admin']
}
