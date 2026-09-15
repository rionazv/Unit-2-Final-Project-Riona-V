package com.hyperion_hoard.Unit_2_Final_Project.models;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "image_sets")
public class ImageSets {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "set_name")
    private String setName;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "imageSet", orphanRemoval = true)
    private List<Image> images;

    // Constructors
    public ImageSets() {}

    public ImageSets(String setName) {
        this.setName = setName;
    }

    // Getters and setters
    public int getId() {
        return id;
    }

    public void setId(int id) { this.id = id; }

    public String getSetName() {
        return setName;
    }

    public void setSetName(String setName) {
        this.setName = setName;
    }

}
