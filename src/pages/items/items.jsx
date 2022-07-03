import React, { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './items.css'
import bed from './img/bed.png'
import bathroom from './img/bathroom.png'

export default class Items extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  toDetail = () => {
    let id=this.props.id
    // console.log(id)
    Taro.redirectTo({
      url: `/pages/detail/detail?id=${id}`,
    })
  }


  render() {
    return (
      <View className='body'>
        <View className='item' onClick={this.toDetail}>

          <View className='leftItem'>
            <Image src={this.props.picture} className='leftimg'></Image>
          </View>
          <View className='rightItem'>
            <View className='name'>{this.props.name}</View>
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
              {/* <View className='star'>
                <Image className='icon_items' src={star}></Image>
                <Text>{this.state.star}</Text>
              </View> */}

            </View>
          </View>
        </View>
      </View>
    )
  }
}
