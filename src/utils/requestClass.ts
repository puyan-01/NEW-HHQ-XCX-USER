const config = Symbol('config')
const isCompleteURL = Symbol('isCompleteURL')
const requestBefore = Symbol('requestBefore')
const requestAfter = Symbol('requestAfter')

class requestClass {
  // 默认配置
  [config]: { baseURL?: string } & UniApp.RequestOptions = {
    baseURL: 'http://192.168.31.111:21021/swagger/index.html',
    url: 'http://192.168.31.111:21021/swagger/index.html',
    header: {
      'content-type': 'application/x-www-form-urlencoded',
    },
    method: 'GET',
    timeout: 3000,
    dataType: 'json',
    responseType: 'text',
  }

  // 拦截器
  interceptors = {
    request: (func: any) => {
      if (func) {
        requestClass[requestBefore] = func
      } else {
        requestClass[requestBefore] = (request) => request
      }
    },
    response: (func: any) => {
      if (func) {
        requestClass[requestAfter] = func
      } else {
        requestClass[requestAfter] = (response) => response
      }
    },
  }

  // 请求之前，是默认配置
  static [requestBefore](config: UniApp.RequestOptions) {
    return config
  }
  // 请求之后，默认配置发生改变的话
  static [requestAfter](response: any) {
    return response
  }
  // 判断url是否完整
  static [isCompleteURL](url: string) {
    return /(http|https):\/\/([\w.]+\/?)\S*/.test(url)
  }

  request(options: UniApp.RequestOptions & { baseURL?: string }) {
    options.baseURL = options.baseURL || this[config].baseURL
    options.dataType = options.dataType || this[config].dataType
    options.url = requestClass[isCompleteURL](options.url)
      ? options.url
      : options.baseURL + options.url
    options.data = options.data
    options.header = { ...options.header, ...this[config].header }
    options.method = options.method || this[config].method

    options = { ...options, ...requestClass[requestBefore](options) }

    return new Promise((resolve, reject) => {
      options.success = function (res) {
        resolve(requestClass[requestAfter](res))
      }
      options.fail = function (err) {
        reject(requestClass[requestAfter](err))
      }
      uni.request(options)
      // 中断请求实现方法
      // let obj: any = {}
      // obj[request.url] = uni.request(options)
      // abortRequest() {
      //   for (const key in obj) {
      //     if (Object.prototype.hasOwnProperty.call(obj, key)) {
      //       const element = obj[key];
      //       element.abort()
      //     }
      //   }
      // }
    })
  }

  get(url: string, data: any = {}, options: Recordable = {}) {
    return this.request({ ...options, url, data, method: 'GET' })
  }

  post(url: string, data: any = {}, options: Recordable = {}) {
    return this.request({ ...options, url, data, method: 'POST' })
  }

  put(url: string, data: any = {}, options: Recordable = {}) {
    return this.request({ ...options, url, data, method: 'PUT' })
  }

  delete(url: string, data: any = {}, options: Recordable = {}) {
    return this.request({ ...options, url, data, method: 'DELETE' })
  }

  getConfig() {
    return this[config]
  }

  // 修改默认配置的一个方法，可以修改请求地址，请求方式等等..
  setConfig(func: any) {
    this[config] = func(this[config])
  }
}

export default requestClass
