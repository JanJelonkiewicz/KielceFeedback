var sidebarShown = false;
var sidebarWidth = 0;
var sidebarRectangleWidth = 0;

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
	document.getElementById("sidebar").style.marginLeft = "0";
}

function hideSidebar()
{
	document.getElementById("sidebar").style.marginLeft = "-" + sidebarRectangleWidth + "px";
}

function updateSidebarWidth()
{
	sidebarWidth = (document.getElementById("sidebar-bg").clientWidth);
	sidebarRectangleWidth = Math.ceil(sidebarWidth * 503/609) + 1;

	document.getElementById("sidebar").style.width = "" + sidebarWidth + "px";
	if (!sidebarShown)
	{
		//document.getElementById("sidebar").classList.add("no-transition");
		hideSidebar();
		//document.getElementById("sidebar").classList.remove("no-transition");
	}
}


function toggleSubList(sidebarOption)
{
	var subList = sidebarOption.nextElementSibling;

	if (subList.style.height != (subList.scrollHeight + "px"))
	{
		subList.style.height = (subList.scrollHeight + "px");
	}
	else
	{
		subList.style.height = "0px";
	}
}

updateSidebarWidth();