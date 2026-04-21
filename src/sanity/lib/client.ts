import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId, useCdn } from '../env'

if (typeof window === 'undefined') {
  if (typeof crypto === 'undefined' || !crypto.randomUUID) {
    const cryptoModule = require('crypto')
    if (!globalThis.crypto) globalThis.crypto = cryptoModule as any
    if (!globalThis.crypto.randomUUID) {
      globalThis.crypto.randomUUID = cryptoModule.randomUUID
    }
  }
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  perspective: 'published',
})
