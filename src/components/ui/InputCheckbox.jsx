import { Check } from "lucide-react";

export default function InputCheckBox({ checked, onChange, label, name }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer select-none">
      {/* Hidden native checkbox */}
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="hidden"
        name={name}
      />
      <span
        className={`
          flex items-center justify-center w-5 h-5
          border-2 border-gray-400 rounded-md
          transition-all duration-300
          ${checked ? "bg-primary border-primary" : "bg-transparent"}
        `}
      >
        {checked && <Check className="w-4 h-4 text-white" strokeWidth={3} />}
      </span>
      {/* Label text */}
      <span className="text-white">{label}</span>
    </label>
  );
}
