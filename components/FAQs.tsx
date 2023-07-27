import Chip from './Base/Chip'

const questions = [
  {
    question: 'What features are included?',
    answer:
      'Etiam egestas fringilla enim, id convallis lectus laoreet at. Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque.',
  },
  {
    question: 'What features are included?',
    answer:
      'Etiam egestas fringilla enim, id convallis lectus laoreet at. Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque.',
  },
  {
    question: 'What features are included?',
    answer:
      'Etiam egestas fringilla enim, id convallis lectus laoreet at. Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque.',
  },
  {
    question: 'What features are included?',
    answer:
      'Etiam egestas fringilla enim, id convallis lectus laoreet at. Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque.',
  },
  {
    question: 'What features are included?',
    answer:
      'Etiam egestas fringilla enim, id convallis lectus laoreet at. Fusce purus nisi, gravida sed consectetur ut, interdum quis nisi. Quisque egestas nisl id lectus facilisis scelerisque.',
  },
]

export default function FAQs() {
  return (
    <>
      {/* FAQ Section: To The Side */}
      <div className='relative overflow-hidden bg-gradient-to-t from-purple-950/40 via-slate-950 to-slate-950 dark:text-gray-100 after:w-full after:absolute after:bottom-0 after:h-px after:bg-radial-border'>
        <div className='lg:flex space-y-16 lg:justify-between lg:space-x-8 lg:space-y-0 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32'>
          {/* Heading */}
          <div className='text-center lg:text-left'>
            <Chip
              variant='secondary'
              title='We Answer'
              className='mb-4'
              group
            />
            <h2 className='text-4xl lg:text-5xl font-black text-black mb-4 dark:text-white'>
              FAQs
            </h2>
            <h3 className='text-xl leading-relaxed font-medium text-gray-700 dark:text-gray-300'>
              Things we often get asked.
            </h3>
          </div>
          {/* END Heading */}

          {/* FAQ */}
          <div className='space-y-8 lg:w-3/5 lg:flex-none'>
            {questions.map((question, index) => (
              <div key={index}>
                <h4 className='font-semibold mb-2'>{question.question}</h4>
                <p className='leading-relaxed text-gray-600 dark:text-gray-400'>
                  {question.answer}
                </p>
              </div>
            ))}
          </div>
          {/* END FAQ */}
        </div>
      </div>
      {/* END FAQ Section: To The Side */}
    </>
  )
}
