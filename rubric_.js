//variables
var num=1;
var ids=1;var nid="stat";var frow=1;var hg=1;var hj=1;
var one="no";var two="name";var three="rate";var four="button";
var enum_text;var ename_text,maxpoint_text;
var row,table_len,htm,i;var critable;
var id,name,tot,tno,tnam,tmark,mtd1,mtd2,mtd3;

var myvar;
var ref;var bool;var ref2;
var database = firebase.database();
var ref3;var username;

  myvar=sessionStorage.myvar;
  username=sessionStorage.var;


console.log(username);
console.log(myvar);


ref2 = database.ref(username+'/course/'+myvar+'/ExerciseTable');
//console.log(myvar);


 


function addex(){


    var div1=document.createElement("div");
    var div2=document.createElement("div");
    var div3=document.createElement("div");
    var div4=document.createElement("div");

    maindiv1=document.getElementById("maindiv_1");
    maindiv2=document.getElementById("maindiv_2");
    maindiv3=document.getElementById("maindiv_3");
    maindiv4=document.getElementById("maindiv_4");
//Div1 creation
 col1=document.getElementById("col1");
 col2=document.getElementById("col2");
 col3=document.getElementById("col3");
 col4=document.getElementById("col4");

    enum_text=document.createElement("input");
    enum_text.setAttribute("type","text");
    enum_text.setAttribute("id","enum");
    enum_text.setAttribute("class","effect-10");
    enum_text.setAttribute("placeholder","Exercise Number");
    ename_text=document.createElement("input");
    ename_text.setAttribute("type","text");
    ename_text.setAttribute("id","ename");
    ename_text.setAttribute("placeholder","Exercise Name");
    ename_text.setAttribute("class","effect-10");
    // col1.appendChild(enum_label);
    col1.appendChild(enum_text);
    // col2.appendChild(ename_label);
    col2.appendChild(ename_text);
   // maindiv1.appendChild(div1);
//Div2 creation table
    var table=document.createElement("table");
    table.setAttribute("style","background-color: white;");
    table.setAttribute("class","table table-bordered table-striped w3-centered")
    var thead=document.createElement("thead");
    var tbody=document.createElement("tbody");
    tbody.setAttribute("id","data_table")
    var headrow=document.createElement("tr");

    var crino=document.createElement("td");
    crino.innerHTML="Criteria Number";
    var criname=document.createElement("td");
    criname.innerHTML="Criteria Name";
    var rating=document.createElement("td");
    rating.innerHTML="Rating";
    var points=document.createElement("td");
    points.innerHTML="Max. Marks";
    var editable=document.createElement("td");
    editable.innerHTML="Edit/Delete";
    headrow.setAttribute("class","w3-teal");
    headrow.appendChild(crino);
    headrow.appendChild(criname);
    headrow.appendChild(rating);
    headrow.appendChild(points);
    headrow.appendChild(editable);
    thead.appendChild(headrow);
    table.appendChild(thead);
    table.appendChild(tbody);
    div2.appendChild(table);
    maindiv2.appendChild(div2);

//Div3 creation

    col11=document.getElementById("col11");
 col22=document.getElementById("col22");
 col33=document.getElementById("col33");
 col44=document.getElementById("col44");

    var newid=document.createElement("input");
    newid.setAttribute("type","text");
    newid.setAttribute("id","new_id");
    newid.setAttribute("placeholder","Criteria Id");
    newid.setAttribute("class","effect-10");


    var newname=document.createElement("input");
    newname.setAttribute("type","text");
    newname.setAttribute("id","new_name");
    newname.setAttribute("placeholder","Criteria Name");
    newname.setAttribute("class","effect-10");

    var maxy=document.createElement("input");
    maxy.setAttribute("type","number");
    maxy.setAttribute("id","new_maxy");
    maxy.setAttribute("placeholder","Maximum Mark");
    maxy.setAttribute("class","effect-10");                



    var newedit=document.createElement("button");
    newedit.setAttribute("class","w3-btn w3-orange w3-ripple");
    newedit.setAttribute("style","width: 200px;");
    newedit.setAttribute("id","new_button");
    newedit.setAttribute("onclick","add_row();sumall()");
    newedit.innerHTML="Add Criteria";



    col11.appendChild(newid);
    col22.appendChild(newname);
    col44.appendChild(maxy);
    col33.appendChild(newedit);


//Div4 creation
    col7=document.getElementById("col7");
    col8=document.getElementById("col8");
    col9=document.getElementById("col9");

    var dbsave=document.createElement("button");
    dbsave.setAttribute("class","w3-btn w3-ripple");
    dbsave.setAttribute("style","width: 200px;");
    dbsave.setAttribute("id","dbsave");
    dbsave.setAttribute("onclick","save_db();");
    dbsave.innerHTML="Save to DB";

    var maxpoint_label=document.createElement("label");
    maxpoint_label.innerHTML="Total Points    ";
    maxpoint_text=document.createElement("label");
    maxpoint_text.setAttribute("id","max");
    col7.appendChild(maxpoint_label);
    col8.appendChild(maxpoint_text);
    col9.appendChild(dbsave);






}

