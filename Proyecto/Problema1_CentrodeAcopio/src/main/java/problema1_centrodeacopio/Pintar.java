/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package problema1_centrodeacopio;

import java.awt.Color;
import java.util.HashMap;
import javax.swing.JFrame;

/**
 *
 * @author selvi
 */
public class Pintar extends Thread{
    
    HashMap ids;
    boolean tipo;
    int entregadas;
    int recogidas;
    
    public Pintar(boolean tipo, HashMap ids, int entregadas, int recogidas){
        this.tipo = tipo;
        this.ids = ids;
        this.entregadas = entregadas;
        this.recogidas = recogidas;
    }
    
    @Override
    public void run(){
        //MOSTRAR LOS RESULTADOS EN LA VENTANA
        //this.vista..setText(String.valueOf(this.recogidas));
        //Vista.entregadas.setText(String.valueOf(this.entregadas));
        //SI SE VA A ENTREGAR UNA CAJA
        if(this.tipo){
            for(int i = 1; i <= 20; i++){
                //SI EL ID NO ESTA EN EL MAP
                if(!this.ids.containsKey(i)){
                    this.ids.put(i, String.valueOf(i));
                    cambiarColor(i, Color.green);
                    break;
                }
            }            
        //SI SE VA A RECOGER UNA CAJA
        }else{
            for(int i = 1; i <= 20; i++){
                //SI EL ID ESTA EN EL MAP
                if(this.ids.containsKey(i)){
                    this.ids.remove(i);     
                    cambiarColor(i, Color.GRAY);
                    break;
                }
            }
        }
    }

    public void cambiarColor(int lugar, Color color){

    }
}
