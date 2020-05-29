package br.com.store.entity.camisa;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/camisa")

public class CamisaController extends br.com.store.core.AbstractController<br.com.store.entity.camisa.Camisa> {

    @Override
    @PostMapping
    public ResponseEntity<?> save(@RequestBody() br.com.store.entity.camisa.Camisa camisa) {

        if (camisa.getNome() == null) {
            throw new com.spring_arquitetura.spring_arquitetura.exceptions.ErrorExcep("O nome não pode ser vazio");
        }
        return new ResponseEntity<>(service.save(camisa), HttpStatus.OK);

    }
}