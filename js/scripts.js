// Change Variable
let stylemode = document.cookie;

// Change Variable
let stylelink = document.getElementById('style');

// Conditional Branch with else branch
if (stylemode == 'dark') {
  // change href property of the 'link
    stylelink.href = 'css/dark.css';
} else {
    stylelink.href = 'css/light.css';
    stylemode = 'light'
    document.cookie = 'light';
}

//common Event
function switchmode() {
    //condttional statment wit else
    if (stylemode == 'light') {
        stylemode = 'dark'
        stylelink.href = 'css/dark.css';
        document.cookie = 'dark';
    } else {
      stylemode = 'light'
      stylelink.href = 'css/light.css';
      document.cookie = 'light';  
    }
}

function showhide() {
    let toolbarbuttons = document.getElementById('buttons');
    if (toolbarbuttons.style.display == 'block') {
        toolbarbuttons.style.display = 'none';
    } else {
        toolbarbuttons.style.display = 'block';
    }
}
