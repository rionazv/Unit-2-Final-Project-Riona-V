import { useState } from "react";
import { stickerData } from "../../mock-data/stickerData.js";
import GalleryItem from "./GalleryItem.jsx";
import Modal from "./Modal.jsx";
import NoResultsNotif from "./NoResultsNotif.jsx";

export default function GalleryBody({galleryState}) {

    // A WHOLE LOT OF USESTATES TO DISPLAY THE MODAL AND INFORMATION BECAUSE I HAD TO GET INFORMATION OUT OF CHILDREN
    const [showModal, setShowModal] = useState(false);
    const [selectedSticker, getSelectedSticker] = useState(null);
    const [selectedDescription, getSelectedDescription] = useState(null);

    // CREATE AN ARRAY THAT WILL UPDATE EVERY RE-RENDER WITH THE CORRECT STICKERS
    let stickersToRender = [];

    // INITIALLY FILL THE ARRAY WITH AEVERYTHING
    if (galleryState === "All") {

        stickersToRender = stickerData;

    } else {

        // WHEN STATE CHANGES, RE-FILL ARRAY
        for(let sticker of stickerData) {

            if(sticker.set === galleryState) {
                stickersToRender.push(sticker);
            }

        }

    }

    // IF NOTHING WAS FOUND IN THE SET, SHOW A MESSAGE TO LET THE USER KNOW
    if(stickersToRender.length === 0) {
        return <NoResultsNotif/>
    }
    
    // RENDER THE ARRAY
    return (

        <main id="gallery-section">
            
            {stickersToRender.map( sticker => (

                <GalleryItem 
                key={sticker.id} 
                src={sticker.url} 
                set = {sticker.set}
                characters={sticker.characters}
                getSelectedSticker={getSelectedSticker}
                getSelectedDescription={getSelectedDescription}
                showModal={showModal}
                setShowModal={setShowModal}
                />
                
            ))}

            {/* Conditionally render the modal. */}
            {showModal && 
            <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            src={selectedSticker}
            alt={selectedDescription}/>}

        </main>

    );

}