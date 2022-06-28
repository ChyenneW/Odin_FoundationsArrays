const fruit = ["Apples", "Grapes", "Pineapples", "Melons"];
const veggies = ["Carrots", "Celary", "Lettuce", "Onion"];
const meats = ["Ham", "Turkey", "Beef", "Bacon"];

function useToString() {
    document.getElementById("useToString").innerHTML = fruit.toString();
}
useToString();

function useJoin() {
    document.getElementById("useJoin").innerHTML = fruit.join(", ");
}
useJoin();

function usePop() {
    document.getElementById("usePop").innerHTML = fruit.pop();
}
usePop();

function usePush() {
    document.getElementById("usePush").innerHTML = fruit.push("Watermelon");
}
usePush();

function useShift() {
    document.getElementById("useShift").innerHTML = fruit.shift();
}
useShift();

function useUnshift() {
    document.getElementById("useUnshift").innerHTML = fruit.unshift("Cantalope");
}
useUnshift();

function useIndexes() {
    fruit[2] = "Candy";
    document.getElementById("useIndexes").innerHTML = fruit;
}
useIndexes();

function useMergeTwo() {
    const vegaterian = fruit.concat(veggies);
    document.getElementById("useMergeTwo").innerHTML = vegaterian;
}
useMergeTwo();

function useMergeThree() {
    const omnivor = fruit.concat(veggies, meats);
    document.getElementById("useMergeThree").innerHTML = omnivor;
}
useMergeThree();

function useSplice() {
    document.getElementById("useSplice").innerHTML = fruit.splice(2, 2, "Bananas", "Kiwies");
}
useSplice();