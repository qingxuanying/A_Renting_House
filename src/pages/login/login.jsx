/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { View, Text, Input, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import service from '../../common/service'
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
  changeUser = (e) => {
    // console.log(e)
    this.setState({
      user: e.target.value
    })
  }
  changePwd = (e) => {
    // console.log(e.target)
    this.setState({
      pwd: e.target.value
    })
  }
  login = () => {
    let user = this.state.user;
    let pwd = this.state.pwd;
    // 
    // 
    if (user != '' && pwd != '') {

      service.Login(user, pwd).then(res => {
        if (res) {
          // console.log(res)
          if (res.token) {
            
            Taro.setStorageSync('token',res.token)
          
            Taro.setStorageSync('username',user)
            // console.log('登录成功')
            Taro.navigateTo({
              url:'/pages/index/index'
            })
          } else {
            console.log("密码或用户名错误")
            Taro.showModal({
              title: '提示',
              cancelText: '取消',
              cancelColor: 'black',
              confirmText: '确认',
              confirmColor: 'black',
              content: '密码或用户名错误',
              showCancel: false,
            })
          }
        }
      })
    }
    else {
      Taro.showModal({
        title: 'alter',
        cancelText: '取消',
        cancelColor: 'black',
        confirmText: '确认',
        confirmColor: 'black',
        content: '请填入所有选项',
        showCancel: false,
      })
    }


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
