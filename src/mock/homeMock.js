//模拟目录数据
const cardList = [
    {
        id:'1000',
        label: '今日支付订单',
        tite: '首页',
        icon: 'home',
        color:'#ffff00',
        num: ''
    },
    {
        id:'1001',
        label: '今日出售订单',
        tite: '首页',
        icon: 'home',
        color:'#ff0000',
        num: ''
    },
]
export default {
    "post|home/cardList": option => {
        return {
            status: 200,
            message: "success",
            data: cardList
        };
    }
};