export default class Set {

    constructor(id, categoryId, setName) {
        
        this.id = id;
        this.categoryId = categoryId;
        this.setName = setName;

    }

    getId() {
        
        return `${this.id}`;
        
    }

    getCategoryId() {
        
        return `${this.categoryId}`;
        
    }

    getSetName() {

        return `${this.setName}`;

    }

}