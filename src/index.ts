import path from 'path';
import FlightRadarParser from './services/flightRadarParser/FlightRadarParser';

const file = path.join(__dirname, '../files/LH491-327a378e.kml');

const frp = new FlightRadarParser(file);
const coordinates = frp.getRouteCoordinates();

console.log(coordinates);
