export const fetchRestaurantsData = async () => {
	console.log(`triggered fetchcall`)
	return await fetch('mock-restaurant-data.json')
}
