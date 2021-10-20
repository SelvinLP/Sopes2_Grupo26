/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Barbero;

import java.util.Random;
import java.util.logging.Logger;
import java.util.logging.Level;

/**
 *
 * @author Cristian
 */
public class Barbero implements Runnable {
    Boolean duerme;
    Barberia b;
    Random r;
    
    public Barbero(Barberia b){
        this.duerme = false;
        this.r = new Random();
        this.b = b;
    }
    
    public void dormir(){
        try{
            System.out.println("Barbero se pone a dormir");
            this.duerme = true;
            this.b.silla = true;
            synchronized(this){
                wait();
            }
            System.out.println("Barbero se despierta");
            this.duerme = false;
            this.b.silla = false;
        }catch (InterruptedException ex){
            Logger.getLogger(Barbero.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    @Override
    public void run() {
        while(true){
            if(!b.silla && b.clientesEspera==0 && !this.duerme){
                this.dormir();
            }
        }
    }
    
}