function add_row(){

 var new_id=document.getElementById("new_id").value;
 var new_name=document.getElementById("new_name").value;
 var new_maxy=document.getElementById("new_maxy").value;

 table3=document.getElementById("data_table");
 table_len=(table3.rows.length);
//console.log("table length "+table_len);
 //Modal creation
 htm="<div class='modal fade' id='myModal"+table_len+"' role='dialog'>";
 htm+="<div class='modal-dialog'>";
 htm+="<div class='modal-content'>";
 htm+="<div class='modal-header'>";//header
 htm+="<button class='close' type='button' data-dismiss='modal' onclick='sumall()'>"+"&times;"+"</button>";
 htm+="<h4 class='modal-title'>"+"Create Rubric"+"</h4>";
 htm+="</div>";                 //header finish
 htm+="<div class='modal-body'>";//body start
 htm+="<p>"+"Descriptive"+"</p>";
 htm+="<button id='Button_"+table_len+"' onclick='ctab("+table_len+")' class='btn btn-success'>"+"<b>"+"+"+"</b>"+"</button>";
  htm+="<button id='Buttondel_"+table_len+"' onclick='ctabs("+table_len+")' class='btn btn-success'>"+"<b>"+"-"+"</b>"+"</button>";
 htm+="<div id='mt'>";//mt start
 htm+="<table class='table table-bordered form-inline table-striped table-condensed'>";
 htm+="<thead>";
 htm+="<tr>";
 htm+="<td>"+"No."+"</td>";
 htm+="<td>"+"Name"+"</td>";
 htm+="<td>"+"Marks"+"</td>";
 htm+="</tr>";
 htm+="</thead>";
 htm+="<tbody id='Table_"+table_len+"' class='hummer'>"+"</tbody>";
 htm+="</table>";
 htm+="</div>";//mt finish
 htm+="</div>";//body finish
 htm+="<div class='modal-footer'>";//footer start
 htm+="<button type='button' class='btn btn-default' data-dismiss='modal'>"+"Close"+"</button>";
 htm+="</div>"//footer finish
 htm+="</div>"
 htm+="</div>";
 //Modal creation end

 //criteria creation
 row = table3.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='id_row"+table_len+"'>"+new_id+"</td><td id='name_row"+table_len+"'>"+new_name+"</td><td id='rate_row"+table_len+"'><a><span id='g"+table_len+"' class='glyphicon glyphicon-plus-sign' data-toggle='modal' data-target='#myModal"+table_len+"'></span></a>"+htm+"</td><td class='bolt' id='point_row"+table_len+"'>"+new_maxy+"</td><td><a id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+"); sumall();'><span class='glyphicon glyphicon-pencil'></span></a> <a id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+"); sumall();'><span class='glyphicon glyphicon-ok'></span> </a><a value='Delete' class='delete' onclick='delete_row("+table_len+"); sumall();'><span class='glyphicon glyphicon-trash'></span></a></td></tr>";

 document.getElementById("new_name").value="";
 document.getElementById("new_id").value="";
 document.getElementById("new_maxy").value="";




}
function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}
function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
 var id=document.getElementById("id_row"+no);
 var name=document.getElementById("name_row"+no);
