"use client";
import { Dispatch, SetStateAction, useState } from "react";

import { UseFormRegister } from "react-hook-form";
import { IconType } from "react-icons/lib";

import { Tooltip } from "react-tooltip";

import { cn } from "@/lib/utils";

import { BsEye, BsEyeSlash } from "react-icons/bs";

interface IInputProps {
  id: string;
  value?: string;
  label?: string;
  type: "text" | "email" | "password" | "number" | "search";
  placeholder: string;

  register?: UseFormRegister<any>;
  disabled?: boolean;
  className?: string;
  error?: string;
  rows?: string;
  icon?: IconType;
  onChange?: Dispatch<SetStateAction<any | undefined>>;
  required?: boolean; // Added required property
  enabled?: boolean; // Added enabled property
}

export function InputWrapper({
  id,
  label,
  children,
  error,
}: Pick<IInputProps, "label" | "id" | "error"> & {
  children: React.ReactNode;
}) {
  return (
    <fieldset className="w-full space-y-2">
      {(label || error) && (
        <div className="flex items-center justify-between">
          <label htmlFor={id}>{label}</label>
          <span className="text-red-500">{error}</span>
        </div>
      )}
      <div className="relative flex gap-4">{children}</div>
    </fieldset>
  );
}

export default function Input({
  id,
  label,
  placeholder,
  type,
  className,
  disabled,
  register,
  error,
  icon,
  value,
  onChange,
  required, // Added required
  enabled = true, // Added enabled with a default value of true
}: IInputProps) {
  const [show, setShow] = useState(false);

  return (
    <InputWrapper id={id} label={label} error={label && error}>
      <input
        type={
          type === "password" && show
            ? "text"
            : type === "password"
            ? "password"
            : type
        }
        id={id}
        value={value}
        placeholder={placeholder}
        className={cn(
          "px-3 py-9 rounded-2xl text-[.9rem]  border-[2px] h-14 border-tertiary w-full font-medium text-black placeholder:text-black/60",
          `tooltip-anchor_${id}`,
          error && "border-red-500",
          className
        )}
        disabled={disabled || !enabled} // Apply disabled if enabled is false or disabled is true
        required={required} // Apply required attribute
        {...(register && {
          ...register(id),
        })}
        {...(!register &&
          onChange && {
            onChange: (e) => onChange(e.target.value),
          })}
      />
      {icon &&
        icon({
          className:
            "absolute right-4 top-1/2 transform -translate-y-1/2 text-xl text-neutral-400",
        })}
      {type === "password" && (
        <button
          type="button"
          className="absolute right-0 top-0 bottom-0 px-3 py-3"
          onClick={() => setShow(!show)}
        >
          {show ? <BsEyeSlash /> : <BsEye />}
        </button>
      )}
      {!label && error && (
        <Tooltip
          anchorSelect={`.tooltip-anchor_${id}`}
          place="top"
          content={error}
        />
      )}
    </InputWrapper>
  );
}
