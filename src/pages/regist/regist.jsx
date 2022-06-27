/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { View, Text, Input } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './regist.css'

export default class Rsegist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      pwd: '',
      email: '',
      ensure: '',
      phone: '',
      dress: ''
    }
  }

  changeUser = (e) => {
    // console.log(e.target.value)
    this.setState({
      user: e.target.value
    })
  }
  changePwd = (e) => {
    // console.log(e.target.value)
    this.setState({
      pwd: e.target.value
    })
  }

  changeEmail = (e) => {
    // console.log(e.target.value)
    this.setState({
      email: e.target.value
    })
  }

  changeEnsuer = (e) => {
    console.log(e)
    this.setState({
      ensure: e.detail.value
    })
  }
  changePhone = (e) => {
    // console.log(e.target.value)
    this.setState({
      phone: e.target.value
    })
  }
  changeDress = (e) => {
    // console.log(e.target.value)
    this.setState({
      dress: e.target.value
    })
  }

  regist = () => {
    // 
    // 等待service接口
    //      
    console.log(this.state.user)
    console.log(this.state.pwd)
    console.log(this.state.email)
    console.log(this.state.ensure)
    console.log(this.state.phone)
    console.log(this.state.dress)
    // Taro.navigateTo({ url: '/pages/login/login' })
  }

  render() {
    return (
      <View className='index'>

        <View className='regist_container' >

          <Input className='regist_input' placeholder='用户名' maxlength='16' onInput={this.changeUser}></Input>
          <Input className='regist_input' placeholder='邮箱' maxlength='16' onInput={this.changeEmail}></Input>
          <Input className='regist_input' type='password' placeholder='密码' maxlength='16' onInput={this.changePwd}></Input>
          <Input className='regist_input' type='password' placeholder='确认密码' maxlength='16' onInput={this.changeEnsuer}></Input>
          <Input className='regist_input' placeholder='电话号码' maxlength='11' onInput={this.changePhone}></Input>
          <Input className='regist_input' placeholder='地址' maxlength='64' onInput={this.changeDress}></Input>
          <View className='regist_text' onClick={this.regist}>注册</View>

        </View>

      </View>
    )
  }
}
