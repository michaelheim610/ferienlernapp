import type { Subject, Topic } from '../lib/types'
import { matheTopics } from './exercises/mathe'
import { deutschTopics } from './exercises/deutsch'
import { englishTopics } from './exercises/english'

export const allTopics: Topic[] = [...matheTopics, ...deutschTopics, ...englishTopics]

export const subjects: { id: Subject; title: string; emoji: string; color: string }[] = [
  { id: 'mathe', title: 'Mathe', emoji: '🚀', color: 'var(--violet)' },
  { id: 'deutsch', title: 'Deutsch', emoji: '📚', color: 'var(--pink)' },
  { id: 'english', title: 'English', emoji: '🇬🇧', color: 'var(--blue)' }
]

export function topicsOf(subject: Subject): Topic[] {
  return allTopics.filter((t) => t.subject === subject).sort((a, b) => a.index - b.index)
}

export function topicById(id: string): Topic | undefined {
  return allTopics.find((t) => t.id === id)
}
