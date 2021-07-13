import axios from './index.js'

export const getUserInfo = (data) => {
  return axios.request({
    url: 'api/getUserInfo',
    method: 'post',
    data
  })
}
