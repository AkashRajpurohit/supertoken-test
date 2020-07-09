const express = require('express');
const supertokens = require('supertokens-node');

const app = express();

supertokens.init({
	hosts: "https://try.supertokens.io",
	apiKey: "key",
	cookieDomain: 'localhost',

});

app.post("/refresh", supertokens.middleware(), (req, res) => {
	res.send("");
});

app.post("/login", async function (req, res) {
	// check for user credentials..

	let userId = "User1";
	let jwtPayload = {name: "spooky action at a distance"};
	let sessionData = {awesomeThings: ["programming", "javascript", "supertokens"]};

	await supertokens.createNewSession(res, userId, jwtPayload, sessionData);
	
	res.send("logged in");
});

app.post("/get-user", supertokens.middleware(), function (req, res) {
	let userId = req.session.getUserId();
	res.send(userId);
});

app.use(supertokens.errorHandler());

app.use((err, req, res, next) => {
	console.log(err);
	res.send(err)
})

app.use('*', (req, res) => {
	res.send('404 not found')
})


app.listen(4200, () => console.log('Started'))