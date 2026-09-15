package com.hyperion_hoard.Unit_2_Final_Project.repositories;
import com.hyperion_hoard.Unit_2_Final_Project.models.ImageCategories;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageCategoriesRepository extends JpaRepository<ImageCategories, Integer> {
}
