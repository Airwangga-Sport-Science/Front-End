import { Slider } from "@nextui-org/slider";
import React from "react";

export default function FormSlider({
	attribute,
	question,
	display,
	value,
	onAttributeChange,
}) {
	const [currentValue, setCurrentValue] = React.useState(value);

	const handleChange = (value) => {
		setCurrentValue(value);
		onAttributeChange(attribute, value);
	};

	const handleAdd = () => {
		setCurrentValue(currentValue + 1);
		onAttributeChange(attribute, currentValue + 1);
	};

	const handleMinus = () => {
		setCurrentValue(currentValue - 1);
		onAttributeChange(attribute, currentValue - 1);
	};

	React.useEffect(() => {
		setCurrentValue(value);
	}, [value]);

	return (
		<div className="flex flex-col gap-3 mt-4">
			<h5 className="font-semibold text-lg">{display}</h5>
			<p>{question}</p>
			<div className="flex flex-row">
				<button onClick={handleMinus} className="px-2 rounded-full border-1 border-blue-500 text-blue-700 font-bold mb-0 mt-auto mx-2">
					-
				</button>
				<Slider
					label={display}
					maxValue={100}
					minValue={0}
					step={1}
					className="w-full"
					value={currentValue}
					onChange={handleChange}
				/>

				<button className="px-2 rounded-full border-1 border-blue-500 text-blue-700 mb-0 font-bold mt-auto mx-2" onClick={handleAdd}>+</button>
			</div>
		</div>
	);
}
