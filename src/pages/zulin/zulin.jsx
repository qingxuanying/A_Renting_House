/* eslint-disable no-unused-vars */

import React, { Component } from 'react'
import { Input, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './zulin.css'
import service from '../../common/service'
import Lishi from '../lishi/lishi'



export default class Zulin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data:[]
        }
    }

    componentDidMount(){
        let token=Taro.getStorageSync('token')
        service.getOders(token).then(res=>{
            if(res){
                // console.log(res)
                this.setState({
                    data: res.order_infos
                })
            }
        })
    }


    render() {
        return (
            <View className='body'>
                <View className='header'>
                    <View className='title_container'>
                        <View className='title_text'>历史租赁</View>
                    </View>
                </View>
                {this.state.data.map((dateobj) => { return <Lishi key={dateobj.id} {...dateobj} ></Lishi> })}

            </View>
        )
    }
}
