const HowItWorks = () => {
  return (
    <section id='how-it-works' className='relative py-24 text-white bg-gradient-to-t from-purple-950/40 via-slate-950 to-slate-950 after:w-full after:absolute after:bottom-0 after:h-px after:bg-radial-border overflow-hidden'>
      <div className='container px-4 mx-auto'>
        <div className='max-w-xl text-center mx-auto mb-20'>
          <h2 className='text-4xl lg:text-5xl leading-normal max-w-2xl mx-auto lg:leading-normal font-black text-black mb-4 dark:text-transparent bg-clip-text bg-gradient-to-t from-slate-300 to-white'>
            How it works
          </h2>
          <p className='text-lg font-medium max-w-4xl mx-auto text-white/70'>
            Use and re-use tons of responsive sections too a main create the
            perfect layout. Sections are ready.
          </p>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-around w-full gap-20 md:gap-4'>
          <div className='max-w-xs flex-1 text-center  flex flex-col items-center'>
            {/* first */}
            <div className='flex '>
              <svg
                className='fill-purple-300 opacity-50 text-white h-10 w-10 mb-10'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'>
                <path d='M7.78428 14L8.2047 10H4V8H8.41491L8.94043 3H10.9514L10.4259 8H14.4149L14.9404 3H16.9514L16.4259 8H20V10H16.2157L15.7953 14H20V16H15.5851L15.0596 21H13.0486L13.5741 16H9.58509L9.05957 21H7.04855L7.57407 16H4V14H7.78428ZM9.7953 14H13.7843L14.2047 10H10.2157L9.7953 14Z'></path>
              </svg>
              <svg
                className='fill-white text-white h-10 w-10 mb-10'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'>
                <path d='M14 1.5V22H12V3.704L7.5 4.91V2.839L12.5 1.5H14Z'></path>
              </svg>
            </div>
            <h3 className='mb-4 text-xl font-semibold tracking-tight'>
              Set up an account
            </h3>
            <p className='text-slate-400 tracking-tight'>
              Create your account and get started with our platform. It&apos;s easy
              and quick to set up, so you can begin connecting with potential
              clients and vendors right away.
            </p>
          </div>
          <div className='max-w-xs flex-1 text-center flex flex-col items-center'>
            {/* 2 */}
            <div className='flex'>
              <svg
                className='fill-purple-300 opacity-50 text-white h-10 w-10 mb-10'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'>
                <path d='M7.78428 14L8.2047 10H4V8H8.41491L8.94043 3H10.9514L10.4259 8H14.4149L14.9404 3H16.9514L16.4259 8H20V10H16.2157L15.7953 14H20V16H15.5851L15.0596 21H13.0486L13.5741 16H9.58509L9.05957 21H7.04855L7.57407 16H4V14H7.78428ZM9.7953 14H13.7843L14.2047 10H10.2157L9.7953 14Z'></path>
              </svg>
              <svg
                className='fill-white text-white h-10 w-10 mb-10'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'>
                <path d='M16.0002 7.5C16.0002 5.29086 14.2094 3.5 12.0002 3.5C9.7911 3.5 8.00024 5.29086 8.00024 7.5H6.00024C6.00024 4.18629 8.68653 1.5 12.0002 1.5C15.314 1.5 18.0002 4.18629 18.0002 7.5C18.0002 8.93092 17.4993 10.2448 16.6633 11.276L9.344 19.9991L18.0002 20V22H6.00024L6 20.8731L15.0642 10.071C15.6485 9.37595 16.0002 8.47905 16.0002 7.5Z'></path>
              </svg>
            </div>
            <h3 className='mb-4 text-xl font-semibold tracking-tight'>
              Enter your requirements/offerings
            </h3>
            <p className='text-slate-400 tracking-tight'>
              Tell us what you are looking for or what you have to offer. Input
              your specific requirements or offerings, and our AI model will
              find the best matches for you.
            </p>
          </div>
          <div className='max-w-xs flex-1 text-center  flex flex-col items-center'>
            {/* 3 */}
            <div className='flex'>
              <svg
                className='fill-purple-300 opacity-50 text-white h-10 w-10 mb-10'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'>
                <path d='M7.78428 14L8.2047 10H4V8H8.41491L8.94043 3H10.9514L10.4259 8H14.4149L14.9404 3H16.9514L16.4259 8H20V10H16.2157L15.7953 14H20V16H15.5851L15.0596 21H13.0486L13.5741 16H9.58509L9.05957 21H7.04855L7.57407 16H4V14H7.78428ZM9.7953 14H13.7843L14.2047 10H10.2157L9.7953 14Z'></path>
              </svg>
              <svg
                className='fill-white text-white h-10 w-10 mb-10'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'>
                <path d='M18.0005 2V3.36217L12.8092 9.54981C16.0174 9.94792 18.5005 12.684 18.5005 16C18.5005 19.5899 15.5904 22.5 12.0005 22.5C8.95483 22.5 6.39837 20.4052 5.69336 17.5778L7.634 17.0922C8.12205 19.0497 9.89193 20.5 12.0005 20.5C14.4858 20.5 16.5005 18.4853 16.5005 16C16.5005 13.5147 14.4858 11.5 12.0005 11.5C11.28 11.5 10.599 11.6694 9.99514 11.9705L9.76741 12.0923L9.07754 10.8852L14.8555 3.99917L6.50054 4V2H18.0005Z'></path>
              </svg>
            </div>
            <h3 className='mb-4 text-xl font-semibold tracking-tight'>
              🎉 Auto-Match & Fix Meetings with AI!
            </h3>
            <p className='text-slate-400 tracking-tight'>
              AI handles matching & auto-schedules meetings. Connect
              effortlessly with clients & vendors.
            </p>
          </div>
          {/* <div>
            <div className='max-w-xs text-center  flex flex-col items-center'>
            
              <div className='flex'>
                <svg
                  className='fill-purple-300 opacity-50 text-white h-10 w-10 mb-10'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'>
                  <path d='M7.78428 14L8.2047 10H4V8H8.41491L8.94043 3H10.9514L10.4259 8H14.4149L14.9404 3H16.9514L16.4259 8H20V10H16.2157L15.7953 14H20V16H15.5851L15.0596 21H13.0486L13.5741 16H9.58509L9.05957 21H7.04855L7.57407 16H4V14H7.78428ZM9.7953 14H13.7843L14.2047 10H10.2157L9.7953 14Z'></path>
                </svg>

                <svg
                  className='fill-white text-white h-10 w-10 mb-10'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'>
                  <path d='M16.0001 1.5L16 16H19.0001V18H16L16.0001 22H14.0001L14 18H4V16.898L14.0001 1.5H16.0001ZM14 16V5.171L6.968 16H14Z'></path>
                </svg>
              </div>
              <h3 className='mb-4 text-xl font-semibold tracking-tight'>
                Setup a meet and get connected
              </h3>
              <p className='text-slate-400 tracking-tight'>
                Use and re-use tons of responsive sections too a main create the
                perfect layout. Sections are ready.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
