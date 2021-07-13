import axios from 'axios'
import { baseURL } from '@/config'
class HttpRequest {
  constructor (baseurl = baseURL) {
    this.baseurl = baseurl;
    this.queue = {};
  }
  getInsideConfig () {
    const config = {
      baseurl: this.baseurl,
      headers: {

      }
    }
    return config
  }
  interceptors (instance) {
    instance.interceptors.request.use(config => {
      console.log(config)
      return config
    }, error => {
      return Promise.reject(error)
    })
    instance.interceptors.response.use(res => {
      console.log(res)
      return res
    }, error => {
      return Promise.reject(error)
    })
  }
  request (options) {
    options = Object.assign(this.getInsideConfig(), options)
    console.log(options)
    const instance = axios.create()
    console.log(instance)
    this.interceptors(instance)
    return instance(options)
    // return instance
  }
}
export default HttpRequest
