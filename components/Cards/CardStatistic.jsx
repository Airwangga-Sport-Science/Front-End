import api from '@/utils/api';
import React from 'react';

export default function CardStatistic({ openRecommendationModal, attribute, setAttribute }) {
  const isOdd = (count) => count % 2 !== 0;
  const [isEdit, setIsEdit] = React.useState(false);
  const [tempAttribute, setTempAttribute] = React.useState(attribute);

  const handleAttributeChange = (key, newValue) => {
    setAttribute((prevAttributes) => ({
      ...prevAttributes,
      [key]: newValue,
    }));
  };

  const handleIncrement = (key) => {
    setAttribute((prevAttributes) => ({ ...prevAttributes, [key]: prevAttributes[key] + 1 }));
  };

  const handleDecrement = (key) => {
    setAttribute((prevAttributes) => ({ ...prevAttributes, [key]: prevAttributes[key] - 1 }));
  };

  const handleReset = () => {
    setAttribute(tempAttribute);
    setIsEdit(false);
  };
  
  const handleSave = async () => {

    const response = await api.updateAttribute(attribute);

    if (response.status === 'success') {
      alert('Attribute updated successfully');
      setTempAttribute(attribute);
      setIsEdit(false);
    }
    else {
      alert('Failed to update attribute');
    }


    
  }

  return (
    <div className="bg-white mb-6 shadow-xl rounded-xl px-6 pt-6 pb-12 justify-between mx-6 h-fit">
      <div className="flex flex-row justify-between">
        <h3 className="text-4xl font-semibold">Player Statistic</h3>
        <div className="flex flex-row gap-2">
          
          {
            isEdit ? (
              <div className="flex gap-2 flex-row-reverse">
              <button className="bg-gray-100 text-gray-400 h-12 px-6 rounded-xl font-semibold text flex align-middle" onClick={() => handleReset()}>
                <span className="my-auto">Reset</span>
              </button>
              <button className="bg-blue-400 text-white h-12 px-6 rounded-xl font-semibold text flex align-middle" onClick={() => handleSave()}>
                <span className="my-auto">Save</span>
              </button>
              </div>
              
            ) : (
              <div className="flex gap-2">
                <button
            className="bg-blue-400 text-white h-12 px-6 rounded-xl font-semibold text flex align-middle"
            onClick={openRecommendationModal}
          >
            <span className="my-auto">Recommendation</span>
          </button>
              <button className="bg-gray-100 text-gray-400 h-12 px-6 rounded-xl font-semibold text flex align-middle" onClick={() => setIsEdit(true)}>
                <span className="my-auto">Edit</span>
              </button>
              </div>
              
            )
          }

        </div>
      </div>

      <div className="flex flex-row flex-wrap mt-8 justify-between gap-4 h-fit">
        {Object.entries(attribute).map(([key, value], index) => (
          <div
            key={index}
            className={`flex flex-row justify-between w-64 my-1 ${
              isOdd(index) ? 'bg-white' : 'bg-gray-200'
            } px-4 py-2 rounded-lg`}
          >
            <h5>{key}</h5>
            {isEdit ? (
              <div className="flex gap-2">
                <button onClick={() => handleDecrement(key)}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
                <input
                  className="w-8 text-center bg-transparent"
                  type="number"
                  value={value}
                  onChange={(e) => handleAttributeChange(key, e.target.value)}
                />
                <button onClick={() => handleIncrement(key)}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
            ) : (
              <p>{value}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
