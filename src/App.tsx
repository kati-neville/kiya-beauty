import SvgDribble from "../public/assets/svgs/dribble";
import SvgInstagram from "../public/assets/svgs/instagram";
import SvgLinkedIn from "../public/assets/svgs/linkedIn";
import { Spacer } from "./components/spacer";
import "./index.css";

function App() {
	return (
		<main className="">
			<section className="bg-gradient-to-r from-white from-[40%] to-pinkBlur pt-10 px-[7vw]">
				<img width={100} height={100} src="/assets/images/logo.png" alt="" />
			</section>

			<section className="bg-gradient-to-tr flex items-center justify-between from-white from-[70%] to-pinkBlur py-10 space-x-8 px-[7vw]">
				<div className="flex flex-col space-y-6 w-[45%] text-kiya-black font-light">
					<p className="font-Manrope text-xl">Welcome</p>

					<p className="font-Playfair font-bold text-7xl">
						Kiya Beauty Launching Soon!
					</p>
					<p className="font-Manrope text-kiya-gray text-xl">
						We're currently working on our new website. We will be launching
						soon, click on "Notify Me" to be ready for the grand day!
					</p>

					<div className="flex w-full py-4">
						<input
							type="text"
							className="border w-3/4 px-2 outline-none focus:border-pink border-kiya-black border-r-0"
						/>
						<button className="py-4 px-5 bg-pink w-1/4 text-white font-Manrope font-bold hover:bg-opacity-80">
							NOTIFY ME
						</button>
					</div>
				</div>
				<div className="w-[40%] object-contain">
					<img src="/assets/images/head-section.png" alt="" />
				</div>
			</section>

			<Spacer className="h-40" />

			<section className="mx-auto bg-gradient-radial from-white to-white to-[80%] via-pinkBlur-lt justify-center backdrop-blur-lg items-center flex flex-col px-[7vw]">
				<Spacer className="h-20" />

				<div className="text-center flex flex-col items-center">
					<h1 className="font-Playfair font-bold text-5xl w-3/4">
						Discover Your Natural Beauty with Kiya Beauty
					</h1>

					<p className="text-kiya-gray font-light w-1/2 mt-4">
						Embrace your true beauty. We curate the finest products to help you
						unlock the natural radiance within.
					</p>
				</div>

				<Spacer className="h-10" />

				<div className="">
					<img src="/assets/images/mid-section.png" alt="" />
				</div>

				<Spacer className="h-20" />
			</section>

			<Spacer className="h-60 bg-gradient-to-br from-[75%] from-transparent to-pinkBlur" />

			<section className="flex justify-between space-x-5 relative pl-[7vw]">
				<div>
					<img
						className="absolute top-20 -z-20 w-3/4"
						src="/assets/images/bg-line.png"
						alt=""
					/>
				</div>

				<div className="w-[50%] flex flex-col space-y-5">
					<div className="">
						<img src="/assets/images/bottom-section-1.png" alt="" />
					</div>

					<div>
						<img src="/assets/images/bottom-section-2.png" alt="" />
					</div>
				</div>
				<div className="w-[45%] flex flex-col items-end bg-gradient-to-tr from-[50%] from-transparent to-pinkBlur pr-[7.5vw]">
					<div>
						<div>
							<p className="font-Playfair font-medium text-5xl w-3/4 mb-4">
								Follow us on Instagram
							</p>
							<p className="font-Manrope font-light">
								Join our vibrant community of beauty enthusiasts! Follow us on
								doses of natural beauty inspiration, product sneak peeks, and
								exclusive offers and giveaways!
							</p>
						</div>
						<Spacer className="h-16" />

						<div>
							<img
								// className="max-h-[31.5rem]"
								src="/assets/images/bottom-section-3.png"
								alt=""
							/>
						</div>
					</div>
				</div>
			</section>

			<Spacer className="h-60" />

			<footer className="bg-pinkBlur w-full space-y-6 flex flex-col justify-center items-center py-10">
				<img width={100} height={100} src="/assets/images/logo.png" alt="" />

				<div className="flex items-center space-x-8">
					<SvgDribble />
					<SvgInstagram />
					<SvgLinkedIn />
				</div>

				<p className="font-Inter text-kiya-gray text-xs">
					© {new Date().getFullYear()} Kiya Beauty. All Rights Reserved.
				</p>
			</footer>
		</main>
	);
}

export default App;
