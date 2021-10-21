/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Barbero;

import java.util.Random;
import java.util.logging.Logger;
import java.util.logging.Level;
import javax.swing.JProgressBar;

/**
 *
 * @author Cristian
 */
public class Barbero implements Runnable {
    Barberia barberia;
    
    public Barbero(Barberia b){
        this.barberia = b;
    }

    @Override
    public void run() {
        while(!VistaInicio.isCerrado){
            barberia.cortarCabello();
        }
    }
    
}
