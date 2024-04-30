let statistics = { 
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
}
for( let car in statistics){
    let firstLetter = car.substring(0,1);
    if(firstLetter === 'r' || statistics[car] % 2 == 1) {
        console.log(car);
    }
}
