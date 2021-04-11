const toggleSwitch = document.querySelector('input[type="checkbox"');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const projectBoxs = document.querySelectorAll('.project-box')


function toggleDarkLightMode(isDark){
    nav.style.background = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    projectBoxs[0].style.background = isDark ? 'rgb(255 255 255 / 50%)' :'rgb(0 0 0 / 50%)';
    projectBoxs[1].style.background = isDark ? 'rgb(255 255 255 / 50%)' :'rgb(0 0 0 / 50%)';
    projectBoxs[2].style.background = isDark ? 'rgb(255 255 255 / 50%)' :'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = isDark ? 'Dark Mode' :'Light Mode';
    isDark ?toggleIcon.children[1].classList.replace('fa-sun','fa-moon'):
    toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
    }

// Switch Theme Dynamically
function switchTheme(event){
    if (event.target.checked){
        document.documentElement.setAttribute('data-theme','dark');
        localStorage.setItem('theme', 'dark');
        toggleDarkLightMode(isDark=true);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleDarkLightMode(isDark=false);
    }
};

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

//Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark'){
        toggleSwitch.checked = true;
        toggleDarkLightMode(isDark=true);
    }
}