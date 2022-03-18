package com.example.t1mobileapp.interfaces;

import com.example.t1mobileapp.models.Maleta;

import retrofit2.Call;
import retrofit2.http.GET;
import retrofit2.http.Path;

/*
* Interfaz encargada de completar el link del get necesario, llama a la clase Maleta para obtener los datos
* El id es una variable obtenida del text input. La interface la reconoce como la id del link del get en el api
* */
public interface MaletaAPI {
    @GET("api/estado/maleta/{id}")
    public Call<Maleta> find(@Path("id") String id);
}
