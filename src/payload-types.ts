/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    'home-page-item': HomePageItem;
    image: Image;
    link: Link;
    users: User;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {
    'about-page': AboutPage;
    'contact-page': ContactPage;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "home-page-item".
 */
export interface HomePageItem {
  id: string;
  title?: string | null;
  image?: string | Image | null;
  background?: string | null;
  link?: (string | null) | Link;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "image".
 */
export interface Image {
  id: string;
  title?: string | null;
  alt?: string | null;
  background?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "link".
 */
export interface Link {
  id: string;
  title?: string | null;
  url?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "about-page".
 */
export interface AboutPage {
  id: string;
  page_title?: string | null;
  header_title?: string | null;
  header_pargraph?: string | null;
  exhibitions_title?: string | null;
  exhibitions_list?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  publications_title?: string | null;
  publications_list?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "contact-page".
 */
export interface ContactPage {
  id: string;
  page_title?: string | null;
  header_title?: string | null;
  header_pargraph?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}