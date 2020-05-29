package br.com.store.domain.camisa;

import br.com.store.core.AbstractService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CamisaService extends AbstractService<Camisa> {
    @Autowired
    CamisaRepository camisaRepository;

}
