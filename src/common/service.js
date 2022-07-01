import Taro from '@tarojs/taro'


const preHttp = 'http://localhost:8080/A_Renting/'
const Fetch = (url, data = {}, method = 'GET') => {
  const header = {
    'Access-Control-Allow-Origin': 'http://localhost:8080/A_Renting/',
    'content-type': 'application/json',
  };
  return Taro.request({
    url: preHttp + url,
    data,
    method,
    header
  }).then(res => {
    switch (res.statusCode) {
      case 200:
        // console.log(res);
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
  Regist(username, password, phone, location, email) {
    return Fetch(`user/addUser`, {
      username: username,
      password: password,
      phone: phone,
      location: location,
      email: email
    }, 'POST').then(res => {
      // console.log(res)
      return res
    })

  },
  //Login
  Login(username, password) {
    return Fetch('user/login', {
      username: username,
      password: password
    }, 'POST').then(res => {
      return res
    })
  },

  //getAllHouses
  GetAllHouses() {
    return Fetch('house/getAllHouses', {}, 'GET').then(res => {
      return res
    })
  },
  AddHouse(token, img, deposit, price, duration, detail, location, bed, bathroom, name) {
    return Fetch(`house/addHouse?token=${token}`, {
      picture: img,
      deposit: deposit,
      price: price,
      duration: duration,
      detail: detail,
      location: location,
      bed: bed,
      toilet: bathroom,
      name: name
    }, 'POST').then(res => {
      return res
    })
  },
  getUserInfo(token) {
    return Fetch(`user/getUserInfo?token=${token}`, {

    }, 'GET').then(res => {
      return res
    })
  },
  updateUser(token, username, phone, email, location) {
    return Fetch(`user/updateUser?token=${token}`, {
      phone: phone,
      email: email,
      location: location,
      username: username
    }, 'PUT').then(res => {
      return res;
    })
  },
  updatePassword(token, old, _new) {
    return Fetch(`user/updatePassword?token=${token}`, {
      _new: _new,
      old: old
    }, 'PUT').then(res => {
      return res
    })
  },
  findByname(name) {
    return Fetch(`house/findByName?name=${name}`, {}).then(res => {
      return res
    })
  },
  getHouse(id) {
    return Fetch(`house/getHouse?house_id=${id}`, {}).then(res => {
      return res
    })
  },
  addOder(token, house_id, dateto,deposit,price) {
    return Fetch(`order/confOrder?token=${token}&house_id=${house_id}`, {
      dateto: dateto,
      deposit:deposit,
      price:price
    }, 'POST').then(res => {
      return res
    })
  },
  getOders(token) {
    return Fetch(`order/getOrders?token=${token}`, {}, 'GET').then(res => {
      return res
    })
  },
  getLianxi(token,house_id){
    return Fetch(`order/getinfo?token=${token}&house_id=${house_id}`).then(res => {
      return res
    })
  },
  getOrderDetail(order_id){
    return Fetch(`order/getOrder?order_id=${order_id}`).then(res=>{
      return res
    })
  }

}


export default service
