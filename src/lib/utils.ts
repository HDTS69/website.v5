import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function scrollToElement(elementId: string, offset: number = 0) {
  const element = document.getElementById(elementId)
  if (element) {
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset
    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth',
    })
  }
}
