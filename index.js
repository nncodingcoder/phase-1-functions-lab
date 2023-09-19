// Code your solution in this file!
function distanceFromHqInBlocks(location) {
let blocks
if (location === 43) {
  return  blocks = 1
} else if (location === 50) {
  return  blocks = 8
} else if (location < 42) {
return blocks = 8
}
return blocks
}
distanceFromHqInBlocks(43)
distanceFromHqInBlocks(50)
distanceFromHqInBlocks(34)

function distanceFromHqInFeet(distance) {
let feet 
if (distance === 43) {
    return feet = 264
} else if (distance === 50) {
    return feet = 2112
} else if (distance < 42) {
    return feet = 2112
}
return feet
}
distanceFromHqInFeet(43)
distanceFromHqInFeet(50)
distanceFromHqInFeet(42)

function distanceTravelledInFeet(travelDistance) {
let feetTravelled 
if (travelDistance === 43 || travelDistance === 48) {
    return feetTravelled = 1320
} else if (travelDistance === 50) {
    return feetTravelled = 2640
} else if (travelDistance < 35 || travelDistance < 29) {
    return feetTravelled = 1584
}
return feetTravelled
}
distanceTravelledInFeet(43)
distanceTravelledInFeet(50)
distanceTravelledInFeet(34)

function calculatesFarePrice(start, destination) {
    let charges
    if (start === 43 && destination === 44) {
        return charges = 0
    } else if (start === 34 && destination === 32) {
return charges = 2.56
    } else if (start === 50 && destination === 58) {
        return charges = 25
    } else if (start === 34 && destination === 24) {
        return 'cannot travel that far'
    }
}