package main

import (
	// Ayuda a escribir en la respuesta

	"encoding/json"
	"fmt" // Imprimir en consola
	"log"
	"net/http" // El paquete HTTP
	"os"
	"strings"
	"syscall"
)

type pids struct {
	Pid int
}

// Servidor HTTP
func http_server(w http.ResponseWriter, r *http.Request) {

	if r.URL.Path == "/" {
		http.Error(w, "404 not found.", http.StatusNotFound)
		return
	}
	//Agregar header
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	switch r.Method {

	case "GET":

		//Tipos de peticiones
		if r.URL.Path == "/memory" {
			dat, errfile := os.ReadFile("/proc/mem_grupo26")
			fmt.Print(errfile)

			jsonmem := string(dat)
			w.WriteHeader(http.StatusCreated)
			w.Write([]byte(jsonmem))
			return
		} else if r.URL.Path == "/process" || r.URL.Path == "/tree" {
			dat, errfile := os.ReadFile("/proc/procs_grupo26")
			fmt.Print(errfile)
			jsonmem := string(dat)

			val := strings.Split(jsonmem, ",\n]")[0]
			result := string(val) + "]\n}"

			w.WriteHeader(http.StatusCreated)
			w.Write([]byte(result))
			return
		}
		return
	case "POST":

		//Parsing body
		var body map[string]interface{}
		err := json.NewDecoder(r.Body).Decode(&body)
		if err != nil {
			fmt.Println("error al parsear el body")
			return
		}
		data, err := json.Marshal(body)
		newData := string(data)
		var pids_r pids
		json.Unmarshal([]byte(newData), &pids_r)
		//pid_result := strconv.Itoa(pids_r.Pid)

		if r.URL.Path == "/killprocess" {
			err := syscall.Kill(pids_r.Pid, syscall.SIGKILL)
			//err := exec.Command("kill ", "-9 ", pid_result).Process

			if err != nil {
				jsonmem := string("{\"res\" : \"Operation not permitted\"}")
				w.WriteHeader(http.StatusCreated)
				w.Write([]byte(jsonmem))
				fmt.Println(err)
			} else {
				jsonmem := string("{\"res\" : \"Ha sido detenido Correctamente\"}")
				w.WriteHeader(http.StatusCreated)
				w.Write([]byte(jsonmem))
			}

			return
		}
		return
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
