const clock = setInterval(function clock() {
    let title = document.querySelector('h1')
    let text = document.querySelector('h2#goodMorEveNig');
    let bgClock = document.querySelector('body');
    let hours = document.querySelector('span#hours');
    let minutes = document.querySelector('span#minutes');
    let seconds = document.querySelector('span#seconds');

    let dateToday = new Date();
    let h = dateToday.getHours();
    let m = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    hours.textContent = h;
    minutes.textContent = m;
    seconds.textContent = s;
 
    if(h <= 5 || h >= 22 && m <= 59 && s <= 59){       
        bgClock.style.backgroundImage = "url('./assets/night.png')";
        text.innerHTML = `Good Night!`
        text.style.color = '#FFF'
        title.style.color = '#FFF'
    } else if(h <= 12 && m <= 59 && s <= 59){        
        bgClock.style.backgroundImage = "url('./assets/morning.png')";
        text.innerHTML = `Good Morning!`
    } else if(h <= 18 && m <= 59 && s <= 59) {       
        bgClock.style.backgroundImage = "url('./assets/afternoon.png')";
        text.innerHTML = `Good Afternoon!`
    } else if(h <= 22 && m <= 59 && s <= 59) {       
        bgClock.style.backgroundImage = "url('./assets/evening.png')";
        text.innerHTML = `Good Evening!`
        text.style.color = '#FFF'
        title.style.color = '#FFF'
    } 
})
