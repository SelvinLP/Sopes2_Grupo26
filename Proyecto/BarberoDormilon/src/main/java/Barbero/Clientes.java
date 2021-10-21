/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Barbero;

import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.DefaultListModel;
import javax.swing.JLabel;

/**
 *
 * @author Cristian
 */
public class Clientes implements Runnable {
    Barberia barberia;
    
    Clientes(Barberia b){
        this.barberia = b;
    }
    
    public void nuevocliente(){
        try{
            synchronized(this){
                while(VistaInicio.pausa){
                    this.wait();
                }
            }
        }catch(InterruptedException ex){
            Logger.getLogger(Barbero.class.getName()).log(Level.SEVERE, null, ex);
        }
        
        Cliente cliente = new Cliente(barberia);
        Thread thcliente = new Thread(cliente);
        cliente.setName("Cliente "+thcliente.getId());
        thcliente.start();
  
        try{
            Thread.sleep(VistaInicio.tiempo_llegada * 1000);
        }catch(InterruptedException ex){
            Logger.getLogger(VistaInicio.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
    @Override
    public void run() {
        while(!VistaInicio.isCerrado){
            nuevocliente();
        }
    }
    
}
