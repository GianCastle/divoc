import { useEffect } from 'react'
import { useCreateHandlerSetter } from './useCreateHandleSetter'

export const useDidMount = handler => {
  const [onMountHandler, setOnMountHandler] = useCreateHandlerSetter(handler)

  useEffect(() => {
    if (onMountHandler.current) {
      onMountHandler.current()
    }
  }, [])

  return setOnMountHandler
}
