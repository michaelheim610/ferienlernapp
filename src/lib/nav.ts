import { writable } from 'svelte/store'
import type { Subject } from './types'

export type View = 'home' | 'subject' | 'exercise' | 'reward'

export interface NavState {
  view: View
  subject?: Subject
  topicId?: string
  exIndex?: number
}

export const nav = writable<NavState>({ view: 'home' })

export function goHome() {
  nav.set({ view: 'home' })
}

export function goSubject(subject: Subject) {
  nav.set({ view: 'subject', subject })
}

export function startTopic(subject: Subject, topicId: string) {
  nav.set({ view: 'exercise', subject, topicId, exIndex: 0 })
}

export function goExercise(subject: Subject, topicId: string, exIndex: number) {
  nav.set({ view: 'exercise', subject, topicId, exIndex })
}

export function goReward(subject: Subject, topicId: string) {
  nav.set({ view: 'reward', subject, topicId })
}
