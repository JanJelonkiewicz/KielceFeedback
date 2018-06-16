function onResize()
{
	updateSidebarWidth();
	updatePanelHeight();
}

function quickHack()
{
	showPointsOfInterest("data/poi/gp_teatry_point.json");
	showHeatmap("data/demand/teatry.json");
}

function quickHack2()
{
	showPointsOfInterest("data/poi/gp_muzea2_point.json");
	showHeatmap("data/demand/muzea.json");
}