import React, { useState } from "react";
import jsonp from "jsonp";
import { withRouter, RouteComponentProps } from "react-router-dom";

import Gallery from "../../gallery/Gallery";
import { INavigationProps } from "../../../models/Models";

import "./GalleryPage.css";

interface IGalleryPageRoute extends INavigationProps {

}

function loadPhotos(cb: (photos: any) => void) {
    const urlParams: { [name: string]: string } = {
        api_key: '455b5e2fa6b951f9b9ab58a86d5e1f8a',
        photoset_id: '72157708141247864',
        user_id: '146659101@N08',
        format: 'json',
        per_page: '15',
        extras: 'url_m,url_c,url_l,url_h,url_o',
    };

    let url = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos';
    url = Object.keys(urlParams).reduce((acc, item) => {
        return acc + '&' + item + '=' + urlParams[item];
    }, url);

    jsonp(url, { name: 'jsonFlickrApi' }, (err: any, data: any) => {
        let photos = data.photoset.photo.map((item: any) => {
            return {
                src: item.url_l,
                width: parseInt(item.width_o),
                height: parseInt(item.height_o),
                title: item.title,
                alt: item.title,
                key: item.id,
                srcSet: [
                    `${item.url_m} ${item.width_m}w`,
                    `${item.url_c} ${item.width_c}w`,
                    `${item.url_l} ${item.width_l}w`,
                    `${item.url_h} ${item.width_h}w`,
                ],
                sizes: '(min-width: 240px) 25vw, (min-width: 512px) 15vw, 100vw',
            };
        });

        cb(photos);
    })

}

export function GalleryPage(prop: RouteComponentProps<IGalleryPageRoute>) {
    const [photos, setPhotos] = useState([]);

    loadPhotos(photos => setPhotos(photos))

    return (
        <div className="gallery">
            <h2 className="gallery_header">Галерея {prop.match.params.userId} с кодом {prop.match.params.id}</h2>
            <div className="gallery_body">
                <Gallery photos={photos} />
            </div>
        </div>);
}

export default withRouter(GalleryPage);