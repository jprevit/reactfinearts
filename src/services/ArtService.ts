import { AppState } from "../AppState";
import { Artwork } from "../models/Artwork";
import { api } from "./AxiosService";

class ArtService {


    setActive(artId: string) {
        let artToSet = AppState.artworks.find(art => art.id == artId)
        if (!artToSet) { return }
        console.log('artToSet', artToSet);
        AppState.activeArt = artToSet
        console.log('activeArt', AppState.activeArt);
    }
    async admireArt(artId: string) {
        await api.post(`api/artworks/${artId}/admire`)
        console.log('admired', artId);
        this.getArt()
    }

    async changePage(inc: number) {
        let response = await api.get(`api/artworks?page=${inc}`)
        // console.log('change page response', response.data);
        const arts = response.data.artworks.map((art: Artwork) => new Artwork(art))
        // console.log('arts', arts);
        AppState.artworks = arts
        AppState.currentPage = response.data.page
    }

    async getArt() {
        let response = await api.get('api/artworks')
        console.log('get response', response.data);
        AppState.artworks = response.data.artworks.map((art: Artwork) => new Artwork(art))
        // console.log('appstate', AppState.artworks);
        AppState.currentPage = response.data.page
        AppState.maxPages = response.data.pages
        console.log('page response', response.data.page)
        console.log('page state', AppState.currentPage);
    }



}

export const artService = new ArtService