import React, { Component } from 'react'
import { View, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import service from '../../common/service'
import './detail.css'



export default class Detail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id:'',
            data: {},
        }
    }
    componentDidMount() {
        let id = Taro.getCurrentInstance().router.params.id
        this.setState({
            id:id
        })
        service.getHouse(id).then(res => {
            if (res) {
                this.setState({
                    data: res
                })
            }
        })

    }
    // fangdong = async () => {
    //     // console.dir(this.state.data)
    //     let house_id = this.state.data.id
    //     let phone = ''
    //     let email = ''
    //     let token = Taro.getStorageSync('token')

    //     await service.addOder(token, house_id).then(res => {
    //         if (res.message != '已添加该房屋，请前往租赁页面查看详情') {
    //             console.log(res)
    //             // console.log(res.phone)
    //             phone = res.phone
    //             email = res.email
    //             Taro.showModal({
    //                 title: '提示',
    //                 confirmText: '确认',
    //                 confirmColor: 'black',
    //                 content: `电话:${phone} 邮箱:${email}`,
    //                 showCancel: false,
    //             })
    //         }else{
                // Taro.showModal({
                //     title: '提示',
                //     confirmText: '确认',
                //     confirmColor: 'black',
                //     content: `你已经添加过该房屋`,
                //     showCancel: false,
                // })
    //         }
    //     })
    // }
    toConfOrder = ()=>{
        Taro.navigateTo({
            url:`/pages/conforder/conforder?id=${this.state.id}`
        })
    }

    back = () => {
        Taro.navigateTo({
            url:'/pages/index/index'
        })
    }

    render() {

        return (
            <View className='body'>
                <View className='header'>
                    <View className='title_container'>
                        <View className='title_text'>房屋详情</View>
                    </View>
                    <View className='imgC'>
                        <Image className='image' src={this.state.data.picture}></Image>
                    </View>
                </View>
                <View className='t'>租赁信息</View>
                <View className='contain'>
                    <View className='lt'>订金</View>
                    <View className='rt'>{this.state.data.deposit}/元</View>
                </View>
                <View className='contain'>
                    <View className='lt'>价格</View>
                    <View className='rt'>{this.state.data.price}/元</View>
                </View>
                <View className='contain'>
                    <View className='lt'>最长出租至</View>
                    <View className='rt'>{this.state.data.duration}</View>
                </View>
                <View className='contain'>
                    <View className='lt'>房屋地址</View>
                    <View className='rt'>{this.state.data.location}</View>
                </View>
                
                <View className='t'>房屋简介</View>
                <View className='contain'>{this.state.data.detail}</View>

                <View className='footer'>
                    <View className='fl' onClick={this.toConfOrder}>生成订单</View>
                    <View className='fr' onClick={this.back}>返回主页</View>
                </View>
            </View>
        )
    }
}
