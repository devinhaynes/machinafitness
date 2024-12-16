"use client";
import { createExercise } from "@/actions/exercise";
import { useState } from "react";
import { FormCheckbox, FormLabel, FormSelect } from "./FormComponents";

type Props = {
  equipmentOptions: {
    display_option: string;
    value_option: number;
  }[];
  categoryOptions: {
    display_option: string;
    value_option: number;
  }[];
};

type CheckboxOption = {
  display_option: string;
  value_option: number;
  checked: boolean;
};

export const NewExerciseForm = ({
  equipmentOptions,
  categoryOptions,
}: Props) => {
  const [equipmentChecked, setEquipmentChecked] = useState(false);
  const [equipmentOptionsChecked, setEquipmentOptionsChecked] = useState<
    CheckboxOption[]
  >(equipmentOptions.map((option) => ({ ...option, checked: false })));
  const [categoryOptionsChecked, setCategoryOptionsChecked] = useState<
    CheckboxOption[]
  >(categoryOptions.map((option) => ({ ...option, checked: false })));

  function handleRequiresEquimentChange() {
    setEquipmentChecked(!equipmentChecked);
    setEquipmentOptionsChecked(
      equipmentOptionsChecked.map((option) => ({ ...option, checked: false }))
    ); // Reset all equipment options
  }

  return (
    <form action={createExercise} className="mt-8 flex flex-col gap-4">
      <FormLabel
        label="Exercise Name"
        name="exercise_name"
        type="text"
        required
      />
      <FormCheckbox
        label="Requires Equipment"
        name="requires_equipment"
        checked={equipmentChecked}
        onChange={handleRequiresEquimentChange}
      />
      {equipmentChecked && (
        <div className="flex flex-wrap">
          <FormSelect
            label="Equipment"
            name="equipment"
            required
            options={equipmentOptionsChecked}
            onChange={(e) => {
              const { name, checked } = e.target;
              setEquipmentOptionsChecked(
                equipmentOptionsChecked.map((option) => ({
                  ...option,
                  checked:
                    `equipment_${option.value_option.toString()}` === name
                      ? checked
                      : option.checked,
                }))
              );
            }}
          />
        </div>
      )}

      <FormSelect
        label="Category"
        name="category"
        options={categoryOptionsChecked}
        onChange={(e) => {
          const { name, checked } = e.target;
          console.log(`${name} is checked: ${checked}`);
          setCategoryOptionsChecked(
            categoryOptionsChecked.map((option) => ({
              ...option,
              checked:
                `category_${option.value_option.toString()}` === name
                  ? checked
                  : option.checked,
            }))
          );
        }}
      />
      <button
        className="flex gap-2 rounded-lg py-1 px-4 bg-slate-800 mt-8 w-fit ml-auto"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};
