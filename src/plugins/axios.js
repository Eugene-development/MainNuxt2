export default function ({ $axios, store, $auth }) {
  $axios.onRequest((config) => {
    $axios.setToken('0', 'Bearer')
  })
}
