
    for(let y = 1; y <= 10; y++){
        var line = "";


        
    for (let x = 1; x <= 10; x++) {
        line += " " + x * y;
    }
        console.log(line);

}

console.log("step 2");

for(let y = 1; y <= 10; y++){
    var line = "";


    
    for (let x = 1; x <= 10; x++) {
        let padNumber = (x * y).toString().padStart(3,"0");

        line += " " + padNumber;
     }

console.log(line);
}