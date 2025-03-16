import CONFIG from '@/blog.config'
import { Client } from '@notionhq/client'

export const notion = new Client({
  auth: process.env.NOTION_KEY || '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',
})
export const databaseId = CONFIG.NOTION_PAGE_ID
