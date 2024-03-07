"use client";

import React from "react";
import { NextUIProvider } from "@nextui-org/system";
import FormSlider from "@/components/Forms/FormSlider";
import api from "@/utils/api";
import { useParams, useRouter, useSearchParams } from "next/navigation";

import RecommendationModal from "@/components/Popups/RecommendationModal";
import FormQuestion from "@/components/Forms/FormQuestion";
import FormRadio from "@/components/Forms/FormRadio";

export default function Form() {
  const [attributes, setAttributes] = React.useState([]);
  const [question, setQuestion] = React.useState([]);
  const [openModal, setOpenModal] = React.useState(false);
  const params = useParams();
  const router = useRouter();
  const [allAttributes, setAllAttributes] = React.useState({
    weight: 0,
    height: 0,
    prefered_foot: null,
    movement_sprint_speed: 0,
    movement_acceleration: 0,
    mentality_positioning: 0,
    mentality_interceptions: 0,
    mentality_aggression: 0,
    attacking_finishing: 0,
    power_shot_power: 0,
    power_long_shots: 0,
    attacking_volleys: 0,
    mentality_penalties: 0,
    mentality_vision: 0,
    attacking_crossing: 0,
    skill_fk_accuracy: 0,
    attacking_short_passing: 0,
    skill_long_passing: 0,
    skill_curve: 0,
    movement_agility: 0,
    movement_balance: 0,
    movement_reactions: 0,
    skill_ball_control: 0,
    skill_dribbling: 0,
    mentality_composure: 0,
    attacking_heading_accuracy: 0,
    defending_marking_awareness: 0,
    defending_standing_tackle: 0,
    defending_sliding_tackle: 0,
    power_jumping: 0,
    power_stamina: 0,
    power_strength: 0,
  });

  const fetchAttributes = async (id) => {
    const response = await api.getAttribute(id);
    setAllAttributes(response);
  };

  const [currentPage, setCurrentPage] = React.useState(1);

  const attributesPerPage = 5;

  const allAttributesObject = allAttributes;

  React.useEffect(() => {
    fetchAttributesMaster();

    const startIndex = (currentPage - 1) * attributesPerPage;
    const endIndex = startIndex + attributesPerPage;

    const currentAttributes = Object.fromEntries(
      Object.entries(allAttributesObject).slice(startIndex, endIndex)
    );

    setAttributes(currentAttributes);
  }, [currentPage]);

  React.useEffect(() => {
    fetchAttributes(params.id);
  }, []);

  const handleAttributeChange = (key, newValue) => {
    setAllAttributes((prevAttributes) => ({
      ...prevAttributes,
      [key]: newValue,
    }));
  };

  const totalPages = React.useMemo(() => {
    return Math.ceil(
      Object.keys(allAttributesObject).length / attributesPerPage
    );
  }, [allAttributesObject]);

  const [positions, setPositions] = React.useState(null);
  const [alikedPlayers, setAlikedPlayers] = React.useState(null);
  const handleSubmit = async () => {
    const response = await api.postAttribute(allAttributes);

    if (response.status === "success") {
      setOpenModal(true);
      setPositions(response.positions);
      setAlikedPlayers(response.alike);
    } else {
      alert("Failed to update attribute");
    }
  };

  const fetchAttributesMaster = async () => {
    const response = await api.getAttributeMaster();
    setQuestion(response);
  };

  const questionForAttributes = (attribute_name) => {
    const matchingQuestion = question.find(
      (q) => q.attribute_name === attribute_name
    );

    if (matchingQuestion) {
      console.log(matchingQuestion.attribute_question);
      return matchingQuestion.attribute_question;
    } else {
      return "Question not found";
    }
  };

  const displayForAttributes = (attribute_name) => {
    const matchingQuestion = question.find(
      (q) => q.attribute_name === attribute_name
    );

    if (matchingQuestion) {
      return matchingQuestion.attribute_display;
    }
  };

  return (
    <NextUIProvider>
      <RecommendationModal
        isOpen={openModal}
        setIsOpen={setOpenModal}
        positions={positions}
        alike={alikedPlayers}
        attributes={allAttributes}
      />
      <div className="flex flex-col 2xl:w-[1440px] mx-auto mt-16 py-6">
        <div className="flex flex-col justify-between w-4/5 md:gap-6 bg-white rounded-md shadow-sm py-6 px-12 mx-auto">
          <h2 className="font-semibold text-3xl my-auto"> Form Attribute </h2>
          <div className="">
            {Object.keys(attributes).map((key) => {
              if (key === "height") {
                return (
                  <FormQuestion
                    key={key}
                    question={"Berapa tinggi badanmu? (cm)"}
                    display={displayForAttributes(key)}
                    onAttributeChange={handleAttributeChange}
                    attribute={key}
                    type={"number"}
                    value={attributes[key]}
                  />
                );
              } else if (key === "weight") {
                return (
                  <FormQuestion
                    key={key}
                    question={"Berapa berat badanmu? (kg)"}
                    display={displayForAttributes(key)}
                    onAttributeChange={handleAttributeChange}
                    attribute={key}
                    type={"number"}
                    value={attributes[key]}
                  />
                );
              } else if (key === "prefered_foot") {
                return (
                  <FormRadio
                    key={key}
                    question={"Manakah kaki terbaikmu?"}
                    display={displayForAttributes(key)}
                    onAttributeChange={handleAttributeChange}
                    attribute={key}
                    value={attributes[key]}
                    options={[
                      { value: "left", label: "Kaki Kiri (Left Foot)" },
                      { value: "right", label: "Kaki Kanan (Right Foot)" },
                    ]}
                  />
                );
              } else {
                return (
                  <FormSlider
                    key={key}
                    attribute={key}
                    value={attributes[key]}
                    question={questionForAttributes(key)}
                    display={displayForAttributes(key)}
                    onAttributeChange={handleAttributeChange}
                  />
                );
              }
            })}
          </div>

          <div className="flex justify-end">
            {currentPage === totalPages ? (
              <button
                className="bg-blue-700 text-white active:bg-blue-600 font-bold uppercase px-4 py-4 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 mt-20 w-full"
                type="button"
                onClick={handleSubmit}
              >
                Submit
              </button>
            ) : null}
          </div>

          <div className="flex justify-between mt-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="bg-blue-700 text-white active:bg-blue-600 font-bold uppercase px-4 py-4 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            >
              Previous
            </button>
            <span className="mx-4 my-4">
              Page <b>{currentPage + 1}</b> of {totalPages + 1}
            </span>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="bg-blue-700 text-white active:bg-blue-600 font-bold uppercase px-4 py-4 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 w-28"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </NextUIProvider>
  );
}
