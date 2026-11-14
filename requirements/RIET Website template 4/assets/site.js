(function(){
var P=[["index.html","Home"],["about.html","About"],["academics.html","Academics"],["admissions.html","Admissions"],["courses.html","Courses"],["departments.html","Departments"],["placements.html","Placements"],["campus.html","Campus"],["news.html","News"],["contact.html","Contact"]];
var b=document.body,cur=b.dataset.page;
var nav=P.map(function(p){return '<a href="'+p[0]+'"'+(p[0]===cur?' class="on" aria-current="page"':'')+'>'+p[1]+'</a>'}).join('');
document.getElementById('hdr').innerHTML='<aside class="side"><a class="logo" href="index.html"><b>RIET</b><small>Rajasthan Institute of Engineering &amp; Technology, Jaipur</small></a><nav aria-label="Main">'+nav+'</nav><div class="sx"><a class="btn" href="admissions.html">Apply now</a><p>REAP code 1025</p><a href="campus.html">Virtual tour</a><a href="contact.html">Career</a><a href="contact.html">Contact us</a></div></aside>';
if(b.dataset.title){document.getElementById('main').insertAdjacentHTML('afterbegin','<div class="head"><div class="wrap"><div class="crumb"><a href="index.html">Home</a> / '+b.dataset.title+'</div><h1>'+b.dataset.title+'</h1><p>'+b.dataset.desc+'</p></div></div>')}
document.getElementById('ftr').innerHTML='<footer><div class="wrap"><div><b>RIET Jaipur</b><br>Bhankrota, Ajmer Road, Jaipur<br>9257111214, 9257111215<br>inquiry@rietjaipur.ac.in</div><div><a href="contact.html">Grievance cell</a><br><a href="admissions.html">FAQs</a><br><a href="about.html">Mandatory approvals</a><br><a href="contact.html">Feedback</a></div><div>&copy; 2026 RIET Jaipur</div></div></footer>';
})();
