function loadJson(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
  }
  xhr.send(null);
}
loadJson("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
   fun_education(data.EDUCATION);
});
var div2=document.getElementById("qualification");
function fun_education(edu) {
    var list1=document.createElement("h2");
    list1.textContent="EDUCATION QUALIFICATIONS";
    div2.appendChild(list1);
      var list2=document.createElement("hr");
    div2.appendChild(list2);

  var list=document.createElement("ul");
div2.appendChild(list);

 for(var i=0;i<edu.length;i++)
 {
    var listItem=document.createElement("li");
      listItem.textContent=edu[i].Degree;
      // listItem.textContent2=edu[i].Institute;
      // listItem.textContent2=edu[i].Data;
      list.appendChild(listItem);
      var listItem1=document.createElement("p");
        listItem1.textContent=edu[i].Institute;
        // listItem.textContent2=edu[i].Institute;
        // listItem.textContent2=edu[i].Data;
        list.appendChild(listItem1);
        var listItem2=document.createElement("p");
          listItem2.textContent=edu[i].Data;
          // listItem.textContent2=edu[i].Institute;
          // listItem.textContent2=edu[i].Data;
          list.appendChild(listItem2);
 }
}
