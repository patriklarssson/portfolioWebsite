
import React, { Suspense, useEffect, useState, useRef, Children } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Theme, Typography } from '@material-ui/core'
import { useStore } from '~/store/StoreContext'
import { observer } from 'mobx-react-lite'
import { Grid, Slug, Fade } from 'mauerwerk'
import { useHistory, useLocation } from "react-router-dom";
import GitHubIcon from '@material-ui/icons/GitHub'

import Socials from '~/models/Socials'

const useStyles = makeStyles((theme: Theme) => {
    return {
        cell: {
            position: "relative",
            backgroundSize: "cover",
            width: "100%",
            height: "100%",
            maxHeight: "100vh",
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
            height: "100%",
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
        '@keyframes pulse': {
            "0%": {
                transform: "scale(1)",
                boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.5)"
            },
            "50%": {
                transform: "scale(1.05)",
                boxShadow: "20px 20px 20px rgba(0, 0, 0, 0.5)"
            },
            "100%": {
                transform: "scale(1)",
                boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.5)"
            }
        },
        circle: {
            animationIterationCount: "infinite",
            animationName: "$pulse",
            animationDuration: "3s",
            animationFillMode: "both",

            position: "absolute",
            top: "calc(50% - 140px)",
            left: "calc(50% - 140px)",
            width: 280,
            height: 280,
            borderRadius: "50%",
            boxShadow: "0px 20px 60px -10px rgba(0, 0, 0, 0.2)",
            "&:hover": {
                cursor: "pointer"
            }
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

export default ((props: { data: Socials[], columns: number, margin?: number, height: number }) => {
    const classes = useStyles()

    const history = useHistory()

    return (
        <div
        className={classes.cell}
        style={{ backgroundImage: 'linear-gradient(to top, #FAFBFC 0%, #2B3137 100%)' }}
        >
        <Fade show={true} delay={400}>
            <div className={classes.details}>
                <Slug delay={600}>
                    <div className={classes.circle} style={{}}>
                    <GitHubIcon onClick={() => window.open("https://github.com/patriklarssson", "_blank")} style={{ color: "black", width: "100%", height: "100%" }} />
                    </div>
                    <div className={classes.close}>
                        <h1 style={{ cursor: 'pointer' }} id="closeme" onClick={() => history.push("/")} >CLOSE</h1>
                    </div>
                    <Typography style={{ color: "black" }} variant="h1">Github</Typography>
                    <Typography variant="body1">HASDU AS D SAD SADK AD</Typography>
                </Slug>
            </div>
        </Fade>
        </div>
    )
})
