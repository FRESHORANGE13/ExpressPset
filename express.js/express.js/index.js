const express = require('express');
const app = express()
app.use(express.json()); // allows you to read jsons 
app.post ('/', function(req, res){
    console.log(req.body.get('day'));
    res.send('Helo World Post');
})

app.get('/day', function(req, res)
{
    res.json({"message": 'Hello World' + req.body['day']}); // sends it back as a json
})

// add 
app.get("/add", function(req, res){
    var sum = 0; 
    req.body['array'].forEach((element) => sum += element);
    res.json({"added values": sum});
})

//product 
app.post("/product", function(req,res){
    var product = 0; 
    req.body['array'].forEach((element) => product = product * element);
    res.json({"multiplied values": product});
})

//finds evens 
app.post("/evens", function(req,res){
    var evens = []; 
    req.body['array'].filter((element) => element%2 ==0);
    res.json({"even values ": evens});
})

//min val
app.post("/min", function(req,res){
    res.json({"min": Math.min(req.body['array'])})
})

//max val
app.post("/max", function(req,res){
    res.json({"max": Math.max(req.body['array'])})
})

//sorts ascending/descending 
app.post("/sort", function(req,res){
    if(res.body['ascending']){
        res.json({"sorted ascending": req.body['array'].sort()}); //ascending
    }
    else{
        res.json({"sorted descending": req.body['array'].sort().reverse()}); // reversed ascending
    }
})

// checks is there is a possible sum that is target 
app.post("/target", function(req,res){
    var array =req.body['array'];
    var target = req.body['target'];
    res.json({"sum: " : checkSum(array,target)})

})

//checksum func used above 
function checkSum(array, target){
    for (i = 0; i < array.length() - 1; i++) {
        for (j = i+1 ; j < array.length(); j++) {
            if (array[i] + array[j] == target) {
                return true;
            }
        }
    return false;
    }
}


app.listen(3000, () => console.log("index is listening!!"));
//3000 is the port 

//generally, post creates and get reads
