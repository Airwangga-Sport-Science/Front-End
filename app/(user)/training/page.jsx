"use client"
import TrainingList from "@/components/Cards/Training/TrainingList";
import api from "@/utils/api";
import React from "react";
export default function Training() {
  let [articles, setArticles] = React.useState(null);
  let [positions, setPositions] = React.useState(null);
  let [tempArticles, setTempArticles] = React.useState(null);

  async function getArticles() {
    const response = await api.getArticles();
    setArticles(response);
    setTempArticles(response);
  }

  async function getPositions() {
    const response = await api.getPositions();
    setPositions(response);
  }

  function handleSearch(e) {
    if (e.target.value === "") {
      setArticles(tempArticles)
      return
    }
    else{
      setArticles (tempArticles.filter(article => article.title.toLowerCase().includes(e.target.value.toLowerCase())))
    }
    
  }

  function handleFilter(e) {
    console.log(articles,tempArticles);
    if (e.target.value === "0") {
      setArticles(tempArticles)
    }
    else{
      setArticles (tempArticles.filter(article => article.positions.includes(e.target.value)))
    }
  }

  React.useEffect(() => {
    getArticles();
    getPositions();
    console.log(articles,tempArticles);
  }, []);

  return (
    <div className="flex flex-col 2xl:w-[1440px] mx-auto mt-20">
      <div className="flex md:flex-row flex-col justify-between w-full md:gap-6 px-6">
        <h2 className="font-semibold text-3xl my-auto">Training Catalogue </h2>
        <div className="flex md:flex-row flex-col gap-3">
          <select name="" id="" className="p-3 text-slate-400 rounded-xl border-0 shadow-md" onChange={handleFilter}>
            <option value="0"> Filter by Position</option>
            {
              positions ? (
                positions.map((position) => (
                  <option key={position.id} value={position.name}>{position.name}</option>
                ))
              ) : null
            }
          </select>
          <input type="text" name="" id="" className="p-3 text-slate-500 rounded-xl border-0 shadow-md" placeholder="Search Catologue" onChange={handleSearch}/>
        </div>
      </div>
      {
        articles ? (
          <TrainingList articles={articles} />
        )
        : null
      }
    </div>
  );
}