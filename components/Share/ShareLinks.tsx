import React from 'react'
import Link from 'next/link'
import { PaperClipIcon } from '@heroicons/react/24/solid'
const ShareLinks = () => {
    return (
        <>
            <div className="flex flex-wrap items-center justify-center gap-8 rounded-xl border-2 text-center px-4 md:px-10 py-8 mx-auto bg-white/5 backdrop-blur-sm dark:border-white/20 ">
                <Link
                    target='_blank'
                    href="whatsapp://send?text=Join the waitlist on tendrs.ai and get matched with your perfect business partner! Early waitlisters can get free credits on launch! 🚀 #BusinessNetworking #AI #TendrsAI"
                    className="space-y-4 text-center">

                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mx-auto transition hover:text-green-500 focus-within:scale-95" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
                        <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path>
                    </svg>
                    <h3 className="font-medium">
                        Whatsapp
                    </h3>
                </Link>
                <Link
                    target='_blank'
                    href='https://www.linkedin.com/sharing/share-offsite/?url=tendrs.ai' className="space-y-4">
                    <svg xmlns="http://www.w3.org/2000/svg"

                        className="w-8 h-8 mx-auto transition hover:text-blue-400"
                        width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                        <path d="M8 11l0 5"></path>
                        <path d="M8 8l0 .01"></path>
                        <path d="M12 16l0 -5"></path>
                        <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                    </svg>
                    <h3 className="font-medium">
                        LinkedIn
                    </h3>
                </Link>

                <Link
                    target='_blank'
                    href='https://www.facebook.com/login.php?skip_api_login=1&signed_next=1&next=https://www.facebook.com/v11.0/dialog/share?display=popup&href=https://www.tendrs.ai' className="space-y-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8 mx-auto transition hover:text-purple-400"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                    </svg>

                    <h3 className="font-medium">
                        Facebook
                    </h3>
                </Link>
                <Link
                    target='_blank'
                    href="https://twitter.com/intent/tweet?&text=Join the waitlist on tendrs.ai and get matched with your perfect business partner! Early waitlisters can get free credits on launch! 🚀"
                    className="space-y-4"

                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8 mx-auto transition hover:text-blue-400 "
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" />
                    </svg>

                    <h3 className="font-medium">
                        Twiiter
                    </h3>
                </Link>
                <button
                    onClick={
                        () => {
                            navigator.clipboard.writeText('https://tendrs.ai')
                            alert('Copied to clipboard!')
                        }
                    }
                    className="space-y-4">
                    <PaperClipIcon className="w-8 h-8 mx-auto transition hover:text-amber-600" />

                    <h3 className="font-medium">
                        Copy Link
                    </h3>
                </button>
            </div>
        </>
    )
}

export default ShareLinks