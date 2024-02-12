import { useRouter } from "next/navigation";
import React from "react";

export default function CardStatsSelector({ attribute,activeAttribute, setActiveAttribute }) {
	const router = useRouter();
	const redirectEdit = (id) => {
		router.push("/form/" + id);
	};

	const handleSelect = (id) => {
		let matchingAttribute = attribute.find((attribute) => attribute.id == id);
		setActiveAttribute(matchingAttribute);
	};
	return (
		<div className="flex justify-between bg-white rounded-xl p-4 mx-6 mb-4">
			<select
				className="bg-gray-100 text-gray-400 h-12 px-6 rounded-xl font-semibold text flex align-middle"
				onChange={(e) => handleSelect(e.target.value)}
			>
				{attribute.map((attr) => (
					<option key={attr.id} value={attr.id}>
						{attr.created_date}
					</option>
				))}
			</select>
			<div className=" flex gap-2">
				<a
					className="bg-blue-400 text-white h-12 px-6 rounded-xl font-semibold text flex align-middle"
					href={"/form/"}
				>
					<span className="my-auto">New Recommendation</span>
				</a>
				<button
					className="bg-gray-100 text-gray-400 h-12 px-6 rounded-xl font-semibold text flex align-middle"
					value={activeAttribute.id}
					onClick={() => redirectEdit(activeAttribute.id)}
				>
					<span className="my-auto">Edit Recommendation</span>
				</button>
			</div>
		</div>
	);
}
