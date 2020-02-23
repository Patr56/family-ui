import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

import { INavigationProps } from "../../../models/Models";

import "./Map.css";

interface IMapRoute extends INavigationProps {

}

export function Map(prop: RouteComponentProps<IMapRoute>) {
    return (
        <div className="map">
        <h2 className="map_header">Карта для {prop.match.params.userId} с кодом {prop.match.params.id}</h2>
        <div className="map_body">
        </div>
    </div>
    );
}

export default withRouter(Map)