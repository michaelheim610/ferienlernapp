import { writable } from 'svelte/store'
import type { Subject } from './types'

export type View =
  | 'home'
  | 'subject'
  | 'exercise'
  | 'reward'
  | 'leaderboard'
  | 'collection'
  | 'coupons'
  | 'papa'

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

export function goLeaderboard() {
  nav.update((n) => ({ ...n, view: 'leaderboard' }))
}

export function goCollection() {
  nav.update((n) => ({ ...n, view: 'collection' }))
}

export function goCoupons() {
  nav.update((n) => ({ ...n, view: 'coupons' }))
}

export function goPapa() {
  nav.update((n) => ({ ...n, view: 'papa' }))
}
