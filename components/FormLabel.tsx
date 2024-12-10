import { HTMLInputTypeAttribute } from "react";

type FormLabelProps = {
  name: string;
  label: string;
  type: HTMLInputTypeAttribute;
  required?: boolean;
  disabled?: boolean;
};

export const FormLabel = ({
  name,
  label,
  type,
  required = false,
  disabled = false,
}: FormLabelProps) => (
  <label className={`label flex flex-col gap-1 ${disabled && "text-gray-600"}`}>
    <span>{label}</span>
    <input
      className="input disabled:!border-none disabled:bg-gray-600"
      type={type}
      required={required}
      disabled={disabled}
      name={name}
    />
  </label>
);
