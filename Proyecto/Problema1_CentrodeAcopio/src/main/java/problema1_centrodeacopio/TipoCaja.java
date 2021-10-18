/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package problema1_centrodeacopio;

import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.JFrame;

/**
 *
 * @author selvi
 */
public class TipoCaja extends Thread{
    
    private JFrame vista;
    private Estanteria estante;
    private int tipo;
    private boolean finalizado;
    
    public TipoCaja (int tipo, Estanteria estante, JFrame vista){
        this.vista = vista;
        this.estante = estante;
        this.tipo = tipo;
        this.finalizado = false;
    }
    
    @Override
    public void run (){
        //Verificacion de si es entrega o recoger caja
        /* Tipos de verificacion
            1. Deja Caja Grande
            2. Deja Caja Pequeña
            3. Recoge Caja Grande
            4. Recoge Caja Pequeña
        */
        switch (this.tipo) {
            case 1:
                while(!finalizado){
                    if(this.estante.dejar_cajaGrande()){
                        finalizado = true;
                        System.out.println("Caja grande dejada");
                    }else{
                        try {
                            Thread.sleep(5000);
                        } catch (InterruptedException ex) {
                            Logger.getLogger(TipoCaja.class.getName()).log(Level.SEVERE, null, ex);
                        }
                        System.out.println("No hay espacio para dejar caja grande");
                    }
                }
                this.vista.getContentPane().repaint();
                break;
            case 2:
                while(!finalizado){
                    if(this.estante.dejar_cajaPequenia()){
                        finalizado = true;
                        System.out.println("Caja pequeña dejada");
                    }else{
                        try {
                            Thread.sleep(5000);
                        } catch (InterruptedException ex) {
                            Logger.getLogger(TipoCaja.class.getName()).log(Level.SEVERE, null, ex);
                        }
                        System.out.println("No hay espacio para dejar caja pequeña");
                    }
                }
                this.vista.getContentPane().repaint();
                break;
            case 3:
                while(!finalizado){
                    if(this.estante.recoger_cajaGrande()){
                        finalizado = true;
                        System.out.println("Caja grande recogida");
                    }else{
                        try {
                            Thread.sleep(5000);
                        } catch (InterruptedException ex) {
                            Logger.getLogger(TipoCaja.class.getName()).log(Level.SEVERE, null, ex);
                        }
                        System.out.println("No hay espacio para recoger caja grande");
                    }
                }
                this.vista.getContentPane().repaint();
                break;
            case 4:
                while(!finalizado){
                    if(this.estante.recoger_cajaPequenia()){
                        finalizado = true;
                        System.out.println("Caja pequeñia recogida");
                    }else{
                        try {
                            Thread.sleep(5000);
                        } catch (InterruptedException ex) {
                            Logger.getLogger(TipoCaja.class.getName()).log(Level.SEVERE, null, ex);
                        }
                        System.out.println("No hay espacio para recoger caja pequeñia");
                    }
                }
                this.vista.getContentPane().repaint();
                break;
        }
    }
}
