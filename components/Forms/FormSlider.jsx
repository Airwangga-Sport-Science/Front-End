import { Slider } from '@nextui-org/slider'
import React from 'react'

export default function FormSlider({ attribute,question,display, value, onAttributeChange }) {
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
        <Slider 
        label={display}
        maxValue={100} 
        minValue={0} 
        className="w-full"
        value={currentValue}
        onChange={handleChange}
      />
    </div>
  )
}
