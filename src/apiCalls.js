export const fetchRestaurantsData = async () => {
	console.log(`triggered fetchcall`)
	return await fetch('./assets/mock-restaurant-data.json')
}
