function writeCards(names, eventName) {
  const cards = []; // array to store the cards

  for (let i = 0; i < names.length; i++) {
    const message = `Thank you  ${names[i]}, for the wonderful  ${eventName}.`; // create a message for each name
    cards.push(message); // add the message to the cards array
  }

  return cards; // return the array of cards
}
const names = ["Guadalupe", "Aki" ,"Ollie"];
const eventName = "surprise gift!";
const cards = writeCards(names, eventName);

console.log(cards); // prints ["Dear Kelvin, we are so glad you could join us for the party.", "Dear Zipporah, we are so glad you could join us for the party."]

function countDown(num) {
    for (let i = num; i >= 0; i--) {
      console.log(i);
    }
  }

  countDown(10);
