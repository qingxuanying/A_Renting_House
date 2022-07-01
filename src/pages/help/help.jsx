import React, { Component } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './help.css'


export default class Help extends Component {

    clickTop = () => {
        Taro.showModal({
          title: '提示',
          cancelText: '取消',
          cancelColor: 'black',
          confirmText: '确认',
          confirmColor: 'black',
          content: '我们正在努力克服这些问题，敬请期待',
          showCancel: false,
        })
    }
    clickLp = () => {
        Taro.showModal({
          title: '提示',
          cancelText: '取消',
          cancelColor: 'black',
          confirmText: '确认',
          confirmColor: 'black',
          content: '客服电话：18770351859',
          showCancel: false,
        })
    }
    clickRp = () => {
        Taro.showModal({
            title: '提示',
            cancelText: '取消',
            cancelColor: 'black',
            confirmText: '确认',
            confirmColor: 'black',
            content: '客服QQ：3169260598',
            showCancel: false,
          })
    }

    render() {
        return (
            <View className='body'>
                <View className='header'>
                    <View className='title_container'>
                        <View className='title_text'>联系客服</View>
                    </View>
                </View>
                <View className='tr'>常见问题</View>
                <View className='container' onClick={this.clickTop}>
                    <View className='lis'>找不到心仪房间</View>
                    <View className='lis'>无法搜索/搜索出的内容与预期不符</View>
                    <View className='lis'>无法与房主联系</View>
                    <View className='lis'>无法修改密码</View>
                    <View className='lis'>忘记密码</View>
                </View>
                <View className='footer'>
                    <View className='lf' onClick={this.clickLp}>电话联系</View>
                    <View className='rf' onClick={this.clickRp}>在线联系</View>
                </View>
            </View>
        )
    }
}
