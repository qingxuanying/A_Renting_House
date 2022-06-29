
import React, { Component } from 'react'
import { View, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import huangguan from './img/icon1.png'
import './person.css'
import de1 from './img/de1.png'
import de2 from './img/de2.png'
import de3 from './img/de3.png'
import de4 from './img/de4.png'
import next from './img/next.png'
import zu1 from './img/zulin.png'


export default class Items extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name:null
    }
  }

  componentDidMount(){
    this.setState({
      name:Taro.getStorageSync('username')
    })
  } 
  logout = () => {
    Taro.setStorageSync('id','');
    Taro.setStorageSync('username','');
    Taro.navigateTo({
      url: '/pages/login/login'
    })
  }
  toperinfo = () => {
    Taro.navigateTo({
      url: '/pages/perinfo/perinfo'
    })
  }
  toSafe = () => {
    Taro.navigateTo({
      url: '/pages/safe/safe'
    })
  }
  toHelp = () => {
    Taro.navigateTo({
      url: '/pages/help/help'
    })
  }

  render() {
    return (
      <View className='body'>
        <View className='header'>
          <View className='title_container'>
            <View className='title_text'>个人中心</View>
          </View>
          <View className='username'>
            <View className='name_img'>
              <Image className='n_img' src={huangguan}></Image>
            </View>
            <View className='name_text'>{this.state.name}</View>
          </View>
          <View className='identity'>房东/租户</View>
        </View>

        <View className='center'>

          <View className='ziliao' onClick={this.toperinfo}>
            <View className='leftmain'>
              <Image className='a_img' src={de1}></Image>
              <View className='z_text'>用户资料</View>
            </View>
            <View className='next'>
              <Image className='next_img' src={next}></Image>
            </View>
          </View>

          <View className='ziliao' onClick={this.tozulin}>
            <View className='leftmain'>
              <Image className='a_img' src={zu1}></Image>
              <View className='z_text'>租赁记录</View>
            </View>
            <View className='next'>
              <Image className='next_img' src={next}></Image>
            </View>
          </View>

          <View className='ziliao' onClick={this.toSafe}>
            <View className='leftmain'>
              <Image className='a_img' src={de2}></Image>
              <View className='z_text'>账户安全</View>
            </View>
            <View className='next'>
              <Image className='next_img' src={next}></Image>
            </View>
          </View>

          <View className='ziliao' onClick={this.toHelp}>
            <View className='leftmain'>
              <Image className='a_img' src={de3}></Image>
              <View className='z_text'>请求帮助</View>
            </View>
            <View className='next'>
              <Image className='next_img' src={next}></Image>
            </View>
          </View>

          <View className='tuichu' onClick={this.logout}>
            <View className='leftmain'>
              <Image className='a_img' src={de4}></Image>
              <View className='tuichu_text'>退出登录</View>
            </View>
          </View>


        </View>
      </View>
    )
  }
}
