import { useEffect, useState } from "react";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { artService } from "../services/ArtService";
import { AppState } from "../AppState";
import ArtList from "../components/Artlist";
import { observer } from "mobx-react";
import ArtDetailsModal from "../components/ArtDetailsModal";
import ArtCard from "../components/ArtCard";

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

  // const ArtModalContent = () => (
  //   AppState.activeArt ? <ArtCard art={AppState.activeArt} : <div></div>
  // )

  return (
    <div className="home-page">
      <div className="container-fluid my-3">
        <div className="row">
          <ArtList artworks={AppState.artworks} />
        </div>
      </div>
      <ArtDetailsModal id="artDetailsModal" title={AppState.activeArt?.description || ''} />
    </div>

  )
}

export default observer(HomePage)

