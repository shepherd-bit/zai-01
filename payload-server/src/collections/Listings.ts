import type { CollectionConfig } from 'payload'

export const Listings: CollectionConfig = {
  slug: 'listings',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'capacity',
      type: 'number',
      required: true,
      min: 1,
      admin: {
        description: 'Maximum number of occupants',
      },
    },
    {
      name: 'bedrooms',
      type: 'number',
      required: true,
      min: 0,
      admin: {
        description: 'Number of bedrooms',
      },
    },
    {
      name: 'location',
      type: 'text',
      required: true,
      admin: {
        description: 'Location shown on the card, e.g. "Syokimau, Katani Rd"',
      },
    },
    {
      name: 'features',
      type: 'array',
      admin: {
        description: 'Property features and amenities',
      },
      fields: [
        {
          name: 'feature',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'pricePerNight',
      type: 'number',
      required: true,
      min: 0,
      admin: {
        description: 'Price per night in Kenyan Shillings (Ksh)',
      },
    },
    {
      name: 'airbnbLink',
      type: 'text',
      required: true,
      admin: {
        description: 'URL to the Airbnb listing',
      },
      validate: (value: string | null | undefined) => {
        if (!value) return true
        try {
          new URL(value)
          return true
        } catch {
          return 'Please enter a valid URL'
        }
      },
    },
    {
      name: 'airbnbRating',
      type: 'number',
      min: 1,
      max: 5,
      admin: {
        description: 'Airbnb guest rating, from 1 to 5 (decimals allowed, e.g. 4.87)',
        step: 0.01,
      },
    },
  ],
}
