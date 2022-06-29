/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { View, Text, Input, Image, Textarea } from '@tarojs/components'
import Taro, { onLocalServiceResolveFail } from '@tarojs/taro'
import service from '../../common/service'
import './addhouse.css'


export default class Addhouse extends Component {
    constructor(props) {
        super(props)
        this.state = {
            img: '',
            deposit: '',
            price: '',
            duration: '',
            detail: '',
            locationx:'',
            bed:'',
            bathromm:''

        }
    }

    filetoBase64 = (filePath) => {
        return new Promise((res) => {
            let fileManager = Taro.getFileSystemManager();
            fileManager.readFile({
                filePath,
                encoding: 'base64',
                success: (e) => {
                    res(`data:image/jpg;base64,${e.data}`)
                }
            })

        })
    }
     
    chooseImg = () => {
        // console.log("c11111111111")
        Taro.chooseImage({
            count: '1',
            sourceType: ['original', 'camera'],
            success: (res) => {
                // console.log("c22222222")
                Taro.compressImage({
                    src:res.tempFilePaths[0],
                    quality:0.01,
                    success: async (res1) => {
                        console.log("cs33333333")
                        let base64= await this.filetoBase64(res1.tempFilePath)
                        console.log(base64)
                        // console.log("4444444444444")
                        this.setState({
                            img:base64
                        })
                    }
                })
            }
        })
        console.log(this.state.img)
    }


    getDeposit = (e) => {
        this.setState({
            deposit: e.target.value
        })
    }
    getPrice = (e) => {
        this.setState({
            price: e.target.value
        })
    }
    getDuration = (e) => {
        this.setState({
            duration: e.target.value
        })
    }
    getDetail = (e) => {
        this.setState({
            detail: e.target.value
        })
    }
    getLocation = (e) => {
        this.setState({
            locationx:e.target.value
        })
    }
    getBed = (e) => {
        this.setState({
            bed:e.target.value
        })
    }
    getBathroom = (e) => {
        this.setState({
            bathromm:e.target.value
        })
    }

    release = (e) => {
        let token = Taro.getStorageSync('token')
        let img = this.state.img
        let deposit = this.state.deposit
        let duration = this.state.duration
        let price = this.state.price
        let detail = this.state.detail
        let location = this.state.locationx
        let bed = this.state.bed
        let bathromm = this.state.bathromm
        service.AddHouse(token, img, deposit, price, duration, detail,location,bed,bathromm).then(res => {
            console.log(res)
            if(res){
                Taro.navigateTo({
                    url:'/pages/index/index'
                })
            }
        })
    }

    render() {
        let img = this.state.img
        return (
            <View className='index'>
                <View className='header_add'>
                    <View className='title'>发布房屋</View>
                    {/* <View className='addimg'>请上传图片</View> */}
                    {
                        img == '' && <View className='addimg' onClick={this.chooseImg} >请上传图片</View>
                    }
                    {
                        img != '' && <Image className='img' src={img} ></Image>
                    }
                </View>

                <View className='zulinxinxi'>
                    <View className='zhulin_text'>租赁信息</View>
                    <View className='detail'>
                        <View className='leftx'>订金</View>
                        <Input className='rightinput' placeholder='请填写金额' onInput={this.getDeposit}></Input>
                    </View>
                    <View className='detail'>
                        <View className='leftx'>价格</View>
                        <Input className='rightinput' placeholder='请填写金额' onInput={this.getPrice}></Input>
                    </View>
                    <View className='detail'>
                        <View className='leftx'>地址</View>
                        <Input className='rightinput' placeholder='请填写地址' onInput={this.getLocation}></Input>
                    </View>
                    <View className='detail'>
                        <View className='leftx'>床位</View>
                        <Input className='rightinput' placeholder='请填写床位' onInput={this.getBed}></Input>
                    </View>
                    <View className='detail'>
                        <View className='leftx'>卫生间</View>
                        <Input className='rightinput' placeholder='请填写卫生间数' onInput={this.getBathroom}></Input>
                    </View>
                    <View className='detail'>
                        <View className='leftx'>出租时间限制</View>
                        <Input className='rightinput' placeholder='请填写时间' onInput={this.getDuration}></Input>
                    </View>

                </View>

                <View className='zulindetil'>
                    <View className='zhulin_text'>房屋简介</View>
                    <Textarea className='textarea' placeholder='请填入简介' onInput={this.getDetail}></Textarea>
                </View>

                <View className='buttom'>
                    <View className='sure' onClick={this.release} >发布</View>
                </View>

            </View>
        )
    }
}