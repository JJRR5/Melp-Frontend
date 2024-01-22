export const MEXICO_CITY_LOCATION = [19.432937133730555, -99.13263507427911]
export const DEFAULT_ZOOM = 15
export const RESTAURANT_ICON = L.icon({
  iconUrl: 'https://cdn4.iconfinder.com/data/icons/food-3-7/65/136-512.png',
  iconSize: [40, 40],
  iconAnchor: [10, 10]
})
export const LAYERS = [
  {
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    options: { maxZoom: 18, minZoom: 3, noWrap: true }
  }
]
