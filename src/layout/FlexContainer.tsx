import React, { Suspense, useEffect, useState, useRef } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Theme, Typography } from '@material-ui/core'
import { useStore } from '~/store/StoreContext'
import { observer } from 'mobx-react-lite'
import { Container } from '~/models/layout'

const useStyles = makeStyles((theme: Theme) => {
    return {
        container: props => ({
            display: "flex",
            backgroundColor: "blue",
            height: "100%",
            width: "100%",
            flexDirection: props.flexDirection ? props.flexDirection : "row",
            
        }),
    }
})

export default observer((props: {    
    flexDirection?: "row" | "row-reverse" | "column" | "column-reverse",
    children
}) => {
    const classes = useStyles(props)

    return (
        <div className={classes.container}>
            {props.children}
        </div >
    )
})

