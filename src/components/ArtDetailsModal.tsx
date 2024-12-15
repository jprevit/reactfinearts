import React, { useEffect, useState } from "react"
import { AppState } from "../AppState"

type ModalProps = {
    id: string
}

export default function ArtDetailsModal({ id }: ModalProps) {

    const [imageSource, setImageSource] = useState(AppState.activeArt?.small)

    useEffect(() => {
        const image = new Image()
        image.src = AppState.activeArt?.full || ""
        image.onload = () => {
            setImageSource(AppState.activeArt?.full)
        }
    }, [AppState.activeArt])

    useEffect(() => {
        const modalElement = document.getElementById(id)
        const handleHide = () => {
            AppState.activeArt = null
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
                        <img src={imageSource} className="img-fluid artborder artdetails" />
                        <p className="fs-5 col-6 col-md-10">{AppState.activeArt?.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}