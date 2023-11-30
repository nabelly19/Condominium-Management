package com.nabelly.back.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Document("Apartamento")
@AllArgsConstructor
public class ApartamentoModel {
    @Id
    @Getter
    @Setter
    private String id;
    @Getter
    @Setter
    private int bloco;
    @Getter
    @Setter
    private int numero;
    @Getter
    @Setter
    private int andar;
    @Getter
    @Setter
    private int garagem;

    public ApartamentoModel(String _id)
    {
        this.id = _id;
    }

    public ApartamentoModel(int _bloco, int _numero, int _andar, int _garagem)
    {
        this.bloco = _bloco;
        this.numero = _numero;
        this.andar = _andar;
        this.garagem = _garagem;
    }
}


