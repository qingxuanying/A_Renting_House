import Taro from '@tarojs/taro'


const preHttp = 'http://localhost:8080/A_Renting/'
const Fetch = (url, data = {}, method = 'GET') => {
    const header = {
        'Access-Control-Allow-Origin': 'http://localhost:8080/A_Renting/',
        'content-type': 'application/json',
        'session': Taro.getStorageSync('session')
    };
    return Taro.request({
        url: preHttp + url,
        data,
        method,
        header
    }).then(res => {
        switch (res.statusCode) {
            case 200:
                console.log(res);
                if (res.data) {
                    return res.data;
                } else {
                    return res.statusCode;
                }
            case 400:
                throw new Error('没有权限访问');
            case 401:
                throw new Error('未授权');
            case 404:
                throw new Error('not found');
            case 500:
            case 502:
                return {
                    msg: 'server_wrong'
                }
        }
    });
};

const service = {
    //regist
    Regist(username,password,phone,location,email){
        return Fetch(`user/addUser`,{
            username:username,
            password:password,
            phone:phone,
            location:location,
            email:email
        },'POST').then(res=>{
            // console.log(res)
            return res
        })

    },
    //Login
    Login(username,password){
        return Fetch('user/login',{
            username: username,
            password: password
        },'POST').then(res=>{
            return res
        })
    },

    //getAllHouses
    GetAllHouses(){
        return Fetch('house/getAllHouses',{},'GET').then(res=>{
            return res
        })
    },
    AddHouse(token,img,deposit,price,duration,detail,location,bed,bathroom){
        return Fetch(`house/addHouse?token=${token}`,{
            picture:img,
            deposit:deposit,
            price:price,
            duration:duration,
            detail:detail,
            location:location,
            bed:bed,
            toilet:bathroom
        },'POST').then(res=>{
            return res
        })
    }
}


export default service