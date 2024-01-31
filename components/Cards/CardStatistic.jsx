import api from '@/utils/api';
import { useRouter,Link } from 'next/navigation';
import React from 'react';

export default function CardStatistic({ openRecommendationModal, attribute, setAttribute, setActiveAttribute }) {
  const isOdd = (count) => count % 2 !== 0;
  const [isEdit, setIsEdit] = React.useState(false);
  const [tempAttribute, setTempAttribute] = React.useState(attribute[0]);
  const router = useRouter();


  const [question, setQuestion] = React.useState([])

  const displayForAttributes = (attribute_name) => {
    const matchingQuestion = question.find(q => q.attribute_name === attribute_name);
  
    if (matchingQuestion) {
      return matchingQuestion.attribute_display;
    }
  }

  const fetchAttributesMaster = async () => {
    const response = await api.getAttributeMaster();
    setQuestion(response);
    
  }


  React.useEffect(() => {
    fetchAttributesMaster();
  }, []);


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

  const redirectEdit = (id) => {
    router.push('/form/' + id);
  }

  const handleSelect = (id) => {
    let matchingAttribute = attribute.find((attribute) => attribute.id == id);
    console.log(matchingAttribute);
    setTempAttribute(matchingAttribute);
    setActiveAttribute(matchingAttribute);
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
                
          <a 
            className="bg-blue-400 text-white h-12 px-6 rounded-xl font-semibold text flex align-middle"
            href={'/form/'}
          >
            <span className="my-auto">Recommendation</span>
          </a>
              <button className="bg-gray-100 text-gray-400 h-12 px-6 rounded-xl font-semibold text flex align-middle" value={attribute[0].id} onClick={() => redirectEdit(attribute[0].id)}>
                <span className="my-auto">Edit</span>
              </button>
              <select className="bg-gray-100 text-gray-400 h-12 px-6 rounded-xl font-semibold text flex align-middle" onChange={(e) => handleSelect(e.target.value)}>
              <option key={attribute[0].id} value={attribute[0].id}>{attribute[0].created_date}</option>
                {
                  attribute.map((attr) => (
                    <option key={attr.id} value={attr.id}>{attr.created_date}</option>
                  ))
                }
                </select>
              </div>
              
            )
          }

        </div>
      </div>

      <div className="flex flex-row flex-wrap mt-8 justify-between gap-4 h-fit">
      {Object.entries(tempAttribute)
        .filter(([key, value]) => key !== 'created_date' && key !== 'id' && key !== 'positions' && key !== 'latest_articles')
        .map(([key, value], index) => (
          <div
            key={index}
            className={`flex flex-row justify-between w-64 my-1 ${
              isOdd(index) ? 'bg-white' : 'bg-gray-200'
            } px-4 py-2 rounded-lg`}
          >
            <h5>{displayForAttributes(key)}</h5>
            <p>{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
