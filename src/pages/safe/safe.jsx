/* eslint-disable no-unused-vars */

import React, { Component } from 'react'
import { Input, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './safe.css'
import service from '../../common/service'



export default class Safe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            old: null,
            _new: null,
            sure: null
        }
    }

    getNowPwd = (e) => {
        this.setState({
            old: e.target.value
        })
    }
    getNewPwd = (e) => {
        this.setState({
            _new: e.target.value
        })
    }
    sureNewPwd = (e) => {
        this.setState({
            sure: e.target.value
        })
    }

    updatePwd = (e) => {
        let old = this.state.old
        let _new = this.state._new
        let sure = this.state.sure
        let token = Taro.getStorageSync('token')

        if (sure != null && old != null && _new != null) {
            if (_new == sure) {
                service.updatePassword(token, old, _new).then(res => {
                    if (res == true) {
                        Taro.navigateTo({
                            url: '/pages/login/login'
                        })
                    } else {
                        Taro.showModal({
                            title: '提示',
                            cancelText: '取消',
                            cancelColor: 'black',
                            confirmText: '确认',
                            confirmColor: 'black',
                            content: '旧密码错误',
                            showCancel: false,
                        })
                    }
                })
            } else {
                Taro.showModal({
                    title: '提示',
                    cancelText: '取消',
                    cancelColor: 'black',
                    confirmText: '确认',
                    confirmColor: 'black',
                    content: '两次密码不一致',
                    showCancel: false,
                })
            }
        } else {
            Taro.showModal({
                title: '提示',
                cancelText: '取消',
                cancelColor: 'black',
                confirmText: '确认',
                confirmColor: 'black',
                content: '请填入所有项',
                showCancel: false,
            })
        }
    }


    render() {
        return (
            <View className='body'>

                <View className='header'>
                    <View className='title_container'>
                        <View className='title_text'>账户安全</View>
                    </View>
                </View>

                <View className='container'>
                    <View className='ti'>当前密码</View>
                    <Input className='rd' placeholder='当前密码' onInput={this.getNowPwd} type='password'></Input>
                </View>
                <View className='container'>
                    <View className='ti'>新密码</View>
                    <Input className='rd' placeholder='新密码' onInput={this.getNewPwd} type='password'></Input>
                </View>
                <View className='container'>
                    <View className='ti'>确认密码</View>
                    <Input className='rd' placeholder='确认密码' onInput={this.sureNewPwd} type='password'></Input>
                </View>

                <View className='footer_container'>
                    <View className='foot_text' onClick={this.updatePwd}>保存修改</View>
                </View>

            </View>
        )
    }
}
