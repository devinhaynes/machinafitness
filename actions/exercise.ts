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
  // const supabase = await createClient();

  // const { data, error } = await supabase.from("Exercise").insert([exercise]);

  // if (error) {
  //   console.log(error);
  //   const { message } = error;
  // }
}
