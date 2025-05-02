'use client'

import { useState, useEffect } from 'react'

interface ScriptOptions {
  id?: string
  defer?: boolean
  async?: boolean
  nonce?: string
  'data-testid'?: string
}

/**
 * A hook to dynamically load external scripts and track their loading state
 */
export function useScriptLoader(
  src: string,
  options: ScriptOptions = {}
) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const [scriptElement, setScriptElement] = useState<HTMLScriptElement | null>(null)
  const [isClient, setIsClient] = useState(false)

  // Check if running in browser
  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    // Skip if not in browser or src is empty
    if (!isClient || !src) {
      setIsLoading(false)
      return
    }

    setIsLoading(true)
    
    // If the script is already in the document, don't add it again
    const existingScriptById = options.id ? document.getElementById(options.id) as HTMLScriptElement : null
    const existingScriptBySrc = Array.from(document.getElementsByTagName('script'))
      .find(script => script.src === src)
    
    if (existingScriptById || existingScriptBySrc) {
      const existingScript = existingScriptById || existingScriptBySrc as HTMLScriptElement
      
      // Check if script is already loaded
      if (existingScript.getAttribute('data-loaded') === 'true') {
        setScriptElement(existingScript)
        setIsLoading(false)
        return
      }
      
      // If script exists but not yet loaded, wait for it to load
      const handleExistingScriptLoad = () => {
        setIsLoading(false)
        setError(null)
      }
      
      const handleExistingScriptError = (err: ErrorEvent) => {
        setIsLoading(false)
        setError(new Error(`Failed to load existing script: ${src}`))
        console.error('Existing script loading error:', err)
      }
      
      existingScript.addEventListener('load', handleExistingScriptLoad)
      existingScript.addEventListener('error', handleExistingScriptError)
      
      setScriptElement(existingScript)
      
      return () => {
        existingScript.removeEventListener('load', handleExistingScriptLoad)
        existingScript.removeEventListener('error', handleExistingScriptError)
      }
    }

    // Create script element
    const script = document.createElement('script')
    script.src = src
    script.type = 'text/javascript'
    
    // Apply options to script element
    if (options.id) script.id = options.id
    if (options.defer !== undefined) script.defer = options.defer
    if (options.async !== undefined) script.async = options.async
    if (options.nonce) script.nonce = options.nonce
    if (options['data-testid']) script.setAttribute('data-testid', options['data-testid'])
    
    // Define event handlers
    const handleLoad = () => {
      script.setAttribute('data-loaded', 'true')
      setIsLoading(false)
      setError(null)
    }

    const handleError = (err: ErrorEvent) => {
      setIsLoading(false)
      setError(new Error(`Failed to load script: ${src}`))
      console.error('Script loading error:', err)
    }

    // Add event listeners
    script.addEventListener('load', handleLoad)
    script.addEventListener('error', handleError)

    // Add script to document
    document.body.appendChild(script)
    setScriptElement(script)

    // Cleanup function
    return () => {
      script.removeEventListener('load', handleLoad)
      script.removeEventListener('error', handleError)
      
      // Only remove the script if it was added by this hook instance
      // and it doesn't have an ID (which suggests it might be needed elsewhere)
      if (script.parentNode && !options.id) {
        script.parentNode.removeChild(script)
      }
    }
  }, [src, options.id, options.defer, options.async, options.nonce, options['data-testid'], isClient])

  return { isLoading, error, scriptElement }
} 