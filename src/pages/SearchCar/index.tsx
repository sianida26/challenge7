import { useState } from 'react' 
import axios from 'axios'

import { Header, Cover, CarFilterForm, CarCard } from '../../components'

const SearchCar = () => {

    const [cars, setCars] = useState([]);

    const onSubmit = async () => {
        try {
			const response = await axios({
				method: 'GET',
				url: 'https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json',
			})
			console.log(response.data)
			setCars(response.data)
		} catch (e){
			console.log(e);
		}
    }

	return (
		<div className="overflow-x-hidden">
			<Header />
			<Cover />
			<CarFilterForm onSubmit={onSubmit} />
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 gap-4 text-sm">
				{cars.map((car, index) => (
					<CarCard key={index} car={car} />
				))}
			</div>
		</div>
	);
};

export default SearchCar;
