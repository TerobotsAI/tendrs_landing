import { Fragment, useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../lib/firebase'
import { Dialog, Transition } from '@headlessui/react'
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/solid'
import FormDropdown from './Dropdown'
import Button from '../Base/Button'
import { ClipLoader } from 'react-spinners'
import { atom, useAtom } from 'jotai'

export const WaitlistFormAtom = atom(0)

export interface Option {
  title: string
  value: string
}

const industryOptions: Option[] = [
  {
    title: 'Diverse Business',
    value: 'Diverse Business',
  },
  {
    title: 'Corporation',
    value: 'Corporation',
  },
  {
    title: 'Financial Services',
    value: 'Financial Services',
  },
  {
    title: 'Non-Profit',
    value: 'Non-Profit',
  },
  {
    title: 'Government Agencies, Public Entity',
    value: 'Government Agencies, Public Entity',
  },
  {
    title: 'Other',
    value: 'Other',
  },
]

const businessOptions: Option[] = [
  {
    title: 'Minority-Owned Business',
    value: 'Minority-Owned Business',
  },
  {
    title: 'Saas Company',
    value: 'Saas Company',
  },
  {
    title: 'Digital Marketing Agency',
    value: 'Digital Marketing Agency',
  },
  {
    title: 'Automation',
    value: 'Automation',
  },
  {
    title: 'Financal Services',
    value: 'Financal Services',
  }
]

export default function FormModal() {
  const [waitlistForm, setWaitlistForm] = useAtom(WaitlistFormAtom)
  const [loading, setLoading] = useState(false)
  const [buttonText, setButtonText] = useState('Join the Waitlist!')
  const [industry, setIndustry] = useState<Option>(industryOptions[0])
  const [business, setBusiness] = useState<Option>(businessOptions[0])
  function handleSubmit(e: any) {
    setLoading(true)
    e.preventDefault()
    const formData = new FormData(e.target)
    if (!formData.get('email') || !formData.get('name')) {
      alert('Please fill in all the details')
      setLoading(false)
      return
    }
    const data = Object.fromEntries(formData)
    data.timestamp = new Date().toLocaleString()

    console.log(data)

    addDoc(collection(db, 'customers'), data)
      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id)
        e.target.reset()
      })
      .catch((error) => {
        console.error('Error adding document: ', error)
      })
      .finally(() => {
        setLoading(false)
        setButtonText("We'll send the matches soon to your inbox!")
        setWaitlistForm(2)
        setTimeout(() => {
          setWaitlistForm(0)
        }, 600)
      })

    setTimeout(() => {
      setButtonText('Join the Waitlist!')
    }, 1000)
  }
  return (
    <>
      {/* Modals: With Form */}
      <div>
        {/* Modal Container */}
        <Transition appear show={waitlistForm == 1} as={Fragment}>
          <Dialog
            as='div'
            className='relative z-90 dark'
            onClose={() => {
              setWaitlistForm(0)
            }}>
            {/* Modal Backdrop */}
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-200'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'>
              <div className='fixed inset-0 bg-gray-900 bg-opacity-75 backdrop-blur-sm' />
            </Transition.Child>
            {/* END Modal Backdrop */}

            {/* Modal Dialog */}
            <div className='fixed inset-0 overflow-y-auto p-4 lg:p-8'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-200'
                enterFrom='opacity-0 scale-125'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-100'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-125'>
                <Dialog.Panel className='relative pt-4 w-full max-w-3xl mx-auto flex flex-col rounded-lg shadow-sm text-gray-100 bg-slate-800'>
                  <button
                    onClick={() => {
                      setWaitlistForm(0)
                    }}
                    type='button'
                    className='absolute m-2 top-0 right-0 inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-transparent text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-transparent dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700'>
                    <XMarkIcon className='w-4 h-4 ' />
                  </button>
                  {/* coded here */}
                  {/* Share this  */}
                  <form
                    onSubmit={handleSubmit}
                    className='grid grid-cols-1 md:grid-cols-2 items-end gap-6 p-4'>
                    <div className='space-y-1 text-left w-full'>
                      <label htmlFor='email' className='font-medium text-sm'>
                        Your Name
                      </label>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        placeholder='John Doe'
                        className='w-full block border px-3 py-4 leading-6 rounded-lg focus:ring focus:ring-purple-500 focus:ring-opacity-50 bg-[#17063B] border-purple-500 focus:border-purple-500 placeholder-slate-400'
                      />
                    </div>
                    <div className='space-y-1 text-left w-full'>
                      <label htmlFor='email' className='font-medium text-sm'>
                        Your Email
                      </label>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='email@company.com'
                        className='w-full block border placeholder-slate-500 px-3 py-4 leading-6 rounded-lg border-gray-200 focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50 dark:bg-[#17063B] dark:border-purple-500 dark:focus:border-purple-500 dark:placeholder-slate-400'
                      />
                    </div>
                    <div className='space-y-1 text-left w-full'>
                      <label htmlFor='email' className='font-medium text-sm'>
                        No. of Employees
                      </label>
                      <input
                        type='number'
                        id='employee'
                        name='employee'
                        placeholder='XX'
                        min={1}
                        max={1000000}
                        className='w-full block border placeholder-slate-500 px-3 py-4 leading-6 rounded-lg border-gray-200 focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50 dark:bg-[#17063B] dark:border-purple-500 dark:focus:border-purple-500 dark:placeholder-slate-400'
                      />
                    </div>
                    <div className='space-y-1 text-left w-full'>
                      <label htmlFor='email' className='font-medium text-sm'>
                        Phone Number
                      </label>
                      <input
                        type='number'
                        id='phone'
                        name='phone'
                        placeholder='XXX-XXX-XXXX'
                        min={1}
                        className='w-full block border placeholder-slate-500 px-3 py-4 leading-6 rounded-lg border-gray-200 focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50 dark:bg-[#17063B] dark:border-purple-500 dark:focus:border-purple-500 dark:placeholder-slate-400'
                      />
                    </div>
                    <FormDropdown
                      title='Type of Business'
                      options={businessOptions}
                      setSelected={setBusiness}
                      selected={business}
                    />
                    <FormDropdown
                      title='Select your industry'
                      options={industryOptions}
                      setSelected={setIndustry}
                      selected={industry}
                    />
                    <div className='space-y-1 text-left w-full md:col-span-2'>
                      <label htmlFor='email' className='font-medium text-sm'>
                        What services/product you offer?
                      </label>
                      <textarea
                        id='providing'
                        name='provides'
                        rows={3}
                        placeholder='We offer digital marketing services for SaaS based companies, automation services, VC for startups, operations management software for alerts and issue management etc...  #finance #marketing #saas #automation'
                        className='w-full block border placeholder-slate-500 p-3 leading-6 rounded-lg border-gray-200 focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50 dark:bg-[#17063B] dark:border-purple-500 dark:focus:border-purple-500 dark:placeholder-slate-400'
                      />
                    </div>
                    <div className='space-y-1 text-left w-full md:col-span-2'>
                      <label htmlFor='email' className='font-medium text-sm'>
                        What are your business requirements?
                      </label>
                      <textarea
                        id='seeking'
                        name='seeks'
                        rows={3}
                        placeholder='Looking for SaaS Companies, Digital Marketing Agency, Automation, Financal Services, VC Firms etc... 
                        #finance #marketing #saas #automation
                        '
                        className='w-full block border placeholder-slate-500 p-3 leading-6 rounded-lg border-gray-200 focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50 dark:bg-[#17063B] dark:border-purple-500 dark:focus:border-purple-500 dark:placeholder-slate-400'
                      />
                    </div>

                    <Button
                      className='w-full mt-5 bg-purple-950 md:col-span-2'
                      size='lg'
                      variant='primary'
                      title={buttonText}
                      icon={
                        buttonText === 'Joined!' ? (
                          <CheckCircleIcon className='w-5 h-5 text-white' />
                        ) : (
                          <ClipLoader
                            color='white'
                            loading={loading}
                            size={20}
                          />
                        )
                      }
                      type='submit'
                    />
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
  )
}
