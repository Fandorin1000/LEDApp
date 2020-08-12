import axios from 'axios';

const instance = axios.create({
  baseURL: "https://ledneonukraine.firebaseio.com/"
});


export const stripsAPI = {
  getStrips() {
    return instance.get(`strips.json`)
      .then(response => response.data)
  },
  getStrip(id) {
    return instance.get(`strips/${id}.json`)
      .then(response => response.data)
  }
}