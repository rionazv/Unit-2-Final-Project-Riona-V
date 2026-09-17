package com.hyperion_hoard.Unit_2_Final_Project.controllers;
import com.hyperion_hoard.Unit_2_Final_Project.dto.ImageRequestDTO;
import com.hyperion_hoard.Unit_2_Final_Project.dto.ImageSetsRequestDTO;
import com.hyperion_hoard.Unit_2_Final_Project.models.Image;
import com.hyperion_hoard.Unit_2_Final_Project.models.ImageCategories;
import com.hyperion_hoard.Unit_2_Final_Project.models.ImageSets;
import com.hyperion_hoard.Unit_2_Final_Project.repositories.ImageRepository;
import java.util.List;

import com.hyperion_hoard.Unit_2_Final_Project.repositories.ImageSetsRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/images")
public class ImageController {

    @Autowired
    private ImageRepository imageRepository;

    @Autowired
    private ImageSetsRepository imageSetsRepository;

    public ImageController(ImageRepository imageRepository) {
        this.imageRepository = imageRepository;
    }

    @GetMapping
    public List<Image> getAllImages() {
        return imageRepository.findAll();
    }

    @GetMapping("/{id}")
    public Image getImageById(@PathVariable int id) {
        return imageRepository.findById(id).orElse(null);
    }

    @PostMapping
    public Image createImage(@RequestBody ImageRequestDTO request) {
        ImageSets set = imageSetsRepository.findById(request.getImageSetId())
                .orElseThrow(() -> new EntityNotFoundException("Image set not found"));

        Image image = new Image();
        image.setImageUrl(request.getImageUrl());
        image.setImageTags(request.getImageTags());
        image.setImageSet(set);

        return imageRepository.save(image);
    }

    @PutMapping("/{id}")
    public Image updateImage(@PathVariable int id, @RequestBody Image updatedImage) {
        return imageRepository.findById(id).map(image -> {
            image.setImageUrl(updatedImage.getImageUrl());
            image.setImageTags(updatedImage.getImageTags());
            return imageRepository.save(image);
        }).orElse(null);
    }

    @DeleteMapping("/{id}")
    public void deleteImage(@PathVariable int id) {
        imageRepository.deleteById(id);
    }

}
