import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import ReactMarkdown from "react-markdown/with-html";

import "./Bio.css";

interface IBioRoute {
    id: string
}

const markdown = `
This block of Markdown contains <a href="https://en.wikipedia.org/wiki/HTML">HTML</a>, and will require the <code>html-parser</code> 
AST plugin to be loaded, in addition to setting the <code class="prop">escapeHtml</code> property to false.
`


export function Bio(prop: RouteComponentProps<IBioRoute>) {
    return (
        <div className="bio">
            <h2>Биография для {prop.match.params.id}</h2>
            <ReactMarkdown
                source={markdown}
                escapeHtml={false}
            />
        </div>
    );
}

export default withRouter(Bio)