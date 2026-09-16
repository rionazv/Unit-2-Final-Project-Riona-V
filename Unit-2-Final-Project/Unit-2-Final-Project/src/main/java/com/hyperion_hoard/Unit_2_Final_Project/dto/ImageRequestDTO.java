package com.hyperion_hoard.Unit_2_Final_Project.dto;

public class ImageRequestDTO
{

    private int imageSetId;
    private String imageUrl;
    private String imageTags;

    public ImageRequestDTO()
    {
    }

    public ImageRequestDTO(int imageSetId, String imageUrl, String imageTags)
    {
        this.imageSetId = imageSetId;
        this.imageUrl = imageUrl;
        this.imageTags = imageTags;
    }

    public int getImageSetId()
    {
        return imageSetId;
    }

    public String getImageUrl()
    {
        return imageUrl;
    }

    public String getImageTags()
    {
        return imageTags;
    }

}
