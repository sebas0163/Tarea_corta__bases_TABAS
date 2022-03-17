package com.example.t1mobileapp;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Spinner;

import com.example.t1mobileapp.interfaces.MaletaAPI;
import com.example.t1mobileapp.models.Maleta;
import com.google.android.material.textfield.TextInputEditText;
import com.google.zxing.integration.android.IntentIntegrator;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class MainActivity extends AppCompatActivity {

    Button button;
    Button button2;
    TextView result1;
    TextView result2;
    TextView result3;
    TextView result4;
    TextInputEditText bagid;
    Spinner flight;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        result1 = findViewById(R.id.result1);
        result2 = findViewById(R.id.result2);
        result3 = findViewById(R.id.result3);
        result4 = findViewById(R.id.result4);
        bagid = findViewById(R.id.bagid);

        button = findViewById(R.id.button);
        button2 =findViewById(R.id.button2);

        flight = findViewById(R.id.flight);

        ArrayAdapter<CharSequence>adapter=ArrayAdapter.createFromResource(this, R.array.flights, android.R.layout.simple_spinner_item);
        adapter.setDropDownViewResource(android.R.layout.simple_spinner_item);

        flight.setAdapter(adapter);

        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                IntentIntegrator integrador = new IntentIntegrator(MainActivity.this);
                integrador.setDesiredBarcodeFormats(IntentIntegrator.ALL_CODE_TYPES);
                integrador.setPrompt("Escaneo de Codigo");
                integrador.setCameraId(0);
                integrador.setBarcodeImageEnabled(true);
                integrador.initiateScan();
            }
        });

        button2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                find(bagid.getText().toString());

            }
        });

    }
    private void find(String codigo){
        Retrofit retrofit = new Retrofit.Builder().baseUrl("https://localhost:7107/").addConverterFactory(GsonConverterFactory.create()).build();
        MaletaAPI maletaAPI = retrofit.create(MaletaAPI.class);
        Call<Maleta> call=maletaAPI.find(codigo);
        call.enqueue(new Callback<Maleta>() {
            @Override
            public void onResponse(Call<Maleta> call, Response<Maleta> response) {
                try {

                    if(response.isSuccessful()){
                        Maleta m = response.body();
                        result1.setText(m.getColor());
                        result2.setText(m.getCosto());
                        result3.setText(m.getEstado());
                        result4.setText(m.getPeso());
                    }
                }catch (Exception ex){
                    Toast.makeText(MainActivity.this, ex.getMessage(), Toast.LENGTH_SHORT).show();
                }
            }

            @Override
            public void onFailure(Call<Maleta> call, Throwable t) {

                Toast.makeText(MainActivity.this, "Error al intentar conectar", Toast.LENGTH_SHORT).show();
            }
        });
    }
}