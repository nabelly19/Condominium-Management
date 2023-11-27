package com.nabelly.back.DTO;

import com.nabelly.back.model.PessoaModel;
import com.nabelly.back.model.AdministradorModel;

import lombok.Data;
import java.util.List;

@Data
public class PessoaAdministradorDTO {
    private AdministradorModel adm;
    private List<AdministradorModel> admList;
    private PessoaModel pessoa;
}
