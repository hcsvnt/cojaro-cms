import { CollectionConfig } from 'payload/types';

const Link: CollectionConfig = {
    slug: 'link',
    labels: {
        singular: 'Link',
        plural: 'Links'
    },
    fields: [
        {
            name: 'title',
            label: 'Title',
            type: 'text'
        },
        {
            name: 'url',
            label: 'URL',
            type: 'text'
        }
    ]
};

export default Link;
