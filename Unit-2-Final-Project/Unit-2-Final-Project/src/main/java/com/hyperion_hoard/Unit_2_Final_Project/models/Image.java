package com.hyperion_hoard.Unit_2_Final_Project.models;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
@Table(name = "images")
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "image_category_id")
    private ImageCategories imageCategory;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "set_id")
    private ImageSets imageSet;

    @Column(name = "image_url")
    private String imageUrl;

    @Column(name = "image_tags")
    private String imageTags;

    // Constructors, getters, and setters
    public Image() {}

    public Image(ImageCategories imageCategory, ImageSets imageSet, String imageUrl, String imageTags) {
        this.imageCategory = imageCategory;
        this.imageSet = imageSet;
        this.imageUrl = imageUrl;
        this.imageTags = imageTags;
    }

    // Getters and setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public ImageCategories getImageCategory() {
        return imageCategory;
    }

    public void setImageCategory(ImageCategories imageCategory) {
        this.imageCategory = imageCategory;
    }

    public ImageSets getImageSet() { return imageSet; }

    public void setImageSet(ImageSets imageSet) {
        this.imageSet = imageSet;
    }

    public String getImageUrl() { return imageUrl; }

    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }

    public String getImageTags() { return imageTags; }

    public void setImageTags(String imageTags) { this.imageTags = imageTags; }

}
