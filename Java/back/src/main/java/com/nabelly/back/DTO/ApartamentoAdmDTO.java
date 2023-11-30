package com.nabelly.back.DTO;

import com.nabelly.back.model.AdministradorModel;
import com.nabelly.back.model.ApartamentoModel;

import lombok.Data;
import java.util.List;

@Data
public class ApartamentoAdmDTO {
     private AdministradorModel adm;
     private List<AdministradorModel> admList;
     private ApartamentoModel apto;
}
