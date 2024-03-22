'use client'
import { useState } from 'react'
import { PlusSmallIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
const FAQ = ({
  faq
}: {
  faq: {
    question: string
    answer: string
  }
}) => {
  const [open, setOpen] = useState(false)
  return (
    <div key={faq.question} className="pt-6 first:pt-0">
      <>
        <div>
          <button
            onClick={() => setOpen(!open)}
            className="flex w-full items-start justify-between text-left"
          >
            <h5 className="font-semibold text-gray-800">{faq.question}</h5>
            <motion.span
              animate={{
                rotate: open ? 45 : 0
              }}
              className="ml-6 flex items-center"
            >
              <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
            </motion.span>
          </button>
        </div>

        <motion.div
          animate={{
            height: open ? 'auto' : 0,
            opacity: open ? 1 : 0,
            marginTop: open ? '1rem' : 0,
            pointerEvents: open ? 'auto' : 'none'
          }}
          className="mt-2 pr-12"
        >
          <p className="text-gray-600">{faq.answer}</p>
        </motion.div>
      </>
    </div>
  )
}

export default FAQ
