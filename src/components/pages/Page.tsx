import React from "react";
import { Switch, Route } from "react-router-dom";

import Bio from "./bio/Bio";
import Gallery from "./gallery/Gallery";
import Map from "./map/Map";
import Tree from "./tree/Tree";
import NoMatch from "./nomatch/NoMatch";

export default function Page() {
    return (
        <main className="main">
            <Switch>
                <Route exact path="/">
                    <Tree />
                </Route>
                <Route path="/bio/:userId/:id">
                    <Bio />
                </Route>
                <Route path="/gallery/:userId/:id">
                    <Gallery />
                </Route>
                <Route path="/map/:userId/:id">
                    <Map />
                </Route>
                <Route path="*">
                    <NoMatch />
                </Route>
            </Switch>
        </main>
    );
}