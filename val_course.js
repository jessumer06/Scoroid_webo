$(document).bind("contextmenu",function(e) {
 e.preventDefault();
});
$(document).keydown(function(e){
    if(e.which === 123){
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
       return false;
      }
      if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
       return false;
      }
      if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
       return false;
      }

      if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
       return false;
      }      
});
var username=sessionStorage.variable1;
var ref = database.ref(username);
var ref1 = database.ref('TCE');

$(function() {
  $("#branchname_error_message").hide();
	$("#cno_error_message").hide();
	$("#cname_error_message").hide();
  var error_branchname ;
	var error_code ;
  var error_course;
  $("#branch").focusout(function() {
		check_branch();
	});
  $("#courseNo").focusout(function() {
		check_code();
	});
  $("#courseName").focusout(function() {
		check_course();
	});
function check_branch(){
  var letters = /^[A-Za-z]+$/;
  var bran = $("#branch").val();
     if(bran.match(letters))
     {
       $("#branchname_error_message").hide();
        error_branchname = false;
    }
    else {
      $("#branchname_error_message").html("Please give alphabet characters only ");
			$("#branchname_error_message").show();
			error_branchname = true;
    }
}
function check_code(){
  var co = $("#courseNo").val();
     if(co == "" )
     {
       $("#cno_error_message").html("CourseCode must be filled out ");
       $("#cno_error_message").show();
       error_code = true;
    }
    else {
       $("#cno_error_message").hide();
       error_code = false;
    }
}

function check_course(){
  var co = $("#courseName").val();
     if(co == "" )
     {
       $("#cname_error_message").html("CourseName must be filled out ");
       $("#cname_error_message").show();
       error_course = true;
    }
    else {
       $("#cname_error_message").hide();
       error_course = false;
    }
}

$("#create_course").focusout(function() {
  check_branch();
  check_code();
  check_course();

  if(error_branchname == false && error_code == false && error_course  == false) {

    add_db();

  } else {
     alert("Fill all !");

  }
  });
});//function
function add_db()
{
  code=document.getElementById("courseNo").value.toUpperCase();
  cname=document.getElementById("courseName").value.toUpperCase();
  branch=document.getElementById("branch").value.toUpperCase();
  rand= Math.random().toString(36).substring(7).toUpperCase();

ref1.child(code).set({
  courseTitle:cname,
  courseCode:code,
  MamMail:username,
  random:rand
});

  ref.child('course/'+code).set({
  courseTitle:cname,
  courseCode:code,
  branch:branch,
  random:rand
});// course save
alert("Course Created !");
}
function clear_all()
{
  $("#branch").val("");
  $("#courseNo").val("");
  $("#courseName").val("");
}
