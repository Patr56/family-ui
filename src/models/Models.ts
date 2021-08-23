export enum EType {
    BIO,
    GALLERY,
    MAP,
    PHONE,
    EMAIL,
    DATE,
}

export interface IItemMenu {
    id: string
    type: EType
    title: string
    description?: string
}

export interface INavigationProps {
    id: string
    userId: string
}
