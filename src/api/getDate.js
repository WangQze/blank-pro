import axio from '../js/axio'

// 登录
export const search = (urlname, data) => axio(urlname, data, true, 'post')
