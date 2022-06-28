function useToString() {
    const fruit = ["Apples", "Grapes", "Pineapples", "Melons"];
    console.log(fruit);
    document.getElementById("useToString").innerHTML = fruit.toString();
}
useToString();