import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

interface IGalleryRoute {
    id: string
}

export function Gallery(prop: RouteComponentProps<IGalleryRoute>) {
    return <h2>Галерея для {prop.match.params.id}</h2>;
}

export default withRouter(Gallery)