package br.com.store.domain.camisa;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CamisaRepository extends JpaRepository<Camisa, Long> {
}
