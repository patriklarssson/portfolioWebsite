
import React, { Suspense, useEffect, useState, useRef, Children } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Theme, Typography } from '@material-ui/core'
import { useStore } from '~/store/StoreContext'
import { observer } from 'mobx-react-lite'
import { Grid, Slug, Fade } from 'mauerwerk'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn';

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

const datas = [
    {
        name: 'Linkedin',
        css: 'linear-gradient(to top, #FAFBFC 0%, #2B3137 100%)',
        icon: <LinkedInIcon onClick={() => window.open("https://www.linkedin.com/in/patrik-larsson-0b7369128/", "_blank")} style={{ color: "#0077B5", width: "100%", height: "100%" }} />,
        height: 200,
        description: "hasdu as d sad sadk ad"
    },
    {
        name: 'Github',
        css: 'linear-gradient(to top, #FAFBFC 0%, #2B3137 100%)',
        icon: <GitHubIcon onClick={() => window.open("https://github.com/patriklarssson", "_blank")} style={{ color: "black", width: "100%", height: "100%" }} />,
        height: 200,
        description: "hasdu as d sad sadk ad"
    },
]

const Cell = ({ toggle, name, height, description, css, maximized, classes, icon }) => (
    <div
        className={classes.cell}
        style={{ backgroundImage: css, cursor: !maximized ? 'pointer' : 'auto' }}
        onClick={!maximized ? toggle : undefined}>
        <Fade show={maximized} delay={maximized ? 400 : 0}>
            <div className={classes.details}>
                <Slug delay={600}>
                    <div className={classes.circle} style={{ }}>
                        {icon}
                    </div>
                    <div className={classes.close}>
                        <h1 style={{ cursor: 'pointer' }} onClick={toggle} >CLOSE</h1>
                    </div>
                    <Typography style={{color: "black"}} variant="h1">{name}</Typography>
                    <Typography variant="body1">{description}</Typography>
                </Slug>
            </div>
        </Fade>
        <Fade
            show={!maximized}
            from={{ opacity: 0, transform: 'translate3d(0,140px,0)' }}
            enter={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
            leave={{ opacity: 0, transform: 'translate3d(0,-50px,0)' }}
            delay={maximized ? 0 : 400}>
            <div className={classes.default}>{name}</div>
        </Fade>
    </div>
)

export default (() => {
    const classes = useStyles()

    const [col, setCol] = useState(1)

    const state = { datas, columns: 2, margin: 70, filter: '', height: true }
    const data = state.datas

    return (

        <Grid
            data={data}
            keys={d => d.name}
            heights={200}
            columns={col}
            margin={0}
            lockScroll={true}
            closeDelay={0}>
            {(data, maximized, toggle) => (
                <Cell {...data} maximized={maximized} toggle={toggle} classes={classes} />
            )}
        </Grid>
    )
})
