function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResults = document.getElementById("diceResults");
    const diceImages = document.getElementById("diceImages");

    const values = [];
    const images = [];

    for(let num=0; num<numOfDice; num++){

        const value = Math.floor(Math.random()*6)+1;
        // console.log(value);
        values.push(value);
        images.push(`<img src="dice_images/dice_num_${value}.png" alt=""Dice ${value}>`)

    }
   
    // console.log(values);
    console.log(images);

    diceResults.textContent = `Dice: ${values.join(', ')}`
    diceImages.innerHTML = images.join('');
}