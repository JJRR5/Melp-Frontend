import api from '@/lib/axios'

export default {
  getRestaurants() {
    return api.get('/api/restaurants')
  },
  getRestaurant(id) {
    return api.get(`/api/restaurants/${id}`)
  },
  createRestaurant(restaurant) {
    return api.post('/api/restaurants', restaurant)
  },
  updateRestaurant(restaurant) {
    return api.patch(`/api/restaurants/${restaurant.id}`, restaurant)
  },
  deleteRestaurant(id) {
    return api.delete(`/api/restaurants/${id}`)
  },
  getStatistics({ latitude, longitude, radius }) {
    return api.get(
      `/api/restaurants/statistics?latitude=${latitude}&longitude=${longitude}&radius=${radius}`
    )
  }
}
