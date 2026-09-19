import { valkData } from "../../mock-data/valkData";
import IndividualValkIcon from "./IndividualValkIcon";

export default function NavIcons() {

    // This function maps across the valkdata file to get the data for every valkyrie and display it in a filter menu.
    return (

        <div id="nav-icons">
            
            {valkData.map( valk => (
            
                            <IndividualValkIcon
                            key={valk.id} 
                            src={valk.url} 
                            alt={valk.characters}
                            title={valk.characters}
                            />
                            
            ))}

        </div>

    );

}

