fetch('miri/news.txt')
  .then(r => r.text())
  .then(text => document.getElementById('newsTxt').textContent = text)
  .catch(() => document.getElementById('newsTxt').textContent = 'Error loading news');


fetch('miri/status.txt')
  .then(r => r.text())
  .then(text => document.getElementById('statusTxt').textContent = text)
  .catch(() => document.getElementById('statusTxt').textContent = 'Error loading status');

fetch('miri/aboutMe.txt')
  .then(r => r.text())
  .then(text => document.getElementById('aboutMeTxt').textContent = text)
  .catch(() => document.getElementById('aboutMeTxt').textContent = 'Error loading about me');

