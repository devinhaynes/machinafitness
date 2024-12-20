import { HTMLInputTypeAttribute } from "react";

type FormLabelProps = {
  name: string;
  label: string;
  type: HTMLInputTypeAttribute;
  required?: boolean;
  value?: string;
  disabled?: boolean;
  onChange?: (e: any) => void;
};

export const ClientFormLabel = ({
  name,
  label,
  type,
  required = false,
  value = "",
  disabled = false,
  onChange = () => {},
}: FormLabelProps) => (
  <label className={`label flex flex-col gap-1 ${disabled && "text-gray-600"}`}>
    <span>{label}</span>
    <input
      className="input disabled:!border-none disabled:bg-gray-600"
      type={type}
      required={required}
      value={value}
      disabled={disabled}
      onChange={onChange}
      name={name}
    />
  </label>
);
