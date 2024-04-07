import React, { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import api from "@/utils/api";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

export default function PlayerModal({ isOpen, closeModal, player, setPlayer }) {
	const cancelButtonRef = useRef(null);
	const [tempPlayer, setTempPlayer] = useState(player);
	const [file, setFile] = useState(null);
	const [showPassword, setShowPassword] = React.useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
	function handleShowConfirmPassword() {
		setShowConfirmPassword(!showConfirmPassword);
	}
	function handleShowPassword() {
		setShowPassword(!showPassword);
	}

	const [error, setError] = React.useState({});

	React.useEffect(() => {
		checkForm();
	}, [tempPlayer]);

	function checkForm() {
		let errors = {};
		if (
			tempPlayer.email == "" ||
			tempPlayer.email.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			)
		) {
			errors.email = false;
		} else {
			errors.email = true;
		}

		if (tempPlayer.phone == "" || tempPlayer.phone.match(/\d/g).length > 11) {
			errors.phone = false;
		} else {
			errors.phone = true;
		}
		if (tempPlayer.password == player.password) {
			errors.password = false;
			errors.confirmPassword = false;
		} else {
			if (tempPlayer.password == tempPlayer.confirm_password) {
				errors.password = false;
				errors.confirmPassword = false;
			} else {
				errors.password = true;
				errors.confirmPassword = true;
			}
		}

		if (
			tempPlayer.username == "" ||
			tempPlayer.password == "" ||
			tempPlayer.name == "" ||
			tempPlayer.email == "" ||
			tempPlayer.birth_date == "" ||
			tempPlayer.phone == ""
		) {
			errors.tab = true;
		}

		setError(errors);
	}

	async function handleSubmit(e) {
    e.preventDefault();
    let thumbnail = null;
    if (file) {
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        const response1 = await api.uploads(formData);

        if (!response1.ok) {
            throw new Error("Network response was not ok");
        }

        const { filePath } = response1;
        thumbnail = filePath; // Update nilai thumbnail yang sama di dalam kondisional
        console.log(thumbnail);
    } else {
        thumbnail = tempPlayer.thumbnail;
    }
    console.log(thumbnail, thumbnail ? thumbnail : tempPlayer.thumbnail);
    const response = await api.updateUser({
        username: tempPlayer.username,
        password: tempPlayer.password != player.password ? tempPlayer.password : "",
        name: tempPlayer.name,
        email: tempPlayer.email,
        birth_date: tempPlayer.birth_date,
        phone: tempPlayer.phone,
        thumbnail: thumbnail ? thumbnail : tempPlayer.thumbnail,
        id: tempPlayer.id,
    });
    if (response) {
        console.log(response.data);
        setPlayer(response.data);
        closeModal();
    }
}

	const [tabOpen, setTabOpen] = useState(1);

	function handleChangeTab(tab) {
		setTabOpen(tab);
	}

	return (
		<Transition.Root show={isOpen} as={Fragment}>
			<Dialog
				as="div"
				className="relative z-10"
				initialFocus={cancelButtonRef}
				onClose={closeModal}
			>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
				</Transition.Child>

				<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
					<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							<Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
								<form
									className="relative bg-white rounded-lg shadow"
									enctype="multipart/form-data"
									onSubmit={(e) => handleSubmit(e)}
								>
									<div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
										<h3 className="text-xl font-semibold text-gray-900">
											Update User Information
										</h3>
										<button
											type="button"
											className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-gray-600"
											onClick={closeModal}
										>
											<svg
												className="w-3 h-3"
												aria-hidden="true"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 14 14"
											>
												<path
													stroke="currentColor"
													strokeLinecap="round"
													stroke-linejoin="round"
													strokeWidth="2"
													d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
												/>
											</svg>
											<span className="sr-only">Close modal</span>
										</button>
									</div>
									<div className=" flex justify-between text-center shadow-md">
										<button
											type="button"
											className={
												"p-4 md:p-5 w-1/2 " +
												(tabOpen == "2" ? "bg-slate-100 border-b border-blue-500" : "")
											}
											onClick={() => setTabOpen("2")}
										>
											Login Information
										</button>
										<button
											type="button"
											className={
												"p-4 md:p-5 w-1/2 " +
												(tabOpen == "1" ? "bg-slate-100 border-b border-blue-500" : "")
											}
											onClick={() => setTabOpen("1")}
										>
											Account Information
										</button>
									</div>
									<div className={error.tab ? "block" : "hidden"}>
										<div className="bg-red-300 text-center text-red-700 p-4 md:p-5">
											Please Check Another Tab
										</div>
									</div>
									<div className="p-4 md:p-5 space-y-4">
										<div className={tabOpen == "1" ? "block" : "hidden"}>
											<label
												htmlFor="name"
												className="block mb-2 text-sm font-medium text-gray-900"
											>
												Name
											</label>
											<input
												type="text"
												id="name"
												className={
													"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
												}
												placeholder="Name"
												value={tempPlayer?.name}
												required
												onChange={(e) =>
													setTempPlayer({ ...tempPlayer, name: e.target.value })
												}
											/>
										</div>
										<div className={tabOpen == "1" ? "block" : "hidden"}>
											<label
												htmlFor="email"
												className="block mb-2 text-sm font-medium text-gray-900"
											>
												Email
											</label>
											<input
												type="email"
												id="email"
												className={
													"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " +
													(error.email ? "border-red-500" : "border-gray-300")
												}
												placeholder="Name"
												value={tempPlayer?.email}
												onChange={(e) =>
													setTempPlayer({
														...tempPlayer,
														email: e.target.value,
													})
												}
												required
											/>
										</div>
										<div className={tabOpen == "1" ? "block" : "hidden"}>
											<label
												htmlFor="phone"
												className="block mb-2 text-sm font-medium text-gray-900"
											>
												Phone
											</label>
											<input
												type="text"
												id="phone"
												className={
													"bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " +
													(error.phone ? "border-red-500" : "border-gray-300")
												}
												placeholder="Phone"
												value={tempPlayer?.phone}
												onChange={(e) =>
													setTempPlayer({
														...tempPlayer,
														phone: e.target.value,
													})
												}
												required
											/>
										</div>
										<div className={tabOpen == "1" ? "block" : "hidden"}>
											<label
												htmlFor="birthdate"
												className="block mb-2 text-sm font-medium text-gray-900"
											>
												Birthdate
											</label>
											<input
												type="date"
												id="birthdate"
												className={
													"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
												}
												placeholder="Birthdate"
												value={
													tempPlayer && tempPlayer.birth_date
														? new Date(tempPlayer.birth_date).toISOString().split("T")[0]
														: ""
												}
												onChange={(e) => {
													const value = e.target.value;
													if (value === "") {
														setTempPlayer({
															...tempPlayer,
															birth_date: null,
														});
													} else {
														setTempPlayer({
															...tempPlayer,
															birth_date: value,
														});
													}
												}}
											/>
										</div>
										<div className={tabOpen == "2" ? "block" : "hidden"}>
											<label
												htmlFor="username"
												className="block mb-2 text-sm font-medium text-gray-900"
											>
												Username
											</label>
											<input
												type="text"
												id="username"
												className={
													"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 read-only:bg-gray-200"
												}
												placeholder="Username"
												value={tempPlayer?.username}
												onChange={(e) =>
													setTempPlayer({
														...tempPlayer,
														username: e.target.value,
													})
												}
												readOnly
												required
											/>
										</div>
										<div className={"relative " + (tabOpen == "2" ? "block" : "hidden")}>
											<label
												htmlFor="password"
												className="block mb-2 text-sm font-medium text-gray-900"
											>
												Update Password
											</label>
											<input
												type={showPassword ? "text" : "password"}
												id="password"
												className={
													"bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " +
													(error.password ? "border-red-500" : "border-gray-300")
												}
												placeholder="Password"
												onChange={(e) =>
													setTempPlayer({
														...tempPlayer,
														password: e.target.value,
													})
												}
											/>
											<button
												type="button"
												className="absolute right-0 bottom-3 pr-3"
												onClick={handleShowPassword}
											>
												{showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
											</button>
										</div>
										<div className={"relative " + (tabOpen == "2" ? "block" : "hidden")}>
											<label
												htmlFor="confirm_password"
												className="block mb-2 text-sm font-medium text-gray-900"
											>
												Confirm New Password
											</label>
											<input
												type={showPassword ? "text" : "password"}
												id="confirm_password"
												className={
													"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " +
													(error.confirmPassword ? "border-red-500" : "border-gray-300")
												}
												placeholder="Confirm Password"
												onChange={(e) =>
													setTempPlayer({
														...tempPlayer,
														confirm_password: e.target.value,
													})
												}
											/>
											<button
												type="button"
												className="absolute right-0 bottom-3 pr-3"
												onClick={handleShowConfirmPassword}
											>
												{showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
											</button>
										</div>
										<div className={tabOpen == "1" ? "block" : "hidden"}>
											<label
												htmlFor="thumbnail"
												className="block mb-2 text-sm font-medium text-gray-900"
											>
												Photo Profile
											</label>
											<input
												type="file"
												id="thumbnail"
												name="thumbnail"
												className={
													"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
												}
												placeholder="Thumbnail"
												onChange={(e) => setFile(e.target.files[0])}
											/>
										</div>
									</div>

									<div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
										<button
											type="submit"
											className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
										>
											Save Changes
										</button>
										<button
											type="button"
											className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 bg-gray-700 text-gray-300 border-gray-500 hover:text-white hover:bg-gray-600 focus:ring-gray-600"
											onClick={closeModal}
										>
											Cancel
										</button>
									</div>
								</form>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
}
