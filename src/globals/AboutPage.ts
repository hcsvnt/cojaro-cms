import type { GlobalConfig } from 'payload/types';

const AboutPage: GlobalConfig = {
    slug: 'about-page',
    label: 'About Page',
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
                // TODO: is this what we need?
                {
                    name: 'exhibition_title',
                    label: 'Exhibition Title',
                    type: 'text'
                },
                {
                    name: 'exhibition_date',
                    label: 'Exhibition Date',
                    type: 'text'
                },
                {
                    name: 'exhibition_location',
                    label: 'Exhibition Location',
                    type: 'text'
                }
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
                    name: 'publication_title',
                    label: 'Publication Title',
                    type: 'text'
                },
                {
                    name: 'publication_date',
                    label: 'Publication Date',
                    type: 'text'
                },
                {
                    name: 'publication_location',
                    label: 'Publication Location',
                    type: 'text'
                }
            ]
        }
    ]
};

export default AboutPage;
