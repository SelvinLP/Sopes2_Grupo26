/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Barbero;

import java.util.LinkedList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.DefaultListModel;
import javax.swing.JLabel;
import javax.swing.JProgressBar;
/**
 *
 * @author Cristian
 */
public class Barberia {
    int cortes;
    int no_esperan;
    int totalClientes;
    
    List<Cliente> listClientes;
    
    JLabel cortes_;
    JLabel espera;
    JLabel se_van;
    JLabel total;
    
    DefaultListModel filaEspera;
    JProgressBar progress;
    
    VistaInicio x;
    
    Barberia(DefaultListModel filaEspera, JLabel cortes, JLabel espera, JProgressBar progress, JLabel se_van, JLabel total, VistaInicio x){
        this.filaEspera = filaEspera;
        this.progress = progress;
        
        this.listClientes = new LinkedList<>();
        
        this.cortes = 0;
        this.no_esperan = 0;
        this.totalClientes = 0;
        
        this.cortes_ = cortes;
        this.espera = espera;
        this.se_van = se_van;
        this.total = total;
        
        this.x = x;
    }
    
    public void cortarCabello(){
        Cliente cliente;
        
        synchronized(listClientes){
            while(listClientes.isEmpty()){
                System.out.println("Barbero durmiendo");
                this.x.barberoDuerme();
                try{
                    listClientes.wait();
                }catch(InterruptedException ie){
                    ie.printStackTrace();
                }
                System.out.println("Barbero se despierta");
                this.x.barberoDespierta();
            }
            cliente = (Cliente)((LinkedList<?>)listClientes).poll();
        }
        
        try{
            System.out.println("Barbero realizando corte a" + cliente.getName());
            this.x.clienteLlega();
            int i = 0;
            int max = VistaInicio.tiempo_corte * 1000;
            this.progress.setMaximum(max);
            while(i < max){
                Thread.sleep(1);
                this.progress.setValue(i);
                i++;
            }
            
            System.out.println(cliente.getName() + " servido");
            
            this.x.clienteSale();
            
            this.espera.setText(this.listClientes.size()+"");
            
            this.filaEspera.removeElement(cliente.getName());

            this.cortes++;
            this.cortes_.setText(this.cortes+"");
            
            this.progress.setValue(0);
        }catch(InterruptedException ex){
            Logger.getLogger(Barbero.class.getName()).log(Level.SEVERE, null, ex);
        }
        
        try{
            synchronized(this){
                while(VistaInicio.pausa){
                    this.wait();
                }
            }
        }catch(InterruptedException ex){
            Logger.getLogger(Barbero.class.getName()).log(Level.SEVERE, null, ex);
        }
        
    }
    
    public void add(Cliente cliente){
        System.out.println("Ingresa nuevo cliente" + cliente.getName());
        this.totalClientes++;
        this.total.setText(totalClientes+"");
        synchronized (listClientes){
            if(listClientes.size() >= 20){
                System.out.println("No hay sillas... se va");
                this.no_esperan++;
                this.se_van.setText(this.no_esperan+"");
                return ;
            }
            
            ((LinkedList<Cliente>)listClientes).offer(cliente);
            this.filaEspera.addElement(cliente.getName());
            this.espera.setText(this.listClientes.size()+"");
            
            if(listClientes.size() == 1)
                listClientes.notify();
        }
    }
}
