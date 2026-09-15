package com.hyperion_hoard.Unit_2_Final_Project.models;
import jakarta.persistence.*;

import java.util.ArrayList;
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
    private List<ImageSets> imageSets = new ArrayList<>();

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "imageCategory", orphanRemoval = true)
    private List<Image> images = new ArrayList<>();

    // Constructors
    public ImageCategories() {}

    public ImageCategories(String categoryName, List<ImageSets> imageSets, List<Image> images) {
        this.categoryName = categoryName;
        this.imageSets = imageSets;
        this.images = images;
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

    public List<ImageSets> getImageSets() { return imageSets; }

    public void setImageSets(List<ImageSets> imageSets) { this.imageSets = imageSets; }

    public void setImages(List<Image> images) { this.images = images; }

    // Helper method to add an image set to the category
    public void addImageSet(ImageSets imageSet) {
        imageSets.add(imageSet);
        imageSet.setImageCategory(this);
    }

    // Helper method to add an image to the category
    public void addImage(Image image) {
        images.add(image);
        image.setImageCategory(this);
    }

}