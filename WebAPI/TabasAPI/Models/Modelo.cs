using System;
namespace TabasAPI.Models
{
    /**
    Clase para modelar al trabajador
    */
    public class Trabajador
    {
        public string nombre1{get; set;}
        public string nombre2{get; set;}
        public string apellido1{get; set;}
        public string apellido2{get; set;}
        public string correo{get; set;}
        public string contrasena{get; set;}
        public string rol{get; set;}
        public int cedula{get; set;}

    }

    /**
    Clase para modelar las maletas
    */
    public class Maletas
    {
        public int peso{get; set;} 
        public int costo{get; set;} 
        public int numero{get; set;}
        public string color{get; set;}
    }

    /**
    Clase para modelar al usuario
    */
    public class Usuario
    {
        public string nombre1 {get; set;}
        public string nombre2{get; set;}
        public string apellido1{get; set;}
        public string apellido2{get; set;}
        public int telefono{get; set;}
        public int cedula{get; set;}


    }
}