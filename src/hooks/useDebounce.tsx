import { useEffect, useState } from 'react'

function useDebounce<T>(value: T, delayMs: number) {
  const [debounceValue, setDebounceValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value)
    }, delayMs)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delayMs])

  return debounceValue
}

export default useDebounce
