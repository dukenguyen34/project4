// src/services/dataService.js
import axios from 'axios';

const API_URL = 'https://your-api-url.com/api/';

class DataService {
  getMenu() {
    return axios.get(API_URL + 'menu');
  }

  placeOrder(order) {
    return axios.post(API_URL + 'orders', order);
  }
}

export default new DataService();

