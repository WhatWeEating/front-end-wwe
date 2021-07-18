const restaurantsPath =
	'https://back-end-wwe.herokuapp.com/restaurants?zip='

export const fetchRestaurantsData = async (zipCode, fetchId) => {
	console.log(`triggered fetchcall`)
	return await fetch(`${restaurantsPath}${zipCode}&${fetchId}`)
}

export const fetchWinnerData = async (eventID) => {
  console.log('triggered fetch winner')
  return await fetch()
}
