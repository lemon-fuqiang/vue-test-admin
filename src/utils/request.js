import axios from "axios";
import { Message,MessageBox } from "element-ui";
import { remove } from "js-cookie";
import store from "../store";
// import getToken from './token';

//创建一个axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,//根据环境获取baseURL
  timeout:5000 //设置请求超时时间
})

//设置请求前拦截
service.interceptors.request.use(
  config=>{
    //请求前做处理，判断是否存在token
    if(store.getters.token){
      config.headers['x-Token']=getToken();
    }
    return config
  },
  error=>{
    console.log(error);
    //request异常时，返回一个reject状态的promise对象
    return Promise.reject(error)
  }
)

//设置返回结果的拦截
service.interceptors.response.use(
  response=>{
    const res=response.data;
    //错误返回判断
    if(res.status!==200){
      Message({
        message:res.message || 'Error',
        type:'error',
        duration:5*1000
      })
      //异常状态码处理，登录超时等
      if(res.code==9999){
        MessageBox.confirm('已退出当前登录，确定退出登录，取消留在当前页面','确认退出',{
          confirmButtonText: '退出',
          cancleButtonText:'取消',
          type:'warning'
        }).then(()=>{
          //退出到登录页

        })
      }
    }
    return res
  },
  error=>{
    console.log('err'+error);
    Message({
      message:error.message,
      type:'error',
      duration:5*1000
    })
    return Promise.reject(error)
  }
)

//全局暴露当前axios对象series

export default service