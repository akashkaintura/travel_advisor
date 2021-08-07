/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react"
import { CssBaseline, Grid } from "@material-ui/core"

import { getPlacesData } from "./api"

import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'

const app = () => {
    
  const [places, setPlaces] = useState([])
  
  const [coordinates, setCoordinates] = useState({lat:0, lng:0});
  const [bounds, setBounds] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords:{latitude, longitude} }) => {
            setCoordinates({lat:latitude, lng: longitude})
        })
    }, []);

    useEffect(() => {
        console.log(bounds.sw, bounds.ne);
        getPlacesData().then((data) => {
            console.log(data)
            setPlaces(data)
        })
        return () => { }
    }, [coordinates, bounds]);
 
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
                  <List places={ places }/>
        </Grid>
        <Grid item xs={12} md={8} >
            <Map
                setCoordinates={setCoordinates}
                      setBounds={setBounds}
                      coordinates={coordinates}
            />
        </Grid>
      </Grid>
    </>
  )
}

export default app;
