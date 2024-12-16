import { getExerciseCategories } from "@/app/api/exercises/route";
import { MdOutlineSearch } from "react-icons/md";

export const ExerciseCategories = async () => {
  const { data: ExerciseCategories, error } = await getExerciseCategories();

  if (error) {
    console.log(error);
    return <div>{error}</div>;
  }

  return (
    <div className="card relative overflow-hidden">
      <p className="absolute top-0 left-0 px-4 bg-theme text-background rounded-br-xl">
        Categories
      </p>
      <div className="input flex gap-2 justify-between items-center mt-8">
        <input
          className="bg-background pr-4 py-1 grow"
          type="text"
          placeholder="search"
        />
        <MdOutlineSearch className="text-2xl text-slate-700" />
      </div>

      {ExerciseCategories && ExerciseCategories.length > 0 ? (
        <ul>
          {ExerciseCategories.map((category) => (
            <li key={category.id}>{category.category_name}</li>
          ))}
        </ul>
      ) : (
        <p>No data</p>
      )}
    </div>
  );
};
