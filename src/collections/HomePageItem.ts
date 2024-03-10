import { CollectionConfig } from 'payload/types';

const HomePageItem: CollectionConfig = {
    slug: 'home-page-item',
    labels: {
        singular: 'Home Page Item',
        plural: 'Home Page Items'
    },
    fields: [
        {
            name: 'title',
            label: 'Title',
            type: 'text'
        },
        {
            name: 'image',
            label: 'Image',
            relationTo: 'image',
            type: 'upload'
        },
        {
            name: 'background',
            label: 'Background Color',
            type: 'text'
        },
        {
            name: 'link',
            label: 'Link',
            relationTo: 'link',
            type: 'relationship'
        }
        // { relation to POST, this should be part of a Homepage image collection }
        //     name: 'post-id',
        //     label: 'Post ID',
        //     type: 'text'
        // }
    ]
};

export default HomePageItem;
