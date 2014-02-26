function WebKeyBoard (target, keyboardstyle, generalstyle) {
	this.id = Date.now() + "_KEYBOARD_" + Math.round(Math.random() * 1e6);
	this.target = target;
	this.keyboardstyle = keyboardstyle || this.azertyKeyboardstyle;
	this.generalstyle = generalstyle || this.defaultGeneralstyle;
	this.shift = false;
};

WebKeyBoard.prototype.domButton = function button (buttonId) {
	var button = document.createElement("div");
	//button.addEventListener();
	button.style.width = this.generalstyle.keyWidth + "px";
	button.style.height = this.generalstyle.keyHeight + "px";
	button.classList.add("webkeyboard_" + this.generalstyle.themeName + "_button");
	return button;
};

WebKeyBoard.prototype.domButtonRow = function buttonRow (buttonList) {
	var row = document.createElement("div");
	row.classList.add("webkeyboard_" + this.generalstyle.themeName + "_row");
	for (var button = 0; buttonList.length; button++) {
		row.appendChild(this.domButton(buttonList[button]));
	}
	return row;
};

WebKeyBoard.prototype.domKeyboard = function () {
	var domKeyboard = document.createElement("div");
	domKeyBoard.classList.add("webkeyboard_" + this.generalstyle.themeName + "_keyboard"");
	for (var row = 0; row < this.keyboardstyle.length; row++) {
		var domRow = this.domButtonRow(this.keyboardstyle[row]);
	}
	return domKeyBoard;
};

WebKeyBoard.prototype.changeTarget = function changeTarget (target) {
	this.target = target;
};

WebKeyBoard.prototype.changeKeyboardstyle = function changeKeyboardstyle (keyboardstyle) {
	this.keyboardstyle = keyboardstyle;
};

WebKeyBoard.prototype.changeGeneralstyle = function changeGeneralstyle (generalstyle) {
	this.generalstyle = generalstyle;
};

WebKeyBoard.prototype.azertyKeyboardstyle = [
	[65, 64, 65, 64, 65, 64, 65, 64, 65, 64, 65, 64, 65, 64, 65, 64, 65, 64, 65, 64],
	[65, 64, 65, 64, 65, 64, 65, 64, 65, 64, 65, 64, 65, 64, 65, 64, 65, 64, 65, 64, 65, 64, 65, 64],
	[65, 64, 65, 64, 65, 64, 65, 64, 65, 64, 65, 64, 65, 64, 65, 64],
	[65, 64, 65, 64, 65, 64, 65, 64, 65, 64, 65, 64, 65, 64, 65, 64, 65, 64, 65, 64, 65, 64, 65, 64, 65, 64, 65, 64, 65, 64, 65, 64, 65, 64]
];

WebKeyBoard.prototype.defaultGeneralStyle = {
	keyHeight: 50,
	keyWidth: 80,
	scrollbarHeight: 20,
	scrollDistance: 20,
	themeName: "darkblue"
};

WebKeyBoard.prototype.specialKeys = {
	left: {
		character: "&#x25B2;",
		onpress: function (target) {
			
		}
	},
	up: {
		character: "&#x25B2;",
		onpress: function (target) {
			
		}
	},
	down: {
		character: "&#x25B2;",
		onpress: function (target) {
			
		}
	},
	right: {
		character: "&#x25B2;",
		onpress: function (target) {
			
		}
	},
	tab: {
		character: "&#x25B2;",
		onpress: function (target) {
			
		}
	},
	enter: {
		
	},
	"delete": {
		
	}
	shift: {
		character: "&#8679;",
		onpress: function (target) {
			
		}
	}
};