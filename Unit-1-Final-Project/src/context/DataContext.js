import { createContext, useEffect, useState } from "react";

import { Category } from "../classes/Category";
import { Set } from "../classes/Set";
import { Image } from "../classes/Image";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {

    // STATES FOR CATEGORIES, SETS, AND IMAGES - FOR NOW WE HAVE NONE
    const [ allCategories, setAllCategories ] = useState(null);
    const [ allSets, setAllSets ] = useState(null);
    const [ allImages, setAllImages ] = useState(null);

    // RUN THIS TO IMMEDIATELY BEGIN FETCHING DATA
    useEffect( () => {

        // FETCH ALL DATA AT ONCE
        const fetchAllData = async () => {

            try {

                // TRY TO FETCH EACH OF THE TABLES' DATA
                const categoriesResponse = await fetch('http://localhost:8080/api/image-categories');
                const setsResponse = await fetch('http://localhost:8080/api/image-sets');
                const imagesResponse = await fetch('http://localhost:8080/api/images');

                // IF A FETCH FAILS
                if ( !categoriesResponse.ok || !setsResponse.ok || !imagesResponse.ok ) {
                    throw new Error("Failed to fetch data from the server.");
                }

                // CONVERT TO JSON
                const categoryData = await categoriesResponse.json();
                const setsData = await setsResponse.json();
                const imagesData = await imagesResponse.json();

                // MAP THE RECEIVED DATA USING THE CLASSES WE CREATED IN THE FRONTEND REPO
                const categoriesList = categoryData.map( (category) =>
                    new Category(category.id, category.categoryName)
                );

                const setsList = setsData.map( (set) =>
                    new Set(set.id, set.imageCategoryId, set.setName)
                );

                const imagesList = imagesData.map( (image) =>
                    new Image(image.id, image.imageSetId, image.imageUrl, image.imageTags)
                );

                // UPDATE THE STATES SO THEY NOW HAVE THE DATA
                setAllCategories(categoriesList);
                setAllSets(setsList);
                setAllImages(imagesList);
            

            } catch (error) {

                console.error(error.message);
                
            }

        }

        // RUN THE FETCHING FUNCTION!!
            fetchAllData();

    }, [allCategories, allImages, allSets]);

    return (

        <DataContext.Provider
        value={{
            allCategories,
            allSets,
            allImages
        }}>

            { children }

        </DataContext.Provider>

    )


}