import type { CollectionConfig } from 'payload'

export const LaundryRates: CollectionConfig = {
  slug: 'laundry-rates',
  admin: {
    useAsTitle: 'itemName',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'itemName',
      type: 'text',
      required: true,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
      min: 0,
      admin: {
        description: 'Price in Kenyan Shillings (Ksh)',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        description: 'Details like service type, turnaround time, pickup info',
      },
    },
  ],
}
