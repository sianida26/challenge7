import { Link } from 'react-router-dom';

import carImage from '../../assets/car.png'

interface Props {
    withButton?: boolean
}

const Cover = (props: Props) => {
	return (
		<section className="h-screen lg:h-[700px] w-screen bg-[#F1F3FF]">
			<div className="max-w-7xl h-full flex relative justify-center items-center px-4 md:justify-start mx-auto">
				<div className="flex flex-col gap-2 z-[1] md:w-1/2">
					<h1 className="font-bold text-2xl">
						Sewa &amp; Rental Mobil Terbaik di kawasan (Lokasimu)
					</h1>
					<p className="text-sm">
						Selamat datang di Binar Car Rental. Kami menyediakan
						mobil kualitas terbaik dengan harga terjangkau. Selalu
						siap melayani kebutuhanmu untuk sewa mobil selama 24
						jam.
					</p>
					{props.withButton && (
						<div>
							<Link to="/cars" className="btn">
								Mulai Sewa Mobil
							</Link>
						</div>
					)}
				</div>
				<div className="absolute top-0 left-0 w-full h-full z-[0]">
					<div className="absolute bg-dark-blue-4 w-3/4 md:w-1/2 right-0 h-16 md:h-1/3 bottom-0 rounded-tl-3xl"></div>
					<img
						src={carImage}
						alt="Mobil"
						className="absolute bottom-0 w-1/2 right-6 md:right-0 md:top-1/2"
					/>
				</div>
			</div>
		</section>
	);
};

export default Cover;
