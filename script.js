var jsonCars = '[{"maker" : "VW","model" : "Golf"},{"maker" : "Honda","model" : "CRX"},{"maker" : "Toyota","model" : "Prius"},{"maker" : "Toyota","model" : "Camry"},{"maker" : "Honda","model" : "Civic"},{"maker" : "VW","model" : "Passat"}]';
var deserializedCarsArray = JSON.parse(jsonCars);



deserializedCarsArray.sort(function(car1, car2){
    if (car1.maker > car2.maker){
        return 1;
    }
    if (car1.maker < car2.maker){
        return -1;
    }
    if (car1.model > car2.model){
        return 1;
    }
    if (car1.model < car2.model){
        return -1;
    }
    return 0;
});

var i = 0;
while(i < deserializedCarsArray.length)
{
    var currentMaker = deserializedCarsArray[i].maker
    document.write("<b>" + currentMaker + "</b><br>")
    while(currentMaker == deserializedCarsArray[i].maker)
    {
        document.write(deserializedCarsArray[i].model + "<br>");
        i++;
    }
    document.write("<br>");
}