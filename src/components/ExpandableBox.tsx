
import React, { Suspense, useEffect, useState, useRef, Children } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Theme, Typography } from '@material-ui/core'
import { useStore } from '~/store/StoreContext'
import { observer } from 'mobx-react-lite'
import { Grid, Slug, Fade } from 'mauerwerk'
import { useHistory, useLocation } from "react-router-dom";


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

window.onhashchange = function () {
    console.log("back");

}

var c = 0
var d = 0
const Cell = ({ toggle, name, height, description, css, maximized, classes, icon, openBox }) => {
    const history = useHistory()
    const location = useLocation()

    const open = () => {
        if (c == 0) {
            c = 1
            d = 0
            window.history.pushState(null, null, name.toLowerCase())
            !maximized ? toggle(name) : undefined
        }
    }
    const close = () => {
        d = 1
        toggle(name)
        history.push("/");
    }

    useEffect(() => {
        if (location.pathname == "/") {

            if (c != 0 && d == 0) {
                try {
                    document.getElementById("closeme").click()
                } catch (error) {
                    history.push("/");

                }

            }

            c = 0
        }
        else {
            if (name == openBox)
                toggle(openBox)
        }
    }, [location])


    return (
        <div
            className={classes.cell}
            style={{ backgroundImage: css, cursor: !maximized ? 'pointer' : 'auto' }}
            onClick={e => open()}>
            <Fade show={maximized} delay={maximized ? 400 : 0}>
                <div className={classes.details}>
                    <Slug delay={600}>
                        <div className={classes.circle} style={{}}>
                            {icon}
                        </div>
                        <div className={classes.close}>
                            <h1 style={{ cursor: 'pointer' }} id="closeme" onClick={e => close()} >CLOSE</h1>
                        </div>
                        <Typography style={{ color: "black" }} variant="h1">{name}</Typography>
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
                <div className={classes.default}>
                    <Typography variant="h2">{name}</Typography>
                </div>
            </Fade>
        </div>
    )
}

export default ((props: { data: Socials[], columns: number, margin?: number, height: number, openBox?: string }) => {
    const classes = useStyles()

    return (
        <Grid
            data={props.data}
            keys={d => d.name}
            heights={props.height}
            columns={props.columns}
            margin={props.margin}
            lockScroll={true}
            closeDelay={0}>
            {(data, maximized, toggle) => (
                <Cell {...data} maximized={maximized} toggle={toggle} classes={classes} openBox={props.openBox} />
            )}
        </Grid>
    )
})











// import React, { Suspense, useEffect, useState, useRef, Children } from 'react'
// import { makeStyles } from '@material-ui/styles'
// import { Theme, Typography } from '@material-ui/core'
// import { useStore } from '~/store/StoreContext'
// import { observer } from 'mobx-react-lite'
// import { Grid, Slug, Fade } from 'mauerwerk'
// import { useHistory, useLocation } from "react-router-dom";


// import Socials from '~/models/Socials'

// const useStyles = makeStyles((theme: Theme) => {
//     return {
//         cell: {
//             position: "relative",
//             backgroundSize: "cover",
//             width: "100%",
//             height: "100%",
//             maxHeight: "100vh",
//             overflow: "hidden",
//             color: "#777777",
//             textTransform: "uppercase",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             boxShadow: "0px 10px 60px -10px rgba(0, 0, 0, 0.2)",
//             transition: "box-shadow 0.5s",
//             fontSize: 10,
//             lineHeight: 10,
//         },
//         main: {
//             position: "relative",
//             width: "100%",
//             height: "100%",
//             display: "flex",
//             flexDirection: "column",
//         },
//         details: {
//             position: "absolute",
//             bottom: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             background: "#ffffffa0",
//             color: "white",
//             padding: 40,
//             fontWeight: 100,
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "flex-end",
//         },
//         '@keyframes pulse': {
//             "0%": {
//                 transform: "scale(1)",
//                 boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.5)"
//             },
//             "50%": {
//                 transform: "scale(1.05)",
//                 boxShadow: "20px 20px 20px rgba(0, 0, 0, 0.5)"
//             },
//             "100%": {
//                 transform: "scale(1)",
//                 boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.5)"
//             }
//         },
//         circle: {
//             animationIterationCount: "infinite",
//             animationName: "$pulse",
//             animationDuration: "3s",
//             animationFillMode: "both",

//             position: "absolute",
//             top: "calc(50% - 140px)",
//             left: "calc(50% - 140px)",
//             width: 280,
//             height: 280,
//             borderRadius: "50%",
//             boxShadow: "0px 20px 60px -10px rgba(0, 0, 0, 0.2)",
//             "&:hover": {
//                 cursor: "pointer"
//             }
//         },
//         close: {
//             position: "absolute",
//             top: 40,
//             right: 40,
//             fontsize: 26,
//             color: "#777777",
//         },
//         default: {
//             position: "absolute",
//             width: "100%",
//             height: "100%",
//             display: "flex",
//             alignitems: "flex-end",
//             justifycontent: "center",
//             padding: 20,
//         },
//     }
// })


// const Cell = ({ toggle, name, height, description, css, maximized, classes, icon }) => {
//     const location = useLocation()
//     useEffect(() => {
//         toggle("Github")
//     }, [location])

//     return (
//         <div
//             className={classes.cell}
//             style={{ backgroundImage: css, cursor: !maximized ? 'pointer' : 'auto' }}
//             onClick={toggle}>
//             <Fade show={true} delay={maximized ? 400 : 0}>
//                 <div className={classes.details}>
//                     <Slug delay={600}>
//                         <div className={classes.circle} style={{}}>
//                             {icon}
//                         </div>
//                         <div className={classes.close}>
//                             <h1 style={{ cursor: 'pointer' }} id="closeme" onClick={e => close()} >CLOSE</h1>
//                         </div>
//                         <Typography style={{ color: "black" }} variant="h1">{name}</Typography>
//                         <Typography variant="body1">{description}</Typography>
//                     </Slug>
//                 </div>
//             </Fade>
//             <Fade
//                 show={true}
//                 from={{ opacity: 0, transform: 'translate3d(0,140px,0)' }}
//                 enter={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
//                 leave={{ opacity: 0, transform: 'translate3d(0,-50px,0)' }}
//                 delay={0}>
//                 <div className={classes.default}>
//                     <Typography variant="h2">{name}</Typography>
//                 </div>
//             </Fade>
//         </div>
//     )
// }

// export default ((props: { data: Socials[], columns: number, margin?: number, height: number }) => {
//     const classes = useStyles()

//     return (
//         <Grid
//             data={props.data}
//             keys={d => d.name}
//             heights={props.height}
//             columns={props.columns}
//             margin={props.margin}
//             lockScroll={true}
//             closeDelay={0}>
//             {(data, maximized, toggle) => (
//                 <Cell {...data} maximized={maximized} toggle={toggle} classes={classes} />
//             )}
//         </Grid>
//     )
// })
