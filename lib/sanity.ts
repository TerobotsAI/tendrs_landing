import { createClient } from '@sanity/client'
import { create } from 'domain'
const config = {
  projectId: '5fbx4br5',
  dataset: 'tendrs-landing',
  apiVersion: '2021-10-21',
  useCdn: true,
}

const client = createClient(config)

export default client
