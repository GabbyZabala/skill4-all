const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')
const logo = document.querySelector('.logo');
logo.addEventListener('click', returnToHome);

var hometimer = document.getElementById("home")
    setTimeout(() => {
        hometimer.classList.add('ac');
    }, 100);
var bg = document.getElementById("body");
    bg.className = "home";

    function handleTabClick(tab) {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('ac');
            tabContent.classList.remove('ab');
            setTimeout(() => {
                tabContent.classList.remove('active');
            }, 100);
            
        });
        tabs.forEach(tab => {
            tab.classList.remove('active')
        });
        tab.classList.add('active');
        setTimeout(() => {
            target.classList.add('active');
        }, 100); 
        setTimeout(() => {
            target.classList.add('ac');
        }, 300);
        setTimeout(() => {
            target.classList.add('ab');
        }, 1750);
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => handleTabClick(tab))
    })
    // mobile version

    function returnToHome() {
        const homeTab = document.querySelector('[data-tab-target="#home"]');
        const homeSection = document.querySelector('#home');
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('ac');
            tabContent.classList.remove('ab');
            setTimeout(() => {
                tabContent.classList.remove('active');
            }, 300);
        });
        
        setTimeout(() => {
            homeTab.classList.add('active');
            homeSection.classList.add('active');
        }, 300);
        setTimeout(() => {
            homeSection.classList.add('ac'); 
        }, 400);
        bg.className = "";
        bg.classList.add("home");
    }
    function gotoprofile() {
        const profileTab = document.querySelector('[data-tab-target="#profile"]');
        const profileSection = document.querySelector('#profile');
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('ac');
            tabContent.classList.remove('ab');
            setTimeout(() => {
                tabContent.classList.remove('active');
            }, 300);
        });
        
        setTimeout(() => {
            profileTab.classList.add('active');
            profileSection.classList.add('active');
        }, 300);
        setTimeout(() => {
            profileSection.classList.add('ac'); 
        }, 400);
    }
var dropdown = document.getElementById("dropdown");
var accountLine = document.getElementById("account-line");
var profilePic = document.getElementById("profile-pic");
    function toggleDropdown() {
        
        accountLine.classList.toggle("bline");
        profilePic.classList.toggle("blank");
        if(dropdown.classList.contains('sets')){
            setTimeout(() => {
                dropdown.classList.remove('sets')
            }, 50);
        } else {
            setTimeout(() => {
                dropdown.classList.add('sets')
            }, 150);
        }    
        if(!dropdown.classList.contains('showshit')){
            setTimeout(() => {
                dropdown.classList.add("showshit");
            }, 100);
        }
        else {
            setTimeout(() => {
                dropdown.classList.remove("showshit");
            }, 100);
        }
    }
        function resetDropdown() {
            dropdown.classList.remove('showshit');
            accountLine.classList.remove('bline');
            profilePic.classList.remove('blank')
            setTimeout(() => {
                dropdown.classList.add('sets') 
            }, 200);
        }
var intel = document.getElementById("intel-container");
var vtitle = document.getElementById("view-title");
var vback = document.getElementById("view-reset");
var icon1 = document.getElementById('icon1');
var icon2 = document.getElementById('icon2');
var icon3 = document.getElementById('icon3');
    function bghome() {
        bg.className = "";
        bg.classList.add("home");
        intel.classList.add('sets');
        vtitle.classList.remove('sets');
        vback.classList.add('sets');
        icon1.className = "view-icon-container";
        icon2.className = "view-icon-container";
        icon3.className = "view-icon-container";
    }
    function bgabout() {
        bg.className = "";
        bg.classList.add('about');
        intel.classList.add('sets');
        vtitle.classList.remove('sets');
        vback.classList.add('sets');
        icon1.className = "view-icon-container";
        icon2.className = "view-icon-container";
        icon3.className = "view-icon-container";
    }
    function bgview() {
        bg.className = "";
        bg.classList.add('view');
        intel.classList.add('sets');
        vtitle.classList.remove('sets');
        vback.classList.add('sets');
        icon1.className = "view-icon-container";
        icon2.className = "view-icon-container";
        icon3.className = "view-icon-container";
    }
    function bgloggs() {
        bg.className = "";
        bg.classList.add("sgn_up");
        intel.classList.add('sets');
        vtitle.classList.remove('sets');
        vback.classList.add('sets');
        icon1.className = "view-icon-container";
        icon2.className = "view-icon-container";
        icon3.className = "view-icon-container";
    }
const vicon = document.querySelectorAll('[data-icon-protocol]');
const vselected = document.querySelectorAll('[data-protocol]');
var viewContainer = document.getElementById('view-all');
function viewChoice(view) {
    const target = document.querySelector(view.dataset.iconProtocol);
    vselected.forEach(selected => {
        selected.classList.remove('selected');
    });
    vicon.forEach(icon => {
        if (icon !== view) {
            icon.classList.add('sets');
            icon.classList.add('pc');
            icon.classList.remove('selected-icon');
        } else {
            icon.classList.remove('pc');
            icon.classList.remove('sets');
            icon.classList.add('selected-icon');
        }
    });
    bg.className = "home";
    target.classList.add('selected');
        viewContainer.classList.remove('ac')
    setTimeout(() => {
        intel.classList.remove('sets');
    }, 500);
    setTimeout(() => {
        vtitle.classList.add('sets');
        vback.classList.remove('sets')
        viewContainer.classList.add('ac')
    }, 600);
}

      
    vicon.forEach(view => {
        view.addEventListener('click', () => viewChoice(view));
    });
var backbutton = document.getElementById('view-reset');
var tutorial = document.getElementById('tutorial');
var technique = document.getElementById('technique');
var example = document.getElementById('example');
    function resetView() {
        bg.className = "view";
        intel.classList.add('sets');
        vtitle.classList.remove('sets');
        vback.classList.add('sets');
        tutorial.className = "view-article-input";
        technique.className = "view-article-input";
        example.className = "view-article-input";
        icon1.className = "view-icon-container";
        icon2.className = "view-icon-container";
        icon3.className = "view-icon-container";
    }

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
    } else {
    mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//profile JS

var activity_Head = document.getElementById('activity-head');
var activity_Body = document.getElementById('activity-body');
var lesson_Head = document.getElementById('lesson-head');
var lesson_Body = document.getElementById('lesson-body');
var profile_Section = document.getElementById('profile');
var crossL = document.getElementById('rotate');
var crossR = document.getElementById('rotata');
    function togglecurrentActivity() {
        activity_Body.classList.toggle('sets');
        lesson_Body.classList.add('sets');
        lesson_Head.classList.toggle('sets');
        crossL.classList.toggle('tilt-left');
    }
    function togglecurrentLesson() {
        lesson_Body.classList.toggle('sets');
        activity_Body.classList.add('sets');
        activity_Head.classList.toggle('sets');
        crossR.classList.toggle('tilt-right');
    }