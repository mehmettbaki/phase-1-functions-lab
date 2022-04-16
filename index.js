// Code your solution in this file!
//ok
function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    

    return Math.abs(someValue-42)
  }






//ok
  function distanceFromHqInFeet(someValue) {
    //returns the number of blocks given a value
   

    return distanceFromHqInBlocks(someValue)*264
  }



function distanceTravelledInFeet(start, destination) {
    return Math.abs(start-destination)*264
}



function calculatesFarePrice(start, destination){
    const farePrice = distanceTravelledInFeet(start, destination)
    if (farePrice <= 400) {
        return  0
    } else if (farePrice > 400 && farePrice <= 2000){
        return  ((farePrice-400) * 2 / 100)
    } else if (farePrice > 2000 && farePrice <= 2500){
        return 25
    }else if(farePrice > 2500){
return "cannot travel that far"}
    
}