const restaurantsPath =
	'https://back-end-wwe.herokuapp.com/restaurants?zip='

export const fetchRestaurantsData = async (zipCode, fetchId) => {
	console.log(`triggered fetchcall`)
  // return await fetch('mock-restaurant-data.json')
	return await fetch(`${restaurantsPath}${zipCode}`, {
		headers: {
			event_id: `${fetchId}`,
		},
	})
}

export const postRestaurantsData = async (body) => {
	console.log(body)
	return await fetch(`https://back-end-wwe.herokuapp.com/graphql`, {
		method: 'POST',
		body: JSON.stringify(body), 
    headers: {
      'Content-Type' : 'Application/JSON'
    },
	})
}
