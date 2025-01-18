document.querySelector('.download-btn').addEventListener('click', function(e) {
  e.preventDefault();
  var link = document.createElement('a');
  link.href = '../assets/Files/HtetHtetOoLwinResume.pdf';
  link.setAttribute('download', '');
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
