package com.nabelly.back.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Document("Agendamento")
public class AgendamentoModel {
    @Id
    @Getter
    @Setter
    private String id;
    @Getter
    @Setter
    private String usuarioId;
    @Getter
    @Setter
    private Date dataAgendamento;
    @Getter
    @Setter
    private String Tipo;
}
