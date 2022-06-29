/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { View, Text, Input } from '@tarojs/components'
import Taro from '@tarojs/taro'
import service from '../../common/service'
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
      dress: '',
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
    let user = this.state.user
    let pwd = this.state.pwd
    let phone = this.state.phone
    let email = this.state.email
    let dress = this.state.dress
    let sure = this.state.ensure
    if (user != '' && email != '' && pwd != '') {
      if (pwd != sure) {
        // console.log("两次密码不一致")
        Taro.showModal({
          title: 'alter',
          cancelText: '取消',
          cancelColor: 'black',
          confirmText: '确认',
          confirmColor: 'black',
          content: '两次密码不一致',
          showCancel: true,
        })

      }
      else {
        service.Regist(user, pwd, phone, dress, email).then(res => {
          // console.log(res)
          if (res) {
            Taro.navigateTo({ url: '/pages/login/login' })
          }
        })
      }
    }
    else {
      // console.log("请填入所有选项")
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
