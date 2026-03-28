import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
 
export default defineConfig({
  name: 'default',
  title: 'Zimny McCoy Law',
 
  projectId: '35u9bwq2',
  dataset: 'production',
 
  plugins: [structureTool(), visionTool()],
 
  schema: {
    types: schemaTypes,
  },
})