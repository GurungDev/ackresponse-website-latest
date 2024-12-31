import { Fragment, useState } from "react";

import { Listbox as HUIListbox, Transition } from "@headlessui/react";

import { BsCaretRight } from "react-icons/bs";

interface IListboxProps {
  data: {
    text: string;
    value: string;
  }[];
}

export default function Listbox({ data }: IListboxProps) {
  const [selected, setSelected] = useState(data[0]);

  return (
    <HUIListbox value={selected} onChange={setSelected}>
      <div className="relative mt-1">
        <HUIListbox.Button className="relative w-full cursor-default rounded-md bg-zinc-200 py-2 pl-3 pr-10 text-left  focus:outline-none focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 paragraph">
          <span className="block truncate">{selected.text}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <BsCaretRight className="text-[1.2rem]" />
          </span>
        </HUIListbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <HUIListbox.Options className="absolute z-[5] mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {data.map((item, id) => (
              <HUIListbox.Option
                key={id}
                className={({ active }) =>
                  `relative   bg-white cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? "bg-red-200 text-text" : "text-gray-900"
                  }`
                }
                value={item}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {item.text}
                    </span>
                  </>
                )}
              </HUIListbox.Option>
            ))}
          </HUIListbox.Options>
        </Transition>
      </div>
    </HUIListbox>
  );
}
