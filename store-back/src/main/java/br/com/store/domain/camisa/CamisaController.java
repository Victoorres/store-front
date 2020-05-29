package br.com.store.domain.camisa;

import br.com.store.exceptions.ErrorExcep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import br.com.store.core.AbstractController;

@RestController
@RequestMapping("/camisa")

public class CamisaController extends AbstractController<Camisa> {
    @Autowired
    CamisaService camisaService;

    @Override
    @PostMapping
    public ResponseEntity<?> save(@RequestBody() Camisa camisa) {


        if (camisa.getNome() == null) {
            throw new ErrorExcep("O nome não pode ficar vazio");
        }
        return new ResponseEntity<>(service.save(camisa), HttpStatus.OK);


    }

}