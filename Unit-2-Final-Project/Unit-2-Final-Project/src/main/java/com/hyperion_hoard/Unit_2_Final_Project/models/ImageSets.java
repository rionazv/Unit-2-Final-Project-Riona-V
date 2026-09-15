package com.hyperion_hoard.Unit_2_Final_Project.models;
import jakarta.persistence.*;

@Entity
@Table(name = "image_sets")
public class ImageSets {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "set_name")
    private String setName;

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
