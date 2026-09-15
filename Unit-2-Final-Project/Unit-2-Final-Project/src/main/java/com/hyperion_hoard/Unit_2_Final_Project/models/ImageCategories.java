package com.hyperion_hoard.Unit_2_Final_Project.models;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "image_categories")
public class ImageCategories {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "category_name")
    private String categoryName;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "imageCategory", orphanRemoval = true)
    private List<Image> images;

    // Constructors
    public ImageCategories() {}

    public ImageCategories(String categoryName) {
        this.categoryName = categoryName;
    }

    // Getters and setters
    public int getId() {
        return id;
    }

    public void setId(int id) { this.id = id; }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public List<Image> getImages() { return images; }

    public void setImages(List<Image> images) { this.images = images; }
}