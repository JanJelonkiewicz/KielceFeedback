var panelShown = false;
var panelHeight = 0;
var panelRectangleHeight = 0;

function togglePanel()
{
	if (panelShown)
	{
		hidePanel();
	}
	else
	{
		showPanel();
	}

	panelShown = !panelShown;
}

function showPanel()
{
	document.getElementById("addpanel").style.marginTop = "0px";
}

function hidePanel()
{
	document.getElementById("addpanel").style.marginTop = "" + -panelRectangleHeight + "px";
}

function updatePanelHeight()
{
	panelHeight = document.getElementById("addpanel-bg").clientHeight;
	panelRectangleHeight = panelHeight * 0.4;

	document.getElementById("addpanel").style.height = "" + panelHeight + "px";
	if (!panelShown)
	{
		//document.getElementById("sidebar").classList.add("no-transition");
		hidePanel();
		//document.getElementById("sidebar").classList.remove("no-transition");
	}
}

updatePanelHeight();
