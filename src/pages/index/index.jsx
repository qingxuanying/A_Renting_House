/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { View, Text, Input, Image, Icon } from '@tarojs/components'
import img_search from './img/search.png'
import icon from './img/icon.png'
import './index.css'

export default class Index extends Component {


  render() {
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

        {/* <View className='lunbotu'>

        </View> */}


        {/* 
        //废案
        //
        <View className='select'>
          <View className='selections'>
            <View className='selection'>所有</View>
            <View className='selection'>居家</View>
            <View className='selection'>办公</View>
          </View>
        </View> */}

      </View>
    )
  }
}
