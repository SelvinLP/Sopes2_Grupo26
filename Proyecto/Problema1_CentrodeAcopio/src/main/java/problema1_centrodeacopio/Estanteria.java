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
    private int DejarCajaGrande;
    private int DejarCajaPequenia;
    private int RecogerCajaGrande;
    private int RecogerCajaPequenia;
    
    public Estanteria() {
        this.ids=new HashMap<>();
        this.libres = 20;  //Referencia de espacios totales
        this.DejarCajaGrande = 0;
        this.DejarCajaPequenia = 0;
        this.RecogerCajaGrande = 0;
        this.RecogerCajaPequenia = 0;
    }
    
    public synchronized boolean dejar_cajaGrande(){
        if(this.libres <= 1){
            return false;
        }else{
            Pintar dibujo = new Pintar(1,ids, 20-(this.libres - 2), this.DejarCajaGrande + 1, 
                                       this.DejarCajaPequenia, this.RecogerCajaGrande, 
                                       this.RecogerCajaPequenia);
            this.libres -= 2;
            this.DejarCajaGrande++;
            dibujo.start();
            
            return true;
        }
    }
    
    public synchronized boolean dejar_cajaPequenia(){
        if(this.libres <= 0){
            return false;
        }else{
            Pintar dibujo = new Pintar(2,ids, 20-(this.libres - 1), this.DejarCajaGrande, 
                                       this.DejarCajaPequenia + 1, this.RecogerCajaGrande, 
                                       this.RecogerCajaPequenia);
            this.libres --;
            this.DejarCajaPequenia++;
            dibujo.start();
            
            return true;
        }
    }
    
    public synchronized boolean recoger_cajaGrande(){
        if(this.libres >= 19){
            return false;
        }else{
            Pintar dibujo = new Pintar(3,ids, 20-(this.libres + 2), this.DejarCajaGrande, 
                                       this.DejarCajaPequenia, this.RecogerCajaGrande + 1, 
                                       this.RecogerCajaPequenia);
            this.libres += 2;
            this.RecogerCajaGrande++;
            dibujo.start();
            
            return true;
        }
    }
    
    public synchronized boolean recoger_cajaPequenia(){
        if(this.libres >= 20){
            return false;
        }else{
            Pintar dibujo = new Pintar(4,ids, 20-(this.libres + 1), this.DejarCajaGrande, 
                                       this.DejarCajaPequenia, this.RecogerCajaGrande, 
                                       this.RecogerCajaPequenia + 1);
            this.libres ++;
            this.RecogerCajaPequenia++;
            dibujo.start();
            
            return true;
        }
    }
}
