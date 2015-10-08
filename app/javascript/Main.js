var widgetAPI = new Common.API.Widget();
var tvKey = new Common.API.TVKeyValue();
var i=0;
var max=3;
var plugin;

var Main =
{

};

Main.onLoad = function()
{
	plugin = document.getElementById("pluginObjectAudio");
	window.onShow();
	// Enable key event processing
	this.enableKeys();
	widgetAPI.sendReadyEvent();
	if(sessionStorage.getItem("indice")==null)
		navigation("RIGHT");
	else
		{i=sessionStorage.getItem("indice")-1;
	
	navigation("RIGHT");}
};

Main.onUnload = function()
{

};

Main.enableKeys = function()
{
	//document.getElementById("anchor").focus();
	$(".anchor").focus();
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
			widgetAPI.sendReturnEvent();
			break;
		case tvKey.KEY_LEFT:
			alert("LEFT");
			navigation("LEFT");
			break;
		case tvKey.KEY_RIGHT:
			alert("RIGHT");
			navigation("RIGHT");
			break;
		case tvKey.KEY_UP:
			alert("UP");
			navigation("LEFT");
			break;
		case tvKey.KEY_DOWN:
			alert("DOWN");
			navigation("RIGHT");
			break;
		case tvKey.KEY_ENTER:
		case tvKey.KEY_PANEL_ENTER:
			alert("ENTER");
			if(i==1){
				sessionStorage.setItem("indice",i);
				parent.location="OnePlayer.html";
				break;
			}
			/*else if(i==2){
				sessionStorage.setItem("indice",i);
				parent.location="twoPlayer.html";
				break;
			}*/
			else if(i==2){
				sessionStorage.setItem("indice",i);
				parent.location="help.html";
				break;
			}
			else if(i==3){
				sessionStorage.setItem("indice",i);
				parent.location="About.html";
				break;
			}
		case tvKey.KEY_VOL_UP:
			 volInc();
			alert(getVolume());
			 break;
			 case tvKey.KEY_VOL_DOWN:
			alert(plugin.GetVolume());
			 volDec();
			alert(getVolume());
			 break;
			case tvKey.KEY_MUTE:
			volMute();
			alert(getVolume());
			 break;
		default:
			alert("Unhandled key");
			break;
	}
};
function navigation(dir){
   $("#fig"+i).removeClass("shake");
	if(dir=="RIGHT"){
		if(i==max) i=1;
	else i++;
	}
	if(dir=="LEFT"){
		if(i==1) i=max;
		else i--;
	}
	 $("#fig"+i).addClass("shake");
}
function volInc() {
	 plugin.SetVolumeWithKey(0);
	getVolume();
	}
function volDec() {
	 plugin.SetVolumeWithKey(1);
	 getVolume();
	}
function volMute(){
	if(plugin.GetUserMute()==0){
	plugin.SetUserMute(1);
	setVolumeZero();
	}else{
	plugin.SetUserMute(0);
	getVolume();
	}
	}
function getVolume(){
	alert(plugin.GetVolume());
	}
function setVolumeZero(){
}
window.onShow = function() {
	 var nnaviPlugin = document.getElementById('pluginObjectNNavi');
	 nnaviPlugin.SetBannerState(1);
	 // For volume OSD
	var pluginAPI = new Common.API.Plugin();
	pluginAPI.SetBannerState(1);
	 pluginAPI.unregistKey(tvKey.KEY_VOL_UP);
	 pluginAPI.unregistKey(tvKey.KEY_VOL_DOWN);
	 pluginAPI.unregistKey(tvKey.KEY_MUTE);
	}
