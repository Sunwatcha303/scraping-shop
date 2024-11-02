package main

import (
	"fmt"

	"backend/services/carts"
	"backend/services/histories"
	"backend/services/products"
	"backend/services/shops"
	"backend/services/users"
	"backend/util"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	// Configure CORS options
	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"*"}, // Replace with the frontend origin
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Content-Type", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
	}))

	db := util.ConnectDatabase()
	if db != nil {
		users.InitRoute(router, db)
		shops.InitRoute(router, db)
		carts.InitRoute(router, db)
		histories.InitRoute(router, db)
		products.InitRoute(router, db)
	}

	// Run the server
	fmt.Println("Listening on port: 8080")
	router.Run(":8080")
}
