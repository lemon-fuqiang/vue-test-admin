//模拟目录数据
const menu = [
    {
        path: '/',
        name: 'home',
        label: '首页',
        icon: 'home',
        url: ''
    },
    {
        path: '/user',
        name: 'user',
        label: '用户管理',
        icon: 'yonghu',
        url: 'UserManage/UserManage'
    },
    {
        name: 'table',
        label: '表单',
        icon: 'biaodanzujian-biaoge',
        child: [
            {
                path: '/sortTable',
                name: 'sortTable',
                label: '表单排序',
                icon: 'sorttable',
                url: '/sortTable',
            },
            {
                path: '/editTable',
                name: 'editTable',
                label: '表单编辑',
                icon: 'editTable',
                url: '/editTable',
            },
        ]
    },
    {
        name: 'other',
        label: '其他',
        icon: 'houtaiguanli-xitongguanli',
        child: [
            {
                path: '/page1',
                name: 'page1',
                label: '其他1',
                icon: 'setting',
                url: 'other/pageOne',
            },
            {
                path: '/page2',
                name: 'page2',
                label: '其他2',
                icon: 'setting',
                url: 'table/pageTwo',
            },
        ]
    }
]
export default {
    "get|/menu/menuList": option => {
        return {
            status: 200,
            message: "success",
            data: menu
        };
    }
};