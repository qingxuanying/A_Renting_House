import React, { Component } from 'react'
import { View, Text, Input } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './login.css'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: 'dwadad',
      pwd: 'dada'
    }
  }

  toRegist = () => {
    Taro.navigateTo({ url: '/pages/regist/regist' })
  }
  changeUser(e){
    console.log(e)
    this.setState({
      user: e.target.value
    })
  }
  changePwd(e){
    console.log(e.target)
    this.setState({
      pwd: e.target.value
    })
  }
  login = ()=>{
// 
// 等待service接口
// 
//     
    console.log(this.state.user)
    console.log(this.state.pwd)
  }


  render() {
    return (
      <View className='index'>

        <View className='container'>

          <View className='userinput'>
            <Input className='input' placeholder='请输入账号' type='text' onInput={this.changeUser.bind(this)}></Input>
          </View>

          <View className='pwdinput'>
            <Input className='input' placeholder='请输入密码' type='password' onInput={this.changePwd.bind(this)}></Input>
          </View>

          <View className='botton' onClick={this.login}>
            <Text>登录</Text>
          </View>
          <View className='botton' onClick={this.toRegist}>
            <Text>未有账号,前往注册</Text>
          </View>

        </View>

      </View>
    )
  }
}
