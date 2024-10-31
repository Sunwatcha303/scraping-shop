package main

import (
	"fmt"

	"backend/services/carts"
	"backend/services/histories"
	"backend/services/shops"
	"backend/services/users"
	"backend/util"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	db := util.ConnectDatabase()
	if db != nil {
		users.InitRoute(router, db)
		shops.InitRoute(router, db)
		carts.InitRoute(router, db)
		histories.InitRoute(router, db)
	}

	// Run the server
	fmt.Print("Listening on port: 8080")
	router.Run(":8080") // Start the server on port 8080
}
