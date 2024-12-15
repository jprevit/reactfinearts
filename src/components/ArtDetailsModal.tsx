import { AppState } from "../AppState"

type ModalProps = {
    id: string
}

export default function ArtDetailsModal({ id }: ModalProps) {

    return (

        <div className="modal" tabIndex={-1} id={id}>
            <div className="modal-dialog modal-xl">
                <div className="modal-content container-fluid">
                    <div className="modal-body row justify-content-center">
                        <img src={AppState.activeArt?.full} className="img-fluid artborder" />
                        <p className="fs-5 col-6 col-md-10">{AppState.activeArt?.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}