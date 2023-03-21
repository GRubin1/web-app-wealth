export interface IImage {
    src: string
    alt: string
    size: {
        width: number
        height: number 
    }
    extLink?: string
}

export interface ILogo extends IImage {
    extLink?: string
}