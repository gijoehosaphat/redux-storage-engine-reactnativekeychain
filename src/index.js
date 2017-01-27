import * as Keychain from 'react-native-keychain'

export default (key) => ({
    load() {
      return Keychain.getGenericPassword().then(credentials => {
        return JSON.parse(credentials.password) || {}
      }).catch(error => {
        //Likely no value previously set
        return {}
      })
    },
    save(state) {
        const jsonState = JSON.stringify(state)
        return Keychain.setGenericPassword(key, jsonState)
    }
});
