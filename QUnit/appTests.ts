
///<reference path="../jquery.d.ts"/>
///<reference path="qunit.d.ts"/>
///<reference path="../app.ts"/>

// If not already included in html script (can't get this to work): QUnit.module("app.ts tests");

test("Initialize Greeter", function () {
    // Arrange
    var gen = new Greeter($("#content")[0]);

    // Act

    // Assert
    ok($("#content").html().indexOf("The time is: ") >= 0, "#content should contain 'The time is: '");
});

test("Can generate string", function () {
    // Arrange
    var gen = new Greeter($("#content")[0]);

    // Act
    var s = gen.generate("inputStr");
    
    // Assert
    equal(s, "inputStr:Hello World");
});
