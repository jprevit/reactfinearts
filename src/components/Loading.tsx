import React from "react"

export default function Loading() {
    return (
        <div className="loading-spinner justify-content-center align-items-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}