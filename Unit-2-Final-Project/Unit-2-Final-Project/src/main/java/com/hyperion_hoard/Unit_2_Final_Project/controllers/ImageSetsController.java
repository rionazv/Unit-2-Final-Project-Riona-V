package com.hyperion_hoard.Unit_2_Final_Project.controllers;
import com.hyperion_hoard.Unit_2_Final_Project.dto.ImageSetsRequestDTO;
import com.hyperion_hoard.Unit_2_Final_Project.models.ImageCategories;
import com.hyperion_hoard.Unit_2_Final_Project.models.ImageSets;
import com.hyperion_hoard.Unit_2_Final_Project.repositories.ImageCategoriesRepository;
import com.hyperion_hoard.Unit_2_Final_Project.repositories.ImageSetsRepository;
import java.util.List;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/image-sets")
public class ImageSetsController {

    @Autowired
    private ImageSetsRepository imageSetsRepository;

    @Autowired
    private ImageCategoriesRepository imageCategoriesRepository;

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
    public ImageSets createImageSet(@RequestBody ImageSetsRequestDTO request) {
        ImageCategories category = imageCategoriesRepository.findById(request.getImageCategoryId())
                .orElseThrow(() -> new EntityNotFoundException("Category not found"));

        ImageSets imageSet = new ImageSets();
        imageSet.setSetName(request.getSetName());
        imageSet.setImageCategory(category);

        return imageSetsRepository.save(imageSet);
    }

    @PutMapping("/{id}")
    public ImageSets updateImageSet(@PathVariable int id, @RequestBody ImageSetsRequestDTO updatedImageSet) {
        ImageCategories category = imageCategoriesRepository.findById(updatedImageSet.getImageCategoryId())
                .orElseThrow(() -> new EntityNotFoundException("Category not found"));
        return imageSetsRepository.findById(id).map(imageSet -> {
            imageSet.setSetName(updatedImageSet.getSetName());
            imageSet.setImageCategory(category);
            return imageSetsRepository.save(imageSet);
        }).orElse(null);
    }

    @DeleteMapping("/{id}")
    public void deleteImageSet(@PathVariable int id) {
        imageSetsRepository.deleteById(id);
    }

}
