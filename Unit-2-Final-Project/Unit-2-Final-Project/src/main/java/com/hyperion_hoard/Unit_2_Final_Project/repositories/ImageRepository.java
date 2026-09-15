package com.hyperion_hoard.Unit_2_Final_Project.repositories;
import com.hyperion_hoard.Unit_2_Final_Project.models.Image;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository<Image, Integer> {
}
