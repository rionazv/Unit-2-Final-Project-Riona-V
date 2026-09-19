export default function GalleryItem(props) {

    // Data has been mapped - store received data into variables for easier use.
    let stickerSource = props.src;
    let stickerSet = props.set;
    let stickerCharacters = props.characters;
    let stickerInformation = `Sticker from the "${stickerSet}" set. Featuring ${stickerCharacters}.`;

    return (

        <div className="gallery-item">

            <img 
                className="sticker"
                src={stickerSource}
                alt={stickerInformation}
                title={stickerCharacters}
                onClick={ (event) => {
                    props.setShowModal(true); {/*Opens up a modal with the clicked image.*/}
                    props.getSelectedSticker(event.target.src); {/*Puts the image into the modal.*/}
                    props.getSelectedDescription(event.target.alt); {/*Puts the image description into the modal.*/}
                }}
            />

            <button id="download-btn">
                <a href={stickerSource} target="_blank" download="sticker.png">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg>
                </a>
            </button>

        </div>

    );

}