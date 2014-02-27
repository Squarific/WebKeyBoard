function WebKeyBoard (target, settings, keyboardlayout) {
	this.id = Date.now() + "_KEYBOARD_" + Math.round(Math.random() * 1e6);
	this.target = target;
	this.keyboardlayout = keyboardlayout || this.azertyKeyboardlayout;
	this.settings = settings || this.defaultsettings;
	this.shift = false;
	this.moved = false;
	this.addToDom();
};

WebKeyBoard.prototype.domButton = function button (buttonId) {
	var button = document.createElement("div");
	button.style.width = this.settings.keyWidth + "px";
	button.style.height = this.settings.keyHeight + "px";
	button.style.fontSize = this.settings.keyHeight - 10 + "px";
	button.classList.add("webkeyboard_" + this.settings.themeName + "_button");
	if (this.specialKeys[buttonId]) {
		button.innerHTML = this.specialKeys[buttonId].character;
		button.addEventListener("");
	} else if (typeof buttonId === "number") {
		button.appendChild(document.createTextNode(String.fromCharCode(buttonId)));
	} else {
		throw "Undefined special key";
	}
	return button;
};

WebKeyBoard.prototype.domButtonRow = function buttonRow (buttonList) {
	var row = document.createElement("div");
	row.classList.add("webkeyboard_" + this.settings.themeName + "_row");
	for (var button = 0; button < buttonList.length; button++) {
		row.appendChild(this.domButton(buttonList[button]));
	}
	return row;
};

WebKeyBoard.prototype.domKeyboard = function () {
	var domKeyboard = document.createElement("div");
	domKeyboard.id = this.id;
	domKeyboard.classList.add("webkeyboard_" + this.settings.themeName + "_keyboard");
	for (var row = 0; row < this.keyboardlayout.length; row++) {
		domKeyboard.appendChild(this.domButtonRow(this.keyboardlayout[row]));
	}
	return domKeyboard;
};

WebKeyBoard.prototype.pusher = function () {
	var pusher = document.createElement("div");
	var keyboard = document.getElementById(this.id);
	pusher.style.height = keyboard.offsetHeight + "px";
	return pusher;
};

WebKeyBoard.prototype.addToDom = function () {
	this.removeFromDom();
	document.body.appendChild(this.domKeyboard());
	document.body.appendChild(this.pusher());
};

WebKeyBoard.prototype.removeFromDom = function () {
	var div = document.getElementById(this.id)
	if (div) {
		div.parentNode.removeChild(div);
	}
};

WebKeyBoard.prototype.changeTarget = function changeTarget (target) {
	this.target = target;
};

WebKeyBoard.prototype.changeKeyboardlayout = function changeKeyboardlayout (keyboardlayout) {
	this.keyboardlayout = keyboardlayout;
};

WebKeyBoard.prototype.changesettings = function changesettings (settings) {
	this.settings = settings;
};

WebKeyBoard.prototype.changesetting = function changesettings (setting, value) {
	this.settings[setting] = value;
};

WebKeyBoard.prototype.azertyKeyboardlayout = [
	[65, 64, 65, 64, 65, 64, 65, 64, 65, 64, 65, 64, 65, 64, 65, 64, 65, 64, 65, 64],
	[65, 64, 65, 64, 65, 64, 65, 64, 65, 64, 65, 64, 65, 64, 65, 64, 65, 64, 65, 64, 65, 64, 65, 64],
	[65, 64, 65, 64, 65, 64, 65, 64, 65, 64, 65, 64, 65, 64, 65, 64],
	[65, 64, 65, 64, 65, 64, 65, 64, 65, 64, 65, 64, 65, 64, 65, 64, 65, 64, 65, 64, 65, 64, 65, 64, 65, 64, 65, 64, 65, 64, 65, 64, 65, 64]
];

WebKeyBoard.prototype.defaultsettings = {
	keyHeight: 50,
	keyWidth: 80,
	scrollbarHeight: 20,
	scrollDistance: 20,
	themeName: "darkblue"
};

WebKeyBoard.prototype.specialKeys = {};

WebKeyBoard.prototype.specialKeys.left = {
	character: "&#x25B2;",
	onpress: function (target) {
		
	}
};

WebKeyBoard.prototype.specialKeys.up = {
	character: "&#x25B2;",
	onpress: function (target) {
		
	}
};

WebKeyBoard.prototype.specialKeys.down = {
	character: "&#x25B2;",
	onpress: function (target) {
		
	}
};

WebKeyBoard.prototype.specialKeys.delete = {
	character: "&#x25B2;",
	onpress: function (target) {
		
	}
};

WebKeyBoard.prototype.specialKeys.tab = {
	character: "&#x25B2;",
	onpress: function (target) {
		
	}
};

WebKeyBoard.prototype.specialKeys.shift = {
	character: "&#x25B2;",
	onpress: function (target) {
		
	}
};

WebKeyBoard.prototype.specialKeys.enter = {
	character: "&#x25B2;",
	onpress: function (target) {
		
	}
};