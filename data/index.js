const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')
const logo = document.querySelector('.logo');
logo.addEventListener('click', returnToHome);
var bg = document.getElementById("body");
    bg.className = "home";
    function handleTabClick(tab) {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
            tabContent.classList.remove('ac')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
        setTimeout(() => {
            target.classList.add('ac');
        }, 100);
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
            tabContent.classList.remove('active');
        });
        homeTab.classList.add('active');
        homeSection.classList.add('active');
        bg.className = "";
        bg.classList.add("home");
    }
    function toggleDropdown() {
        var dropdown = document.getElementById("dropdown");
        var accountLine = document.getElementById("account-line");
        var profilePic = document.getElementById("profile-pic");
        dropdown.classList.toggle("showshit");
        accountLine.classList.toggle("bline");
        profilePic.classList.toggle("blank");
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