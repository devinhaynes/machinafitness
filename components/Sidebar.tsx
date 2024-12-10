import {
  MdOutlineAccountCircle,
  MdSettings,
  MdOutlineAddCircleOutline,
  MdOutlinePlayCircle,
  MdOutlineAnalytics,
  MdOutlineBallot,
} from "react-icons/md";

export const Sidebar = () => {
  return (
    <div className="relative card my-12 ml-4 !p-4 before:w-4 before:absolute before:left-[calc(100%+2px)] before:top-8 before:h-[1px] before:bg-theme">
      <div className="flex flex-col justify-between h-full">
        <ul className="flex flex-col gap-2">
          <li className="flex gap-2 p-2 hover:bg-gray-800 rounded-lg">
            <MdOutlinePlayCircle className="text-2xl " />
            <span className="text-sm">Start Workout</span>
          </li>
          <li className="flex gap-2 p-2 hover:bg-gray-800 rounded-lg">
            <MdOutlineAddCircleOutline className="text-2xl " />
            <span className="text-sm">Add Workout</span>
          </li>

          <li className="flex gap-2 p-2 hover:bg-gray-800 rounded-lg">
            <MdOutlineBallot className="text-2xl " />
            <span className="text-sm">Exercise Manager</span>
          </li>
          <li className="flex gap-2 p-2 hover:bg-gray-800 rounded-lg">
            <MdOutlineAnalytics className="text-2xl " />
            <span className="text-sm">Stats</span>
          </li>
        </ul>
        <ul className="flex flex-wrap gap-2 justify-center border-t-2 border-t-theme pt-4">
          <li>
            <MdOutlineAccountCircle className="text-4xl " />
          </li>
          <li>
            <MdSettings className="text-4xl " />
          </li>
        </ul>
      </div>
    </div>
  );
};
