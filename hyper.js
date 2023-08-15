
database=firebase.database();
named=""
ko=0

database.ref("/Users/users").on('value',function(data){
    ko=data.val()
    
ko=Math.max(Math.floor(Math.log10(Math.abs(ko))), 0) + 11;

named = window.location.search.slice(ko).replaceAll("%20"," ");
users= window.location.search.slice(4,ko-6).replaceAll("%20"," ");
document.getElementById("names").innerHTML=named + ", Are You Ready ?";
})
document.getElementById("time").style.width="70%"
width= 70;
time=false;
t=0;
t1=0;
t2=0;
t3=0;
t4=0;
t5=0;
t6=0;
t7=0;
st=0;


document.getElementById("circle").onclick= function(){
    document.getElementById("start").style.display="none";
    document.getElementById("main").style.display="block";

    time=true;
    
}
s=setInterval(function(){
    if(time){
    t+=0.1
    t1+=0.1

    if(t>0.2){
    width-=(0.1166667)/3;
    document.getElementById("time").style.width=(width)+"%";
    }
    }
    if(t>=180){
        document.getElementById("is").style.pointerEvents="none";
    
    scorer *= 100;
    scorer = Math.round(scorer)
    console.log(scorer)
    localStorage.setItem("Scorer",scorer)
    localStorage.setItem("Quest",st)
    localStorage.setItem("Time",t)
    a = new Date();
    a=a.toString();
    a=a.slice(0,24)
    database.ref("/Users/users").on('value',function(data){users=data.val()})

    database.ref("/Players/"+users+". "+named+", "+a).set({
        Score:scorer,
        Ques:st,
        Time:t,
        Name:named
        
    })
    window.open("results.html")
    clearInterval(s)
    }
},100)
scorer=0;


function submitq(qno,opt,right_opt) 
{
if(opt==right_opt){
    scorer+=10;
    st++;
    console.log("hi");
    if(10-t1>0){
        scorer+=((10-t1)*0.1);
    }

}
console.log(t1)
t1=0;
if(qno!=15){
    
    qhide((qno+1));
}
else {
    document.getElementById("is").style.pointerEvents="none";
    scorer *= 10;
    scorer = Math.round(scorer)
    console.log(scorer)
    clearInterval(s)
    localStorage.setItem("Scorer",scorer)
    localStorage.setItem("Quest",st)
    localStorage.setItem("Time",(t))
    a = new Date();
    a=a.toString();
    a=a.slice(0,24)
    database.ref("/Users/users").on('value',function(data){users=data.val()})

    database.ref("/Players/"+users+" "+named+", "+a).set({
        Score:scorer,
        Ques:st,
        Time:(t),
        Name:named
        
    })
    localStorage.setItem("Played","yes");
    window.open("results.html")
}

}

function qhide(num){
    document.getElementById("q"+(num-1)).style.display="none";
    document.getElementById("q"+num).style.display="block";
}
function checkplayed(){
    if(localStorage.getItem("Played")=="yes"){
        window.open("results.html");
        window.close();
    };
}