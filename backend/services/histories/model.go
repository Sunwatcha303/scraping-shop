package histories

type HistoryResponse struct {
	ID          uint   `json:"history_id"`
	ProductName string `json:"product_name"`
	ShopName    string `json:"shop_name"`
	Price       string `json:"price"`
}
