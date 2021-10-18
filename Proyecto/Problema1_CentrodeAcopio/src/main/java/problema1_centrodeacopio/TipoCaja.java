/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package problema1_centrodeacopio;

import javax.swing.JFrame;

/**
 *
 * @author selvi
 */
public class TipoCaja extends Thread{
    
    private JFrame vista;
    private Estanteria estante;
    private boolean tipo;
    private boolean finalizado;
    
    public TipoCaja (boolean tipo, Estanteria estante, JFrame vista){
        this.vista = vista;
        this.estante = estante;
        this.tipo = tipo;
        this.finalizado = false;
    }
    
    @Override
    public void run (){
        //Verificacion de si es entrega o recoger caja
        if(this.tipo){
            
        }
    }
}
