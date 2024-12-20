import { getExercises } from "@/app/api/exercises/route";
import { MdOutlineSearch } from "react-icons/md";

export const Exercises = async () => {
  const { data: exerciseData, error } = await getExercises();
  const Exercise = exerciseData;

  if (error) {
    console.log(error);
    return <div>{error}</div>;
  }

  return (
    <div className="card relative overflow-hidden">
      <p className="absolute top-0 left-0 px-4 bg-theme text-background rounded-br-xl">
        Exercises
      </p>
      <div className="input flex gap-2 justify-between items-center mt-8">
        <input
          className="bg-background pr-4 py-1 grow"
          type="text"
          placeholder="search"
        />
        <MdOutlineSearch className="text-2xl text-slate-700" />
      </div>

      {Exercise && Exercise.length > 0 ? (
        <ul>
          {Exercise.map((exercise) => (
            <li key={exercise.id}>{exercise.exercise_name}</li>
          ))}
        </ul>
      ) : (
        <p>No data</p>
      )}
    </div>
  );
};
