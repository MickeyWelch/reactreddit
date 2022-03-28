// Bonus
// Alle titels die langer zijn dan 100 karakters, breek je af met .... Hier schrijf je een aparte helper-functie voor.
// if function. gebruik .length .slice
// toevoegen op titles in Home.js

function truncateString(string){
    if (string.length > 100) {
        return string.slice(0, 100) + ("...");
    } else {
        return string;
    }
}
export default truncateString;