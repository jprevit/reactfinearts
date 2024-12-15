import { Artwork } from "../models/Artwork"
import ArtCard from "./ArtCard"

type ArtListProps = {
    artworks: Artwork[]
}

function ArtList({ artworks }: ArtListProps) {

    return artworks.map(art =>
        <div className="col-md-4 d-flex flex-column justify-content-center" key={art.id}>
            <ArtCard art={art} />
        </div>
    )
}

export default ArtList