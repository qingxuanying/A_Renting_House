/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { View, Text, Input, Image, Icon } from '@tarojs/components'
import img_search from './img/search.png'
import icon from './img/icon.png'
import img1 from './img/img1.png'
import img2 from './img/img2.png'
import img3 from './img/img3.png'
import './index.css'
import Items from '../items/items'

export default class Index extends Component {
  constructor(props){
    super(props)
    this.state={
      date:[
        {
          id:'01',
          name:'123',
          price:'321',
          img:'1',
          bathroom:'1',
          bed:'2',
          star:'3.0'
        },
        {
          id:'02',
          name:'123s',
          price:'321d',
          img:'1a',
          bathroom:'4',
          bed:'1',
          star:'5.0'
        }
      ]
    }
  }

  render() {
    let data=this.state.data
    return (
      <View className='index'>

        <View className='header'>
          <View className='search'>

            <View className='search_main'>
              <Input className='search_input' placeholder='搜索房屋'></Input>
              <Image className='search_img' src={img_search}></Image>
            </View>
            <Image src={icon} className='search_icon'></Image>

          </View>
        </View>

        <View className='recommendation'>
          <Text className='re_text'>为你推荐</Text>
        </View>

        <View className='index_Items'>
        {this.state.date.map((dateobj) => { return <Items key={dateobj.id} {...dateobj} ></Items> })}
        </View>

        <View className='footer'>
          <View className='daohang'>
            <Image className='daohang_img' src={img1}></Image>
            <Text>首页</Text>
          </View>
          <View className='daohang'>
            <Image className='daohang_img' src={img2}></Image>
            <Text>房屋委托</Text>
          </View>
          <View className='daohang'>
            <Image className='daohang_img' src={img3}></Image>
            <Text>个人中心</Text>
          </View>
        </View>



      </View>
    )
  }
}
