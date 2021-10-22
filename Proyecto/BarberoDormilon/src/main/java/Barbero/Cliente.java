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
public class Cliente implements Runnable {
    Barberia barberia;
    
    String name;
    
    Cliente(Barberia b){
        this.barberia = b;
    }

    public String getName(){
        return this.name;
    }
    
    public void setName(String name){
        this.name = name;
    }
            
    @Override
    public void run() {
        iraCortarCabello();
    }
    
    private synchronized void iraCortarCabello(){
        barberia.add(this);
    }
    
    
}
