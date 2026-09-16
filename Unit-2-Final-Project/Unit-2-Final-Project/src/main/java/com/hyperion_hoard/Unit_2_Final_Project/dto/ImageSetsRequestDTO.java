package com.hyperion_hoard.Unit_2_Final_Project.dto;

public class ImageSetsRequestDTO {

    private int imageCategoryId;
    private String setName;

    public ImageSetsRequestDTO() {

    }

    public ImageSetsRequestDTO(int imageCategoryId, String setName) {
        this.imageCategoryId = imageCategoryId;
        this.setName = setName;
    }

    public int getImageCategoryId() {
        return imageCategoryId;
    }

    public String getSetName() {
        return setName;
    }
}
