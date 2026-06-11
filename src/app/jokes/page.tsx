'use client'

import React, { useState } from 'react'
import { Laugh, Copy, RotateCw } from 'lucide-react'

interface Joke {
  id: number
  type: string
  setup?: string
  delivery?: string
  joke?: string
}

export default function JokeGenerator() {
  const [joke, setJoke] = useState<Joke | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  const fetchJoke = async () => {
    setLoading(true)
    setError('')
    setCopied(false)
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke')
      if (!response.ok) throw new Error('Failed to fetch joke')
      const data = await response.json()
      setJoke(data)
    } catch (err) {
      setError('Failed to load joke. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = () => {
    if (!joke) return
    const jokeText = joke.setup
      ? `${joke.setup}\n${joke.delivery}`
      : joke.joke || ''
    navigator.clipboard.writeText(jokeText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const getJokeText = () => {
    if (!joke) return ''
    return joke.setup ? `${joke.setup}\n${joke.delivery}` : joke.joke || ''
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 backdrop-blur-md">
            <Laugh size={32} className="text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Joke Generator</h1>
          <p className="text-white/80">Get random jokes instantly</p>
        </div>

        {/* Main Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
          {/* Joke Display */}
          {joke ? (
            <div className="mb-8 min-h-32 flex flex-col justify-center">
              {joke.setup ? (
                <div>
                  <p className="text-white text-lg mb-4 font-semibold">{joke.setup}</p>
                  <p className="text-white/80 text-lg italic">{joke.delivery}</p>
                </div>
              ) : (
                <p className="text-white text-lg">{joke.joke}</p>
              )}
            </div>
          ) : (
            <div className="mb-8 min-h-32 flex items-center justify-center">
              <p className="text-white/60 text-center">Click the button to get a joke!</p>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
              <p className="text-red-200 text-sm">{error}</p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={fetchJoke}
              disabled={loading}
              className="flex-1 bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-white/90 transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <RotateCw size={20} className={loading ? 'animate-spin' : ''} />
              {loading ? 'Loading...' : 'Get Joke'}
            </button>
            <button
              onClick={copyToClipboard}
              disabled={!joke}
              className={`flex-1 font-semibold py-3 px-6 rounded-lg transition flex items-center justify-center gap-2 ${
                copied
                  ? 'bg-green-500/40 text-green-200'
                  : 'bg-white/20 text-white hover:bg-white/30'
              } disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              <Copy size={20} />
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>

        {/* Joke Info */}
        {joke && (
          <div className="mt-6 p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
            <p className="text-white/70 text-sm">
              <span className="font-semibold">Type:</span> {joke.type} | <span className="font-semibold">ID:</span> {joke.id}
            </p>
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 text-center text-white/60 text-sm">
          <p>Powered by Official Joke API</p>
        </div>
      </div>
    </div>
  )
}
