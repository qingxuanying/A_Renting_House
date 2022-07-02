import Taro from '@tarojs/taro'


const preHttp = 'http://localhost:8080/A_Renting/'
const Fetch = async (url, data = {}, method = 'GET') => {
  const header = {
    'Access-Control-Allow-Origin': 'http://localhost:8080/A_Renting/',
    'content-type': 'application/json',
  };
  const res = await Taro.request({
    url: preHttp + url,
    data,
    method,
    header
  });
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
        };
  }
};

const service = {
  //regist
  async Regist(username, password, phone, location, email) {
    const res = await Fetch(`user/addUser`, {
      username: username,
      password: password,
      phone: phone,
      location: location,
      email: email
    }, 'POST');
    return res;

  },
  //Login
  async Login(username, password) {
    const res = await Fetch('user/login', {
      username: username,
      password: password
    }, 'POST');
    return res;
  },

  //getAllHouses
  async GetAllHouses() {
    const res = await Fetch('house/getAllHouses', {}, 'GET');
    return res;
  },
  async AddHouse(token, img, deposit, price, duration, detail, location, bed, bathroom, name) {
    const res = await Fetch(`house/addHouse?token=${token}`, {
      picture: img,
      deposit: deposit,
      price: price,
      duration: duration,
      detail: detail,
      location: location,
      bed: bed,
      toilet: bathroom,
      name: name
    }, 'POST');
    return res;
  },
  async getUserInfo(token) {
    const res = await Fetch(`user/getUserInfo?token=${token}`, {}, 'GET');
    return res;
  },
  async updateUser(token, username, phone, email, location) {
    const res = await Fetch(`user/updateUser?token=${token}`, {
      phone: phone,
      email: email,
      location: location,
      username: username
    }, 'PUT');
    return res;
  },
  async updatePassword(token, old, _new) {
    const res = await Fetch(`user/updatePassword?token=${token}`, {
      _new: _new,
      old: old
    }, 'PUT');
    return res;
  },
  async findByname(name) {
    const res = await Fetch('house/findByName?name=', {
      name: name,
    }, 'GET');
    return res;
  },
  async getHouse(id) {
    const res = await Fetch(`house/getHouse?house_id=${id}`, {});
    return res;
  },
  async addOder(token, house_id, dateto, deposit, price) {
    const res = await Fetch(`order/confOrder?token=${token}&house_id=${house_id}`, {
      dateto: dateto,
      deposit: deposit,
      price: price
    }, 'POST');
    return res;
  },
  async getOders(token) {
    const res = await Fetch(`order/getOrders?token=${token}`, {}, 'GET');
    return res;
  },
  async getLianxi(token, house_id) {
    const res = await Fetch(`order/getinfo?token=${token}&house_id=${house_id}`);
    return res;
  },
  async getOrderDetail(order_id) {
    const res = await Fetch(`order/getOrder?order_id=${order_id}`);
    return res;
  }

}


export default service
