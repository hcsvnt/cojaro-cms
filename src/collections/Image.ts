import { CollectionConfig } from 'payload/types';

const Image: CollectionConfig = {
    slug: 'image',
    labels: {
        singular: 'Image',
        plural: 'Images'
    },
    upload: {
        staticURL: '/images',
        staticDir: 'images',
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*']
    },
    fields: [
        {
            name: 'title',
            label: 'Title',
            type: 'text'
        },
        {
            name: 'alt',
            label: 'Alt Text',
            type: 'text'
        },
        {
            name: 'background',
            label: 'Background Color',
            type: 'text'
        }
    ],
    hooks: {
        beforeChange: [
            async ({ data, originalDoc }) => {
                console.log('beforeChange', data, originalDoc);

                if (!originalDoc) {
                    const filename = sanitizeFilename(data.filename);
                    // If name or alt are not set, use the filename
                    !data.name && (data.name = filename);
                    !data.alt && (data.alt = filename);
                }
            }
        ]
    }
};

export default Image;

export function sanitizeFilename(filename) {
    // Remove extension, basic sanitization
    return filename.replace(/\.\w*$/, '');
}
