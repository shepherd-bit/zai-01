import type { CollectionConfig } from 'payload'

export const Gallery: CollectionConfig = {
  slug: 'gallery',
  labels: {
    singular: 'Gallery',
    plural: 'Gallery',
  },
  admin: {
    useAsTitle: 'location',
    description: 'Photo posts shown in the gallery',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description:
          'Example: upload a photo such as "fort-jesus-sunset.jpg" — this is the picture that shows in the gallery',
      },
    },
    {
      name: 'location',
      type: 'text',
      required: true,
      admin: {
        description: 'Where the photo was taken',
        placeholder: 'e.g. Diani',
      },
    },
    {
      name: 'site',
      type: 'text',
      admin: {
        description: 'Optional landmark or spot within that location',
        placeholder: 'e.g. Fort Jesus, Tiwi Beach, Baobab trail',
      },
    },
  ],
}
