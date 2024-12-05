
type ModalProps = {
    id: string,
    title: string,
    children: React.ReactNode
}

export default function ArtDetailsModal({ id, title, children }: ModalProps) {

    return (

        <div className="modal" tabindex="-1" id={id}>
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}