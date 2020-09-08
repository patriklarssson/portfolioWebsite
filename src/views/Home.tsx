import React, { Suspense, useEffect, useState, useRef } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Theme, Typography } from '@material-ui/core'
import { useStore } from '~/store/StoreContext'
import { observer } from 'mobx-react-lite'
import { FlexContainer, FlexContent } from '~/layout'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ExpandableBox from '~/components/ExpandableBox'

const useStyles = makeStyles((theme: Theme) => {
    return {
        container: {
            backgroundColor: theme.palette.primary.light,
            height: "100%",
            width: "100%",
        },
    }
})

export default observer(() => {
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

            <ExpandableBox />


        </div >
    )
})
