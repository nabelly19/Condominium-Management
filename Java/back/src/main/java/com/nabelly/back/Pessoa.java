package com.nabelly.back;

import java.util.Date;

public abstract class Pessoa {
    String Nome;
    String Cpf;
    String Email;
    Date DataNascimento;
    int Bloco;
    int Apartamento;

public Pessoa()
{
    
}

public Pessoa(String _nome, String _cpf,
String _email, Date _datanasc, int _bloco,
int _apto)
{
    this.Nome = _nome;
    this.Cpf = _cpf;
    this.Email = _email;
    this.DataNascimento = _datanasc;
    this.Bloco = _bloco;
    this.Apartamento = _apto;

}

}