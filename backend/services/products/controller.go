package products

import (
	"errors"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

type Controller struct {
	repositoreis *Repositories
}

func InitController(repositoreis *Repositories) *Controller {
	return &Controller{repositoreis: repositoreis}
}

func (*Controller) HealthCheck(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"status": "up"})
}

func (controller *Controller) GetProductByHistoryID(c *gin.Context) {
	historyID := c.Param("history_id")

	product, err := controller.repositoreis.GetProductByHistoryID(historyID)
	if err != nil {
		// Log the error for debugging
		log.Printf("Error retrieving product for history ID %s: %v", historyID, err)

		if errors.Is(err, gorm.ErrRecordNotFound) {
			c.JSON(http.StatusNotFound, gin.H{"error": "Product not found"})
			return
		}

		c.JSON(http.StatusInternalServerError, gin.H{"error": "Internal Server Error"})
		return
	}
	c.JSON(http.StatusOK, product)
}
