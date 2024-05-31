var car = {
    name: "civic",
    model: 2019,
    manufacture: "local",
    engine: 1.8
};
for (var i in car) {
    console.log("car ".concat(i, "= ").concat(car[i]));
}
