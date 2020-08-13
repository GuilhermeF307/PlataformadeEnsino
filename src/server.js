require('express')()
.get("/", function(req ,res){
      return res.send("Hi from NLW")
})
.listen(5500)

