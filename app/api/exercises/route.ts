import { createClient } from "@/utils/supabase/server";

type TExercise = {
  id: number;
  created_at: string;
  exercise_name: string;
  display_name: string;
  categories: number[];
  requires_equipment: boolean;
  equipment: number[] | null;
};

type TExerciseCategory = {
  id: number;
  created_at: string;
  name: string;
};

export async function getExercises() {
  const supabase = await createClient();

  const { data: Exercise, error } = await supabase.from("Exercise").select("*");

  if (error) {
    const { message } = error;
    return { error: message };
  }

  return { data: Exercise as TExercise[] };
}

export async function getExerciseCategories() {
  const supabase = await createClient();

  const { data: ExerciseCategory, error } = await supabase
    .from("ExerciseCategory")
    .select("*");

  if (error) {
    const { message } = error;
    return { error: message };
  }

  return { data: ExerciseCategory as TExerciseCategory[] };
}
