import React, { useState, useCallback } from 'react'
import PhotoGallery from 'react-photo-gallery'

interface IProps {
    photos: any[]
}

export function Gallery(props: IProps) {
    const [currentImage, setCurrentImage] = useState(0)
    const [viewerIsOpen, setViewerIsOpen] = useState(false)

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index)
        setViewerIsOpen(true)
    }, [])

    const closeLightbox = () => {
        setCurrentImage(0)
        setViewerIsOpen(false)
    }

    return (
        <div className="gallery">
            <PhotoGallery photos={props.photos} onClick={openLightbox} />
        </div>
    )
}

export default Gallery
