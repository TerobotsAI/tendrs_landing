import { CheckCircleIcon, SparklesIcon } from '@heroicons/react/24/solid'
import Button from '../Base/Button'
import Chip from '../Base/Chip'
import { useState } from 'react'
import { collection, addDoc, doc } from 'firebase/firestore'
import { db } from '../../lib/firebase'
import { ClipLoader } from 'react-spinners'
import FormModal from './FormModal'

export default function WaitlistForm() {
  const [loading, setLoading] = useState(false)
  const [buttonText, setButtonText] = useState('Join the Waitlist!')

  const [modalOpen, setModalOpen] = useState(false)

  function handleSubmit(e: any) {
    setLoading(true)
    e.preventDefault()
    const formData = new FormData(e.target)
    if (!formData.get('email') || !formData.get('name')) {
      alert('Please fill in your name and email')
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
        setButtonText('Joined!')
      })

    setTimeout(() => {
      setButtonText('Join the Waitlist!')
    }, 1000)
  }
  return (
    <>
      <FormModal isOpen={modalOpen} setIsOpen={setModalOpen} />
      <div className='dark'>
        <div className='relative overflow-hidden bg-purple-800 dark:text-gray-100 after:w-full after:absolute after:bottom-0 after:h-px after:bg-radial-border'>
          <div className='absolute inset-0'>
            <div className='relative bg-grid w-full h-full after:absolute after:inset-0 after:bg-radial-gradient after:from-purple-900 after:via-slate-950/80 after:to-slate-950 after:mix-blend-multiply'></div>
          </div>
          <div className='relative container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-40 pb-10'>
            <div className='text-center z-100'>
              <Chip
                icon={<SparklesIcon className='w-5 h-5 text-white' />}
                title='New: B2B through AI'
                variant='secondary'
              />

              <h1 className='text-4xl lg:text-5xl leading-normal lg:leading-normal font-black text-black mb-4 dark:text-transparent bg-clip-text bg-gradient-to-t from-slate-300 to-white'>
                The future of your Businesses starts here!{' '}
              </h1>
            </div>
            <div className='flex flex-col text-center max-w-sm mx-auto sm:items-center sm:justify-stretch gap-3 py-10'>
              <Button
                className='w-full mt-5 bg-purple-950'
                size='lg'
                variant='primary'
                title={buttonText}
                type='submit'
                onClick={() => setModalOpen(true)}
                icon={
                  buttonText === 'Joined!' ? (
                    <CheckCircleIcon className='w-5 h-5 text-white' />
                  ) : (
                    <ClipLoader color='white' loading={loading} size={20} />
                  )
                }
              />
              <p className='text-sm md:col-span-2 text-white/70'>
                No Spam, No Data Sharing. Your Privacy is our priority.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
