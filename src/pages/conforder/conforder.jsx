/* eslint-disable react/no-unused-state */
import React, { Component } from 'react'
import { View, Input } from '@tarojs/components'
import Taro from '@tarojs/taro'
import service from '../../common/service'
import Items from '../items/items'
import './conforder.css'



export default class Conforder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            data: {},
            year: '',
            month: '',
            day: '',
        }
    }
    componentDidMount() {
        let id = Taro.getCurrentInstance().router.params.id
        this.setState({
            id: id
        })
        service.getHouse(id).then(res => {
            if (res) {
                this.setState({
                    data: res
                })
                // console.log(res)
            }
        })

    }
    getYear = (e) => {
        this.setState({
            year: e.target.value
        })
    }

    getMonth = (e) => {
        this.setState({
            month: e.target.value
        })
    }
    getDay = (e) => {
        this.setState({
            day: e.target.value
        })
    }

    realse = () => {
        let token = Taro.getStorageSync('token')
        let id = this.state.id
        let year = this.state.year
        let month = this.state.month
        let day = this.state.day
        let dateto = `${year}/${month}/${day}`
        let deposit = this.state.data.deposit
        let price = this.state.data.price

        if (this.state.year != '' && this.state.month != '' && this.state.day != ''
            && year > 2022 && year < 3000 && day < 32 && day > 0 && month > 0 && month < 13) {
            service.addOder(token, id, dateto, deposit, price).then(res => {
                if (res) {
                    // console.log(res.message)
                    if (res.message != '已添加该房屋，请前往租赁页面查看详情') {
                        Taro.navigateTo({
                            url: '/pages/index/index'
                        })
                    } else {
                        Taro.showModal({
                            title: '提示',
                            confirmText: '确认',
                            confirmColor: 'black',
                            content: `你已经添加过该房屋`,
                            showCancel: false,
                        })
                    }
                }
            })
        }else{
            Taro.showModal({
                title: '提示',
                confirmText: '确认',
                confirmColor: 'black',
                content: `请输入正确合理的日期`,
                showCancel: false,
            })
        }
    }
    toMain = () => {
        Taro.redirectTo({
            url: 'pages/index/index'
        })
    }

    render() {

        return (
            <View className='body'>
                <View className='header'>
                    <View className='title_container'>
                        <View className='title_text'>确认订单</View>
                    </View>
                </View>
                <View className='itemContainer'>
                    <Items key={this.state.data.id} {...this.state.data}></Items>
                </View>
                <View className='info'>
                    <View className='ti'>订单详情</View>

                    <View className='tb'>
                        <View className='lth'>最大出租天数</View>
                        <View className='rth'>{this.state.data.duration}</View>
                    </View>
                    <View className='tb'>
                        <View className='lth'>地址</View>
                        <View className='rth'>{this.state.data.location}</View>
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
                    <View className='inp'>
                        <Input className='in' onInput={this.getYear}></Input>
                        <View className='tnina'>年</View>
                        <Input className='in' onInput={this.getMonth}></Input>
                        <View className='tyue'>月</View>
                        <Input className='in' onInput={this.getDay}></Input>
                        <View className='tri'>日</View>
                    </View>
                </View>
                <View className='footer'>
                    <View className='fl' onClick={this.realse}>确认订单</View>
                    <View className='fr' onClick={this.toMain}>取消订单</View>
                </View>
            </View>
        )
    }
}
