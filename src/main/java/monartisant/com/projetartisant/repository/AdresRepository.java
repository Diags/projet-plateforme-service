package monartisant.com.projetartisant.repository;

import monartisant.com.projetartisant.model.Adresse;
import monartisant.com.projetartisant.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin("*")
@RepositoryRestResource
public interface AdresRepository extends JpaRepository<Adresse,Long> {
    List<Adresse> findByPays(String paysName);
}






