import Mock from 'mockjs'
import user from './user.js'
import loginUser from './login.js'
Mock.mock('/main.php','get',()=>{
    return user
})
Mock.mock('/login.php','get',()=>{
    return loginUser
})
//延时400s请求到数据
Mock.setup({
    timeout: 400
  })
  //延时200-600毫秒请求到数据
  Mock.setup({
    timeout: '200-600'
  })