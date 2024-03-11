import path from 'path';

import { payloadCloud } from '@payloadcms/plugin-cloud';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { webpackBundler } from '@payloadcms/bundler-webpack';
import { slateEditor } from '@payloadcms/richtext-slate';
import { buildConfig } from 'payload/config';

import AboutPage from './globals/AboutPage';
import ContactPage from './globals/ContactPage';
import HomePageItem from './collections/HomePageItem';
import Image from './collections/Image';
import Link from './collections/Link';
import Users from './collections/Users';

export default buildConfig({
    serverURL: process.env.SERVER_URL,
    admin: {
        user: Users.slug,
        bundler: webpackBundler()
    },
    editor: slateEditor({}),
    collections: [HomePageItem, Image, Link, Users],
    globals: [AboutPage, ContactPage],
    typescript: {
        outputFile: path.resolve(__dirname, 'payload-types.ts')
    },
    graphQL: {
        schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql')
    },
    plugins: [payloadCloud()],
    db: mongooseAdapter({
        url: process.env.DATABASE_URI
    }),
    upload: {
        limits: {
            fileSize: 5000000 // 5MB
        }
    }
});
