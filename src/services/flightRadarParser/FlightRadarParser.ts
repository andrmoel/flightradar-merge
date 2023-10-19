import fs from 'fs';
import {XMLParser} from 'fast-xml-parser';
import {KmlData} from './types/KmlTypes';

export default class FlightRadarParser {
    private kmlData: KmlData;

    public constructor(flightRadarKmlFile: string) {
        const xmlString = fs.readFileSync(flightRadarKmlFile, 'utf-8');

        const parser = new XMLParser();
        this.kmlData = parser.parse(xmlString);
    }

    public getRouteCoordinates(): Array<string> {
        const folders = this.kmlData.kml.Document.Folder;

        if (!folders) {
            throw Error('No folder found. Not a valid flightradar kml');
        }

        const routesFolder = folders.find((folder) => folder.name === 'Route');

        if (!routesFolder) {
            throw Error('No routes folder found. Not a valid flightradar kml');
        }

        return routesFolder.Placemark.map((placepark) => placepark.Point.coordinates);
    }
}
