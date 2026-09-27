import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface Positioned {
  position?: number
}

// Shared by app/admin/dashboard (writes position on reorder) and
// app/portfolio (reads it to render in the same order). Items without a
// position yet (created before this field existed) fall back to their
// current array index, so they keep the order Firestore returned them in
// until the first time someone reorders that category.
export function sortByPosition<T extends Positioned>(items: T[]): T[] {
  return [...items].sort((a, b) => {
    const posA = a.position ?? items.indexOf(a)
    const posB = b.position ?? items.indexOf(b)
    return posA - posB
  })
}
