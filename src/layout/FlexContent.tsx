import React, { Suspense, useEffect, useState, useRef, Children } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Theme, Typography } from '@material-ui/core'
import { useStore } from '~/store/StoreContext'
import { observer } from 'mobx-react-lite'

const useStyles = makeStyles((theme: Theme) => {
    return {
        content: props => ({
            flex: props.flex ? props.flex : 1,
            backgroundColor: props.backgroundColor ? props.backgroundColor : "red",
            display: "flex",
            justifyContent: props.justifyContent ? props.justifyContent : "center",
            alignItems: props.alignItems ? props.alignItems : "center"
        }),
        cell: {
            position: "relative",
            backgroundSize: "cover",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            color: "#777777",
            textTransform: "uppercase",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0px 10px 60px -10px rgba(0, 0, 0, 0.2)",
            transition: "box-shadow 0.5s",
            fontSize: 10,
            lineHeight: 10,
        },
        main: {
            position: "relative",
            width: "100%",
            height: 100,
            display: "flex",
            flexDirection: "column",
        },
        details: {
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "#ffffffa0",
            color: "white",
            padding: 40,
            fontWeight: 100,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
        },
        circle: {
            position: "absolute",
            top: "calc(50% - 140px)",
            left: "calc(50% - 140px)",
            width: 280,
            height: 280,
            borderRadius: "50%",
            boxShadow: "0px 20px 60px -10px rgba(0, 0, 0, 0.2)",
        },
        close: {
            position: "absolute",
            top: 40,
            right: 40,
            fontsize: 26,
            color: "#777777",
        },
        default: {
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            alignitems: "flex-end",
            justifycontent: "center",
            padding: 20,
        },
    }
})

export default observer((props: { 
    flex?: number,
    backgroundColor?: string,
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "initial" | "inherit",
    alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch" | "initial" | "inherit",
    onClick?: any,
    children
 }) => {
    const classes = useStyles(props)

    return (
        <div onClick={() => props.onClick()} className={classes.content}>
            {props.children}
        </div >
    )
})






