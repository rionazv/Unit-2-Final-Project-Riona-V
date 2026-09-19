export default class Category {

    constructor(id, categoryName) {
        
        this.id = id;
        this.categoryName = categoryName;

    }

    getId() {
        
        return `${this.id}`;
        
    }

    getCategoryName() {

        return `${this.categoryName}`;

    }

}