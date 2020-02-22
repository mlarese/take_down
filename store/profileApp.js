import _has from 'lodash/has'

/**
 * ruoli:
 *    admin
 *
 *
 */
const profileTap = {
    user: {to: 'profile', label: 'Profiles'},
    report: {to: 'profilereport', label: 'Profile Reports'}
}

export const state = () => ({
    ui: {currentTab: 0},
    profileTap
})

export const mutations = {
}

export const actions = {
}

export const getters = {
}
