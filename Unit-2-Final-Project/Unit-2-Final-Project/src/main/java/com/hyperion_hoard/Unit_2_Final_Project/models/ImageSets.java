package com.hyperion_hoard.Unit_2_Final_Project.models;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "image_sets")
public class ImageSets {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "set_name")
    private String setName;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "image_category_id")
    private ImageCategories imageCategory;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "imageSet", orphanRemoval = true)
    private List<Image> images = new ArrayList<>();

    // Constructors
    public ImageSets() {}

    public ImageSets(String setName, ImageCategories imageCategory) {
        this.setName = setName;
        this.imageCategory = imageCategory;
    }

    // Getters and setters
    public int getId() {
        return id;
    }

    public void setId(int id) { this.id = id; }

    public String getSetName() { return setName; }

    public void setSetName(String setName) {
        this.setName = setName;
    }

    public List<Image> getImages() { return images; }

    public ImageCategories getImageCategory() { return imageCategory; }

    public void setImageCategory(ImageCategories imageCategory) { this.imageCategory = imageCategory; }

    // Helper method to add an image to the set
    public void addImage(Image image) {
        images.add(image);
        image.setImageSet(this);
    }

}
