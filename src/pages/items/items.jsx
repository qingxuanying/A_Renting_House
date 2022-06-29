/* eslint-disable react/no-unused-state */

/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { View, Text, Input, Image, Icon } from '@tarojs/components'
import './items.css'
import img1 from './img/1.png'
import bed from './img/bed.png'
import bathroom from './img/bathroom.png'
import star from './img/star.png'

export default class Items extends Component {
  constructor(props){
    super(props)
    this.state={
      star:5
    }
  }

  render() {
    return (
      <View className='body'>
      <View className='item'>

        <View className='leftItem'>
            <Image src={this.props.picture} className='leftimg'></Image>
        </View>
        <View className='rightItem'>
          <View className='name'>{this.props.location}</View>
          <View className='price'>{this.props.price}元/天</View>
          <View className='bott'>

            <View className='bed'>
              <Image className='icon_items' src={bed}></Image>
              <Text>{this.props.bed}</Text>
            </View>
            <View className='bathroom' >
              <Image className='icon_items' src={bathroom}></Image>
              <Text>{this.props.toilet}</Text>
            </View>
            <View className='star'>
              <Image className='icon_items' src={star}></Image>
              <Text>{this.state.star}</Text>
            </View>

          </View>
        </View>
      </View>
      </View>
    )
  }
}
