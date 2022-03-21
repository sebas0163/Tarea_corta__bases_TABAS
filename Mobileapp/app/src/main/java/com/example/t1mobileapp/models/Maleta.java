package com.example.t1mobileapp.models;
/*
* Clase maleta, encargada de declarar los diferentes elementos de las mismas
* */
public class Maleta { //Declaracion de atributos
    private String peso;
    private String costo;
    private int numero;
    private String color;
    private String estado;

    public Maleta(String peso, String costo, int numero, String color, String estado) {
        this.peso = peso;
        this.costo = costo;
        this.numero = numero;
        this.color = color;
        this.estado = estado;
    }

    public String getPeso() {
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

    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
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
