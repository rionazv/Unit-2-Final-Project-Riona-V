package com.hyperion_hoard.Unit_2_Final_Project.controllers;
import com.hyperion_hoard.Unit_2_Final_Project.models.Image;
import com.hyperion_hoard.Unit_2_Final_Project.repositories.ImageRepository;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/images")
public class ImageController {

    @Autowired
    private ImageRepository imageRepository;

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
    public Image createImage(@RequestBody Image image) {
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
