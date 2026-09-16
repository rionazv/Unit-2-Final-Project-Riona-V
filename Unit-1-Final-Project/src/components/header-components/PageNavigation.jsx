import { Link } from 'react-router'


export default function PageNavigation() {

    return(

        <nav>

            <ul id="page-navigation-ul">
                <Link to="/"><li className="page-navigation-list">Home</li></Link>
                <Link to="/about"><li className="page-navigation-list">About</li></Link>
                <Link to="/assets"><li className="page-navigation-list">Stickers</li></Link>
            </ul>

        </nav>

    );

}