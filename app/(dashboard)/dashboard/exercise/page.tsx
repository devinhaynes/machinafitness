import { ExerciseCategories } from "@/components/ExerciseCategories";
import { Exercises } from "@/components/Exercises";
import { NewExercise } from "@/components/NewExercise";
import { MdOutlineAdd } from "react-icons/md";

export default function ExerciseManager() {
  return (
    <div className="w-full m-4 card flex flex-col">
      <div className="pb-4 border-b-theme border-b-2">
        <h1 className="text-4xl px-8 bg-theme text-background rounded-2xl w-fit">
          Exercise Manager
        </h1>
      </div>
      <div className="grow grid grid-cols-[repeat(auto-fit,minmax(50px,1fr))] place-content-start items-start gap-4">
        <Exercises />
        <ExerciseCategories />
        <NewExercise />
      </div>

      {/* Action bar */}
      <div className="w-full border-t-2 border-t-theme flex justify-end gap-4">
        <button className="flex gap-2 rounded-lg py-1 px-4 bg-slate-800 mt-8">
          <MdOutlineAdd className="text-2xl" />
          Add New Exercise Category
        </button>
        <button className="flex gap-2 rounded-lg py-1 px-4 bg-slate-800 mt-8">
          <MdOutlineAdd className="text-2xl" />
          Add New Exercise
        </button>
      </div>
    </div>
  );
}
