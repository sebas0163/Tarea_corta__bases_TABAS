using System;
using System.IO;
using Microsoft.AspNetCore.Mvc;
using TabasAPI.Models;
namespace TabasAPI.Controllers
{
    
    public class TabasController : ControllerBase
    {
        /**
        Descripcion:Get de API para obtener todas las maletas de la base de datos
        Input: None
        Output: string de las maletas en formato de json
        */
        [Route("api/Maletas")]
        [HttpGet]
        public string GetMaletas()
        {
            return getEntity("Maletas").ToString();
        }

        /**
        Descripcion: Get de API para obtener tods las trabajadores de la base de datos
        Input: None
        Output: string de los trabajadores en formato de json
        */
        [Route("api/Trabajadores")]
        [HttpGet]
        public string GetTrabajadores()
        {
            return getEntity("Trabajadores").ToString();
        }

        /**
        Descripcion: Get de API para obtener todos los usuarios de la base de datos
        Input: None
        Output: string de los usuarios en formato de json
        */
        [Route("api/Usuarios")]
        [HttpGet]
        public string GetUsuarios()
        {
            return getEntity("Usuarios").ToString();
        }

        /**
        Descripcion: Get de API para obtener la informacion para el reporte de maletas por usuario
        Input: None
        Output: string del reporte en formato de json
        */
        [Route("api/Reporte")]
        [HttpGet]
        public string GetReporte()
        {
             Newtonsoft.Json.Linq.JToken maletas = getReport("Maletas_Usuario");
             return maletas.ToString();
            
        }

        /**
        Descripcion: Get de API para obtener la informacion para el reporte de conciliacion maletas
        Input: None
        Output: string del reporte en formato de json
        */
        [Route("api/Reporte2")]
        [HttpGet]
        public string GetReporte2()
        {
             Newtonsoft.Json.Linq.JToken maletas = getReport("Conciliacion");
             return maletas.ToString();
            
        }

        /**
        Descripcion: Get de API para obtener el estado de una maleta por su numero
        Input: id de la maleta
        Output: bool, true si la maleta fue aceptada, false si no fue aceptada o el id no existe
        */
        [Route("api/estado/maleta/{id}")]
        [HttpGet("{id}")]
        public ActionResult<bool> Get(int id)
        {
            Newtonsoft.Json.Linq.JToken maletas = getEntity("Maletas");
            for(int i=0; i<maletas.Count(); i++)
            {
                var ID = maletas[i].Value<int>("numero");
                var estado = maletas[i].Value<bool>("estado");
                if(ID==id)
                {
                    return estado;
                }
            }
            
            return false;
        }
        
        /**
        Descripcion: Post de API para registrar un nuevo trabajador a la base de datos
        Input: json con toda la informacion del trabajador
        Output: string de todos los trabajadores en formato de json
        */
        [Route("api/post")]
        [HttpPost]
        public string Post([FromBody] Trabajador trabajador)
        {
            var json = Newtonsoft.Json.JsonConvert.SerializeObject(trabajador);
            Newtonsoft.Json.Linq.JToken trabajadores_list =  getEntity("Trabajadores");
            Newtonsoft.Json.Linq.JToken usuarios_list =  getEntity("Usuarios");
            Newtonsoft.Json.Linq.JToken maletas_list =  getEntity("Maletas");
            trabajadores_list.Last.AddAfterSelf(Newtonsoft.Json.Linq.JObject.Parse(json));

            Newtonsoft.Json.Linq.JObject final = new  Newtonsoft.Json.Linq.JObject();
            final.Add("Trabajadores", trabajadores_list);
            final.Add("Usuarios", usuarios_list);
            final.Add("Maletas", maletas_list);
            System.IO.File.WriteAllText("DataBase/datos.json", final.ToString());
            return final.ToString();
            
        }

        [Route("api/test")]
        [HttpGet]
        public string GetTest()
        {
            Trabajador trabajador = new Trabajador {nombre1 = "hi",
                                                    nombre2 = "ad",
                                                    apellido1 = "ada",
                                                    apellido2 = "adsdad",
                                                    rol = "rol",
                                                    cedula = 111};
            var json = Newtonsoft.Json.JsonConvert.SerializeObject(trabajador);
            Newtonsoft.Json.Linq.JToken trabajadores_list =  getEntity("Trabajadores");
            Newtonsoft.Json.Linq.JToken usuarios_list =  getEntity("Usuarios");
            Newtonsoft.Json.Linq.JToken maletas_list =  getEntity("Maletas");
            trabajadores_list.Last.AddAfterSelf(Newtonsoft.Json.Linq.JObject.Parse(json));

            Newtonsoft.Json.Linq.JObject final = new  Newtonsoft.Json.Linq.JObject();
            final.Add("Trabajadores", trabajadores_list);
            final.Add("Usuarios", usuarios_list);
            final.Add("Maletas", maletas_list);

            return final.ToString();

        }

        //Metodos de manejo de json
        /**
        Descripcion: Obtiene todos los objetos de la entidad especificada
        Input: string con el nombre de la entidad
        Output: un JToken con todos los objetos que pertenecen a esa entidad
        */
        public  Newtonsoft.Json.Linq.JToken getEntity(string entity)
        {
            using (StreamReader r = new StreamReader("DataBase/datos.json"))
            {
            string json = r.ReadToEnd();
            Newtonsoft.Json.Linq.JObject result = Newtonsoft.Json.Linq.JObject.Parse(json);
            
            r.Close();
            return result.GetValue(entity);
            }
            
        }

        /**
        Descripcion: Obtiene la informacion del reporte especificado
        Input: string con el nombre del reporte
        Output: un JToken con todos los objetos que pertenecen a ese reporte
        */
        public  Newtonsoft.Json.Linq.JToken getReport(string report)
        {
            using (StreamReader r = new StreamReader("DataBase/reportes.json"))
            {
            string json = r.ReadToEnd();
            Newtonsoft.Json.Linq.JObject result = Newtonsoft.Json.Linq.JObject.Parse(json);
            
            r.Close();
            return result.GetValue(report);
            }
        }
        

    }
}