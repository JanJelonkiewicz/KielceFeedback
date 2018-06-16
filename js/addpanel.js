var panelVisible;
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
	document.getElementById("addpanel").style.marginTop = "-616px";
}

function hidePanel()
{
	document.getElementById("addpanel").style.marginTop = "-675px";
}

function updatePanelHeight()
{
	panelHeight = (document.getElementById("addpanel-bg").clientHeight);
	panelRectangleHeight = Math.ceil(panelHeight * 62/90) + 1;

	document.getElementById("addpanel").style.height = "" + panelHeight + "px";
	if (!sidebarShown)
	{
		//document.getElementById("sidebar").classList.add("no-transition");
		document.getElementById("addpanel").style.marginTop = "-" + panelRectangleHeight + "px";
		//document.getElementById("sidebar").classList.remove("no-transition");
	}
}

updatePanelHeight();
