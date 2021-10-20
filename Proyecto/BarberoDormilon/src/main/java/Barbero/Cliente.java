/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Barbero;
    
/**
 *
 * @author Cristian
 */
public class Cliente implements Runnable {
    Barberia b;
    Barbero barbero;
    int posList;
    
    Cliente(Barberia b, Barbero barbero, int numCliente){
        System.out.println("Bienvenido");
        this.barbero =  barbero;
        this.b = b;
        this.posList = numCliente;
        
        this.b.clientesEspera++;
        //Agregar cliente a lista de espera
    }

    @Override
    public void run() {
        if(this.barbero.duerme){
            this.despertar();
        }
        
        while(true){
            if(Thread.currentThread().isAlive()){
                if(!b.silla){
                    b.cortarCabello(this.posList);
                    break;
                }
            }
        }
    }
    
    public void despertar(){
        System.out.println("Despertando al barbero");
        synchronized(this.barbero){
            this.barbero.notify();
        }
    }
    
    
}
