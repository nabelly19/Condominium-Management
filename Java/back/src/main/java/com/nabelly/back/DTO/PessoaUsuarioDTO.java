package com.nabelly.back.DTO;

import com.nabelly.back.model.PessoaModel;
import com.nabelly.back.model.UsuarioModel;

import lombok.Data;
import java.util.List;

@Data
public class PessoaUsuarioDTO {
    private UsuarioModel user;
    private List<UsuarioModel> userList;
    private PessoaModel pessoa;
}
