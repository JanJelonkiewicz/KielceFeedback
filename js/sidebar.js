var sidebarShown = false;

function toggleSidebar()
{
	if (sidebarShown)
	{
		hideSidebar();
	}
	else
	{
		showSidebar();
	}

	sidebarShown = !sidebarShown;
}

function showSidebar()
{
	document.getElementById("sidebar").style.marginLeft = "0px";
}

function hideSidebar()
{
	document.getElementById("sidebar").style.marginLeft = "-30px";
}
