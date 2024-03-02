import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import api from "@/utils/api";


export default function UsersModal({ isOpen, closeModal, users,id,setUsers }) {
	const cancelButtonRef = useRef(null);
	console.log(users,id,users.find(user => user.id === id))

	const [tempPlayer, setTempPlayer] = useState({});


	useEffect(() => {
		setTempPlayer(users.find(user => user.id === id))
	}, [users])

	console.log(tempPlayer)
	async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const response1 = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
    });

    if (!response1.ok) {
        throw new Error('Network response was not ok');
    }

    const { filePath } = await response1.json();
    let thumbnail = filePath;


    const updatedUserData = {
        username: tempPlayer.username,
        password: tempPlayer.password,
        name: tempPlayer.name,
        email: tempPlayer.email,
        birth_date: tempPlayer.birth_date,
				birthdate : tempPlayer.birth_date,
        phone: tempPlayer.phone,
        thumbnail: thumbnail,
        role: tempPlayer.role
    };
		let response = {};
		if (id) {
			 response = await api.updateUserWithRole(updatedUserData);
		}
    else{
			console.log(updatedUserData)
			 response = await api.register(updatedUserData);
		}

    if (response) {
        console.log(response.data);

        // Update the users state
        setUsers(users.map(user => {
            if (user.id === id) {
                // Update the user with matching id
                return {
                    ...user,
                    ...tempPlayer,
                    thumbnail: thumbnail
                };
            }
            return user; // Return other users without modifications
        }));

        closeModal();
    }
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
								<form className="relative bg-white rounded-lg shadow" enctype="multipart/form-data" onSubmit={(e) => handleSubmit(e)}>
									<div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
										<h3 className="text-xl font-semibold text-gray-900">
											Update Player Information
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
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
												/>
											</svg>
											<span className="sr-only">Close modal</span>
										</button>
									</div>

									<div className="p-4 md:p-5 space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Name"
												value={tempPlayer?.name}
                        required
												onChange={e => setTempPlayer({ ...tempPlayer, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
												Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Name"
												value={tempPlayer?.email}
												onChange={e => setTempPlayer({ ...tempPlayer, email: e.target.value })}
                        required
                      />
                    </div>
										<div>
											<label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">
												Phone
											</label>
											<input
												type="text"
												id="phone"
												className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
												placeholder="Phone"
												value={tempPlayer?.phone}
												onChange={e => setTempPlayer({ ...tempPlayer, phone: e.target.value })}
												required
											/>

										</div>
										<div>
											<label htmlFor="birthdate" className="block mb-2 text-sm font-medium text-gray-900">
												Birthdate
											</label>
											<input
												type="date"
												id="birthdate"
												className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
												placeholder="Birthdate"
												value={ tempPlayer ? (tempPlayer.birth_date ? new Date(tempPlayer?.birth_date).toISOString().split('T')[0] : '') : '' }
												required
												onChange={e => setTempPlayer({ ...tempPlayer, birth_date: e.target.value })}
											/>

										</div>
										<div>
											<label htmlFor="birthdate" className="block mb-2 text-sm font-medium text-gray-900">
												Role
											</label>
											<select name="role" id="role" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={tempPlayer?.role} onChange={e => setTempPlayer({ ...tempPlayer, role: e.target.value })}>
												<option value="2">Admin</option>
												<option value="1">User</option>
											</select>

										</div>
										
										<div>
											<label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">
												Username
											</label>
											<input
												type="text"
												id="username"
												className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
												placeholder="Username"
												value={tempPlayer?.username}
												onChange={e => setTempPlayer({ ...tempPlayer, username: e.target.value })}
												required
											/>

										</div>
										<div>
											<label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
												Password
											</label>
											<input
												type="password"
												id="password"
												className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
												placeholder="Password"
												onChange={e => setTempPlayer({ ...tempPlayer, password: e.target.value })}
												required
											/>

										</div>
										<div>
											<label
												htmlFor="thumbnail"
												className="block mb-2 text-sm font-medium text-gray-900"	
											>
												Thumbnail
											</label>
											<input
												type="file"
												id="thumbnail"
												name="thumbnail"
												className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
												placeholder="Thumbnail"
												
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
											Decline
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
