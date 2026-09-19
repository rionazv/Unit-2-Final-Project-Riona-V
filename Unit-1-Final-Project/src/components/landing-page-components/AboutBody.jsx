export default function AboutBody() {
    
    return(

        <section id="about-body-section">

            <img className="big-display-valk" src="/misc/Vita.png" alt="Valkyrie splash." />

            <section className="landing-page-info">

                <div className="info-blurb">

                    <h2>About this project</h2>

                    <h3>What is Honkai Impact 3rd?</h3>
                    <p>
                        Honkai Impact 3rd is a Chinese mobile ARPG (and at this point, visual novel) released in 2018 and developed by Hoyoverse.
                        It follows the lives of valkyrie-in-training Kiana and her friends as they fight the alien Honkai invasion of Earth.
                        You can enter story and combat as one of over 100 valkyrie battlesuits.
                    </p>

                    <h3>Why create this?</h3>
                    <p>
                        At time of writing, Honkai Impact 3rd is about to celebrate its 10th anniversary. I have been here since before the first. <br />
                        HI3 has always had a large playerbase, but the global playerbase outside of China has always been quite small.
                        Unlike larger games, the global datamining, archiving, and asset preservation efforts have been rather sparse.
                        Therefore, I'd like to preserve what I can, even if I can't mine assets directly from the game. <br />
                        I'm focused on collecting things that I and others commonly search for but may have to dig through various wikis or SNS posts to find;
                        mainly things like stickers, wallpapers, CGs, and perhaps in the future, outfit concept designs.
                        I hope to make it very simple to find exactly what fans are looking for and to download them directly without digging through several sites.
                    </p>

                </div>

                <div className="info-blurb">
                    <h2>About Captain</h2>
                    <p>
                        Server: NA <br /><br />
                        Captain since: 06/04/2018 <br /><br />
                        Favorites: Herrscher trio, Mobius, Pardofelis, Griseo, Susannah, PROMETHEUS, Coralie, Helia, Vita <br /><br />
                        Battlesuits owned: 99/101
                    </p>

                    <p className="aside"><i>Someone appreciates me. —PROMETHEUS</i></p>
                </div>

                <div className="info-blurb">

                    <h2>Contact</h2>

                    <p>Questions? Suggestions? Want a grand account tour?</p>

                    <form action="">
                        <label htmlFor="captname">Captain Name: </label> <br />
                        <input type="text" id="captname" title="Captain Name"/> <br /><br />
                        <label htmlFor="msg">Message: </label> <br />
                        <textarea id="msg" title="Message" cols={21}/> <br /><br />
                        <input type="submit" value="Submit"/>
                    </form>

                </div>

            </section>

        </section>

    )

}