import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

import { INavigationProps } from "../../../models/Models";

import "./TreePage.css";

interface ITreePageRoute {}

interface IProps extends RouteComponentProps<ITreePageRoute> {}

export function TreePage(prop: IProps) {
  return (
    <div className="tree">
      <h2 className="tree_header">Семейное древо</h2>
      <div className="tree_body"></div>
    </div>
  );
}

export default withRouter(TreePage);
