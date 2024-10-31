package users

import (
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func InitRoute(router *gin.Engine, db *gorm.DB) {
	// Example of a health check route
	repo := InitRepo(db)
	controller := InitController(repo)

	// Add other routes
	api := router.Group("/user")
	{
		api.GET("/health", controller.HealthCheck)
		api.POST("/signup", controller.SignUp)
		api.POST("/signin", controller.SignIn)
	}
}
