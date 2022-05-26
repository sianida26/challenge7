import { Facebook, Instagram, Twitter, Mail, Twitch } from 'react-feather';

const Footer = () => {
	return (
		<footer className="w-screen text-xs">
			<div className="max-w-7xl mx-auto grid grid-cols-1 py-8 gap-4 px-8 md:grid-cols-4">
				<div className="flex flex-col font-light gap-2 text-center text-">
					<p>Jalan Suroyo No. 161 Mayangan Kota Probilonggo 672000</p>
					<p>binarcarrental@gmail.com</p>
					<p>081-233-334-808</p>
				</div>

				<div className="flex justify-between md:flex-col md:items-center md:text-center">
					<p>Our services</p>
					<p>Why Us</p>
					<p>Testimonial</p>
					<p>FAQ</p>
				</div>

				<div className="flex flex-col gap-4 mt-6">
					<p className="text-center ">Connect with us</p>
					<div className="flex justify-center gap-2">
						<div className="w-8 h-8 rounded-full bg-dark-blue-4 text-white flex items-center justify-center">
                            <Facebook className="w-5" />
						</div>
						<div className="w-8 h-8 rounded-full bg-dark-blue-4 text-white flex items-center justify-center">
                            <Instagram className="w-5" />
						</div>
						<div className="w-8 h-8 rounded-full bg-dark-blue-4 text-white flex items-center justify-center">
                            <Twitter className="w-5" />
						</div>
						<div className="w-8 h-8 rounded-full bg-dark-blue-4 text-white flex items-center justify-center">
                            <Mail className="w-5" />
						</div>
						<div className="w-8 h-8 rounded-full bg-dark-blue-4 text-white flex items-center justify-center">
                            <Twitch className="w-5" />
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-2 mt-6">
					<p className="text-center">Copyright Binar 2022</p>
					<div>
						<div className="mx-auto w-16 h-6 bg-dark-blue-4"></div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
