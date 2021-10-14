package main

import (
	// Ayuda a escribir en la respuesta

	"encoding/json"
	"fmt" // Imprimir en consola
	"log"
	"net/http" // El paquete HTTP
	"os"
)

// Servidor HTTP
func http_server(w http.ResponseWriter, r *http.Request) {

	if r.URL.Path == "/" {
		http.Error(w, "404 not found.", http.StatusNotFound)
		return
	}

	switch r.Method {

	case "GET":
		//Agregar header
		w.Header().Set("Content-Type", "application/json")

		//Parsing body
		var body map[string]interface{}
		err := json.NewDecoder(r.Body).Decode(&body)
		if err != nil {
			fmt.Println("error")
			return
		}
		//Tipos de peticiones
		if r.URL.Path == "/memory" {
			dat, errfile := os.ReadFile("/proc/mem_grupo26")
			fmt.Print(errfile)

			jsonmem := string(dat)
			w.WriteHeader(http.StatusCreated)
			w.Write([]byte(jsonmem))
			return
		} else if r.URL.Path == "/process" {
			dat, errfile := os.ReadFile("/proc/procs_grupo26")
			fmt.Print(errfile)
			jsonmem := string(dat)
			w.WriteHeader(http.StatusCreated)
			w.Write([]byte(jsonmem))
			return
		}

	default:
		fmt.Fprintf(w, "Metodo %s no soportado \n", r.Method)
		return
	}
}

func main() {

	http.HandleFunc("/", http_server)
	print("Servidor levantado en el puerto 3000")
	//Si hay error se apaga
	if err := http.ListenAndServe(":3000", nil); err != nil {
		log.Fatal(err)
	}
}
