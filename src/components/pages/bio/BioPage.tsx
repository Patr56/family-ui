import React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import './BioPage.css'

import { INavigationProps } from '../../../models/Models'

interface IBioPageRoute extends INavigationProps {}

const markdown = `
This block of Markdown contains <a href="https://en.wikipedia.org/wiki/HTML">HTML</a>, and will require the <code>html-parser</code> 
AST plugin to be loaded, in addition to setting the <code class="prop">escapeHtml</code> property to false.
`

export function BioPage(prop: RouteComponentProps<IBioPageRoute>) {
    return (
        <div className="bio">
            <h2 className="bio_header">
                Биография для пользователя {prop.match.params.userId}
            </h2>
            <div className="bio_body">{markdown}</div>
        </div>
    )
}

export default withRouter(BioPage)
