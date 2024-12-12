import { AppState } from "../AppState"
import { Artwork } from "../models/Artwork"

type ArtCardProps = {
    art: Artwork
}

export default function ArtCard({ art }: ArtCardProps) {
    function setActive() {
        AppState.activeArt = art
    }

    return (
        <div className="row d-flex justify-content-center m-3 g-4">
            <div className="col-12">
                <img src={art.small} alt={art.description} className="img-fluid artborder" data-bs-toggle="modal" data-bs-target="#artDetailsModal" onClick={setActive} />
            </div>
        </div >
    )
}