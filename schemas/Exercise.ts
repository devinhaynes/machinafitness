import { z } from "zod";

export const ExerciseSchema = z
  .object({
    exercise_name: z.string().trim().nonempty("Exercise name is required"),
    requires_equipment: z.string().optional(),
    // Assuming dynamic keys for equipment and categories
    // Use a catch-all for additional properties
  })
  .catchall(z.union([z.string(), z.boolean()]))
  .refine(
    (data) => {
      if (data.requires_equipment === "on") {
        const equipment_options = Object.entries(data).filter(
          ([key, value]) => key.startsWith("equipment_") && value === "on"
        );
        return equipment_options.length > 0;
      }
      return true;
    },
    {
      message:
        "At least one equipment must be selected if equipment is required",
      path: ["requires_equipment"],
    }
  );
