package rs.ac.singidunum.projekatispit.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import rs.ac.singidunum.projekatispit.model.Category;

//konekcija sa bazom podataka - mapping
public interface CategoryRepository extends JpaRepository<Category, Long>{

	Category findByName(String name);
}
