import { AppState } from "../AppState"
import { artService } from "../services/ArtService";
import Pop from "../utils/Pop";

function Pagination() {

    let currentPage = AppState.currentPage
    let maxPages = AppState.maxPages

    async function changePage(inc: number) {
        try {
            await artService.changePage(inc)
        }
        catch (error) {
            Pop.error(error as Error);
        }
    }

    return (
        <div className="col-12">
            <div className="row justify-content-around">
                <button disabled={currentPage === 1} onClick={() => (changePage(currentPage - 1))} className="btn btn-primary col-2">Previous</button>
                <button disabled={currentPage === maxPages} onClick={() => (changePage(currentPage + 1))} className="btn btn-primary col-2">Next</button>
            </div>
        </div>
    )
}

export default Pagination