import React from "react"

import useStyles from './placeDetailsStyles'
export default function PlaceDetails(place) {
    return (
        <h1>{place.name}</h1>
    );
}
