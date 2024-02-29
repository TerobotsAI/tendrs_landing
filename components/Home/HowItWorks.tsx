import Image from 'next/image'
import Chip from '../Base/Chip'

const data = [
  {
    id: 1,
    image: '/process/sign-up.png',
    number: (
      <svg
        className="fill-gray-700 h-10 w-10 mb-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M14 1.5V22H12V3.704L7.5 4.91V2.839L12.5 1.5H14Z"></path>
      </svg>
    ),
    title: 'Set up an account',
    description:
      "Create your account and get started with our platform. It's easy and quick to set up, so you can begin connecting with potential clients and vendors right away."
  },
  {
    id: 2,
    image: '/process/requirements-offerings.png',
    number: (
      <svg
        className="fill-gray-700 h-10 w-10 mb-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M16.0002 7.5C16.0002 5.29086 14.2094 3.5 12.0002 3.5C9.7911 3.5 8.00024 5.29086 8.00024 7.5H6.00024C6.00024 4.18629 8.68653 1.5 12.0002 1.5C15.314 1.5 18.0002 4.18629 18.0002 7.5C18.0002 8.93092 17.4993 10.2448 16.6633 11.276L9.344 19.9991L18.0002 20V22H6.00024L6 20.8731L15.0642 10.071C15.6485 9.37595 16.0002 8.47905 16.0002 7.5Z"></path>
      </svg>
    ),
    title: 'Enter your requirements/offerings',
    description:
      'Tell us what you are looking for or what you have to offer. Input your specific requirements or offerings, and our AI model will find the best matches for you.'
  },
  {
    id: 3,
    image: '/process/matches.png',
    number: (
      <svg
        className="fill-gray-700 h-10 w-10 mb-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M18.0005 2V3.36217L12.8092 9.54981C16.0174 9.94792 18.5005 12.684 18.5005 16C18.5005 19.5899 15.5904 22.5 12.0005 22.5C8.95483 22.5 6.39837 20.4052 5.69336 17.5778L7.634 17.0922C8.12205 19.0497 9.89193 20.5 12.0005 20.5C14.4858 20.5 16.5005 18.4853 16.5005 16C16.5005 13.5147 14.4858 11.5 12.0005 11.5C11.28 11.5 10.599 11.6694 9.99514 11.9705L9.76741 12.0923L9.07754 10.8852L14.8555 3.99917L6.50054 4V2H18.0005Z"></path>
      </svg>
    ),
    title: '🎉 Auto-Match & Fix Meetings with AI!',
    description:
      'AI handles matching & auto-schedules meetings. Connect effortlessly with clients & vendors.'
  }
]

const HowItWorks = () => {
  return (
    <>
      <div id="how-it-works" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Chip title="Features" />
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4.5xl">
              How it works?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our platform is designed to make it easy for you to connect with
              potential clients and vendors.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="flex flex-col items-center lg:items-start lg:flex-row justify-around w-full gap-20 md:gap-4">
              {data.map((item) => (
                <div
                  key={item.id}
                  className="max-w-xs flex-1 text-center flex flex-col items-center"
                >
                  {/* 2 */}
                  <div className="flex">
                    <svg
                      className="fill-accent-300 text-gray-900 h-10 w-10 mb-10"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.78428 14L8.2047 10H4V8H8.41491L8.94043 3H10.9514L10.4259 8H14.4149L14.9404 3H16.9514L16.4259 8H20V10H16.2157L15.7953 14H20V16H15.5851L15.0596 21H13.0486L13.5741 16H9.58509L9.05957 21H7.04855L7.57407 16H4V14H7.78428ZM9.7953 14H13.7843L14.2047 10H10.2157L9.7953 14Z"></path>
                    </svg>
                    {item.number}
                  </div>
                  <Image
                    src={item.image}
                    width={300}
                    height={400}
                    alt={item.title}
                    // className={
                    //   item.id == 1 ? 'p-4 pb-8' : 'p-0'
                    // }
                    className="h-96 object-contain"
                  ></Image>
                  <h3 className="mb-4 text-xl font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 tracking-tight">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HowItWorks
