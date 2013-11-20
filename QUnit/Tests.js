///<reference path="../jquery.d.ts"/>
///<reference path="qunit.d.ts"/>
///<reference path="../app.ts"/>
QUnit.module("app.ts tests");

test("Can generate string", function () {
    // Arrange
    var gen = new Greeter($("#content")[0]);

    // Act
    // Assert
    ok($("#content").html().indexOf("The time is: ") >= 0, "#content should contain 'The time is: '");
});
//# sourceMappingURL=Tests.js.map
