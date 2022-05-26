import { Users, Settings, Calendar } from "react-feather";

import carImage from '../../assets/car.png';

interface Props {
	car: any //opt-out of type checking
}

const CarCard = ({ car }: Props) => {
	const formatRupiah = (angka: number) =>
		"Rp " + angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

	return (
		<div className="flex flex-col items-center justify-between rounded-md kartu p-5">
			<div className="flex flex-col gap-3">
				<img
					src={carImage}
					alt={`Gambar ${car.name}`}
					className="aspect-video object-cover"
				/>
				<p>
					{car.manufacture} {car.model}
				</p>
				<p className="font-bold">
					{formatRupiah(car.rentPerDay)} / hari
				</p>
				<p className="font-light">
					{car.description || "No Description"}
				</p>
				<div className="flex gap-1 items-center font-light">
					<Users height="1rem" className="text-neutral-3" />
					<span>{car.capacity} orang</span>
				</div>
				<div className="flex gap-1 items-center font-light">
					<Settings height="1rem" className="text-neutral-3" />
					<span>{car.transmission}</span>
				</div>
				<div className="flex gap-1 items-center font-light">
					<Calendar height="1rem" className="text-neutral-3" />
					<span>Tahun {car.year}</span>
				</div>
			</div>
			<button
				onClick={() => null}
				className="text-center self-end mt-5 py-2 font-bold text-white bg-lime-4 rounded-sm w-full"
			>
				Pilih Mobil
			</button>
		</div>
	);
};

export default CarCard;
