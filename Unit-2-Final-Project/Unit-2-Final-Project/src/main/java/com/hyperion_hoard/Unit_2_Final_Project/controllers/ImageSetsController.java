package com.hyperion_hoard.Unit_2_Final_Project.controllers;
import com.hyperion_hoard.Unit_2_Final_Project.models.ImageSets;
import com.hyperion_hoard.Unit_2_Final_Project.repositories.ImageSetsRepository;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/image-sets")
public class ImageSetsController {

    @Autowired
    private ImageSetsRepository imageSetsRepository;

    public ImageSetsController(ImageSetsRepository imageSetsRepository) {
        this.imageSetsRepository = imageSetsRepository;
    }

    @GetMapping
    public List<ImageSets> getAllImageSets() {
        return imageSetsRepository.findAll();
    }

    @GetMapping("/{id}")
    public ImageSets getImageSetById(@PathVariable int id) {
        return imageSetsRepository.findById(id).orElse(null);
    }

    @PostMapping
    public ImageSets createImageSet(@RequestBody ImageSets imageSet) {
        return imageSetsRepository.save(imageSet);
    }

    @PutMapping("/{id}")
    public ImageSets updateImageSet(@PathVariable int id, @RequestBody ImageSets updatedImageSet) {
        return imageSetsRepository.findById(id).map(imageSet -> {
            imageSet.setSetName(updatedImageSet.getSetName());
            return imageSetsRepository.save(imageSet);
        }).orElse(null);
    }

    @DeleteMapping("/{id}")
    public void deleteImageSet(@PathVariable int id) {
        imageSetsRepository.deleteById(id);
    }

}
