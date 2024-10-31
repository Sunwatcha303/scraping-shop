package shops

import (
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func InitRoute(router *gin.Engine, db *gorm.DB) {
	// Example of a health check route
	repo := InitRepo(db)
	controller := InitController(repo)

	// Add other routes
	api := router.Group("/shop")
	{
		api.GET("/health", controller.HealthCheck)
		api.GET("/all", controller.GetAllShop)
		api.GET("/product/:shop_name", controller.GetAllProductByShopName)
	}
}
