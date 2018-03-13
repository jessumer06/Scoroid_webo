var htm;
// function addsubj()
// {
//   console.log("inside");
// htm="<div class='modal fade' id='myModal1' role='dialog'>";
// htm+="<div class='modal-dialog'>";
// htm+="<div class='modal-content'>";
// htm+="<div class='modal-header'>";//header
// htm+="<button class='close' type='button' data-dismiss='modal' onclick='add_db()'>"+"&times;"+"</button>";
// htm+="<h4 class='modal-title'>"+"Create Subject"+"</h4>";
// htm+="</div>";                 //header finish
// htm+="<div class='modal-body'>";//body start
// htm+="<p>"+"Create a Course Name & Course Code"+"</p>";
// htm+="<div id='mt'>";//mt start

// htm+="<label for='no'>"+"Course Code"+"</label> ";
// htm+="<input type='text' id='courseNo'/></br></br>";

// htm+="<label for='name'>"+"Course Name"+"</label> ";
// htm+="<input type='text' id='courseName'/>";
// htm+="</div>";//mt finish
// htm+="</div>";//body finish
// htm+="<div class='modal-footer'>";//footer start
// htm+="<button type='button' class='btn btn-default' data-dismiss='modal' onclick='add_db()'>"+"Submit"+"</button>";
// htm+="</div>"//footer finish
// htm+="</div>"
// htm+="</div>";
// //Modal creation end
// var body=document.getElementById("body");
// row = body.outerHTML="<a><span id='s1' class='glyphicon glyphicon-plus-sign' data-toggle='modal' data-target='#myModal1'></span></a>"+htm+"";

// console.log("inside");
// }
function add_db()
{
  var course=document.getElementById("courseNo").value;
  var cname=document.getElementById("courseName").value;
  console.log(course+cname);
localStorage.setItem('objectToPass',course);
  location.href="rubric.html";
  // var database = firebase.database();
  // var ref = database.ref(course);
}