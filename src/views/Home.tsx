import React, { Suspense, useEffect, useState, useRef } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Theme, Typography } from '@material-ui/core'
import { useStore } from '~/store/StoreContext'
import { observer } from 'mobx-react-lite'
import { FlexContainer, FlexContent } from '~/layout'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ExpandableBox from '~/components/ExpandableBox'
import Socials from '~/models/Socials'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const socials: Socials[] = [
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

const useStyles = makeStyles((theme: Theme) => {
    return {
        container: {
            backgroundColor: theme.palette.primary.light,
            height: "100%",
            width: "100%",
        },
    }
})

export default observer((props: { openBox?: string }) => {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            {/* <FlexContainer flexDirection="column">
                <FlexContainer flexDirection="column-reverse">

                    <FlexContent backgroundColor="red" flex={1} ><h1>1</h1></FlexContent>


                    <FlexContent backgroundColor="blue" flex={1} ><h1>2</h1></FlexContent>
                </FlexContainer>
                <FlexContainer flexDirection="row">
                    <FlexContent backgroundColor="green" flex={1} ><h1>3</h1></FlexContent>
                    <FlexContent backgroundColor="orange" flex={1} ><h1>4</h1></FlexContent>
                </FlexContainer>
            </FlexContainer>
            <FlexContainer flexDirection="column">
                <FlexContainer>
                    <FlexContent backgroundColor="red"><h1>i</h1></FlexContent>
                    <FlexContent backgroundColor="white"><h1>i</h1></FlexContent>
                </FlexContainer>
                <FlexContainer>
                    <FlexContainer>
                        <FlexContent backgroundColor="blue"><h1>i</h1></FlexContent>
                    </FlexContainer>
                    <FlexContainer flexDirection="column">
                        <FlexContent backgroundColor="pink"><h1>i</h1></FlexContent>
                        <FlexContent backgroundColor="orange"><h1>i</h1></FlexContent>
                        <FlexContent backgroundColor="black"><h1>i</h1></FlexContent>
                    </FlexContainer>
                    <FlexContainer>
                        <FlexContent backgroundColor="brown"><h1>i</h1></FlexContent>
                    </FlexContainer>
                </FlexContainer>
                <FlexContainer>
                    <FlexContent backgroundColor="pink"><h1>i</h1></FlexContent>
                    <FlexContent backgroundColor="yellow"><h1>i</h1></FlexContent>
                </FlexContainer>
            </FlexContainer> */}

            <ExpandableBox
                openBox={props.openBox}
                data={socials}
                columns={2}
                height={400}
                margin={50}
            />


        </div >
    )
})
