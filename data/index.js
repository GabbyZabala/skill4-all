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
var dropdown = document.getElementById("dropdown");
var accountLine = document.getElementById("account-line");
var profilePic = document.getElementById("profile-pic");
    function toggleDropdown() {
        dropdown.classList.toggle("showshit");
        accountLine.classList.toggle("bline");
        profilePic.classList.toggle("blank");
    }
        function resetDropdown() {
            dropdown.classList.remove('showshit');
            accountLine.classList.remove('bline');
            profilePic.classList.remove('blank')
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
            icon.classList.remove('selected-icon');
        } else {
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