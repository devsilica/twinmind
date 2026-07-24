'use client'

import {
  createContext,
  useContext,
  ReactNode,
} from 'react'
import { useTwin } from '@/hooks/useTwin'

type TwinContextType = ReturnType<typeof useTwin>

const TwinContext = createContext<TwinContextType | null>(null)

export function TwinProvider({
  children,
}: {
  children: ReactNode
}) {
  const twin = useTwin()

  return (
    <TwinContext.Provider value={twin}>
      {children}
    </TwinContext.Provider>
  )
}

export function useTwinContext() {
  const context = useContext(TwinContext)

  if (!context) {
    throw new Error(
      'useTwinContext must be used inside TwinProvider'
    )
  }

  return context
}