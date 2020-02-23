import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

interface IMapRoute {
    id: string
}

export function Map(prop: RouteComponentProps<IMapRoute>) {
    return <h2>Карта для {prop.match.params.id}</h2>;
}

export default withRouter(Map)