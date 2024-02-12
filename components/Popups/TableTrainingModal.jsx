import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import api from "@/utils/api";
import Link from "next/link";
import Image from "next/image";

export default function TableTrainingModal({ isOpen, closeModal,activeAttribute }) {
	const cancelButtonRef = useRef(null);
  const [articles, setArticles] = useState([]);
  const [tempArticles, setTempArticles] = useState([]);
  const [articleId, setArticleId] = useState(null);
  async function getArticles() {
    const response = await api.getArticleByAttribute(activeAttribute.id);
    console.log(response);
    setArticles(response);
    setTempArticles(response);
  }


	useEffect(() => {
		getArticles();
	}, [activeAttribute.id]);
	


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
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity z-10 -mt-12" />
				</Transition.Child>

				<div className="fixed inset-0 z-10  overflow-y-auto">
					<div className="flex min-h-full  items-end justify-center p-4 text-center sm:items-center sm:p-0">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 "
							enterTo="opacity-100 translate-y-0"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0"
							leaveTo="opacity-0 translate-y-4 "
						>
							<Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 !w-9/12">
								<form className="relative bg-white rounded-lg shadow w-full">
									<div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
										<h3 className="text-xl font-semibold text-gray-900">
											Training Table
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
                    < table className="w-full text-left text-gray-500 border">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                        <tr>
                          <th className="p-4 my-2 font-semibold border-r border-l border-white tracking-wide text-left">
                            Training Name
                          </th>
                          <th className="p-4 my-2 font-semibold border-r border-l border-white  tracking-wide text-left">
														Position
                          </th>
                          <th className="p-4 my-2 font-semibold tracking-wide text-left border-r border-l border-white">
                            Status
                          </th>
                          <th className="p-4 my-2 font-semibold border-l border-white tracking-wide text-left">
                            Action 
                          </th>
                        </tr>
                      </thead>
											
											<tbody>
												{articles.map((article) => (
													<tr key={article.id} className="bg-white border-b">
														<td className="p-3 text-gray-700 whitespace-nowrap flex gap-2">
														<Image
														alt="image"
														src={"/img/img-1-1000x600.jpg"}
														className="rounded"
														width={100} height={500} >
														</Image>
														<div className="flex flex-col">
															<h5 className="font-semibold">{article.article_title}</h5>
															<p className="text-sm">{article.article_body}</p>
														</div>
														</td>
														<td className="p-3 text-sm text-gray-700 whitespace-nowrap ">
															{article.article_positions}
														</td>
														<td className="p-3 text-sm text-gray-700 whitespace-nowrap ">
															{article.player_status ? "Sudah Diambil" : "Belum Diambil"}
														</td>
														<td className="p-3 text-sm text-gray-700 whitespace-nowrap ">
															<Link href={`/training/${article.article_id}`} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Detail</Link>
														</td>
													</tr>
												))}
											
											</tbody>
                    </table>
									</div>

									<div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b">

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
