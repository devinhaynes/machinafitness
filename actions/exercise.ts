"use server";

import { createClient } from "@/utils/supabase/server";
import { ExerciseSchema } from "@/schemas/Exercise";

export async function createExercise(formData: FormData) {
  const exercise = Object.fromEntries(formData.entries());
  console.log(exercise);
  const validatedExercise = ExerciseSchema.safeParse(exercise);

  if (!validatedExercise.success) {
    console.log(validatedExercise.error.errors);
  }

  const formattedExercise = formatExerciseFormData(exercise);
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("Exercise")
    .insert([formattedExercise]);
  if (data) {
    console.log(data);
  }

  if (error) {
    console.log(error);
  }
}

function formatExerciseFormData(exerciseData: {
  [k: string]: FormDataEntryValue;
}) {
  const { exercise_name, requires_equipment, ...rest } = exerciseData;
  const formattedExerciseData = {
    exercise_name: exercise_name as string,
    requires_equipment: requires_equipment === "on",
  };

  // Grabs equipment ids
  const equipment: string[] = Object.entries(rest).reduce<string[]>(
    (acc, [key, value]) => {
      if (key.startsWith("equipment_") && value === "on") {
        acc.push(key.replace("equipment_", ""));
      }
      return acc;
    },
    []
  );

  const categories: string[] = Object.entries(rest).reduce<string[]>(
    (acc, [key, value]) => {
      if (key.startsWith("category_") && value === "on") {
        acc.push(key.replace("category_", ""));
      }
      return acc;
    },
    []
  );

  return { ...formattedExerciseData, equipment, categories };
}
