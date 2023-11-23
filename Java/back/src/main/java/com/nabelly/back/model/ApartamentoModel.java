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
}
