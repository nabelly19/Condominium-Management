package com.nabelly.back.DTO;

import com.nabelly.back.model.PessoaModel;
import com.nabelly.back.model.ApartamentoModel;

import lombok.Data;
import java.util.List;

@Data
public class ApartamentoPessoaDTO {
     private PessoaModel pessoa;
     private List<PessoaModel> pessoaList;
     private ApartamentoModel apto;
}

