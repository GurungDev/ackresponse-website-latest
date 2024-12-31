"use client";

import { Switch as HUISwitch } from "@headlessui/react";
import { Control, Controller } from "react-hook-form";

interface ISwitchProps {
  name: string;
  state: boolean;
  control: Control<any>;
}

export default function Switch({ name, control, state }: ISwitchProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <HUISwitch
          checked={state}
          onChange={() => {
            field.onChange(!state);
          }}
          className={`${state ? "bg-accent" : "bg-text"}
                relative inline-flex h-[18px] w-[34px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span className="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            className={`${state ? "translate-x-4" : "translate-x-0"}
                  pointer-events-none inline-block h-[14px] w-[14px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
          />
        </HUISwitch>
      )}
    />
  );
}
