package histories

import (
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

func (controller *Controller) GetHistoriesByUsername(c *gin.Context) {
	username := c.Param("username")

	if _, err := controller.repositoreis.FindUserByUsername(username); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	historyList, err := controller.repositoreis.GetHistoriesByUsername(username)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Could not retrieve shops"})
		return
	}
	c.JSON(http.StatusOK, historyList)
}
