function switchTbl(evt, id) {
	var pages = document.getElementsByClassName("tabPage");
	for (var i = 0; i < pages.length; i++)
		pages[i].style.display = "none";
	document.getElementById(id).style.display = "block";

	tabSel = document.getElementsByClassName("tabSel");
	for (i = 0; i < tabSel.length; i++)
		tabSel[i].className = tabSel[i].className.replace(" active", "");
	evt.currentTarget.className += " active";
}

function toggleFractional(evt) {
    var tables = document.getElementsByClassName("tblContvf");
    for (var i = 0; i < tables.length; i++)
	tables[i].classList.toggle("tblContvf-show", evt.target.checked);
}
