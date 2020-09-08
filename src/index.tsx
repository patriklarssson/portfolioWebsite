import React from 'react'
import ReactDOM from 'react-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import App from './App'
import { createStore } from './store/Store'
import { StoreContext } from './store/StoreContext'
import 'mobx-react-lite/batchingForReactDom'


const mobxStore = createStore()

const palette = { main: "#000000", light: "#171a1a", dark: "#0b0c0d" }

const theme = createMuiTheme({
	palette: {
		primary: {
			main: palette.main,
			light: palette.light,
			dark: palette.dark
		},
		secondary: {
			main: "#F4CEA4",
			light: "#FFE7CD",
			dark: "#CD9D6A"
		},
	},
	overrides: {
		MuiTypography: {
			root: {
				color: "white",
				fontFamily: "helvetica"
			}
		},
		MuiPaper: {
			root: {
				backgroundColor: palette.light
			}
		},
		MuiTableRow: {
			head: {
				background: "rgba(0,0,0,0) !important",
			},
			root: {
				"&:hover": {
					background: "rgba(0,0,0,.04)",
				}
			},
		},
		MuiSvgIcon: {
			colorAction: { color: "rgb(16, 110, 190)" }
		},
		MuiListItem: {
			root: {
				"&$selected": {
					backgroundColor: "rgba(0, 0, 0, 0.06) !important",
					borderLeft: "4px solid #F4B2A4"
				}
			}
		}
	}
})

const InitApp = () => {
	return (
		<StoreContext.Provider value={mobxStore}>
			<MuiThemeProvider theme={theme}>
				<React.Fragment>
					<CssBaseline />
					<App />
				</React.Fragment>
			</MuiThemeProvider>
		</StoreContext.Provider>
	)
}

ReactDOM.render(<InitApp />, document.querySelector("#app"))

declare var module
if (module.hot) {
	module.hot.accept()
}