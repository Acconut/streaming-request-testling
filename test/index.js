var test = require("tape"),
    req = require("requests/browser");

test("streaming supported", function(t) {
	t.plan(1);
	t.equal(req.streaming, true);
});

