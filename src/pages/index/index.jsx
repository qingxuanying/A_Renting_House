/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { View, Text, Input, Image, Icon } from '@tarojs/components'
import Taro from '@tarojs/taro'
import service from '../../common/service'
import img_search from './img/search.png'
import img1 from './img/img1.png'
import img2 from './img/img2.png'
import img3 from './img/img3.png'
import './index.css'
import Items from '../items/items'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    service.GetAllHouses().then(res=>{
      if(res){
        // console.log(res)
        console.log(res)
        this.setState({
          data: res
        })
      }
    })
  }

  toaddhouse = (e) => {
    Taro.navigateTo({
      url: '/pages/addhouse/addhouse'
    })
  }
  toperson = (e) => {
    Taro.navigateTo({
      url: '/pages/person/person'
    })
  }
  

  render() {
    let data = this.state.data
    // console.log(data)
    return (
      <View className='index'>

        <View className='header'>
          <View className='search'>

            <View className='search_main'>
              <Input className='search_input' placeholder='搜索房屋'></Input>
              <Image className='search_img' src={img_search}></Image>
            </View>

          </View>
        </View>

        <View className='recommendation'>
          <Text className='re_text'>为你推荐</Text>
        </View>

        <View className='index_Items'>
          {this.state.data.map((dateobj) => { return <Items key={dateobj.id} {...dateobj} ></Items> })}
        </View>

        <View className='footer'>
          <View className='daohang'>
            <Image className='daohang_img' src={img1}></Image>
            <View className='daohang_text'>首页</View>
          </View>
          <View className='daohang'>
            <Image className='daohang_img' src={img2} onClick={this.toaddhouse}></Image>
            <View className='daohang_text'>房屋委托</View>
          </View>
          <View className='daohang' >
            <Image className='daohang_img' src={img3} onClick={this.toperson}></Image>
            <View className='daohang_text'>个人中心</View>
          </View>
        </View>



      </View>
    )
  }
}