import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const AllInOne = () => {
    return (
        <>
            <div className="overflow-hidden bg-white dark:bg-gray-900 dark:text-gray-100">
                <div className="mx-auto px-4 py-16 lg:px-8 lg:py-32 max-w-7xl">
                    <div className="flex flex-col space-y-12 lg:flex-row lg:items-center lg:space-x-20 lg:space-y-0">
                        <div className="space-y-10 md:py-12 lg:w-1/2 xl:w-1/2">
                            <div>
                                <h2 className="mb-4 text-3xl md:text-4xl font-black text-black dark:text-white">
                                    Tendrs is your all-in-one platform for finding Clients and
                                    Growing your Business effortlessly
                                </h2>
                                <h3 className="font-medium leading-relaxed text-slate-500">
                                    Traditionally, tenders have been complex and time-consuming.
                                    But with Tendrs, we&apos;ve simplified the process. Now,
                                    anyone can easily post their requirements and attract bids to
                                    find the perfect match for their project. Whether it&apos;s a
                                    straightforward digital marketing proposal or a sophisticated
                                    application development project, Tendrs makes it effortless.
                                </h3>
                                <div className="mt-5 gap-x-6">
                                    <Button>
                                        <Link href="https://app.tendrs.ai">Request a Demo</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex-none lg:w-1/2 xl:w-1/2">
                            <div className="relative flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0">
                                <div className="space-y-6 md:mt-24 md:w-1/2">
                                    <div className="group rounded-xl ring-1 ring-accent-200 bg-accent-50 p-5 transition duration-200 ease-out hover:ring-accent-300 hover:ring-2">
                                        <div className="relative m-2 mb-6 inline-flex size-10 items-center justify-center">
                                            <div className="absolute inset-0 -m-2 rounded-sm bg-accent-800 transition duration-200 ease-out group-hover:scale-105"></div>
                                        </div>
                                        <h4 className="mb-2 text-lg md:text-xl font-bold">
                                            For Startups
                                        </h4>
                                        <p className="text-sm md:text-base leading-relaxed text-gray-600 dark:text-gray-400">
                                            List your startup and increase visibility effortlessly
                                        </p>
                                    </div>
                                    <div className="group rounded-xl ring-1 ring-secondary-200 bg-secondary-50 p-5 transition duration-200 ease-out hover:ring-secondary-300 hover:ring-2">
                                        <div className="relative m-2 mb-6 inline-flex size-10 items-center justify-center">
                                            <div className="absolute inset-0 -m-2 rounded-sm bg-secondary transition duration-200 ease-out group-hover:scale-105"></div>
                                        </div>
                                        <h4 className="mb-2 text-lg md:text-xl font-bold">
                                            For Enterprises
                                        </h4>
                                        <p className="text-sm md:text-base leading-relaxed text-gray-600 dark:text-gray-400">
                                            Access a diverse pool of startups to address your needs at reduced costs
                                        </p>
                                    </div>
                                </div>
                                <div className="space-y-6 md:w-1/2">
                                    <div className="group rounded-xl ring-1 ring-secondary-200 bg-secondary-50 p-5 transition duration-200 ease-out hover:ring-secondary-300 hover:ring-2">
                                        <div className="relative m-2 mb-6 inline-flex size-10 items-center justify-center">
                                            <div className="absolute inset-0 -m-2 rounded-sm bg-secondary transition duration-200 ease-out group-hover:scale-105"></div>
                                        </div>
                                        <h4 className="mb-2 text-lg md:text-xl font-bold">For Sales team</h4>
                                        <p className="text-sm md:text-base leading-relaxed text-gray-600 dark:text-gray-400">
                                            Expand your project portfolio and clientele
                                        </p>
                                    </div>
                                    <div className="group rounded-xl ring-1 ring-accent-200 bg-accent-50 p-5 transition duration-200 ease-out hover:ring-accent-300 hover:ring-2">
                                        <div className="relative m-2 mb-6 inline-flex size-10 items-center justify-center">
                                            <div className="absolute inset-0 -m-2 rounded-sm bg-accent-800 transition duration-200 ease-out group-hover:scale-105"></div>
                                        </div>
                                        <h4 className="mb-2 text-lg md:text-xl font-bold">For Procurement</h4>
                                        <p className="text-sm md:text-base leading-relaxed text-gray-600 dark:text-gray-400">
                                            Simplify vendor evaluation processes while expanding your
                                            database for future assessments
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllInOne
