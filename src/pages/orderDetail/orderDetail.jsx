/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */

import React, { Component } from 'react'
import { Image, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import service from '../../common/service'
import './OrderDetail.css'



export default class OrderDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data:{},
            location:''
        }
    }

    componentDidMount() {
        let id = Taro.getCurrentInstance().router.params.id
        console.log(id)
        service.getOrderDetail(id).then(res => {
            console.log(res.order_info)
            if (res) {
                this.setState({
                    data: res.order_info,
                    location:res.location
                })
            }
        })
    }



    render() {
        return (
            <View className='body'>

                <View className='header'>
                    <View className='title_container'>
                        <View className='title_text'>订单详情</View>
                    </View>
                </View>

                <View className='con'>
                    <View className='lc'>
                        <Image src={this.state.data.picture} className='lc_img'></Image>
                    </View>
                    <View className='rc'>
                        <View className='l1'>{this.state.data.name}</View>
                        <View className='l2'>{this.state.data.date}</View>
                    </View>
                </View>
                
                <View className='info'>
                    <View className='ti'>订单详情</View>

                    <View className='tb'>
                        <View className='lth'>地址</View>
                        <View className='rth'>{this.state.location}</View>
                    </View>
                    <View className='tb'>
                        <View className='lth'>订金</View>
                        <View className='rth'>{this.state.data.deposit}/元</View>
                    </View>
                    <View className='tb'>
                        <View className='lth'>价格</View>
                        <View className='rth'>{this.state.data.price}/天</View>
                    </View>

                    <View className='time'>租赁至</View>
                    <View className='inp'>{this.state.data.dateto}</View>
                </View>

            </View>
        )
    }
}
