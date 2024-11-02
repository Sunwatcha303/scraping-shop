package carts

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
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

func (controller *Controller) Payment(c *gin.Context) {
	var paymentReq PaymentRequest
	if err := c.ShouldBindJSON(&paymentReq); err != nil {
		// If binding fails, respond with a 400 Bad Request
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	fmt.Print(paymentReq)
	if _, err := controller.repositoreis.GetUserByUsername(paymentReq.Username); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "user not exist"})
		return
	}

	if err := controller.repositoreis.CreateTransaction(&paymentReq); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Payment successful!"})
}
