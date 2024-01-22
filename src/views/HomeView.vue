<script setup>
import { onMounted, ref } from 'vue'
import { toast } from 'vue-sonner'
import RestaurantService from '@/services/restaurant.services'
import { useRestaurantStore } from '@/stores/restaurant.store'
import { MEXICO_CITY_LOCATION, DEFAULT_ZOOM, RESTAURANT_ICON, LAYERS } from '@/constants'

const restaurantStore = useRestaurantStore()
const map = ref(null)

onMounted(async () => {
  map.value = renderMap()
  try {
    const response = await RestaurantService.getRestaurants()
    restaurantStore.setRestaurants(response.data.data)
    renderRestaurants()
  } catch (e) {
    toast.error(e.message)
  }
})

const renderMap = () => {
  const map = L.map('map').setView(MEXICO_CITY_LOCATION, DEFAULT_ZOOM)
  addLayers(map)
  return map
}

const addLayers = (map) => {
  LAYERS.forEach((layer) => {
    L.tileLayer(layer.url, layer.options).addTo(map)
  })
}

const renderRestaurants = () => {
  restaurantStore.restaurants.forEach(({ lat, lng, name }) => {
    const marker = L.marker([lat, lng], { icon: RESTAURANT_ICON }).addTo(map.value)
    // marker.bindPopup(
    //   createPopUp({ lat, lng, name })
    // );
  })
}

const showInMap = (restaurant) => {}
</script>
<template>
  <header>
    <h1 class="text-center text-3xl font-bold my-10">Restaurants</h1>
  </header>
  <div class="container mx-auto rounded-xl">
    <div id="map" class="w-full h-[40rem]"></div>
  </div>
  <section>
    <div class="container mx-auto mt-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-zinc-600">
        <div
          v-for="restaurant in restaurantStore.restaurants"
          :key="restaurant.id"
          class="bg-white shadow-md rounded-md p-4"
        >
          <h3 class="text-xl font-bold">{{ restaurant.name }}</h3>
          <p class="text-gray-500">{{ restaurant.description }}</p>
          <button
            class="mt-5 h-10 bg-lime-400 px-3 py-2 rounded shadow-xl hover:bg-lime-500 transition-all duration-100 font-bold text-zinc-600"
            @click="showInMap(restaurant)"
          >
            Show in map
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
