import request from './request.js'

export function getMenu() {
    return request({
        url: '/menu/menuList',
        method: 'get'
    })
}