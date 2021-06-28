import http from 'http'

export default function ({ route }) {
  return http.post('https://my-stats-api.com', {
    url: route.fullPath
  })
}
