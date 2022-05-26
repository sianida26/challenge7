import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const CAROUSEL_COUNT = 10;

const Carousel = () => {

    const carouselContainer = useRef<HTMLDivElement>(null)
    const [direction, setDirection] = useState("left")
    const [current, setCurrent] = useState(0)
    const [translates, setTranslates] = useState([...Array(CAROUSEL_COUNT)].map(() => [0, 0])) //[translateX, duration])

    const playLeft = () => {

        setDirection("left")
        const _current = (current + 1) % CAROUSEL_COUNT
        
        setCurrent(_current)
    
        const width = carouselContainer.current!.children[0].clientWidth

        const _translates = translates.map((x,i) => {
            if (_current-1 === i || (_current === 0 && i === CAROUSEL_COUNT-1)) {
                return [width*(CAROUSEL_COUNT-i), 0];
            }
            else {
                return [width * (_current > i ? (CAROUSEL_COUNT - _current) : (-_current)), 750]
            }
        })

        setTranslates(_translates)
    }

	const playRight = () => {
		setDirection("right")
		const _current = current === 0 ? CAROUSEL_COUNT - 1 : current - 1
	
		const width = carouselContainer.current!.children[0].clientWidth

		const _translates = translates.map((x,i) => {
            if (_current === i) {
                return [-width * _current, 0];
            }
            else {
                return [width * (_current > i ? (CAROUSEL_COUNT - _current) : (- _current)), 750]
            }
        })
		
		setCurrent(_current)
		setTranslates(_translates)
	}

	return (
		<>
			<div className="relative h-72 md:h-64 w-full mt-8 overflow-visible">
				<div
					className="absolute h-full top-0 -left-8 right-0 w-screen overflow-hidden flex"
					id="figure-container"
				>
					<div
						className="w-auto flex transform -translate-x-[calc(100vw-3.1rem)] md:-translate-x-[76rem]"
						ref={carouselContainer}
					>
						{[...Array(CAROUSEL_COUNT)].map((_, i) => (
							<figure
								key={i}
								className="h-72 md:h-64 z-[2] px-4 transform"
								style={{
									transform: `translateX(${translates[i][0]}px)`,
									transitionDuration: `${translates[i][1]}ms`,
								}}
							>
								<div className="relative flex flex-col gap-2 p-4 bg-[#F1F3FF] rounded-xl w-[calc(100vw-4rem)] md:w-[36rem] md:flex-shrink-0">
									<div className="flex justify-center">
										<img
											src={`https://i.pravatar.cc/300?r=${i}`}
											alt="orang"
											className="w-16 h-16 rounded-full"
										/>
									</div>
									<div className="flex flex-col items-center gap-2">
										{/* rating */}
										<div className="flex">
											{[...Array(5)].map((_, i) => (
												<i key={i} className="star"></i>
											))}
										</div>
										<p className="text-sm">
											“Lorem ipsum dolor sit amet,
											consectetur adipiscing elit, sed do
											eiusmod lorem ipsum dolor sit amet,
											consectetur adipiscing elit, sed do
											eiusmod lorem ipsum dolor sit amet,
											consectetur adipiscing elit, sed do
											eiusmod”
										</p>
										<p className="font-semibold text-sm text-left w-full">
											John Dee 32, Bromo
										</p>
									</div>
								</div>
							</figure>
						))}
					</div>
				</div>
			</div>
			<div className="flex justify-center gap-4 mt-4">
				<button
					className={`w-8 h-8 rounded-full border border-[#C4C4C4] text-[#222222] ${ direction === "left" && "carousel-control-active"}`}
					id="carousel-left"
					onClick={playLeft}
				>
                    <ChevronLeft className="ml-0.5" />
				</button>
				<button
					className={`w-8 h-8 rounded-full border border-[#C4C4C4] text-[#222222] ${ direction === "right" && "carousel-control-active"}`}
					id="carousel-right"
					onClick={playRight}
				>
					<ChevronRight className="ml-1" />
				</button>
			</div>
		</>
	);
};

export default Carousel;
