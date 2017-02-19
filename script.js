var jsonCars = '[{"maker" : "VW","model" : "Golf"},{"maker" : "Honda","model" : "CRX"},{"maker" : "Toyota","model" : "Prius"},{"maker" : "Toyota","model" : "Camry"},{"maker" : "Honda","model" : "Civic"},{"maker" : "VW","model" : "Passat"},{"maker" : "Subaru","model" : "Impreza"},{"maker" : "Subaru","model" : "Impreza WRX STI"}, {"maker" : "Subaru","model" : "Impreza WRX"}, {"maker" : "Subaru","model" : "Forester"}, {"maker" : "Subaru","model" : "FNrester"}]';
var deserializedCarsArray = JSON.parse(jsonCars);



deserializedCarsArray.sort(function(car1, car2){
   if (car1.maker >= car2.maker)
   {
       if(car1.maker == car2.maker){
           if (car1.model.toUpperCase() >= car2.model.toUpperCase())
           {
               return car1.model.toUpperCase() > car2.model.toUpperCase() ? 1 : 0;
           }
           else return -1;
           
       }
       else return 1;
   }
   return -1;
});

var i = 0;
while(i < deserializedCarsArray.length)
{
    var currentMaker = deserializedCarsArray[i].maker
    document.write("<b>" + currentMaker + "</b><br>");

    while(currentMaker == deserializedCarsArray[i].maker)
    {
        document.write(deserializedCarsArray[i].model + "<br>");
        i++;
    }
    document.write("<br>");
}