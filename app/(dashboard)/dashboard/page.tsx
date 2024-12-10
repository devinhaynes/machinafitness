import { Exercises } from "@/components/Exercises";
import { MdOutlineRemoveRedEye } from "react-icons/md";

export default function Dashboard() {
  return (
    // <div className="flex h-screen w-screen">
    //   <Sidebar />
    <div className="w-full m-4 card">
      <div className="pb-4 border-b-theme border-b-2">
        <h1 className="text-4xl px-8 bg-theme text-background rounded-2xl w-fit">
          Dashboard
        </h1>
      </div>

      <div className="flex flex-wrap gap-4">
        <Exercises />
        <div className="card relative">
          <div className="absolute left-0 top-0 px-4 pt-2 text-sm pb-1 rounded-br-2xl rounded-tl-xl bg-theme text-background border-b-[1px] border-b-theme">
            Latest Workout
          </div>
          <div className="flex flex-col justify-between h-full mt-4">
            <div className="flex gap-4">
              <span className="col-span-1">Duration:</span>
              <span className="col-span-1">1h 45m</span>
            </div>

            <div className="flex gap-4">
              <span className="col-span-1">Total Sets:</span>
              <span className="col-span-1">8</span>
            </div>
            <div className="flex gap-4">
              <span className="col-span-1">Total Reps:</span>
              <span className="col-span-1">800</span>
            </div>
            <button className="flex gap-2 rounded-lg py-1 px-4 ml-auto bg-slate-800 mt-8">
              <MdOutlineRemoveRedEye className="text-2xl" />
              View Workout
            </button>
          </div>
        </div>
        <div className="card relative">
          <div className="absolute left-0 top-0 px-4 pt-2 text-sm pb-1 rounded-br-2xl rounded-tl-xl bg-theme text-background border-b-[1px] border-b-theme">
            Next Workout
          </div>
          <div className="flex flex-col justify-between h-full mt-4">
            <div className="flex gap-4">
              <span className="col-span-1">Duration:</span>
              <span className="col-span-1">1h 45m</span>
            </div>

            <div className="flex gap-4">
              <span className="col-span-1">Total Sets:</span>
              <span className="col-span-1">8</span>
            </div>
            <div className="flex gap-4">
              <span className="col-span-1">Total Reps:</span>
              <span className="col-span-1">800</span>
            </div>
            <button className="flex gap-2 rounded-lg py-1 px-4 ml-auto bg-slate-800 mt-8">
              <MdOutlineRemoveRedEye className="text-2xl" />
              View Workout
            </button>
          </div>
        </div>
        <div className="card h-fit">stats</div>
        <div className="card h-fit">temp</div>
        <div className="card h-fit">tbd</div>
      </div>
    </div>
    // </div>
  );
}
