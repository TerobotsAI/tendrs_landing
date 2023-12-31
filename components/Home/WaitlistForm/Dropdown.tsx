import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Option } from './FormModal'

interface FormDropdownProps {
  title: string
  options: Option[]
  selected: Option
  setSelected: (value: Option) => void
}

export default function FormDropdown({
  title,
  options,
  selected,
  setSelected,
}: FormDropdownProps) {

  return (
    <>
      <Listbox as={Fragment} value={selected} onChange={setSelected}>
        <div className='relative mt-1 flex flex-col gap-1.5 w-full'>
          <Listbox.Label className='font-medium text-sm'>{title}</Listbox.Label>
          <Listbox.Button className='relative w-full cursor-default px-3 py-4 pr-10 text-left sm:text-sm  block border leading-6 rounded-lg focus:ring focus:ring-purple-500 focus:ring-opacity-50 bg-[#17063B] border-purple-500 focus:border-purple-500 placeholder-slate-400'>
            <span className='block truncate'>{selected.title}</span>
            <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
              <ChevronUpDownIcon
                className='h-5 w-5 text-gray-400'
                aria-hidden='true'
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-slate-950 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10'>
              {options.map((option, idx) => (
                <Listbox.Option
                  key={idx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 text-white ${active && 'bg-purple-800/70'
                    }`
                  }
                  value={option}>
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                          }`}>
                        {option.title}
                      </span>
                      {selected ? (
                        <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-purple-400'>
                          <CheckIcon className='h-5 w-5' aria-hidden='true' />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </>
  )
}
