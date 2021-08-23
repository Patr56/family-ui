import React from 'react'
import { Switch, Route } from 'react-router-dom'

import BioPage from './bio/BioPage'
import GalleryPage from './gallery/GalleryPage'
import MapPage from './map/MapPage'
import TreePage from './tree/TreePage'
import NoMatchPage from './nomatch/NoMatchPage'

export default function Page() {
    return (
        <main className="main">
            <Switch>
                <Route exact path="/">
                    <TreePage />
                </Route>
                <Route path="/bio/:userId/:id">
                    <BioPage />
                </Route>
                <Route path="/gallery/:userId/:id">
                    <GalleryPage />
                </Route>
                <Route path="/map/:userId/:id">
                    <MapPage />
                </Route>
                <Route path="*">
                    <NoMatchPage />
                </Route>
            </Switch>
        </main>
    )
}
