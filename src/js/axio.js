import axios from 'axios'
import store from '../store'

let axiosDate = new Date()
axios.defaults.withCredentials = false
export default async (url = '', data = {}, showLoading = '', type = 'POST', isUrl = 0) => {
  if (showLoading === true) {
    store.dispatch('showLoading', true) // 全局请求
  }
  // 访问地址
  const basicUrl = 'http://baidu'
  // const basicUrl = 'https://m.gzbfdc.com/servlet';
  type = type.toUpperCase()
  if (isUrl === 0) {
    url = basicUrl + url
  }
  try {
    if (type === 'GET') {
      const response = axios.get(url, {params: data})
      return response
    } else if (type === 'POST' && data) {
      // console.log(store.state.leftContent)
      // const response = axios.post(url, data ,{headers: {'Content-Type': 'application/json'}});
      // console.log('post:' + JSON.stringify(data));
      // return response;
      return new Promise((resolve, reject) => {
        axios.post(url, data, {headers: {'Content-Type': 'text/json'}})
          .then(response => {
            console.log('正确axio请求成功')
            let oDate = new Date()
            let time = oDate.getTime() - axiosDate.getTime()
            // console.log(time)
            if (showLoading === true) {
              if (time > 800) time = 800
              setTimeout(() => {
                store.dispatch('showLoading', false)
                resolve(response)
              }, time)
            } else {
              resolve(response)
            }
            // resolve(response)
            // if (time > 800) time = 800
            //     setTimeout(() => {
            //         store.dispatch('showLoading', false)
            //         resolve(response)
            //     }, 500)
            // resolve(response)
          })
          .catch((error) => {
            console.log('错误axio请求' + error)
            store.dispatch('showLoading', false)
            axiosDate = new Date()
            reject(error)
          })
      })
    } else if (type === 'DELETE') {
      const response = axios({
        method: 'delete',
        url: url,
        params: data
      })
      console.log('delete:' + JSON.stringify(data))
      return response
    } else if (type === 'PUT') {
      const response = axios({
        method: 'put',
        url: url,
        params: data
      })
      console.log('delete:' + JSON.stringify(data))
      return response
    } else {
      const response = axios.post(url)
      return response
    }
  } catch (error) {
    throw new Error(error)
  }
}
