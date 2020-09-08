import React, { Suspense, useEffect, useState, useRef } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Theme, Typography } from '@material-ui/core'
import { useStore } from '~/store/StoreContext'
import { observer } from 'mobx-react-lite'
import { FlexContainer, FlexContent } from '~/layout'

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

            <FlexContainer flexDirection="column">
                <FlexContainer flexDirection="column-reverse">
                    <FlexContent backgroundColor="red" flex={1} ><h1>1</h1></FlexContent>
                    <FlexContent backgroundColor="blue" flex={1} ><h1>2</h1></FlexContent>
                </FlexContainer>
            </FlexContainer>
        </div >
    )
})
