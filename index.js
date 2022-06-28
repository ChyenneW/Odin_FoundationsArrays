const fruit = ["Apples", "Grapes", "Pineapples", "Melons"];

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