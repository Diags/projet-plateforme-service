package monartisant.com.projetartisant.repository;

import monartisant.com.projetartisant.model.UserAgenda;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface AgendaRepository  extends JpaRepository<UserAgenda, Long> {
}
