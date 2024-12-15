import { useEffect, useState } from "react"
import { AppState } from "../AppState"
import Loading from "./Loading"
import { logger } from "../utils/Logger";
import { artService } from "../services/ArtService";

type ModalProps = {
    id: string;
    title: string;
}

export default function ArtDetailsModal({ id }: ModalProps) {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const image = new Image()
        image.src = AppState.activeArt?.small || '';
        image.onload = () => {
            setIsLoading(false)
        }
    }, [AppState.activeArt])

    useEffect(() => {
        const modalElement = document.getElementById(id)
        async function handleHide() {
            // logger.log('Modal hidden', AppState.activeArt)
            await artService.setActiveNull()
            // logger.log('AppState.activeArt', AppState.activeArt)
        }

        if (modalElement) {
            modalElement.addEventListener('hidden.bs.modal', handleHide)
        }

        return () => {
            if (modalElement) {
                modalElement.removeEventListener('hidden.bs.modal', handleHide)
            }
        }
    }, [id])

    return (
        <div className="modal" tabIndex={-1} id={id}>
            <div className="modal-dialog modal-xl">
                <div className="modal-content container-fluid">
                    <div className="modal-body row justify-content-center">
                        {isLoading ? (
                            <Loading />
                        ) : (
                            <img src={AppState.activeArt?.small} className="img-fluid artborder artdetails" />
                        )}
                        <p className="fs-5 col-6 col-md-10">{AppState.activeArt?.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}