package main

import (
	"fmt"
	"go.nikolasgrottendieck.com/go-example.git/export"
	quote "rsc.io/quote/v3"
)

func main() {
	var exportCall export.Export
	exportCall.ExampleExport()
	fmt.Println(quote.HelloV3())
}
