package main

import (
	"example/go-orm/configs"
	"example/go-orm/controllers"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func init() {
	configs.LoadEnv()
	configs.ConnectToDB()
}

func main() {
	router := gin.Default()
	router.Use(cors.Default())

	router.GET("/", controllers.GetBreakfast)
	router.GET("/:id", controllers.GetBreakfastById)
	router.POST("/", controllers.CreateBreakfast)
	router.PUT("/:id", controllers.UpdateBreakfast)
	router.DELETE("/:id", controllers.DeleteBreakfast)

	router.Run()

}
