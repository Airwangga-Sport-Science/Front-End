"use client"
import TrainingList from "@/components/Cards/Training/TrainingList";
export default function Training() {
  return (
    <div className="flex flex-col 2xl:w-[1440px] mx-auto mt-20">
      <div className="flex flex-row justify-between w-full md:gap-6 px-6">
        <h2 className="font-semibold text-3xl my-auto">Training Catalogue </h2>
        <div className="flex flex-row gap-3">
          <select name="" id="" className="p-3 text-slate-400 rounded-xl border-0 shadow-md">
            <option value="0"> Filter by Position</option>
          </select>
          <input type="text" name="" id="" className="p-3 text-slate-500 rounded-xl border-0 shadow-md" placeholder="Search Catologue"/>
        </div>
      </div>
      <TrainingList />
    </div>
  );
}