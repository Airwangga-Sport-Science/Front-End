import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({ user, handleLogOut }) {
	const pathname = usePathname();

	const isActive = (href) => {
		console.log(pathname);
		return pathname === href ? "border-b-2 border-blue-500" : "";
	};

	return (
		<>
			<nav className="top-0 z-1 w-screen absolute flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow font-poppins">
				<div className="container px-4 mx-auto flex flex-row items-center justify-between md:w-[1440px]">
					<div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
						<Link href="/">
							<p className={`text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap ${isActive("/")}`}>
								Home
							</p>
						</Link>
						{user ? (
							user.role == 1 ? (
								user.attributes.length > 0 ? (
									<>
								<Link href="/player">
									<p className={`text-sm leading-relaxed inline-block mr-4 py-2 whitespace-nowrap hover:border-b-2 hover:border-blue-500 ${isActive("/player")}`}>
										Dashboard
									</p>
								</Link>
								<Link href="/training">
								<p className={`text-sm leading-relaxed inline-block mr-4 py-2 whitespace-nowrap hover:border-b-2 hover:border-blue-500 ${isActive("/training")}`}>
									Training
								</p>
								</Link>
								</>
								) : ( '')
							) : (
								<>
									<Link href="/dashboard">
										<p className={`text-sm leading-relaxed inline-block mr-4 py-2 whitespace-nowrap hover:border-b-2 hover:border-blue-500 ${isActive("/dashboard")}`}>
											Dashboard Training
										</p>
									</Link>
									<Link href="/dashboard/users">
										<p className={`text-sm leading-relaxed inline-block mr-4 py-2 whitespace-nowrap hover:border-b-2 hover:border-blue-500 ${isActive("/dashboard/users")}`}>
											Dashboard User
										</p>
									</Link>
								</>
							)
							
						) : (
							""
						)}

					</div>
					<div>
						{user ? (
							<button
								className="bg-blue-400 text-white h-10 px-6 rounded-xl font-semibold text-sm flex align-middle w-fit mr-0 ml-auto shadow-md"
								onClick={handleLogOut}
							>
								<p className="text-sm leading-relaxed inline-block py-2 whitespace-nowrap font-bold">
									Logout
								</p>
							</button>
						) : (
							<Link
								href="/login"
								className="bg-blue-400 text-white h-10 px-6 rounded-xl font-semibold text-sm flex align-middle w-fit mr-0 ml-auto shadow-md"
							>
								<p className="text-sm leading-relaxed inline-block py-2 whitespace-nowrap font-bold">
									Login
								</p>
							</Link>
						)}
					</div>
				</div>
			</nav>
		</>
	);
}
