package users

import (
	"backend/util"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
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

func (controller *Controller) SignUp(c *gin.Context) {
	var signUpReq SignUpRequest
	if err := c.ShouldBindJSON(&signUpReq); err != nil {
		// If binding fails, respond with a 400 Bad Request
		fmt.Print(err.Error())
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if user, _ := controller.repositoreis.FindUserByUsername(signUpReq.Username); user != nil {
		fmt.Print("exist username")
		c.JSON(http.StatusBadRequest, gin.H{"error": "exist username"})
		return
	}

	newUser := User{
		Username: signUpReq.Username,
		Role:     signUpReq.Role,
	}

	hashedPassword, err := util.HashPassword(signUpReq.Password)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to hash password"})
		return
	}
	newUser.Password = hashedPassword

	if _, err := controller.repositoreis.CreateUser(&newUser); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	if newUser.Role == "admin" {
		if _, err := controller.repositoreis.CreateShop(&newUser); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
	}
	token, err := util.GenerateToken(newUser.Username, newUser.Role)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"token": token, "message": "Signup successful!"})
}

func (controller *Controller) SignIn(c *gin.Context) {
	var signInReq SignInRequest
	if err := c.ShouldBindJSON(&signInReq); err != nil {
		// If binding fails, respond with a 400 Bad Request
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	user, err := controller.repositoreis.FindUserByUsername(signInReq.Username)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "User not found"})
		return
	}

	// Compare the provided password with the hashed password
	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(signInReq.Password)); err != nil {
		// If the password does not match, respond with a 401 Unauthorized
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Incorrect password"})
		return
	}

	token, err := util.GenerateToken(user.Username, user.Role)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"token": token, "message": "Signin successful!"})
}
