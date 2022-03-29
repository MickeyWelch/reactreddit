// Bonus opdracht
// Alle aantallen (ups, comments, subscribers) geef je weer in een punt-notatie. Hier schrijf je een aparte helper-functie voor:
//     10000 wordt 10.000
// 8005 wordt 8.005
// 1456734 wordt 14.567.34
// 450 wordt 450


function numberWithDots(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
export default numberWithDots;