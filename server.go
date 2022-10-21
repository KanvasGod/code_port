package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {

	// serve files from static folder
	// http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("static"))))
	http.Handle("/", http.FileServer(http.Dir("./static")))

	// http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
	// 	fmt.Fprintf(w, "Hello world from GfG")
	// })

	port := ":3000"

	fmt.Println("Server is running on port ", port)
	log.Fatal(http.ListenAndServe(port, nil))
}
