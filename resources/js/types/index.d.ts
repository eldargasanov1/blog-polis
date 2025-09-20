export interface Auth {
    user: User;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}

export interface PaginationLinks {
    first: string;
    last: string;
    next?: string;
    previous?: string;
}

export interface PaginationMetadataLink {
    active: boolean;
    label: string;
    url?: string;
}

export interface PaginationMetadata {
    currentPage: number;
    lastPage: number;
    from: number;
    to: number;
    total: number;
    path: string;
    per_page: number;
    links: PaginationMetadataLink[];
}

export interface PaginatedData<T> {
    data: T[];
    links: PaginationLinks;
    meta: PaginationMetadata;
}

export interface Comment {
    id: number;
    content: string;
    created_at: string;
    user_name: string;
}

export interface Article {
    id: number;
    title: string;
    content: string;
    created_at: string;
    comments: Comment[];
}
