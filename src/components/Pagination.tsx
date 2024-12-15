import { AppState } from "../AppState"

function Pagination() {

    let currentPage = AppState.currentPage
    let maxPages = AppState.maxPages

    return (
        <div className="col-12">
            <div className="row justify-content-around">
                <button disabled={currentPage === 1} className="btn btn-primary col-2">Previous</button>
                <button disabled={currentPage === maxPages} className="btn btn-primary col-2">Next</button>
            </div>
        </div>
    )
}

export default Pagination