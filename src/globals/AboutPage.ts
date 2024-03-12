import type { GlobalConfig } from 'payload/types';

const AboutPage: GlobalConfig = {
    slug: 'about-page',
    label: 'About Page',
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
            type: 'textarea'
        },
        {
            name: 'exhibitions_title',
            label: 'Exhibitions Title',
            type: 'text'
        },
        {
            name: 'exhibitions_list',
            label: 'Exhibitions List',
            type: 'array',
            fields: [
                {
                    name: 'exhibition',
                    type: 'richText'
                },
            ]
        },
        {
            name: 'publications_title',
            label: 'Publications Title',
            type: 'text'
        },
        {
            name: 'publications_list',
            label: 'Publications List',
            type: 'array',
            fields: [
                // TODO: is this what we need?
                {
                    name: 'publication',
                    label: 'Publication Title',
                    type: 'richText'
                },
            ]
        }
    ]
};

export default AboutPage;
