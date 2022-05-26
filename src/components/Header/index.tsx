import React from "react";

const Header = () => {

    const [ isMobileMenuOpen, setMobileMenuOpen ] = React.useState(false)

	return (
		<header className="w-full bg-[#F1F3FF] py-4 fixed top-0 shadow-md z-40">
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				<div className="flex justify-between items-center border-gray-100 md:justify-between md:space-x-10">
					<div className="flex justify-start lg:w-0 lg:flex-1">
						<a href="#">
							<span className="sr-only">Workflow</span>
							<div className="h-4 w-12 bg-dark-blue-4"></div>
						</a>
					</div>
					<div className="-mr-2 -my-2 md:hidden">
						<button
							id="mobile-menu-toggler"
							type="button"
							className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
							aria-expanded="false"
							onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
						>
							<span className="sr-only">Open menu</span>
							{/* <!-- Heroicon name: outline/menu --> */}
							<svg
								className="h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</button>
					</div>
					<div className="hidden md:flex items-center">
						<nav className="space-x-5">
							<a
								href="#"
								className="text-base font-medium text-gray-500 hover:text-gray-900"
							>
								{" "}
								Our Services{" "}
							</a>
							<a
								href="#"
								className="text-base font-medium text-gray-500 hover:text-gray-900"
							>
								{" "}
								Why Us{" "}
							</a>
							<a
								href="#"
								className="text-base font-medium text-gray-500 hover:text-gray-900"
							>
								{" "}
								Testimonial{" "}
							</a>
							<a
								href="#"
								className="text-base font-medium text-gray-500 hover:text-gray-900"
							>
								{" "}
								FAQ{" "}
							</a>
						</nav>
						<div className="items-center justify-end">
							{/* <!-- <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"> Sign in </a> --> */}
							<a href="#" className="ml-5 btn">
								{" "}
								Register{" "}
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* <!-- Mobile menu --> */}
			<div
				className={`absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden duration-200 ease-out ${
					isMobileMenuOpen
						? "opacity-100 scale-100"
						: "hidden opacity-0 scale-95"
				}`}
				id="mobile-menu"
			>
				<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
					<div className="pt-5 pb-6 px-5">
						<div className="flex items-center justify-between">
							<div>
								<div className="h-4 w-12 bg-dark-blue-4"></div>
								{/* <!-- <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow"> --> */}
							</div>
							<div className="-mr-2">
								<button
									id="mobile-menu-close"
									type="button"
									className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
								>
									<span className="sr-only">Close menu</span>
									{/* <!-- Heroicon name: outline/x --> */}
									<svg
										className="h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</button>
							</div>
						</div>
						<div className="mt-6">
							<nav className="grid gap-y-8">
								<a
									href="#"
									className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
								>
									{/* <!-- Heroicon name: outline/chart-bar --> */}
									<svg
										className="flex-shrink-0 h-6 w-6 text-indigo-600"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
										/>
									</svg>
									<span className="ml-3 text-base font-medium text-gray-900">
										{" "}
										Our Services{" "}
									</span>
								</a>

								<a
									href="#"
									className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
								>
									{/* <!-- Heroicon name: outline/cursor-click --> */}
									<svg
										className="flex-shrink-0 h-6 w-6 text-indigo-600"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
										/>
									</svg>
									<span className="ml-3 text-base font-medium text-gray-900">
										{" "}
										Why Us{" "}
									</span>
								</a>

								<a
									href="#"
									className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
								>
									{/* <!-- Heroicon name: outline/shield-check --> */}
									<svg
										className="flex-shrink-0 h-6 w-6 text-indigo-600"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
										/>
									</svg>
									<span className="ml-3 text-base font-medium text-gray-900">
										{" "}
										Testimonial{" "}
									</span>
								</a>

								<a
									href="#"
									className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
								>
									{/* <!-- Heroicon name: outline/view-grid --> */}
									<svg
										className="flex-shrink-0 h-6 w-6 text-indigo-600"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
										/>
									</svg>
									<span className="ml-3 text-base font-medium text-gray-900">
										{" "}
										FAQ{" "}
									</span>
								</a>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header
