import axios from 'axios';

const instance = axios.create({
  baseURL: "https://ledneonukraine.firebaseio.com/"
});


export const stripsAPI = {
  getStrips() {
    return instance.get(`strips.json`)
      .then(response => response.data)
  },
  getStrip(index) {
    return instance.get(`strips/${index}.json`)
      .then(response => response.data)
  },
  setNewComment(index, commentObj) {
    return instance.post(`strips/${index}/comments.json`, commentObj)
  },
  sendNewOrder(orderData) {
    return instance.post(`orders.json`, orderData)
  }
}