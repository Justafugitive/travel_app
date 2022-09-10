import {CssBaseline, Grid } from '@material-ui/core';

import Header from './components/Header/header.jsx';
import List from './components/List/list.jsx';
import Map from './components/Map/map.jsx';

const App = () => {
    return (
        <>
        <CssBaseline />
        <Header />
        <Grid container spacing={3} style={{width: '100%'}}>
            <Grid item xs={12} md={4}>
                <List />
            </Grid>
            <Grid item xs={12} md={8}>
                <Map />
            </Grid>
        </Grid>
        </>
    );
}

export default App;