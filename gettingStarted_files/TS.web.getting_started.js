(function(){TS.registerModule("web.getting_started",{onStart:function(){TS.web.getting_started.bindUI()
},bindUI:function(){k=$("#toc");
l=$("#toc a");
c=$(window);
f=c.scrollTop();
n=c.width();
e=c.height();
p=$(document).height();
j=$("#content").offset();
b=$("#page").offset();
q=h();
m=false;
a(true);
o();
d();
c.scroll(i);
c.resize(g);
l.on("click",function(t){t.preventDefault();
if(n<=768&&!k.hasClass("expanded")){return
}var u=$(t.target).data("associated-section-id");
var s=q.filter(function(v){return v.id===u
});
if(s.length===0){return
}var r=s[0].top;
$("html, body").animate({scrollTop:r-49},420)
});
k.on("click",function(r){if(n>768){return
}$(this).toggleClass("expanded")
})
}});
var c;
var k;
var l;
var f;
var n;
var e;
var p;
var j;
var b;
var q;
var m;
function i(){f=c.scrollTop();
o();
d()
}function g(){n=c.width();
e=c.height();
p=$(document).height();
j=$("#content").offset();
b=$("#page").offset();
a();
q=h()
}function a(r){k.detach().appendTo("body");
if(n>768){k.css({right:j.left-b.left+18,top:j.top+90})
}if(r){k.animate({opacity:1},250)
}}function o(){var r=(n<=768)?j.top:j.top-50;
if(f>r){k.addClass("fixed");
m=true
}else{if(m){k.removeClass("fixed");
m=false
}}}function d(){l.removeClass("active");
if(f+e>p-45){$("#toc a").last().addClass("active");
return
}for(var r=q.length-1;
r>=0;
r--){if(f>q[r].top-90){$('#toc a[data-associated-section-id="'+q[r].id+'"]').addClass("active");
return
}}$("#toc a").first().addClass("active")
}function h(){return $("#content section").map(function(){return{id:this.id,top:$(this).offset().top}
}).get()
}})();