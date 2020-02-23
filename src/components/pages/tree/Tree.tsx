import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

import { INavigationProps } from "../../../models/Models";

import "./Tree.css";

interface ITreeRoute {

}

interface IProps extends RouteComponentProps<ITreeRoute> {

}

export function Tree(prop: IProps) {
    return (
        <div className="tree">
        <h2 className="tree_header">Семейное древо</h2>
        <div className="tree_body">
        </div>
    </div>
    );
}

export default withRouter(Tree)