
function yfunction(){
    var i;
    var strYear = "";
    for(i=2020;i>=1905;i--)
    {
        strYear += "<option value="+i+">"+i+"</option>";
    }
    document.getElementById("js-drop1").innerHTML = strYear;
}
function mfunction(){
    var i;
    var strMonth = "";
    for(i=1;i<=12;i++)
    {
        strMonth += "<option value="+i+">"+i+"월"+"</option>";
    }
    document.getElementById("js-drop2").innerHTML = strMonth;
}
function dfunction(){
    var i;
    var strDay = "";
    for(i=1;i<=31;i++)
    {
        strDay += "<option value="+i+">"+i+"</option>";
    }
    document.getElementById("js-drop3").innerHTML = strDay;
}

