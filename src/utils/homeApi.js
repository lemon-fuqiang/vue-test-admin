import request from './request.js'

export function getCards() {
    return request({
        url: 'home/cardList',
        method: 'post'
    })
}