$(document).ready(function() {


$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))


var schedule =  function () {
    var actualTime = moment().hours();
   $(".time-block").each(function(){
       var rowTime = parseInt($(this).attr("id").split("-")[1]);
       
        if (rowTime < actualTime) {
            $(this).addClass("past")
        } 
        else if (rowTime === actualTime){
            $(this).removeClass("past")
            $(this).addClass("present")
        }
        else {
            $(this).removeClass("present")
            $(this).removeClass("past")
            $(this).addClass("future")
        }

   })

}
schedule();

$(".saveBtn").on("click", function(){
    //localStorage.setItem("key", "value");
    //localStarage.getItem("key")
    var timeKey = $(this).parent().attr("id");
    var timeValue = $(this).siblings(".description").val();
localStorage.setItem(timeKey, timeValue)
})
// saves it to local storage!!!! does not disappear when page is refreshed
$("#hour-9 .description").val(localStorage.getItem("hour-9"))
$("#hour-10 .description").val(localStorage.getItem("hour-10"))
$("#hour-11 .description").val(localStorage.getItem("hour-11"))
$("#hour-12 .description").val(localStorage.getItem("hour-12"))
$("#hour-13.description").val(localStorage.getItem("hour-13"))
$("#hour-14 .description").val(localStorage.getItem("hour-14"))
$("#hour-15 .description").val(localStorage.getItem("hour-15"))
$("#hour-16 .description").val(localStorage.getItem("hour-16"))
$("#hour-17 .description").val(localStorage.getItem("hour-17"))
 

});