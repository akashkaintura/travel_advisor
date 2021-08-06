import React from 'react'
import { CssBaseline, Grid } from '@material-ui/core'

import Header from './components/Header/header'
import List from "./components/List/list"
import Map from "./components/Map/map"

function app() {
    return (
      <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{ width: '100%' }}>
                <Grid item xs={12} md={4}>
                    <List />
                </Grid>
                <Grid>
                  <Map />  
                </Grid>
            </Grid>
      </>
    )
}

export default app
