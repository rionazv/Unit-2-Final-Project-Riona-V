export default class Image {

    constructor(id, setId, imageUrl, imageTags) {
        
        this.id = id;
        this.setId = setId;
        this.imageUrl = imageUrl;
        this.imageTags = imageTags;

    }

    getId() {
        
        return `${this.id}`;
        
    }

    getsetId() {
        
        return `${this.setId}`;
        
    }

    getImageUrl() {

        return `${this.imageUrl}`;

    }

    getImageTags() {
        return `${this.imageTags}`;
    }

}