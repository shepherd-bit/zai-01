import type { CollectionConfig } from 'payload'

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

export const Listings: CollectionConfig = {
  slug: 'listings',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'status', 'location.city', 'guestCapacity', 'updatedAt'],
    group: 'Listings',
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  hooks: {
    beforeValidate: [
      ({ data, operation }) => {
        if (operation === 'create' && data?.title && !data.slug) {
          data.slug = slugify(data.title)
        }
        return data
      },
    ],
  },
  timestamps: true,
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      index: true,
      admin: {
        position: 'sidebar',
        description: 'Generated from the title when left blank.',
      },
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'draft',
      required: true,
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'thumbnail',
      type: 'relationship',
      relationTo: 'media',
      required: true,
      admin: {
        position: 'sidebar',
        description: 'Image shown on the listing card.',
      },
    },
    {
      name: 'guestCapacity',
      type: 'number',
      required: true,
      min: 1,
      admin: {
        description: 'Maximum number of guests.',
        step: 1,
      },
    },
    {
      name: 'location',
      type: 'group',
      admin: {
        description: 'Shown on the listing card.',
      },
      fields: [
        {
          name: 'city',
          type: 'text',
          required: true,
        },
        {
          name: 'state',
          type: 'text',
        },
        {
          name: 'country',
          type: 'text',
          required: true,
        },
        {
          name: 'address',
          type: 'text',
        },
      ],
    },
    {
      name: 'features',
      type: 'select',
      hasMany: true,
      required: true,
      admin: {
        description: 'Amenities shown on the listing card.',
      },
      options: [
        { label: 'WiFi', value: 'wifi' },
        { label: 'Kitchen', value: 'kitchen' },
        { label: 'Laundry machine', value: 'laundry-machine' },
        { label: 'Air conditioning', value: 'air-conditioning' },
        { label: 'Heating', value: 'heating' },
        { label: 'Parking', value: 'parking' },
        { label: 'Pool', value: 'pool' },
        { label: 'Pet friendly', value: 'pet-friendly' },
        { label: 'TV', value: 'tv' },
        { label: 'Workspace', value: 'workspace' },
        { label: 'Dishwasher', value: 'dishwasher' },
      ],
    },
    {
      name: 'description',
      type: 'richText',
    },
  ],
}
