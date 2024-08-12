import { useState } from 'react'

import AuthApi from './auth-api'

export default function useRegister() {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const registerUSer = async (data) => {
    setError(null)
    setLoading(true)

    try {
      const response = await AuthApi.register(data)
      setLoading(false)

      return response
    } catch (error) {
      setLoading(false)
      setError(error)
      return error
    }
  }

  return { registerUSer, loading, error }
}
