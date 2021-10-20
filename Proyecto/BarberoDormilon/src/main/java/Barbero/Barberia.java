/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Barbero;

import java.util.Random;
import java.util.logging.Level;
import java.util.logging.Logger;
/**
 *
 * @author Cristian
 */
public class Barberia implements Runnable {
    int numeroSillas;
    
    boolean silla;
    
    int clientesEspera;
    
    Barberia(int sillas){
        this.numeroSillas = sillas;
        this.silla = false;
        this.clientesEspera = 0;
    }
    
    public synchronized void cortarCabello(int posList){
        try{
            this.silla = true;
            this.clientesEspera--;
            
            System.out.println("Barbero realizando corte...");
            
            Random tiempo = new Random();
            int i = 0;
            int max = tiempo.nextInt(5000);
            
            while(i < max){
                Thread.sleep(1);
                i++;
            }
            
            System.out.println("Cliente servido " + posList);
            System.out.println("-----");
            this.silla = false;
        }catch(InterruptedException ex){
            Logger.getLogger(Barbero.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
    @Override
    public void run() {
        while(true){
            
        }
    }
    
}
