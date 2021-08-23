import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import './App.css'

import Navigation from './components/navigation/Navigation'
import Page from './components/pages/Page'

const App = () => {
    return (
        <Router>
            <div className="layout">
                <Page />
                <Navigation />
            </div>
        </Router>
    )
}

export default App
