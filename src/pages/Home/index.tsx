import { Accordion } from 'react-bootstrap'
import { Award, Clock, Tag, ThumbsUp } from 'react-feather'

import imgService from '../../assets/img_service.png'
import { Carousel, Cover, Footer, Header } from '../../components'


const Home = () => {
  return (
    <div className="overflow-x-hidden">
        <Header />
        <Cover withButton />

        {/* SECTION 2 */}
		<section className="h-section w-screen bg-white">
			<div className="max-w-7xl mx-auto flex flex-col md:flex-row py-8 gap-4 px-8 h-full">
				<div className="flex justify-center md:w-1/2 md:flex-shrink-0 md:items-center">
					<img src={imgService} alt="Our Services" className="w-24 object-cover md:w-3/4 bg-auto" />
				</div>
				<div className="flex flex-col md:justify-center">
					<h1 className="font-bold text-xl text-center md:text-left">Best Car Rental for any kind of trip in (Lokasimu)!</h1>
					<p className="text-center text-sm md:text-left">Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
					<ul className="text-sm mt-4 list-check">
						<li>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
						<li>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
						<li>Sewa Mobil Jangka Panjang Bulanan</li>
						<li>Gratis Antar - Jemput Mobil di Bandara</li>
						<li>Layanan Airport Transfer / Drop In Out</li>
					</ul>
				</div>
			</div>
		</section>

		{/* SECTION 3 */}
		<section className="h-section w-screen bg-white">
			<div className="max-w-7xl mx-auto flex flex-col py-8 px-8 h-full">
				<h1 className="font-bold text-xl text-center md:text-left">Why Us</h1>
				<p className="text-sm text-center md:text-left">Mengapa harus pilih Binar Car Rental?</p>

				<div className="gap-2 mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-4 xl:gap-8">
					<div className="why-us-item">
						<span className="w-10 h-10 bg-alert-warning rounded-full flex items-center justify-center text-white">
							<ThumbsUp />
						</span>

						<h3 className="font-semibold">Mobil Lengkap</h3>
						<p className="text-sm font-light">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
					</div>
					<div className="why-us-item">
						<span className="w-10 h-10 bg-alert-danger rounded-full flex items-center justify-center text-white">
							<Tag />
						</span>

						<h3 className="font-semibold">Harga Murah</h3>
						<p className="text-sm font-light">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
					</div>
					<div className="why-us-item">
						<span className="w-10 h-10 bg-dark-blue-4 rounded-full flex items-center justify-center text-white">
							<Clock />
						</span>

						<h3 className="font-semibold">Layanan 24 Jam</h3>
						<p className="text-sm font-light">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
					</div>
					<div className="why-us-item">
						<span className="w-10 h-10 bg-lime-4 rounded-full flex items-center justify-center text-white">
							<Award />
						</span>

						<h3 className="font-semibold">Sopir Profesional</h3>
						<p className="text-sm font-light">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
					</div>
				</div>
			</div>
		</section>

		{/* SECTION 4 */}
		<section className="h-section w-screen bg-white">
			<div className="mx-auto flex flex-col py-8 px-8 h-full">
				<h1 className="max-w-7xl mx-auto font-bold text-xl text-center">Testimonial</h1>
				<p className="max-w-7xl mx-auto text-sm text-center">Berbagai review positif dari para pelanggan kami</p>

				{/* CAROUSEL */}
				<Carousel />
			</div>
		</section>

		{/* SECTION 5 */}
		<section className="h-section w-screen bg-white py-8 lg:px-8">
			<div className="max-w-7xl mx-auto flex flex-col py-8 px-8 h-full bg-dark-blue-4 text-center items-center text-white	gap-6 lg:rounded-xl">
				<h1 className="text-2xl font-bold text-white">Sewa Mobil di (Lokasimu) Sekarang</h1>
				<p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
				<div>
					<button className="btn text-sm">Mulai Sewa Mobil</button>
				</div>
			</div>
		</section>

		{/* SECTION 6 */}
		<section className="h-section w-screen bg-white">
			<div className="max-w-7xl mx-auto flex flex-col md:flex-row py-8 gap-4 px-8 h-full">
				<div className="flex justify-center md:w-1/2 md:flex-shrink-0 flex-col">
					<h1 className="text-2xl font-bold">Frequently Asked Question</h1>
					<p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
				</div>
				<div className="flex flex-col md:justify-center">
                    <Accordion>
                        {
                            [
                                'Apa saja syarat yang dibutuhkan?',
                                'Berapa hari minimal sewa mobil lepas kunci?',
                                'Berapa hari sebelumnya sabaiknya booking sewa mobil?',
                                'Apakah Ada biaya antar-jemput?',
                                'Bagaimana jika terjadi kecelakaan'
                            ].map((question, i) => (
                                <Accordion.Item key={`${i}`} eventKey={`${i}`}>
                                    <Accordion.Header>{question}</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))
                        }
                    </Accordion>
				</div>
			</div>
		</section>

        <Footer />
		
    </div>
  )
}

export default Home
