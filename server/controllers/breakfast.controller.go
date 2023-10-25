package controllers

import (
	"example/go-orm/configs"
	"example/go-orm/models"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
)

func GetBreakfast(c *gin.Context) {

	var results []models.Breakfasts
	configs.DB.Find(&results)

	c.IndentedJSON(200, gin.H{
		"data": results,
	})
}

func GetBreakfastById(c *gin.Context) {

	id := c.Param("id")
	var result models.Breakfasts
	err := configs.DB.First(&result, id).Error

	if err != nil {
		c.IndentedJSON(http.StatusNotFound, gin.H{"message": "Breakfast not Found!"})
		return
	}

	c.IndentedJSON(200, gin.H{
		"data": result,
	})

}

func CreateBreakfast(c *gin.Context) {

	row := models.Breakfasts{
		Created_At: time.Now(),
	}
	if err := c.BindJSON(&row); err != nil {
		return
	}

	err := configs.DB.Create(&row).Error

	if err != nil {
		c.IndentedJSON(http.StatusBadRequest, gin.H{"message": "Missing Fields"})
		return
	}

	c.JSON(200, gin.H{
		"data": row,
	})
}

func UpdateBreakfast(c *gin.Context) {

	body := models.Breakfasts{}
	if err := c.BindJSON(&body); err != nil {
		return
	}

	id := c.Param("id")
	var existing models.Breakfasts
	err := configs.DB.First(&existing, id).Error

	if err != nil {
		c.IndentedJSON(http.StatusNotFound, gin.H{"message": "Breakfast not Found!"})
		return
	}

	configs.DB.Model(&existing).Updates(models.Breakfasts{
		Name:        body.Name,
		Description: body.Description,
	})

	c.JSON(200, gin.H{
		"data": existing,
	})
}

func DeleteBreakfast(c *gin.Context) {

	id := c.Param("id")

	var existing models.Breakfasts
	err := configs.DB.First(&existing, id).Error

	if err != nil {
		c.IndentedJSON(http.StatusNotFound, gin.H{"message": "Breakfast not Found!"})
		return
	}

	configs.DB.Delete(&existing)

	c.JSON(200, gin.H{
		"message": "Breakfast Deleted",
	})
}
