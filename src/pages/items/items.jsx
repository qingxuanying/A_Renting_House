/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { View, Text, Input, Image, Icon } from '@tarojs/components'
import './items.css'
import img1 from './img/1.png'

export default class Items extends Component {


  render() {
    return (
      <View className='item'>

        <View className='leftItem'>
            <Image src={img1} className='leftimg'></Image>
        </View>
        <View className='rightItem'>

        </View>


      </View>
    )
  }
}
