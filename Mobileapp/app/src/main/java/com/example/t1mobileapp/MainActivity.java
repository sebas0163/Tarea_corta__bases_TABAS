package com.example.t1mobileapp;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.os.Bundle;
import android.text.Editable;
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

public class MainActivity extends AppCompatActivity { //Se declara la clase main activity, encargada de manejar la funcionalidad del app
    Maleta m = new Maleta();
    Button button;    //Se declaran los botones, textiews, textinputs y un spinner
    Button button2;   //Estos son creados y modelados en activity_main.xml, usando la herramienta de android studio
    Button button3;
    Button button4;
    TextView result1;
    TextView result2;
    TextView result3;
    TextView result4;
    TextInputEditText bagid;
    Spinner flight;

    @Override
    protected void onCreate(Bundle savedInstanceState) {//Metodo OnCreate, el cual comienza en cuanto se abre la aplicacion
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        result1 = findViewById(R.id.result1);//Se vinculan los elementos declarados al principio con sus equivalentes en el xml
        result2 = findViewById(R.id.result2);
        result3 = findViewById(R.id.result3);
        result4 = findViewById(R.id.result4);
        bagid = findViewById(R.id.bagid);

        button = findViewById(R.id.button);
        button2 =findViewById(R.id.button2);
        button3 =findViewById(R.id.button3);
        button4 =findViewById(R.id.button4);

        flight = findViewById(R.id.flight);

        /*
        * Se utiliza el array adapter para llamar al Resource creado en strings.xml, en res/values
        * Seguidamente se procede a vincular el array con el spinner creado y vinculado, esto con el
        * fin de poder desplegar la lista de vuelos en el dropdown menu
        */
        ArrayAdapter<CharSequence>adapter=ArrayAdapter.createFromResource(this, R.array.flights, android.R.layout.simple_spinner_item);
        adapter.setDropDownViewResource(android.R.layout.simple_spinner_item);
        flight.setAdapter(adapter);

        /*
        * Se le asigna al boton un onclicklistener, el cual se encarga de esperar a que el boton
        * etiquetado para el scanner sea presionado. Si es el caso, entonces comenzara el metodo
        * designado como onClick
        * */

        button.setOnClickListener(new View.OnClickListener() {
            /*
            * Metodo onclick que se encarga de encender el scanner de codigos cuando el
            * boton designado es presionado
            * */
            @Override
            public void onClick(View view) {

                IntentIntegrator integrador = new IntentIntegrator(MainActivity.this); //Se crea un intent integrator (scanner)
                integrador.setDesiredBarcodeFormats(IntentIntegrator.ALL_CODE_TYPES); //Se determina que codigos detecta
                integrador.setPrompt("Escaneo de Codigo");
                integrador.setCameraId(0); //Se le asigna la camara a usar
                integrador.setBarcodeImageEnabled(true);
                integrador.initiateScan();//Se inicializa
            }
        });

        /*
        * Llama al metodo find() en cuanto el boton de buscar es presionado
        * Este boton corresponde al de busqueda de maletas por id
        * */
        button2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                find(Integer.parseInt(bagid.getText().toString()));
            }
        });
        button3.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Context context = getApplicationContext();
                CharSequence text = "Agregado al bagcart";
                int duration = Toast.LENGTH_SHORT;
                result1.setText("");
                result2.setText("");
                result3.setText("");
                result4.setText("");
                Toast toast = Toast.makeText(context, text, duration);
                toast.show();
            }
        });
        button4.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Context context = getApplicationContext();
                CharSequence text = "Maleta Asignada a vuelo";
                int duration = Toast.LENGTH_SHORT;
                Toast toast = Toast.makeText(context, text, duration);
                toast.show();
            }
        });

    }

    /*
    * Metodo find, encargado de buscar la maleta necesaria
    * */
    private void find(int codigo){ //Se Busca la maleta en el set predeterminado

        m.setNumero(1);
        m.setColor("rojo");
        m.setCosto("1200 colones");
        m.setEstado("Escaneada");
        m.setPeso("45kg");

        if(codigo == m.getNumero()){
            result1.setText(m.getColor());
            result2.setText(m.getCosto());
            result3.setText(m.getEstado());
            result4.setText(m.getPeso());
        }
        else if(codigo == 2){
            result1.setText("Maleta no registrada");
            result2.setText("Maleta no registrada");
            result3.setText("Maleta no registrada");
            result4.setText("Maleta no registrada");
        }

    }
}