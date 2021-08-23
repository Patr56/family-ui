import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

import { IItemMenu, EType } from "../../../models/Models";

import "./NavigationMenu.css";

interface IProps {
  id: number;
  items: IItemMenu[];
}

interface IWidgetProps {
  id: number;
  item: IItemMenu;
}

interface IItem {
  className: string;
  ItemWidget: FunctionComponent<IWidgetProps>;
  descriptionConverter?: (description: string) => string;
}

const widgetHandlers: { [key in EType]: IItem } = {
  [EType.BIO]: {
    className: "menu_logo__book",
    ItemWidget: (props) => {
      return (
        <NavLink
          className="menu_wrapper link"
          activeClassName="menu_wrapper__active"
          to={`/bio/${props.id}/${props.item.id}`}
          title={props.item.title}
        >
          {props.children}
        </NavLink>
      );
    },
  },
  [EType.GALLERY]: {
    className: "menu_logo__gallery",
    ItemWidget: (props) => {
      return (
        <NavLink
          className="menu_wrapper link"
          activeClassName="menu_wrapper__active"
          to={`/gallery/${props.id}/${props.item.id}`}
          title={props.item.title}
        >
          {props.children}
        </NavLink>
      );
    },
    descriptionConverter: (d) => `${d} шт.`,
  },
  [EType.MAP]: {
    className: "menu_logo__map",
    ItemWidget: (props) => {
      return (
        <NavLink
          className="menu_wrapper link"
          activeClassName="menu_wrapper__active"
          to={`/map/${props.id}/${props.item.id}`}
          title={props.item.title}
        >
          {props.children}
        </NavLink>
      );
    },
  },
  [EType.PHONE]: {
    className: "menu_logo__phone",
    ItemWidget: (props) => {
      return (
        <a
          className="menu_wrapper link"
          href={`tel:${props.item.description}`}
          title={props.item.title}
        >
          {props.children}
        </a>
      );
    },
    descriptionConverter: (d) =>
      d.replace(/(\d)(\d\d\d)(\d\d\d)(\d\d\d\d)/, "$1 ($2) $3 $4"),
  },
  [EType.EMAIL]: {
    className: "menu_logo__email",
    ItemWidget: (props) => {
      return (
        <a
          className="menu_wrapper link"
          href={`mailto:${props.item.description}`}
          title={props.item.title}
        >
          {props.children}
        </a>
      );
    },
  },
  [EType.DATE]: {
    className: "menu_logo__date",
    ItemWidget: (props) => {
      return (
        <a className="menu_wrapper link" href="#none" title={props.item.title}>
          {props.children}
        </a>
      );
    },
  },
};

const NavigationMenu = (props: IProps) => {
  return (
    <ul className="menu">
      {props.items.map((item) => {
        const { className, descriptionConverter, ItemWidget } =
          widgetHandlers[item.type];
        const description =
          item.description && descriptionConverter
            ? descriptionConverter(item.description)
            : item.description;

        return (
          <li key={item.id} className="menu_item">
            <ItemWidget id={props.id} item={item}>
              <div className={`menu_logo ${className}`}></div>
              <div className="menu_item-name">
                <div className="menu_item-name-title">{item.title}</div>
                {description ? (
                  <div
                    className="menu_item-name-descripton"
                    title={description}
                  >
                    {description}
                  </div>
                ) : null}
              </div>
            </ItemWidget>
          </li>
        );
      })}
    </ul>
  );
};

export default NavigationMenu;
