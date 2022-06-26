import {getJSON} from './utilities.js';
// Quake Model
export default class Quake {
    constructor() {
        this.baseUrl = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson';
        // store the last batch of retrieved quakes in the model.
        this._quakes = [];
    }
    async getEarthQuakesByRadius(position, radius = 100) {
        this._quakes = await getJSON(
            this.baseUrl +
            `&starttime=2022-06-01&endtime=2022-06-23&latitude=${position.lat}&longitude=${position.lon}&maxradiuskm=${radius}`
        );
        return this._quakes;
    }
    getQuakeById(id) {
        return this._quakes.features.filter(item => item.id ===id)[0]
    }
}