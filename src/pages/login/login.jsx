/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { View, Text, Input,Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './login.css'
import bc from './img/bc.jpg'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      pwd: ''
    }
  }

  toRegist = () => {
    Taro.navigateTo({ url: '/pages/regist/regist' })
  }
  changeUser=(e)=> {
    console.log(e)
    this.setState({
      user: e.target.value
    })
  }
  changePwd =(e)=> {
    console.log(e.target)
    this.setState({
      pwd: e.target.value
    })
  }
  login = () => {
    let user=this.state.user;
    let pwd=this.state.pwd;
    // 
    // 等待service接口
    // 
    //     
    console.log(this.state.user)
    console.log(this.state.pwd)
    Taro.navigateTo({
      url:'/pages/index/index'
    })
  }


  render() {
    return (
      <View className='index'>
        <View className='container'>

          <View className='centercontainer'>

            <View className='inputline'>

              <Text className='text'>用户名</Text>
              <Input type='text' className='input' placeholder='用户名/邮箱' onInput={this.changeUser} maxlength='16'></Input>

            </View>
            <View className='inputline'>

              <Text className='text'>密码</Text>
              <Input type='password' className='input' placeholder='请输入密码' onInput={this.changePwd} maxlength='16'></Input>

            </View>
            <View className='inputline'>
            </View>

          </View>

        </View>

        <View className='back'>
          <Image className='img' src={bc}></Image>
        </View>

        <View className='footer'>
            <View className='botom' onClick={this.login}>登录</View>
            <View className='footer_text'>
              <Text className='footer_text'>还没有注册?</Text>
              <Text className='to_regist' onClick={this.toRegist}>现在注册</Text>
            </View>

          </View>
      </View>
    )
  }
}
