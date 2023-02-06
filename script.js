var user = "Su Aye Aung";
console.log(user);
var calculate = function (_a) {
    var num1 = _a.num1, num2 = _a.num2;
    return num1 * num2;
};
calculate({ num1: 5, num2: 5 });
var ForuserEmail = function (params) {
    if (params.num2) {
        return params.num1 * params.num2;
    }
    else {
        var userEmail = params.user1.email;
        console.log(userEmail);
        return params.num1;
    }
};
ForuserEmail({ num1: 2, user1: { name: "Alex", age: 15, email: "alex566@gmail.com" } });
var data = function (url) {
    console.log(url);
};
var person = function (params) {
    if (params.num4) {
        return params.num3 * params.num4;
    }
    var userObject = params.users[0];
    console.log(userObject);
    var datas = params.fetchData("http://localhost:3000");
    console.log(datas);
    return params.num3;
};
person({ num3: 5, users: [{ name: "Aye Aye", email: "ayeaye@gmail.com" }], fetchData: data });
