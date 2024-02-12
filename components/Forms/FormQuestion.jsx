import React from 'react'

export default function FormQuestion ({ attribute,question,display, value,type, onAttributeChange }) {
  const [currentValue, setCurrentValue] = React.useState(value);
  const handleChange = (value) => {
    setCurrentValue(value);
    onAttributeChange(attribute, value);
  }

  React.useEffect(() => {
    setCurrentValue(value);
  }, [value]);
  return (
    <div className="flex flex-col gap-3 mt-4">
    <h5 className="font-semibold text-lg">
      {display}
    </h5>
    <p>
      {question}
      
    </p>
    <input
      type={type}
      value={currentValue}
      onChange={(event) => handleChange(event.target.value)}
      className="w-full border border-gray-300 rounded-md p-3"
    />
  </div>
  )
}
