package com.example.t1mobileapp.interfaces;

import com.example.t1mobileapp.models.Maleta;

import retrofit2.Call;
import retrofit2.http.GET;
import retrofit2.http.Path;

public interface MaletaAPI {
    @GET("api/estado/maleta/{id}")
    public Call<Maleta> find(@Path("id") String id);
}