// var rate=document.getElementById("rate_row"+no);
 var point=document.getElementById("point_row"+no);

 var id_data=id.innerHTML;
 var name_data=name.innerHTML;
 //var rate_data=rate.innerHTML;
 var point_data=point.innerHTML;

 id.innerHTML="<input class='form-control' type='text' id='id_text"+no+"' value='"+id_data+"'>";
 name.innerHTML="<input class='form-control' type='text' id='name_text"+no+"' value='"+name_data+"'>";
point.innerHTML="<input class='form-control' type='text' id='maxy_text"+no+"' value='"+point_data+"'>";
}

function save_row(no)
{
 var id_val=document.getElementById("id_text"+no).value;
 var name_val=document.getElementById("name_text"+no).value;
  var maxy_val=document.getElementById("maxy_text"+no).value;

 document.getElementById("id_row"+no).innerHTML=id_val;
 document.getElementById("name_row"+no).innerHTML=name_val;
  document.getElementById("point_row"+no).innerHTML=maxy_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

function sumall(){

var sum=0; var y;var total=0;
var z=document.getElementById("max");
var ry=document.getElementById("data_table").rows.length;
var hj=document.getElementsByClassName("hummer");



   for(o=0;o<ry;o++)
   {
     var you=document.getElementsByClassName("bolt")[o].innerHTML;
     total=total+parseInt(you);
     z.innerHTML=total;
   }

}

function addtext(){


    var h=document.getElementById("fort");
    var nan=document.createElement("input");
    nan.setAttribute("type","text");
    nan.setAttribute("id",hg);
    nan.setAttribute("class","form-control");
    nan.setAttribute("placeholder","Enter Mark");
    h.appendChild(nan);
    hg++;
}

function ctab(no){

 var gf=document.getElementById("Table_"+no);
 var crow=document.createElement("tr");
 var cd1=document.createElement("td");
 var cd2=document.createElement("td");
 var cd3=document.createElement("td");

 var dd1=document.createElement("input");
 dd1.setAttribute("class","form-control");
dd1.setAttribute("style","width: 100px; height: 60px;");
 dd1.setAttribute("type","number");

  var dd2=document.createElement("textarea");
 dd2.setAttribute("class","form-control");
 dd2.setAttribute("style","width: 250px; height: 60px;");
 dd2.setAttribute("type","text");

  var dd3=document.createElement("input");
 dd3.setAttribute("class","form-control");
dd3.setAttribute("style","width: 100px; height: 60px;");
 dd3.setAttribute("type","number");
 cd1.appendChild(dd1);
 cd2.appendChild(dd2);
 cd3.appendChild(dd3);
 crow.appendChild(cd1);
 crow.appendChild(cd2);
 crow.appendChild(cd3);
 gf.appendChild(crow);
}
function ctabs(no){
    var gf=document.getElementById("Table_"+no);
    gf.removeChild(gf.lastChild);


}

function save_db()
{
   id=document.getElementById("enum").value;
   name=document.getElementById("ename").value;
   tot=document.getElementById("max").innerHTML;
  //console.log("exno " +id+" ename: "+name +" max "+tot);

  ref2.child(id).set({
  Exid:id,
  Ename:name,
  Etotal:tot
});// ex save
var tb=table3.rows.length;
//console.log(tb);
for (var z = 0; z < tb; z++)
{

    tno=table3.rows[z].childNodes[0].innerHTML;
    tnam=table3.rows[z].childNodes[1].innerHTML;
    tmark=table3.rows[z].childNodes[3].innerHTML;
     //console.log(" "+tno+"  "+tnam+"  "+tmark);
     ref2.child(id+"/"+tno).set({
     cid:tno,
     cname:tnam,
     ctotal:tmark
     });// criteria save

     //modal traverse
     var hj=document.getElementsByClassName("hummer");
     
         var kn=document.getElementsByClassName("hummer")[z].rows.length;
         console.log("Hummer length"+kn+"");
         for(var j=0;j<kn;j++)
         {
             mtd1=document.getElementsByClassName("hummer")[z].rows[j].childNodes[0].childNodes[0].value;
             mtd2=document.getElementsByClassName("hummer")[z].rows[j].childNodes[1].childNodes[0].value;
             mtd3=document.getElementsByClassName("hummer")[z].rows[j].childNodes[2].childNodes[0].value;
             console.log(mtd1+mtd2+mtd3);
             ref2.child(id+"/"+tno+"/"+mtd1+"/").set({
             did:mtd1,
             dname:mtd2,
             dmark:mtd3
             });// descriptive save

         }
    

}// for z end

  // document.getElementById("add").style.visibility = 'visible';

// alert("Saved!!");
// var aj=1;
// if(aj==1)
// {
//   location.reload();
//   aj++;
// }

//clearpage();

}//save

// view
function view(obj)
{
  //console.log(obj);
  alert(obj);
  ref2.child(username+'/course/'+myvar+'/ExerciseTable/'+obj).once("value").then(function(questionSnapshot) {
    for (var key in questionSnapshot.val()) {
      for (var item of questionSnapshot.val()[key]['1']) {
    //      console.log(item.cid);
      //    console.log(item.did);
      }
  }
  });
}
function viewdata(data)
{
  var l=document.createElement("label");
  var marks=data.val();
  var keys = Object.keys(marks);
  //console.log(keys);
  for(var i=0; i<keys.length; i++)
  {
      var k = keys[i];
      var id =marks[k].Exid;
      var en=marks[k].Ename;
      var et=marks[k].Etotal;
      //console.log(id);
      //console.log(en);
      //console.log(et);
    }


  maindiv4.appendChild(l);
}


// function clearpage()
// {
//   var cn=document.getElementById("listx");
//     while(cn.hasChildNodes())
//     {
//       cn.removeChild(cn.lastChild);
//     }
// var database = firebase.database();
// var refsome = database.ref(username+'/course/'+disp+'/ExerciseTable/');
// refsome.on('value',gotClear,errData);
// }

// function gotClear(datu)
// {
//     try{
//         var ex=datu.val();
//     var sa=Object.keys(ex);
//     var s=sa.length;
//     console.log(s);
//     var listx=document.getElementById("listx");
//     for(j=0;j<s;j++)
//     {
//         var k=sa[j];
//         var ename=ex[k].Ename;
//         console.log(ename);
//         var q=j+1;

//         var divs=document.createElement("div");
//         var para=document.createElement("p");
//         var it=document.createElement("i");

//         var yt=document.createElement("div");
//         var rt=document.createElement("div");
//         rt.setAttribute("class","rows");
//         yt.setAttribute("id","tid"+q+"");
//         yt.setAttribute("class","col-sm-12");



//         var fiv=document.createElement("div");
//         fiv.setAttribute("id","fiv"+q+"");

//         yt.appendChild(fiv);
//         rt.appendChild(yt);




//         it.setAttribute("class","material-icons w3-btn w3-ripple");

//         it.setAttribute("onclick","drop("+q+");alter("+q+")");
//         it.setAttribute("id","it"+q+"");
//         it.innerHTML="keyboard_arrow_down";
//         para.setAttribute("style","font-size: 20px;")
//         para.innerHTML=ename;
//         para.setAttribute("id","para");
//         para.appendChild(it);
//         it.appendChild(rt);
//         divs.appendChild(para);
//         divs.appendChild(rt);
//         // divs.appendChild(fiv);
//         listx.appendChild(divs);



//     }  
//     }
//     catch(mistake)
//     {
//         console.log("Something happened");
//         var errdiv=document.createElement("div");
//     errdiv.setAttribute("class","alert alert-warning alert-dismissable");
//     var erra=document.createElement("a");
//     erra.setAttribute("href","#");
//     erra.setAttribute("class","close");
//     erra.setAttribute("data-dismiss","alert");
//     erra.setAttribute("aria-label","close");
//     erra.innerHTML="&times;";
//     errdiv.appendChild(erra);
//     var errpara=document.createElement("p");
//     errpara.innerHTML="<strong>Warning!</strong>       No Exercises to display. Please create one.";
//     errdiv.appendChild(errpara);
//     var app=document.getElementById("card");
//     app.appendChild(errdiv);
//     }

// }
