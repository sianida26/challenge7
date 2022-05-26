import { useState } from 'react'

import DatePicker from "react-datepicker";
import { Calendar } from 'react-feather';

import "react-datepicker/dist/react-datepicker.css";

interface Props {
    onSubmit: () => void,
}

const CarFilterForm = (props: Props) => {
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState("");
    const [passengers, setPassengers] = useState(2);
    const [isAlreadySearch, setAlreadySearch] = useState(false);

    const handleSubmit = () => {
        if (time === null){
            alert('Waktu harus diisi');
            return;
        }
        props.onSubmit();
        setAlreadySearch(true);
    }

	return (
		<div className="flex flex-col gap-3 text-sm font-light bg-white p-5 w-full mx-auto max-w-screen-sm lg:max-w-screen-lg rounded-md relative transform lg:-translate-y-1/2 shadow-md">
			<p className={`font-bold`}>Pencarianmu</p>
			<div className="flex flex-col lg:flex-row items-center justify-around gap-3 px-8">
				<div className={`flex flex-col gap-2 font-light text-sm justify-between w-full`}>
					<label className="text-neutral-4">Tipe Driver</label>
					<select
						placeholder="Pilih Tipe Driver"
						className={`text-neutral-3 border border-neutral-4 rounded-sm p-2 w-full`}
					>
						<option selected disabled>
							Pilih Tipe Driver
						</option>
						<option>Dengan Sopir</option>
						<option>Tanpa Sopir (Lepas Kunci)</option>
					</select>
				</div>
				<div
					className={`flex flex-col gap-2 font-light text-sm justify-between w-full`}
				>
					<label className="text-neutral-4">Tanggal</label>
					<div className="flex items-center justify-end relative">
						<Calendar
							className="absolute text-neutral-3"
							height="1rem"
						/>
						<DatePicker
							dateFormat="dd/MM/yyyy"
							selected={date}
							onChange={(date: Date) => setDate(date)}
							placeholderText="Pilih Tanggal"
							className={`text-neutral-3 border border-neutral-4 rounded-sm p-2 w-full placeholder:text-neutral-3`}
						/>
					</div>
				</div>
				<div
					className={`flex flex-col gap-2 font-light text-sm justify-between w-full`}
				>
					<label className="text-neutral-4">Waktu Jemput/Ambil</label>
					<input
						type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
						className={`text-neutral-3 border border-neutral-4 rounded-sm p-2`}
					/>
				</div>
				<div
					className={`flex flex-col gap-2 font-light text-sm justify-between w-full`}
				>
					<label className="text-neutral-4">
						Jumlah Penumpang (opsional)
					</label>
					<input
						type="number"
                        value={passengers}
                        onChange={(e) => setPassengers(+e.target.value)}
                        min="1"
                        max="6"
						placeholder="Jumlah Penumpang"
						className={`text-neutral-3 border border-neutral-4 rounded-sm p-2 placeholder:text-neutral-3`}
					/>
				</div>
				<button
					onClick={handleSubmit}
					className={`text-center self-end mt-5 py-2 px-3 font-bold rounded-sm flex-shrink-0 ${
						isAlreadySearch
							? "bg-white border border-dark-blue-4 text-dark-blue-4"
							: "bg-lime-4 border-none text-white"
					}`}
				>
					{isAlreadySearch ? "Edit" : "Cari Mobil"}
				</button>
			</div>
		</div>
	);
}

export default CarFilterForm