import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useRestaurantStore = defineStore('restaurants', () => {
  const restaurants = ref([])
  const totalRestaurants = computed(() => restaurants.value.length)

  function setRestaurants(newRestaurants) {
    restaurants.value = newRestaurants
  }

  return {
    restaurants,
    totalRestaurants,
    setRestaurants
  }
})
