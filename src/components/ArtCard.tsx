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
        <div className="row d-flex align-items-baseline m-3 g-4">
            <div className="col-12">
                <img src={art.small} alt={art.description} className="img-fluid artborder" data-bs-toggle="modal" data-bs-target="#artDetailsModal" onClick={setActive} />
            </div>
            <div className="col-12">
                <div className="row justify-content-around fs-5 text-uppercase">
                    <p className="col-2">Admirers:</p>
                    <div className="col-2 d-flex">
                        <p className="me-2">{art.admirers.length}</p>
                        <i className="mdi mdi-heart"></i>
                    </div>
                </div>
            </div>
        </div >
    )
}