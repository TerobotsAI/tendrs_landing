import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid'
import ShareLinks from './ShareLinks'


const ShareNow = () => {
    return (
        <>
            <div className='dark' id='waitlist-form'>
                <div className='relative min-h-screen overflow-hidden bg-purple-800 dark:text-gray-100 after:w-full after:absolute after:bottom-0 after:h-px after:bg-radial-border'>
                    <div className='absolute inset-0'>
                        <div className='relative bg-grid w-full h-full after:absolute after:inset-0 after:bg-radial-gradient after:from-purple-900 after:via-slate-950/80 after:to-slate-950 after:mix-blend-multiply'></div>
                    </div>
                    <div
                        data-aos='fade-up'
                        className='relative container my-auto xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-40 pb-10'>
                        <div
                            className='md:text-center z-100'>
                            <Link
                                href='/'
                                className='group inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-gray-900 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300'>
                                <Image
                                    src='/Logo.svg'
                                    height={150}
                                    width={200}
                                    className=''
                                    alt='Tendrs Logo'
                                />
                            </Link>
                            <h1

                                className='text-3xl lg:text-5xl my-9 leading-tight lg:leading-normal font-black text-white mb-4'>

                                🎉 Thank You for Joining Tendrs! 🎉
                            </h1>
                            <h2
                                className='text-base md:text-lg max-w-4xl mx-auto text-white/70 my-5'>
                                You&apos;re now on the waitlist for tendrs.ai. But wait, there&apos;s more! Sharing the excitement with your network can earn you additional credits and even lifetime free access! Invite others to join you on this journey to success, and together, we&apos;ll revolutionize the way businesses connect and grow.
                            </h2>
                        </div>

                        <div className='flex flex-col text-center mx-auto sm:items-center sm:justify-stretch gap-3 py-8'>
                            <ShareLinks />
                            <p
                                data-aos='fade-up'
                                data-aos-delay='400'
                                className='text-sm md:col-span-2 text-white/70'>

                                No Spam, No Data Sharing. Your Privacy is our priority.
                            </p>
                        </div>
                        <div
                            className='mx-auto w-full text-center'
                        >
                            <Link
                                href='/'
                                type="button" className="inline-flex justify-center items-center space-x-2 focus:border font-semibold rounded-lg px-5 py-3 leading-5 text-sm focus:border-white/70 bg-transparent text-white mx-auto">
                                <ArrowUturnLeftIcon className='w-4 h-4 mr-2' />
                                <p>
                                    Back to home
                                </p>
                            </Link>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default ShareNow


