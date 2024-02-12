import React from 'react';

export default function FormRadio({ attribute, question, display, value, options, onAttributeChange }) {
  const [currentValue, setCurrentValue] = React.useState(value);
  
  const handleChange = (value) => {
    setCurrentValue(value);
    onAttributeChange(attribute, value);
  };

  React.useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  return (
    <div className="flex flex-col gap-3 mt-4">
      <h5 className="font-semibold text-lg">{display}</h5>
      <p>{question}</p>
      <div className="flex w-full gap-3">
        {options.map((option, index) => (
          <div className="flex gap-2" key={index}>
            <input 
              type="radio"
              className="w-6 h-6 "
              value={option.value}
              onChange={(event) => handleChange(event.target.value)}
              checked={currentValue === option.value}
              name={attribute} 
              id={`${attribute}-${option.value}`}
            />
            <label htmlFor={`${attribute}-${option.value}`}>{option.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
