package com.hyperion_hoard.Unit_2_Final_Project.controllers;

import com.hyperion_hoard.Unit_2_Final_Project.models.ImageCategories;
import com.hyperion_hoard.Unit_2_Final_Project.repositories.ImageCategoriesRepository;
import java.util.List;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/image-categories")
public class ImageCategoriesController {

    private final ImageCategoriesRepository imageCategoriesRepository;

    public ImageCategoriesController(ImageCategoriesRepository imageCategoriesRepository) {
        this.imageCategoriesRepository = imageCategoriesRepository;
    }

    @GetMapping
    public List<ImageCategories> getAllImageCategories() {
        return imageCategoriesRepository.findAll();
    }

    @GetMapping("/{id}")
    public ImageCategories getImageCategoryById(@PathVariable int id) {
        return imageCategoriesRepository.findById(id).orElse(null);
    }

    @PostMapping
    public ImageCategories createImageCategory(@RequestBody ImageCategories imageCategory) {
        return imageCategoriesRepository.save(imageCategory);
    }

    @PutMapping("/{id}")
    public ImageCategories updateImageCategory(@PathVariable int id, @RequestBody ImageCategories updatedImageCategory) {
        return imageCategoriesRepository.findById(id).map(imageCategory -> {
            imageCategory.setCategoryName(updatedImageCategory.getCategoryName());
            return imageCategoriesRepository.save(imageCategory);
        }).orElse(null);
    }

    @DeleteMapping("/{id}")
    public void deleteImageCategory(@PathVariable int id) {
        imageCategoriesRepository.deleteById(id);
    }

}
