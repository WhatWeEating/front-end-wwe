export const fetchRestaurantsData = async () => {
	console.log(`triggered fetchcall`)
	return await fetch('mock-restaurant-data.json')
}

export const fetchWinnerData = async () => {
  console.log('triggered fetch winner')
  return await fetch()
}
