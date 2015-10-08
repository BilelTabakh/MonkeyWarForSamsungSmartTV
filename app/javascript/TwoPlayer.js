var widgetAPI = new Common.API.Widget();
var tvKey = new Common.API.TVKeyValue();
var popup=false;
var Main =
{

};

Main.onLoad = function()
{
	// Enable key event processing
	this.enableKeys();
	widgetAPI.sendReadyEvent();

};

Main.onUnload = function()
{

};

Main.enableKeys = function()
{
	document.getElementById("anchor").focus();
};

Main.keyDown = function()
{
	var keyCode = event.keyCode;
	alert("Key pressed: " + keyCode);

	switch(keyCode)
	{
		case tvKey.KEY_RETURN:
		case tvKey.KEY_PANEL_RETURN:
			alert("RETURN");
			//widgetAPI.sendReturnEvent();
			widgetAPI.blockNavigation(event);
			if(popup==false){
				document.getElementById("popup").style.visibility="visible";
				popup=true;
			}else{
				document.getElementById("popup").style.visibility="hidden";
				popup=false;
			}
			//parent.location="index.html";
			break;
		case tvKey.KEY_LEFT:
			alert("LEFT");

			break;
		case tvKey.KEY_RIGHT:
			alert("RIGHT");

			break;
		case tvKey.KEY_UP:
			alert("UP");
			break;
		case tvKey.KEY_DOWN:
			alert("DOWN");
			break;
		case tvKey.KEY_ENTER:
		case tvKey.KEY_PANEL_ENTER:
			alert("ENTER");
			if(popup==true){
				alert("testtt");
			popup=false;
				parent.location="index.html";
			}
				break;
		default:
			alert("Unhandled key");
			break;
	}
};
