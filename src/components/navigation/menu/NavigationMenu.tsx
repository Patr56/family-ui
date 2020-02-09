import React, { FunctionComponent } from 'react';

import { IItemMenu, EType } from '../../../models/Models';

import './NavigationMenu.css';

interface IProps {
    items: IItemMenu[];
}

interface IWidgetProps {
    item: IItemMenu;
}

interface IItem {
    className: string;
    ItemWidget: FunctionComponent<IWidgetProps>;
    descriptionConverter?: (description: string) => string;

}

const widgetHandlers: { [key in EType]: IItem } = {
    [EType.BIO]: {
        className: 'menu_logo__book',
        ItemWidget: (props) => {
            return <a className="link" href="#" title={props.item.title}>{props.children}</a>
        }
    },
    [EType.GALLERY]: {
        className: 'menu_logo__gallery',
        ItemWidget: (props) => {
            return <a className="link" href="#" title={props.item.title}>{props.children}</a>
        },
        descriptionConverter: (d) => `${d} шт.`
    },
    [EType.MAP]: {
        className: 'menu_logo__map',
        ItemWidget: (props) => {
            return <a className="link" href="#" title={props.item.title}>{props.children}</a>
        }
    },
    [EType.PHONE]: {
        className: 'menu_logo__phone',
        ItemWidget: (props) => {
            return <a className="link" href={`tel:${props.item.description}`} title={props.item.title}>{props.children}</a>
        },
        descriptionConverter: (d) => d.replace(/(\d)(\d\d\d)(\d\d\d)(\d\d\d\d)/, '$1 ($2) $3 $4')
    },
    [EType.EMAIL]: {
        className: 'menu_logo__email',
        ItemWidget: (props) => {
            return <a className="link" href={`mailto:${props.item.description}`} title={props.item.title}>{props.children}</a>
        },
    },
    [EType.DATE]: {
        className: 'menu_logo__date',
        ItemWidget: (props) => {
            return <a className="link" href="#" title={props.item.title}>{props.children}</a>
        },
    }
}

const NavigationMenu = (props: IProps) => {
    return (
        <ul className="menu">
            {props.items.map(item => {
                const { className, descriptionConverter, ItemWidget } = widgetHandlers[item.type];
                const description = item.description && descriptionConverter ? descriptionConverter(item.description) : item.description;

                return (
                    <li key={item.id} className="menu_item">
                        <ItemWidget item={item}>
                            <div className={`menu_logo ${className}`}></div>
                            <div className="menu_item-name">
                                <div className="menu_item-name-title">{item.title}</div>
                                {description ?
                                    (<div className="menu_item-name-descripton" title={description}>{description}</div>)
                                    : null}
                            </div>
                        </ItemWidget>
                    </li>
                );
            })}
        </ul>
    );
}

export default NavigationMenu;