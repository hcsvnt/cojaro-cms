import type { GlobalConfig } from 'payload/types';

const ContactPage: GlobalConfig = {
    slug: 'contact-page',
    label: 'Contact Page',
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
            type: 'textarea'
        }
    ]
};

export default ContactPage;
