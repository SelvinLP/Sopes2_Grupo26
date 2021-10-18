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
    int tipo;
    int ocupadas;
    int PDejarCajaGrande;
    int PDejarCajaPequenia;
    int PRecogerCajaGrande;
    int PRecogerCajaPequenia;
    
    public Pintar(int tipo, HashMap ids, int ocupadas, int PDejarCajaGrande, int PDejarCajaPequenia, int PRecogerCajaGrande, int PRecogerCajaPequenia){
        this.tipo = tipo;
        this.ids = ids;
        this.ocupadas = ocupadas;
        this.PDejarCajaGrande = PDejarCajaGrande;
        this.PDejarCajaPequenia = PDejarCajaPequenia;
        this.PRecogerCajaGrande = PRecogerCajaGrande;
        this.PRecogerCajaPequenia = PRecogerCajaPequenia;
    }
    
    @Override
    public void run(){
        //Mostrar los resultados
        Formvista.jLabel1.setText(String.valueOf(this.ocupadas));
        Formvista.jLabel2.setText(String.valueOf(this.PDejarCajaGrande));
        Formvista.jLabel22.setText(String.valueOf(this.PDejarCajaPequenia));
        Formvista.jLabel23.setText(String.valueOf(this.PRecogerCajaGrande));
        Formvista.jLabel24.setText(String.valueOf(this.PRecogerCajaPequenia));
        
        if(this.tipo == 1){
            int flag = 0; //Se usa para encontrar 2 id
            for(int i = 1; i <= 20; i++){
                if(!this.ids.containsKey(i)){
                    this.ids.put(i, String.valueOf(i));
                    cambiarColor(i, Color.green);
                    flag++;
                }
                if(flag == 2){ break; }
            }            
        }else if(this.tipo == 2){
            for(int i = 1; i <= 20; i++){
                if(!this.ids.containsKey(i)){
                    this.ids.put(i, String.valueOf(i));
                    cambiarColor(i, Color.green);
                    break;
                }
            }            
        }else if(this.tipo == 3){
            int flag = 0; //Se usa para encontrar 2 id
            for(int i = 1; i <= 20; i++){
                if(this.ids.containsKey(i)){
                    this.ids.remove(i);     
                    cambiarColor(i, Color.GRAY);
                    flag++;
                }
                if(flag == 2){ break; }
            }            
        }else if(this.tipo == 4){
            for(int i = 1; i <= 20; i++){
                if(this.ids.containsKey(i)){
                    this.ids.remove(i);     
                    cambiarColor(i, Color.GRAY);
                    break;
                }
            }            
        }
    }

    public void cambiarColor(int lugar, Color color){
        switch (lugar) {
            case 1 -> Formvista.jPanel3.setBackground(color);
            case 2 -> Formvista.jPanel4.setBackground(color);
            case 3 -> Formvista.jPanel5.setBackground(color);
            case 4 -> Formvista.jPanel6.setBackground(color);
            case 5 -> Formvista.jPanel7.setBackground(color);
            case 6 -> Formvista.jPanel8.setBackground(color);
            case 7 -> Formvista.jPanel9.setBackground(color);
            case 8 -> Formvista.jPanel10.setBackground(color);
            case 9 -> Formvista.jPanel11.setBackground(color);
            case 10 -> Formvista.jPanel12.setBackground(color);
            case 11 -> Formvista.jPanel13.setBackground(color);
            case 12 -> Formvista.jPanel14.setBackground(color);
            case 13 -> Formvista.jPanel15.setBackground(color);
            case 14 -> Formvista.jPanel16.setBackground(color);
            case 15 -> Formvista.jPanel17.setBackground(color);
            case 16 -> Formvista.jPanel18.setBackground(color);
            case 17 -> Formvista.jPanel19.setBackground(color);
            case 18 -> Formvista.jPanel20.setBackground(color);
            case 19 -> Formvista.jPanel21.setBackground(color);
            case 20 -> Formvista.jPanel22.setBackground(color);
        }
    }
}
