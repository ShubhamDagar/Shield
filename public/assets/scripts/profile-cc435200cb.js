$(".press").click((function(){$(this).addClass("animate__animated animate__zoomIn"),setTimeout((function(){$("button").removeClass("animate__animated animate__zoomIn")}),1e3)}));var posts=$(".pop-comment"),commentForm=$(".post-comments");for(let e=0;e<posts.length;e++)$(posts[e]).click((function(){$(commentForm[e]).css("display","block"),console.log($(commentForm[e]).children("form").children("input")[0].focus())}));$(".like").click((function(){$(this).children("i").toggleClass("far"),$(this).children("i").toggleClass("fas"),$(this).children("i").toggleClass("red-like"),$(this).children("i").toggleClass("animate__animated animate__bounceIn")})),$(".pop-comment").click((function(){$(this).children("i").toggleClass("animate__animated animate__bounceIn")})),$(".like-com").click((function(){"Like"==$(this).children("div").html()?$(this).children("div").html("Unlike"):$(this).children("div").html("Like")}));var inputs=document.querySelectorAll(".inputfile");Array.prototype.forEach.call(inputs,(function(e){var t=e.nextElementSibling,i=t.innerHTML;e.addEventListener("change",(function(e){var n="";n=this.files&&this.files.length>1?(this.getAttribute("data-multiple-caption")||"").replace("{count}",this.files.length):e.target.value.split("\\").pop(),console.log(n,t,i),n?(t.innerHTML=n,$(t).removeClass("btn-dark"),$(t).addClass("btn-success")):t.innerHTML=i}))})),$(document).ready($($("#messages")[0].parentElement).scrollTop($("#messages").height()));