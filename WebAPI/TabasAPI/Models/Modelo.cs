using System;
namespace TabasAPI.Models
{
    public class Reporte
    {
        public string numero;
        public string tipo;
        public string capacidad;
        public string capacidad_maletas;
        public string maletas_bagcart;
        public string maletas_avion;
        public string maletas_rechazadas;
        

    }
    public class Trabajador
    {
        public string nombre1{get; set;}
        public string nombre2{get; set;}
        public string apellido1{get; set;}
        public string apellido2{get; set;}
        public string rol{get; set;}
        public int cedula{get; set;}

    }

    public class Maletas
    {
        public int peso{get; set;} 
        public int costo{get; set;} 
        public int numero{get; set;}
        public string color{get; set;}
    }

    public class Usuario
    {
        public string nombre1{get; set;}
        public string nombre2{get; set;}
        public string apellido1{get; set;}
        public string apellido2{get; set;}
        public int telefono{get; set;}
        public int cedula{get; set;}


    }
}