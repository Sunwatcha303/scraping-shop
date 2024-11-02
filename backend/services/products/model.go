package products

type ProductResponse struct {
	HistoryID   uint   `json:"history_id"`
	ProductID   uint   `json:"product_id"`
	ProductName string `json:"product_name"`
	Price       string `json:"price"`
	Description string `json:"description"`
	Data        string `json:"data"`
}
