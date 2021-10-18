/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package problema1_centrodeacopio;

import java.util.HashMap;

/**
 *
 * @author selvi
 */
public class Estanteria {
    private HashMap<Integer, String> ids;
    private int libres;
    private int entregadas;
    private int recogidas;
    
    public Estanteria() {
        this.ids=new HashMap<>();
        this.libres = 20;  //Referencia de espacios totales
        this.entregadas = 0;
        this.recogidas = 0;
    }
    
    public synchronized boolean dejar_caja(){
        if(this.libres <= 0){
            return false;
        }else{
            this.libres--;
            this.entregadas++;
            return true;
        }
    }
    
    public synchronized boolean recoger_caja(){
        if(this.libres >= 20){
            return false;
        }else{
            this.libres++;
            this.recogidas++;
            return true;
        }
    }
}
