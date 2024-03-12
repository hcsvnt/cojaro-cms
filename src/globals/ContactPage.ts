import type { GlobalConfig } from 'payload/types';

const ContactPage: GlobalConfig = {
    slug: 'contact-page',
    label: 'Contact Page',
    access: {
        read: () => true,
        update: () => true
    },
    fields: [
        {
            name: 'page_title',
            label: 'Page Title',
            type: 'text'
        },
        {
            name: 'header_title',
            label: 'Header Title',
            type: 'text'
        },
        {
            name: 'header_pargraph',
            label: 'Header Paragraph',
            type: 'richText'
        },
        {
            name: 'test',
            type: 'textarea'
        }
    ]
};

export default ContactPage;
