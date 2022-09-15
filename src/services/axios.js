import axios from 'axios'

const instance = axios.create({
	baseURL: 'http://123.207.32.32:9001',
	timeout: 8000
});

instance.interceptors.request.use(
  // 请求拦截
  (config) => {
    // 1.发送网络请求时, 在界面的中间位置显示Loading的组件

    // 2.某一些请求要求用户必须携带token, 如果没有携带, 那么直接跳转到登录页面
    config.params={'cookie':'MUSIC_A=50f3b23679aff927891a46a2e0d55e46c77e64b33e02512adf19aa9a97b8f35c8a08bd5bf851808f744ff74aeff3219287bdd7baac3f3abdc35027cdd2ecc231fdd348d568464faca0d2166338885bd7'
    ,...config.params}
    // 3.params/data序列化的操作
    return config
  },
  (err) => {}
)

instance.interceptors.response.use(
  // 响应拦截
  (res) => {
    return res.data
  },
  (err) => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          console.log('请求错误')
          break
        case 401:
          console.log('未授权访问')
          break
        default:
          console.log('其他错误信息')
      }
    }
    return err.response&&err.response.data
  }
)

export default instance
