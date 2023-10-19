export type KmlData = {
    kml: Kml;
}

type Kml = {
    Document: Document;
}

type Document = {
    Folder?: Array<Folder>;
}

type Folder = {
    name: string;
    Placemark: Array<Placemark>;
}

type Placemark = {
    name: string;
    description?: string;
    TimeStamp: any;
    Style: any;
    Point: Point;
}

type Point = {
    altitudeMode: 'absolute';
    coordinates: string;
}
