import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function hyphenate(str: string) {
  return str.replace(/\s+/g, '-').toLowerCase()
}
