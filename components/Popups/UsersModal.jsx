import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import api from "@/utils/api";
import { FaEye, FaEyeSlash } from "react-icons/fa6";


export default function UsersModal({ isOpen, closeModal, users,user_id,setUsers,setUserId }) {
	const cancelButtonRef = useRef(null);
	
  const [file, setFile] = useState(null);
	const [tempPlayer, setTempPlayer] = useState({});
	const [player, setPlayer] = useState({});
	const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  function handleShowConfirmPassword() {
    setShowConfirmPassword(!showConfirmPassword);
  }
  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  const [error, setError] = useState({});



  function checkForm() {
		let errors = {};
		console.log(tempPlayer,users,user_id)
		// Check if tempPlayer has been initialized
		if (Object.keys(tempPlayer).length != 0){
			if (tempPlayer.email === "" || !tempPlayer.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
				errors.email = true;
			} else {
				errors.email = false;
			}
	
			if (tempPlayer.phone === "" || (tempPlayer.phone.match(/\d/g) || []).length > 11) {
				errors.phone = true;
			} else {
				errors.phone = false;
			}
	
			if (tempPlayer.password == player.password ){
				errors.password = false;
				errors.confirm_password = false;
			}
			else{
				if (tempPlayer.password == tempPlayer.confirm_password){
					errors.password = false;
					errors.confirm_password = false;
				}
				else{
					errors.password = true;
					errors.confirm_password = true;
				}
			}
	
			if (
				tempPlayer.username === "" ||
				tempPlayer.password === "" ||
				tempPlayer.name === "" ||
				tempPlayer.email === "" ||
				tempPlayer.phone === "" ||
				tempPlayer.role === ""
			) {
				errors.tab = true;
			} else {
				errors.tab = false;
			}
		}
	
		setError(errors);
	}
	
  useEffect(() => {
    checkForm();
  },[ tempPlayer ]);

	useEffect(() => {
		console.log(user_id);
		if (users.find(user => user.id === user_id)) {
		setTempPlayer(users.find(user => user.id === user_id))
		setPlayer(users.find(user => user.id === user_id))}
		
		else{
			setTempPlayer({
				email: "",
				phone: "",
				password: "",
				confirm_password: "",

			})
		}
		
	}, [user_id])

	const [tabOpen, setTabOpen] = useState(1)

	function handleChangeTab(tab) {
		setTabOpen(tab)
	}


	
	async function handleSubmit(e) {
    e.preventDefault();
		let thumbnail = null
    if(file){
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);
      const response1 = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
  
      if (!response1.ok) {
        throw new Error("Network response was not ok");
      }
  
      const { filePath } = await response1.json();
      let thumbnail = filePath;
      console.log(thumbnail);
    }
    console.log(thumbnail? thumbnail : tempPlayer.thumbnail);

    const updatedUserData = {
        username: tempPlayer.username,
        password: tempPlayer.password,
        name: tempPlayer.name,
        email: tempPlayer.email,
        birth_date: tempPlayer.birth_date,
				birthdate : tempPlayer.birth_date,
        phone: tempPlayer.phone,
        thumbnail: thumbnail? thumbnail : tempPlayer.thumbnail,
        role: tempPlayer.role,
				id:user_id
    };
		let response = {};
		console.log(user_id);
		if (user_id) {
			updatedUserData.password = tempPlayer.password != player.password? tempPlayer.password : '',
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
            if (user.id === user_id) {
                // Update the user with matching id
                return {
                    ...user,
                    ...tempPlayer,
                    thumbnail: thumbnail
                };
            }
            return user; // Return other users without modifications
        }));

        handleCloseModal();
    }
		
}
function handleCloseModal() {
	setTempPlayer({});
	users = [];
	setUserId(null);
	setFile(null);
	closeModal();
}
		
	

	return (
		<Transition.Root show={isOpen} as={Fragment}>
			<Dialog
				as="div"
				className="relative z-10"
				initialFocus={cancelButtonRef}
				onClose={handleCloseModal}
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
											onClick={handleCloseModal}
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
									<div className=" flex justify-between text-center shadow-md">
										<button type="button" className={"p-4 md:p-5 w-1/2 " + (tabOpen == "1" ? "bg-slate-100 border-b border-blue-500" : " ")} onClick={() => setTabOpen("1")}>
											Login Information
										</button>
										<button type="button" className={"p-4 md:p-5 w-1/2 " + (tabOpen == "2" ? "bg-slate-100 border-b border-blue-500" : " ")} onClick={() => setTabOpen("2")}>
											Account Information
										</button>
									</div>
									<div className={error.tab ? "block" : "hidden"}>
										<div className="bg-red-300 text-center text-red-700 p-4 md:p-5" >
											Please Check Another Tab 
										</div>
									</div>
									<div className="p-4 md:p-5 space-y-4">
                    <div className={(tabOpen == "2" ? "block" : "hidden")}>
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
                    <div className={(tabOpen == "2" ? "block" : "hidden")}>
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
										<div className={(tabOpen == "2" ? "block" : "hidden")}>
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
										<div className={(tabOpen == "2" && tempPlayer.role == 1 ? "block" : "hidden")}>
											<label htmlFor="birthdate" className="block mb-2 text-sm font-medium text-gray-900">
												Birthdate
											</label>
											<input
												type="date"
												id="birthdate"
												className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
												placeholder="Birthdate"
												value={ tempPlayer ? (tempPlayer.birth_date ? new Date(tempPlayer?.birth_date).toISOString().split('T')[0] : '') : '' }
												
												onChange={e => setTempPlayer({ ...tempPlayer, birth_date: e.target.value })}
											/>

										</div>
										<div className={(tabOpen == "1" ? "block" : "hidden")}>
											<label htmlFor="birthdate" className="block mb-2 text-sm font-medium text-gray-900">
												Role
											</label>
											<select name="role" id="role" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
											value={tempPlayer?.role} onChange={e => setTempPlayer({ ...tempPlayer, role: e.target.value })}>
												<option value="">Select Role</option>
												<option value="2">Admin</option>
												<option value="1">User</option>
											</select>

										</div>
										
										<div className={(tabOpen == "1" ? "block" : "hidden")}>
											<label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">
												Username
											</label>
											<input
												type="text"
												id="username"
												className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 read-only:bg-gray-200"
												placeholder="Username"
												value={tempPlayer?.username}
												onChange={e => setTempPlayer({ ...tempPlayer, username: e.target.value })}
												required
												readOnly={user_id ? true : false}
											/>

										</div>
										<div className={"relative " + (tabOpen == "1" ? "block" : "hidden")}>
											<label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
												Password
											</label>
											<input
												type={showPassword ? "text" : "password"}
												id="password"
												className={"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " + (error.confirm_password ? "border-red-500" : "border-gray-300")}
												placeholder="Password"
												onChange={e => setTempPlayer({ ...tempPlayer, password: e.target.value })}
												
												
											/>
											<button type="button" className="absolute right-0 bottom-3 pr-3" onClick={handleShowPassword}>
                      {showPassword ? <FaEyeSlash /> : <FaEye />  }
                    </button>
										</div>
										<div className={"relative " + (tabOpen == "1" ? "block" : "hidden")}>
                      <label
                        htmlFor="confirm_password"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Confirm Password
                      </label>
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        id="confirm_password"
                        className={"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " + (error.confirm_password ? "border-red-500" : "border-gray-300")}
                        placeholder="Confirm Password"
                        onChange={(e) =>
                          setTempPlayer({
                            ...tempPlayer,
                            confirm_password: e.target.value,
                          })
                        }
                      />
                      <button type="button" className="absolute right-0 bottom-3 pr-3" onClick={handleShowConfirmPassword}>
                      {showConfirmPassword ? <FaEyeSlash /> : <FaEye />  }
                    </button>
                    </div>
										<div className={(tabOpen == "2" && tempPlayer.role == 1 ? "block" : "hidden")}>
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
											onClick={handleCloseModal}
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
