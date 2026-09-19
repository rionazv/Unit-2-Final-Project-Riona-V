export default function Modal(props) {
    

    return(

        <div className="screen-cover" onClick={ () => props.setShowModal(false)}> {/* You can click off the modal to close it.*/}
            
            <section id="modal">

                    <div id="modal-close-div">
                        
                        <div id="modal-title"><p>Item Details</p></div>
                        
                        <div id="modal-close-btn-div"><button id="modal-close-btn" onClick={ () => props.setShowModal(false)}>X</button></div>
                        
                    </div>

                    {/* MODAL DATA */}
                    <div id="modal-body-div">

                        <img id="modal-image" src={props.src} alt={props.alt} />

                        <div id="modal-information">

                            <p>{props.alt}</p>

                        </div>

                    </div>

                    <div id="modal-download-div">

                        <button><a href={props.src} target="_blank" download="sticker.png">Download</a></button>

                    </div>

            </section>

        </div>  

    );
    
    
}