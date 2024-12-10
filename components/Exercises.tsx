"use server";

import { getExercises, getExerciseCategories } from "@/app/api/exercises/route";

export const Exercises = async () => {
  const { data: exerciseData, error } = await getExercises();
  const Exercise = exerciseData;

  const { data: categoryData, error: categoryError } =
    await getExerciseCategories();

  const ExerciseCategory = categoryData;

  if (error) {
    console.log(error);
    return <div>{error}</div>;
  }

  if (categoryError) {
    console.log(categoryError);
    return <div>{categoryError}</div>;
  }

  return (
    <div className="card">
      <h2>Exercises</h2>
      {Exercise && Exercise.length > 0 ? (
        <ul>
          {Exercise.map((exercise) => (
            <li key={exercise.id}>{exercise.display_name}</li>
          ))}
        </ul>
      ) : (
        <p>No data</p>
      )}
      <h2>Categories</h2>
      {ExerciseCategory && ExerciseCategory.length > 0 ? (
        <ul>
          {ExerciseCategory.map((exerciseCategory) => (
            <li key={exerciseCategory.id}>{exerciseCategory.name}</li>
          ))}
        </ul>
      ) : (
        <p>No data</p>
      )}
    </div>
  );
};
