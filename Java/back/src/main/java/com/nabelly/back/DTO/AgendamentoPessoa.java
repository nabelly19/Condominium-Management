package com.nabelly.back.DTO;
import com.nabelly.back.model.PessoaModel;
import com.nabelly.back.model.AgendamentoModel;

import lombok.Data;
import java.util.List;

@Data
public class AgendamentoPessoa {
    private PessoaModel pessoa;
     private List<PessoaModel> pessoaList;
     private AgendamentoModel agendamento;
}
