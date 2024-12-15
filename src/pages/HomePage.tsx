import { useEffect } from "react";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { artService } from "../services/ArtService";
import { AppState } from "../AppState";
import ArtList from "../components/ArtList";
import { observer } from "mobx-react";
import ArtDetailsModal from "../components/ArtDetailsModal";
import Pagination from "../components/Pagination";

function HomePage() {

  async function getArt() {
    try {
      await artService.getArt()
    }
    catch (error) {
      logger.error(error)
      Pop.error(error as Error, 'Get Art');
    }
  }

  useEffect(() => {
    getArt()
  }, [])

  return (
    <div className="home-page">
      <div className="container-fluid my-3">
        <div className="row">
          <ArtList artworks={AppState.artworks} />
          <Pagination />
        </div>
      </div>
      <ArtDetailsModal id="artDetailsModal" title={AppState.activeArt?.description || ''} />
    </div>

  )
}

export default observer(HomePage)

