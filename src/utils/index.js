import axios from 'axios'
import qs from 'qs'
import {message} from 'antd'
// 建议不要直接调用axios,采用创建实例的方式
// 集中处理异常情况
const instance = axios.create({
  timeout: 15000 // 请求超时时间
})
const method = (type, api, params, cb) => {
  return new Promise((resolve, reject) => {
    instance[type]('/home' + api, params).then(res => {
      if (res.data.status) {
        resolve(res.data);
      } else if (+res.data.status === 4401) {
        message.warning('您的操作已超时，请重新登陆');
      } else {
        cb && cb();
      }
    }).catch((err) => {
      message.warning('服务器繁忙');
      reject(err)
    })
  })
}


const ajaxGet = (api, data = null, beanName) => {
  return method('get', api, {
    params: qs.stringify(data)
  })
}

const ajaxPost = (api, data = null, beanName, cb) => {
  return method('post', api, qs.stringify(data), cb)
}

export {
  ajaxGet,
  ajaxPost
}
