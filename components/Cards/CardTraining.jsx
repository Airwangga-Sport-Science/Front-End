import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CardTraining({ articles, openTableTrainingModal }) {
	console.log(articles);
	return (
		<div className="relative flex flex-row break-words gap-6 w-6/12 ">
			<div className="flex flex-col justify-between w-full">
				<div className="flex flex-col bg-white mb-6 shadow-xl rounded-xl px-6 py-6 h-80 ">
					<div className="flex flex-row justify-between h-20">
						<h3 className=" font-semibold text-4xl ">Training Recommendation</h3>
						<div className="bg-gray-100 text-gray-400 h-12 px-6 rounded-xl font-semibold text flex align-middle">
							<button onClick={openTableTrainingModal} className="flex items-center">
								<span className="my-auto">View All</span>
							</button>
						</div>
					</div>
					<div className="flex flex-row gap-4 mt-6">
						{articles?.latest_art1_id == null ? (
							""
						) : (
							<Link
								href={"/training/" + articles?.latest_art1_id}
								className="flex-col text-center justify-center align-middle relative "
							>
								<Image
									src={
										articles?.latest_art1_thumbnail == null
											? "/img/img-1-1000x600.jpg"
											: articles?.latest_art1_thumbnail
									}
									width={200}
									height={600}
									className="h-48 w-80 rounded-xl filter brightness-75"
									alt=""
								/>
								<h3 className="absolute text-left px-6 text-2xl font-semibold text-white bottom-4 ">
									{articles?.latest_art1_title}
								</h3>
							</Link>
						)}
						{articles?.latest_art2_id == null ? (
							""
						) : (
							<Link
								href={"/training/" + articles?.latest_art2_id}
								className="flex-col text-center justify-center align-middle relative"
							>
								<Image
									src={
										articles?.latest_art2_thumbnail == null
											? "/img/img-1-1000x600.jpg"
											: articles?.latest_art2_thumbnail
									}
									width={200}
									height={600}
									className="h-48 w-80 rounded-xl filter brightness-75"
									alt=""
								/>
								<h3 className="absolute text-left px-6 text-2xl font-semibold text-white bottom-4">
									{articles?.latest_art2_title}
								</h3>
							</Link>
						)}
						{articles?.latest_art3_id == null ? (
							""
						) : (
							<Link
								href={"/training/" + articles?.latest_art3_id}
								className="flex-col text-center justify-center align-middle relative"
							>
								<Image
									src={
										articles?.latest_art3_thumbnail == null
											? "/img/img-1-1000x600.jpg"
											: articles?.latest_art3_thumbnail
									}
									width={200}
									height={600}
									className="h-48 w-80 rounded-xl filter brightness-75"
									alt=""
								/>
								<h3 className="absolute text-left px-6 text-2xl font-semibold text-white bottom-4">
									{articles?.latest_art3_title}
								</h3>
							</Link>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
