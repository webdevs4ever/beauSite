import { createClient } from '@sanity/client'

const PROJECT_ID = import.meta.env.VITE_SANITY_PROJECT_ID || ''

export const sanityClient = PROJECT_ID
  ? createClient({
      projectId: PROJECT_ID,
      dataset: 'production',
      useCdn: true,
      apiVersion: '2024-01-01',
    })
  : null

// ─── Queries ────────────────────────────────────────────────────────────────

export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0]{
  tagline,
  contactUrl
}`

export const HERO_CARDS_QUERY = `*[_type == "heroCard"] | order(order asc) {
  _id,
  title,
  description,
  icon,
  pageLink
}`

export const ANNOUNCEMENTS_QUERY = `*[_type == "announcement" && published == true] | order(_createdAt desc) {
  _id,
  title,
  body,
  ctaText,
  ctaUrl
}`