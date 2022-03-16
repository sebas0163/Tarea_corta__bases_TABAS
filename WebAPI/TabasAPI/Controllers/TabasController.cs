using System;
using System.IO;
using Microsoft.AspNetCore.Mvc;
using TabasAPI.Models;
namespace TabasAPI.Controllers
{
    
    public class TabasController : ControllerBase
    {
        [Route("api/Maletas")]
        [HttpGet]
        public string GetMaletas()
        {
            return getEntity("Maletas").ToString();
        }
        [Route("api/Trabajadores")]
        [HttpGet]
        public string GetTrabajadores()
        {
            return getEntity("Trabajadores").ToString();
        }

        [Route("api/Usuarios")]
        [HttpGet]
        public string GetUsuarios()
        {
            return getEntity("Usuarios").ToString();
        }

        [Route("api/Reporte")]
        [HttpGet]
        public string GetReporte()
        {
             Newtonsoft.Json.Linq.JToken maletas = getReport("Maletas_Usuario");
             return maletas.ToString();
            
        }
        [Route("api/Reporte2")]
        [HttpGet]
        public string GetReporte2()
        {
             Newtonsoft.Json.Linq.JToken maletas = getReport("Conciliacion");
             return maletas.ToString();
            
        }

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

        //Metodos de manejo de json
        public  Newtonsoft.Json.Linq.JToken getEntity(string entity)
        {
            using (StreamReader r = new StreamReader("DataBase/datos.json"))
            {
            string json = r.ReadToEnd();
            Newtonsoft.Json.Linq.JObject result = Newtonsoft.Json.Linq.JObject.Parse(json);
            
            
            return result.GetValue(entity);
            }
        }
        public  Newtonsoft.Json.Linq.JToken getReport(string report)
        {
            using (StreamReader r = new StreamReader("DataBase/reportes.json"))
            {
            string json = r.ReadToEnd();
            Newtonsoft.Json.Linq.JObject result = Newtonsoft.Json.Linq.JObject.Parse(json);
            
            
            return result.GetValue(report);
            }
        }
        public dynamic getAtribute(string entity, string attribute)
        {
            Newtonsoft.Json.Linq.JToken maletas = getEntity("Maletas");
            
            var ID = maletas[1].Value<int>("numero");
            return "Hola API id "+ maletas.Count();
        }

    }
}