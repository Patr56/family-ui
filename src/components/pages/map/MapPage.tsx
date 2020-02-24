import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

import { INavigationProps } from "../../../models/Models";

import "./MapPage.css";

interface IMapPageRoute extends INavigationProps {

}

export function MapPage(prop: RouteComponentProps<IMapPageRoute>) {
    return (
        <div className="map">
        <h2 className="map_header">Карта для {prop.match.params.userId} с кодом {prop.match.params.id}</h2>
        <div className="map_body">
        </div>
    </div>
    );
}

export default withRouter(MapPage)