package shops

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

func (controller *Controller) GetAllShop(c *gin.Context) {
	shops, err := controller.repositoreis.GetAllShop()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Could not retrieve shops"})
		return
	}
	c.JSON(http.StatusOK, shops)
}

func (controller *Controller) GetAllProductByShopName(c *gin.Context) {
	var shopResponse ShopResponse
	var products *[]Product

	shopName := c.Param("shop_name")

	shop, err := controller.repositoreis.GetShopByShopName(shopName)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "shop not exist"})
		return
	}
	shopResponse = ShopResponse{
		Image:       shop.Image,
		ShopName:    shop.ShopName,
		Description: shop.Description,
	}

	products, err = controller.repositoreis.GetProductsByShopName(shopName)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	// Check if the products slice is empty and initialize it as an empty slice if necessary
	if len(*products) == 0 {
		products = &[]Product{} // Initialize as an empty slice
	}

	productsResponse := ProductsResponse{
		Shop:    &shopResponse,
		Product: products, // Use the address of the products slice
	}

	// Return the response as JSON
	c.JSON(http.StatusOK, productsResponse)
}
