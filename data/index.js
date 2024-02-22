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
            tabContent.classList.remove('active', 'ac');
        });
        homeTab.classList.add('active');
        homeSection.classList.add('active');
        setTimeout(() => {
            homeSection.classList.add('ac');
        }, 300);
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
    function bghome() {
        bg.className = "";
        bg.classList.add("home");
    }
    function bgabout() {
        bg.className = "";
        bg.classList.add('about');
    }
    function bgview() {
        bg.className = "";
        bg.classList.add('view');
    }