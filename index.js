function updateClock(){
    const now = new Date();
    let hours = now.getHours(); 
    let minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;

  // Add leading zeros (e.g. 9 becomes "09")
  const pad = (n) => String(n).padStart(2, '0');

  document.getElementById('time').textContent =
    `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  document.getElementById('ampm').textContent = ampm;

  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  document.getElementById('date').textContent =
    `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
}

updateClock();
setInterval(updateClock, 1000);
