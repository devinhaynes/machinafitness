import { createClient } from "@/utils/supabase/server";

type TExercise = {
  id: number;
  created_at: string;
  exercise_name: string;
  categories: number[];
  requires_equipment: boolean;
  equipment: number[] | null;
};

type TExerciseCategory = {
  id: number;
  created_at: string;
  category_name: string;
};

type TEquipment = {
  id: number;
  created_at: string;
  equipment_name: string;
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
    console.log(error);
    const { message } = error;
    return { error: message };
  }

  return { data: ExerciseCategory as TExerciseCategory[] };
}

export async function getEquipment() {
  const supabase = await createClient();

  const { data: Equipment, error } = await supabase
    .from("Equipment")
    .select("*");

  if (error) {
    console.log(error);
    const { message } = error;
    return { error: message };
  }

  return { data: Equipment as TEquipment[] };
}
