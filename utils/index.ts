const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '4d604997f6mshaab80e0a732e711p1dc76bjsnd1e25f2d0347',
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
};

try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
} catch (error) {
    console.error(error);
}

export async function fetchCars() {
    const headers = {
            'x-rapidapi-key': '4d604997f6mshaab80e0a732e711p1dc76bjsnd1e25f2d0347',
            'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars', {headers: headers});

const result = await response.
}