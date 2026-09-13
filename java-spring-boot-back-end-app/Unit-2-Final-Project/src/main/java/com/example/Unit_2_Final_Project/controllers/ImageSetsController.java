package com.example.Unit_2_Final_Project.controllers;

import com.example.Unit_2_Final_Project.repositories.ImageSetsRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/image-sets")
public class ImageSetsController {
    // You can add methods to handle requests related to image sets here
    private ImageSetsRepository imageSetsRepository;

    public ImageSetsController(ImageSetsRepository imageSetsRepository) {
        this.imageSetsRepository = imageSetsRepository;
    }
}
