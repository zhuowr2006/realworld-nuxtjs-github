// import request from '@/utils/request';
import { request } from '@/plugins/request';

//用户登录
export const login = (data)=>{
  console.log('用户登录用户登录');
  return request({
    method:'POST',
    url:'/api/users/login',
    data // data:data 简写
  })
}
//用户注册
export const register = (data)=>{
  return request({
    method:'POST',
    url:'/api/users',
    data // data:data 简写
  })
}