import { Link } from 'react-router'

export default function AdminPortalBody() {

    return(

        <section className="admin-portal-body-section">

            <section id="admin-navigation-section">

                <h3>Welcome to Ai-Chan's quarters! What would you like to do?</h3>

                 
                <Link to="/admin/sets-manager" className="admin-navigation-button"><button>Manage Image Sets</button></Link>

                <Link to="/admin/images-manager" className="admin-navigation-button"><button>Upload Images</button></Link>

            </section>

        </section>

    )

}