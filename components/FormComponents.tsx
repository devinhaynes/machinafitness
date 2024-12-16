import { HTMLInputTypeAttribute } from "react";
import { MdCheckCircleOutline } from "react-icons/md";

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

type FormSelectProps = React.ComponentProps<"input"> & {
  label: string;
  options: {
    display_option: string; // What is displayed in the UI
    value_option: number; // What is sent to the server
    checked: boolean;
  }[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const FormSelect = (props: FormSelectProps) => {
  const { disabled, label, options, onChange, name } = props;
  return (
    <div
      key={name}
      className={`label flex flex-col gap-1 ${disabled && "text-gray-600"}`}
    >
      <span>{label}</span>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative flex-wrap">
        {options.map(({ display_option, value_option }, i) => (
          <FormCheckbox
            key={value_option + "_" + i}
            label={display_option}
            name={name + "_" + value_option.toString()}
            disabled={disabled}
            checkboxPosition="left"
            onChange={onChange}
            checked={options[i].checked}
          />
        ))}
      </div>
    </div>
  );
};

type FormCheckboxProps = {
  label: string;
  name: string;
  disabled?: boolean;
  ref?: React.RefObject<HTMLInputElement>;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checkboxPosition?: "left" | "right";
};

export const FormCheckbox = ({
  label,
  name,
  disabled = false,
  ref,
  checked = false,
  onChange = () => {},
  checkboxPosition = "right",
}: FormCheckboxProps) => {
  return (
    <label
      className={`flex items-center gap-1 relative w-full cursor-pointer rounded-xl px-1 hover:bg-black/80 ${
        checkboxPosition === "left"
          ? "flex-row-reverse justify-end"
          : "justify-between"
      }`}
    >
      <span>{label}</span>
      <input
        className="input appearance-none rounded-full aspect-square cursor-pointer scale-75 peer"
        type="checkbox"
        name={name}
        disabled={disabled}
        ref={ref}
        checked={checked}
        onChange={onChange}
      />
      <MdCheckCircleOutline
        className={`opacity-0 transition-all text-[34px] text-theme bg-background rounded-full peer-checked:!opacity-100 absolute pointer-events-none ${
          checkboxPosition === "left" ? "left-1" : "right-1"
        }`}
      />
    </label>
  );
};
