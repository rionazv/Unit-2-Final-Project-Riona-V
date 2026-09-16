export default function NoResultsNotif() {

    return(

        // This component displays when no results are found.
        <main id="gallery-section">

            <div id="no-results-notif">
                
                <img src="/misc/prommy.png" alt="Klein found nothing matching those search parameters." />

                <p id="no-results-msg"><i>
                    PROMETHEUS has searched the hoard, but couldn't find anything like that. <br />
                    Try searching for something else.
                </i></p>

            </div>

        </main>

    );

}