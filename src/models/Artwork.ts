export type ArtData = {
    id: string
    imgUrls: {
        full: string
        thumb: string,
        small_s3?: string
        small: string
        regular: string
    },
    description: string
    admirers: []
}

export class Artwork {
    id: string
    full: string
    thumb: string
    small: string
    description: string
    admirers: []
    constructor(data: ArtData) {
        this.id = data.id
        this.full = data.imgUrls.full
        this.thumb = data.imgUrls.thumb
        this.small = data.imgUrls.small_s3 || data.imgUrls.small || data.imgUrls.regular
        this.description = data.description
        this.admirers = data.admirers
    }

    get thumbUrl() {
        return `url(${this.thumb})`
    }
}
