import React, { Suspense } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home, Test } from './views';

const useStyles = makeStyles((theme: Theme) => {
    return {
        container: {
            flex: 1,
            // padding: "0 20% 0 20%",       
        },
        appContainer: {
            backgroundColor: theme.palette.primary.dark,
            height: "100%",
            display: "flex",
            flex: "1",
            flexDirection: "column",
        },
    }
})

export default (() => {
    const classes = useStyles()

    return (                
                <Router>
                    <Route exact path='/' component={Home} />
                    <Route path='/test' component={Test} />
                </Router>
    )
})
