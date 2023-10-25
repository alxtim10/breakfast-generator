package models

import (
	"time"
)

type Breakfasts struct {
	Id          uint      `json:"id" gorm:"primary_key"`
	Name        string    `json:"name"`
	Description string    `json:"description"`
	Created_At  time.Time `json:"created_at"`
}
