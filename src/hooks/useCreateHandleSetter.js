import { useCallback, useRef } from 'react'

export const useCreateHandlerSetter = handlerValue => {
  const handlerRef = useRef(handlerValue)

  handlerRef.current = handlerValue

  const setHandler = useCallback(nextCallback => {
    if (typeof nextCallback !== 'function') {
      throw new Error(
        "the argument supplied to the 'setHandler' function should be of type function"
      )
    }

    handlerRef.current = nextCallback
  })

  return [handlerRef, setHandler]
}
