
import React, { Component } from 'react'
import { Input, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './perinfo.css'
import service from '../../common/service'



export default class Perinfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: Taro.getStorageSync('username'),
      phone: '',
      email:'',
      location:''
    }
  }

  componentDidMount(){
    let token = Taro.getStorageSync('token')
    service.getUserInfo(token).then(res=>{
      // console.log(res)
      if(res){
        // console.log('15611111')
        this.setState({
          name: res.username,
          phone: res.phone,
          email: res.email,
          location: res.location
        })
      }
    })
  }
  changeName = (e) => {
    this.setState({
      name:e.target.value
    })
  }
  changePhone = (e) => {
    this.setState({
      phone: e.target.value
    })
  }
  changeEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }
  changeLocation = (e) => {
    this.setState({
      location: e.target.value
    })
  }
  update = () => {
    let token=Taro.getStorageSync('token')
    let username=this.state.name
    let phone=this.state.phone
    let email=this.state.email
    let location=this.state.location
    // console.log(username)
    // console.log(phone)
    // console.log(email)
    // console.log(location)
    service.updateUser(token,username,phone,email,location).then(res=>{
      if(res){
        // Taro.showModal({
        //   title: '提示',
        //   cancelText: '取消',
        //   cancelColor: 'black',
        //   confirmText: '确认',
        //   confirmColor: 'black',
        //   content: '修改成功',
        //   showCancel: false,
        // })
        Taro.setStorageSync('username',username)
        Taro.redirectTo({
          url:'/pages/person/person'
        })     }
    })
  }


  render() {
    return (
      <View className='body'>

        <View className='header'>
          <View className='title_container'>
            <View className='title_text'>用户资料</View>
          </View>
        </View>

        <View className='container'>
          <View className='ti'>用户名</View>
          <Input className='rd' placeholder={this.state.name} onInput={this.changeName}></Input>
        </View>
        <View className='container'>
          <View className='ti'>电话号码</View>
          <Input className='rd' placeholder={this.state.phone} onInput={this.changePhone}></Input>
        </View>
        <View className='container'>
          <View className='ti'>邮箱</View>
          <Input className='rd' placeholder={this.state.email} onInput={this.changeEmail}></Input>
        </View>
        <View className='container'>
          <View className='ti'>地址</View>
          <Input className='rd' placeholder={this.state.location} onInput={this.changeLocation}></Input>
        </View>

        <View className='footer_container'>
          <View className='foot_text' onClick={this.update}>保存</View>
        </View>

      </View>
    )
  }
}
