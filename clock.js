//Continue
setInterval(() => {
  const d = new Date();
  const htime = d.getHours();
  const mtime = d.getMinutes();
  const stime = d.getSeconds();
  const hrotation = 30 * htime + mtime / 2;
  const mrotation = 6 * mtime;
  const srotation = 6 * stime;
  Hour.style.transform = `rotate(${hrotation}deg)`;
  Minute.style.transform = `rotate(${mrotation}deg)`;
  Second.style.transform = `rotate(${srotation}deg)`;
}, 1000);

/*setInterval(() => {
    const d = new Date();
    const htime = d.getHours();
    const mtime = d.getMinutes(); // Corrected from getMinute() to getMinutes()
    const stime = d.getSeconds(); // Corrected from getSecond() to getSeconds()
    const hrotation = 30 * htime + mtime / 2;
    const mrotation = 6 * mtime;
    const srotation = 6 * stime;

    Hour.style.transform = `rotate(${hrotation}deg)`; // Use backticks for string interpolation
    Minute.style.transform = `rotate(${mrotation}deg)`; // Use backticks for string interpolation
    Second.style.transform = `rotate(${srotation}deg)`; // Use backticks for string interpolation
}, 1000);*/
