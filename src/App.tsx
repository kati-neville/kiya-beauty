import { useState } from "react";
import SvgDribble from "../public/assets/svgs/dribble";
import SvgInstagram from "../public/assets/svgs/instagram";
import SvgLinkedIn from "../public/assets/svgs/linkedIn";
import { Spacer } from "./components/spacer";
import "./index.css";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../firebase";

function App() {
	const [email, setEmail] = useState("");
	const [loading, setLoading] = useState(false);
	const [submitMessage, setSubmitMessage] = useState({
		status: "",
		message: "",
	});

	async function addEmail() {
		setLoading(true);

		if (!email.trim()) {
			setLoading(false);
			return;
		}

		const emailRegex =
			/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

		if (!emailRegex.test(email.trim())) {
			setSubmitMessage({
				status: "ERROR",
				message: "Please provide a valid email",
			});
			setLoading(false);

			return;
		}

		try {
			await setDoc(doc(db, "kiya-beauty-emails", email.trim()), {
				email: email.trim(),
				timeStamp: serverTimestamp(),
			});

			setLoading(false);
			setEmail("");
			setSubmitMessage({
				status: "SUCCESS",
				message: "Your email has been submitted successfully.",
			});
		} catch (error) {
			setLoading(false);

			setSubmitMessage({
				status: "ERROR",
				message: "Oops! Something went wrong. Please try again later!",
			});
		}
	}

	return (
		<main className="">
			<section className="sm:bg-gradient-to-r bg-pinkBlur-lt from-white sm:from-[40%] flex sm:justify-start justify-center to-pinkBlur pt-10 px-[7vw]">
				<img width={100} height={100} src="/assets/images/logo.png" alt="" />
			</section>

			<section className="sm:bg-gradient-to-tr bg-gradient-to-b flex sm:flex-row flex-col items-center sm:justify-between justify-center sm:from-white from-pinkBlur-lt from-[70%]  sm:to-pinkBlur-lt to-white py-10 sm:space-x-8 sm:space-y-0 space-y-16 px-[7vw]">
				<div className="flex flex-col space-y-6 sm:w-[45%] text-kiya-black font-light">
					<p className="font-Manrope lg:text-xl md:text-lg text-xs">Welcome</p>

					<p className="font-Playfair font-bold lg:text-7xl md:text-5xl text-4xl">
						Kiya Beauty Launching Soon!
					</p>
					<p className="font-Manrope text-kiya-gray lg:text-xl md:text-lg text-xs">
						We're currently working on our new website. We will be launching
						soon, click on "Notify Me" to be ready for the grand day!
					</p>

					<div>
						<div className="flex w-full mt-4">
							<input
								type="text"
								onChange={e => {
									setEmail(e.target.value);
									setSubmitMessage({ message: "", status: "" });
								}}
								className="border px-2 w-3/4 outline-none focus:border-pink border-kiya-black border-r-0"
							/>

							<button
								onClick={addEmail}
								className="lg:py-4 py-2 lg:px-5 px-2 bg-pink lg:text-base text-xs text-white font-Manrope font-bold hover:bg-opacity-80">
								{loading ? "loading ..." : "NOTIFY ME"}
							</button>
						</div>
						{submitMessage.message ? (
							<p
								className={`mt-1 sm:text-sm text-xs font-Manrope ${
									submitMessage.status === "ERROR"
										? "text-red-500"
										: "text-green-500"
								} `}>
								{submitMessage.message}
							</p>
						) : null}
					</div>
				</div>
				<div className="sm:w-[40%] w-full">
					<img src="/assets/images/head-section.png" alt="" />
				</div>
			</section>

			<Spacer className="h-40" />

			<section className="mx-auto bg-gradient-radial from-white to-white to-[80%] via-pinkBlur-lt justify-center backdrop-blur-lg items-center flex flex-col px-[7vw]">
				<Spacer className="h-20" />

				<div className="text-center flex flex-col items-center">
					<h1 className="font-Playfair font-bold lg:text-5xl text-4xl sm:w-3/4">
						Discover Your Natural Beauty with Kiya Beauty
					</h1>

					<p className="text-kiya-gray font-light md:w-1/2 lg:text-lg md:text-base text-xs mt-4">
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

			<Spacer className="lg:h-60 h-40 bg-gradient-to-br from-transparent to-pinkBlur-lt from-[60%]" />

			<section className="sm:flex hidden justify-between bg-gradient-to-tr from-transparent from-[50%] to-pinkBlur-lt space-x-5 relative pl-[7vw]">
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
				<div className="w-[45%] flex flex-col items-end bg-gradient-to-tr sm:from-[50%] from-transparent to-pinkBlur pr-[7.5vw]">
					<div>
						<div>
							<p className="font-Playfair font-bold lg:text-5xl text-4xl w-3/4 mb-4">
								Follow us on Instagram
							</p>
							<p className="font-Manrope font-light">
								Join our vibrant community of beauty enthusiasts! Follow us on
								doses of natural beauty inspiration, product sneak peeks, and
								exclusive offers and giveaways!
							</p>
						</div>
						<Spacer className="lg:h-16 h-10" />

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

			<section className="sm:hidden flex flex-col space-y-8 bg-gradient-to-tr from-transparent from-[50%] to-pinkBlur-lt px-[7vw]">
				<div className="w-full">
					<p className="font-Playfair font-bold text-4xl text-center w-3/4 mx-auto mb-4">
						Follow us on Instagram
					</p>
					<p className="font-Manrope font-light text-center">
						Join our vibrant community of beauty enthusiasts! Follow us on doses
						of natural beauty inspiration, product sneak peeks, and exclusive
						offers and giveaways!
					</p>
				</div>
				<div className="flex flex-col space-y-5 border-4 border-pink p-4">
					<img src="/assets/images/bottom-section-1.png" alt="" />

					<img src="/assets/images/bottom-section-2.png" alt="" />

					<img
						// className="max-h-[31.5rem]"
						src="/assets/images/bottom-section-3.png"
						alt=""
					/>
				</div>
			</section>

			<Spacer className="lg:h-60 h-40" />

			<footer className="bg-pinkBlur w-full space-y-6 flex flex-col justify-center items-center py-10">
				<img width={100} height={100} src="/assets/images/logo.png" alt="" />

				<div className="flex items-center space-x-8">
					{/* <SvgDribble /> */}
					<a
						href="https://instagram.com/shopkiyabeauty?igshid=MzRlODBiNWFlZA=="
						target="_blank">
						<SvgInstagram />
					</a>
					{/* <SvgLinkedIn /> */}
				</div>

				<p className="font-Inter text-kiya-gray text-xs">
					© {new Date().getFullYear()} Kiya Beauty. All Rights Reserved.
				</p>
			</footer>
		</main>
	);
}

export default App;
