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
	button.addEventListener("mouseup", this.mouseUpHandler.bind(this));
	button.addEventListener("touchend", this.touchEndHandler.bind(this));
	button.buttonId = buttonId;
	button.innerHTML = (this.specialKeys[buttonId]) ? this.specialKeys[buttonId].character : String.fromCharCode(buttonId);
	return button;
};

WebKeyBoard.prototype.touchEndHandler = function touchEndHandler (event) {
	this.mouseUpHandler ({
		screenX: event.changedTouches[0].screenX,
		screenY: event.changedTouches[0].screenY,
		clientX: event.changedTouches[0].clientX,
		clientY: event.changedTouches[0].clientY,
		pageX: event.changedTouches[0].pageX,
		pageY: event.changedTouches[0].pageY,
		radiusX: event.changedTouches[0].radiusX,
		radiusY: event.changedTouches[0].radiusY,
		rotationAngle: event.changedTouches[0].rotationAngle,
		force: event.changedTouches[0].force,
		target: document.elementFromPoint(event.changedTouches[0].clientX, event.changedTouches[0].clientY),
		type: event.type,
		ctrlKey: event.ctrlKey,
		shiftKey: event.shiftKey,
		altKey: event.altKey,
		metaKey: event.metaKey
	});
};

WebKeyBoard.prototype.mouseUpHandler = function mouseUpHandler (event) {
	if (this.specialKeys && this.specialKeys[event.target.buttonId] && typeof this.specialKeys[event.target.buttonId].pressHandler === "function") {
		this.specialKeys[event.target.buttonId].pressHandler(this.target, event.target, this);
	} else {
		this.pressHandler(event.target);
	}
	this.moved = false;
};

WebKeyBoard.prototype.pressHandler = function pressHandler (buttonElement) {
	if (typeof this.target === "function") {
		this.target(buttonElement.buttonId, buttonElement);
		return;
	}
	this.pressKey(String.fromCharCode(buttonElement.buttonId));
};

WebKeyBoard.prototype.pressKey = function pressKey (string) {
	var setSelection = this.target.selectionStart + 1;
	this.target.value = this.target.value.slice(0, this.target.selectionStart) + string + this.target.value.slice(this.target.selectionEnd);
	this.target.focus();
	this.target.setSelectionRange(setSelection, setSelection);
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
	pusher.id = this.id + "_pusher"
	return pusher;
};

WebKeyBoard.prototype.addToDom = function () {
	this.removeFromDom();
	document.body.appendChild(this.domKeyboard());
	document.body.appendChild(this.pusher());
};

WebKeyBoard.prototype.removeFromDom = function () {
	var div = document.getElementById(this.id),
		pusher = document.getElementById(this.id + "_pusher");
	pusher ? pusher.parentNode.removeChild(pusher) : "";
	div ? div.parentNode.removeChild(div) : "";
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
	[38,233,34,39,40,167,232,33,231,224,41,45],
	[49,50,51,52,53,54,55,56,57,48,176,95],
	[97,122,101,114,116,121,117,105,111,112,94,36],
	[113,115,100,102,103,104,106,107,108,109,249,181],
	[119,120,99,118,98,110,44,59,58,61],
	[32,32,32,32,32,32,32,32,32,32]
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
	pressHandler: function (target) {
		
	}
};

WebKeyBoard.prototype.specialKeys.up = {
	character: "&#x25B2;",
	pressHandler: function (target) {
		
	}
};

WebKeyBoard.prototype.specialKeys.down = {
	character: "&#x25B2;",
	pressHandler: function (target) {
		
	}
};

WebKeyBoard.prototype.specialKeys.delete = {
	character: "&#x25B2;",
	pressHandler: function (target) {
		
	}
};

WebKeyBoard.prototype.specialKeys.tab = {
	character: "&#x25B2;",
	pressHandler: function (target) {
		
	}
};

WebKeyBoard.prototype.specialKeys.shift = {
	character: "&#x25B2;",
	pressHandler: function (target) {
		
	}
};

WebKeyBoard.prototype.specialKeys.enter = {
	character: "&#x25B2;",
	pressHandler: function (target) {
		
	}
};

WebKeyBoard.prototype.specialKeys["32"] = {
	character: "Sp."
};