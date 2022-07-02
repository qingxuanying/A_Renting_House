/* eslint-disable no-unused-vars */

import React, { Component } from 'react'
import { Image, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import service from '../../common/service'
import './lishi.css'



export default class Lishi extends Component {
    constructor(props) {
        super(props)

    }

    toDetail = () => {
        let id = this.props.id
        // console.log(id)
        Taro.navigateTo({
            url: `/pages/orderDetail/orderDetail?id=${id}`,
        })
    }

    lianxi = () => {
        let id =this.props.houseId
        let token =Taro.getStorageSync('token')
        service.getLianxi(token,id).then(res=>{
            // console.log(res)
            if(res){
                Taro.showModal({
                    title: '提示',
                    confirmText: '确认',
                    confirmColor: 'black',
                    content: `电话:${res.phone} 邮箱:${res.email}`,
                    showCancel: false,
                })
            }
        })
    }


    render() {
        return (
            <View className='body'>
                <View className='con'>
                    <View className='lc'>
                        <Image src={this.props.picture} className='lc_img'></Image>
                    </View>
                    <View className='rc'>
                        <View className='l1'>{this.props.name}</View>
                        <View className='l2'>{this.props.date}</View>
                        <View className='l3'>
                            <View className='ll' onClick={this.toDetail}>查看详情</View>
                            <View className='rr' onClick={this.lianxi}>联系房东</View>
                        </View>
                    </View>
                </View>

            </View>
        )
    }
}
