import React from 'react'
import Button from '../Base/Button'
import Link from 'next/link'
import Image from 'next/image'
import { PaperClipIcon } from '@heroicons/react/24/solid'
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
                                href='#'
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
                        <div className="lg:border-b lg:border-t lg:border-gray-200">
                            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Progress">
                                <ol
                                    role="list"
                                    className="overflow-hidden rounded-md lg:flex lg:rounded-none lg:border-l lg:border-r lg:border-gray-200"
                                >
                                    {steps.map((step, stepIdx) => (
                                        <li key={step.id} className="relative overflow-hidden lg:flex-1">
                                            <div
                                                className={classNames(
                                                    stepIdx === 0 ? 'rounded-t-md border-b-0' : '',
                                                    stepIdx === steps.length - 1 ? 'rounded-b-md border-t-0' : '',
                                                    'overflow-hidden'
                                                )}
                                            >

                                                <div aria-current="step">
                                                    <span
                                                        className="absolute left-0 top-0 h-full w-1 bg-purple-300 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
                                                        aria-hidden="true"
                                                    />
                                                    <span
                                                        className={classNames(
                                                            stepIdx !== 0 ? 'lg:pl-9' : '',
                                                            'flex items-start px-6 py-5 text-sm font-medium'
                                                        )}
                                                    >
                                                        <span className="flex-shrink-0">
                                                            <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-purple-300">
                                                                <span className="text-purple-300">{step.id}</span>
                                                            </span>
                                                        </span>
                                                        <span className="ml-4 mt-0.5 flex min-w-0 flex-col">
                                                            <span className="text-sm font-medium text-purple-300">{step.name}</span>
                                                            <span className="text-sm font-medium text-gray-500">{step.description}</span>
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShareNow



const steps = [
    { id: '01', name: 'Register & Share', description: 'Sign up for our AI-powered platform and share your unique referral link.', status: 'current' },
    { id: '02', name: 'Invite Others', description: 'Invite friends, colleagues, and your network to register using your link.', status: 'current' },
    {
        id: '03', name: 'Get Rewarded', description: 'Get exciting rewards and the chance for lifetime free access with each successful referral!', status: 'current'
    },
]

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}


