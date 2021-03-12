// Modules Import
import { useEffect } from 'react'
import create from 'zustand'

type IExample = {
  example: number
  increaseExample: () => void
}

const useStore = create<IExample>((set) => ({
  example: 0,
  increaseExample: () => set((state) => ({ example: state.example + 1 })),
}))

export function useExample() {
  const store = useStore()

  useEffect(() => {
    console.log(store.example)
  }, [])
}
