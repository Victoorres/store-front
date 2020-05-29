package br.com.store.entity.camisa;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CamisaRepository extends JpaRepository<br.com.store.entity.camisa.Camisa, Long> {


}
