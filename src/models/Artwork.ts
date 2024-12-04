export type ArtData = {
    id: string
    full: string
    thumb: string
    description: string
    admirers: []
}

export class Artwork {
    id: string
    full: string
    thumb: string
    description: string
    admirers: []
    constructor(data: ArtData) {
        this.id = data.id
        this.full = data.full
        this.thumb = data.thumb
        this.description = data.description
        this.admirers = data.admirers
    }
}