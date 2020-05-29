package br.com.store.entity.camisa;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.math.BigDecimal;

@Getter
@Setter
@Entity
@Table(name = "camisa")
public class Camisa implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "camisa_id_seq")
    @SequenceGenerator(name = "camisa_id_seq", sequenceName = "camisa_id_seq", allocationSize = 1)
    @Column(name = "id")
    private long id;

    @Size(max = 10)
    @Column(name = "nome")
    private String nome;

    @Size(max = 10)
    @Column(name = "tamanho")
    private String tamanho;

    @NotNull
    @Column(name = "preco")
    private BigDecimal preco;

    @NotNull
    @Column(name = "lancamento")
    private Boolean lancamento;
}
