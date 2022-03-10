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
            using (StreamReader r = new StreamReader("DataBase/reportes.json"))
            {
            string json = r.ReadToEnd();
            return json;
            }
            
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

        [Route("api/post")]
        [HttpPost]
        public string Post([FromBody] Trabajador trabajador)
        {
            var json = Newtonsoft.Json.JsonConvert.SerializeObject(trabajador);
            Newtonsoft.Json.Linq.JToken list =  getEntity("Trabajadores");
            list.Last.AddAfterSelf(Newtonsoft.Json.Linq.JObject.Parse(json));

            return list.ToString();
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
        public dynamic getAtribute(string entity, string attribute)
        {
            Newtonsoft.Json.Linq.JToken maletas = getEntity("Maletas");
            
            var ID = maletas[1].Value<int>("numero");
            return "Hola API id "+ maletas.Count();
        }

    }
}