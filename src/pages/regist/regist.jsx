import React, { Component } from 'react'
import { View, Text,Input } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './regist.css'

export default class Rsegist extends Component {
    constructor(props) {
        super(props)
        this.state = {
          user: 'dwadad',
          pwd: 'dada'
        }
      }

    toLogin = ()=>{
        Taro.navigateTo({ url: '/pages/login/login' })
      }

      changeUser=(e)=>{
        console.log(e)
        this.setState({
          user: e.target.value
        })
      }
      changePwd=(e)=>{
        console.log(e.target)
        this.setState({
          pwd: e.target.value
        })
      }
      regist = ()=>{
// 
// 等待service接口
//         
        console.log(this.state.user)
        console.log(this.state.pwd)
      }

  render () {
    return (
      <View className='index'>
        
        <View className='container'>

          <View className='userinput'>
            <Input className='input' placeholder='请输入账号' type='text' onInput={this.changeUser}></Input>
          </View>

          <View className='pwdinput'>
            <Input className='input' placeholder='请输入密码' type='password' onInput={this.changePwd}></Input>
          </View>

          <View className='botton' onClick={this.regist}>
            <Text>确认注册</Text>
          </View>
          <View className='botton' onClick={this.toLogin}>
            <Text>已有账号，返回登录</Text>
          </View>

        </View>
      
      </View>
    )
  }
}
