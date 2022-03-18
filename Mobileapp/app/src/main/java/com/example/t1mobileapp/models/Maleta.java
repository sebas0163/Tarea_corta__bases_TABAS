package com.example.t1mobileapp.models;
/*
* Clase maleta, encargada de declarar los diferentes elementos que se obtienen del api
* En MainActivity se utilizara un convertidor de Json a string para evitar errores de compatibilidad
* */
public class Maleta { //Declaracion de atributos
    private String peso;
    private String costo;
    private String numero;
    private String color;
    private String estado;

    public String getPeso() {//Setters y Getters generados para cada atributo
        return peso;
    }

    public void setPeso(String peso) {
        this.peso = peso;
    }

    public String getCosto() {
        return costo;
    }

    public void setCosto(String costo) {
        this.costo = costo;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }
}
