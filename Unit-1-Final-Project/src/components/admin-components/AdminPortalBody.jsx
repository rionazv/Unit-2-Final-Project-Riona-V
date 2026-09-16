import { Link } from 'react-router'

export default function AdminPortalBody() {

    return(

        <section id="admin-portal-body-section">

            <section id="admin-navigation-section">

                <h3>Welcome to Ai-Chan's quarters! What would you like to do?</h3>

                 
                <button className="admin-navigation-button"><Link to="/admin/sets-manager">Manage Image Sets</Link></button>

                <button className="admin-navigation-button"><Link to="/admin/images-manager">Manage Images</Link></button>

            </section>

        </section>

    )

}