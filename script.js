function clickHomeButton(){
    document.getElementById('home').click();
}

// About gets clicked
document.getElementById('about').addEventListener('click', function displayAbout(){
    document.getElementById('para').style.opacity = 1; document.getElementById('my_pic').style.opacity = 1; document.getElementById('name').style.opacity = 0;
    document.getElementById('title').style.opacity = 0; document.getElementById('social-list').style.opacity = 0; document.getElementById('emailid').style.opacity = 0;
    document.getElementById('email').style.opacity = 0; document.getElementById('Follow-Me').style.opacity = 0; document.getElementById('Hello').style.opacity = 0;
    document.getElementById('emailid-res').style.opacity = 0; document.getElementById('email-res').style.opacity = 0;
});

// Home gets clicked
document.getElementById('home').addEventListener('click', function displayHome(){
    document.getElementById('para').style.opacity = 0; document.getElementById('my_pic').style.opacity = 0; document.getElementById('name').style.opacity = 1;
    document.getElementById('title').style.opacity = 1; document.getElementById('social-list').style.opacity = 0; document.getElementById('emailid').style.opacity = 0;
    document.getElementById('email').style.opacity = 0; document.getElementById('Follow-Me').style.opacity = 0; document.getElementById('Hello').style.opacity = 1;
    document.getElementById('emailid-res').style.opacity = 0; document.getElementById('email-res').style.opacity = 0;
});

clickHomeButton();

// Contact gets clicked
document.getElementById('contact').addEventListener('click', function displayContact(){
    document.getElementById('para').style.opacity = 0; document.getElementById('my_pic').style.opacity = 0; document.getElementById('name').style.opacity = 0;
    document.getElementById('title').style.opacity = 0; document.getElementById('social-list').style.opacity = 1; document.getElementById('emailid').style.opacity = 1;
    document.getElementById('email').style.opacity = 1; document.getElementById('Follow-Me').style.opacity = 1; document.getElementById('Hello').style.opacity = 0;
    document.getElementById('emailid-res').style.opacity = 1; document.getElementById('email-res').style.opacity = 1;
    document.getElementById('linkedin').style.pointerEvents = "fill"; document.getElementById('github').style.pointerEvents = "fill";
    document.getElementById('instagram').style.pointerEvents = "fill"; document.getElementById('emailid').style.pointerEvents = "fill";
    document.getElementById('emailid-res').style.pointerEvents = "fill"
});
