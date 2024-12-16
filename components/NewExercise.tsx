import { getEquipment, getExerciseCategories } from "@/app/api/exercises/route";
import { NewExerciseForm } from "./NexExerciseForm";

export const NewExercise = async () => {
  const { data: ExerciseCategories } = await getExerciseCategories();
  const { data: Equipment } = await getEquipment();

  const categoryOptions = ExerciseCategories
    ? ExerciseCategories.map(({ id, category_name }) => ({
        display_option: category_name,
        value_option: id,
      }))
    : [];

  const equipmentOptions = Equipment
    ? Equipment.map(({ id, equipment_name }) => ({
        display_option: equipment_name,
        value_option: id,
      }))
    : [];

  return (
    <div className="card relative overflow-hidden">
      <p className="absolute top-0 left-0 px-4 bg-theme text-background rounded-br-xl">
        New Exercise
      </p>
      <NewExerciseForm
        equipmentOptions={equipmentOptions}
        categoryOptions={categoryOptions}
      />
    </div>
  );
};
