function increaseTextSize() {
  if (document.getElementById('tscStyleDiv')) {
    document.getElementById('tscStyleDiv').remove();
  }
  let styleDiv = document.createElement('style');
  styleDiv.id = 'tscStyleDiv';
  styleDiv.innerHTML = ' p { font-size: 16pt; } ';
  console.log(styleDiv);
  document.body.appendChild(styleDiv);

}

function decreaseTextSize() {
  if (document.getElementById('tscStyleDiv')) {
    document.getElementById('tscStyleDiv').remove();
  }
  let styleDiv = document.createElement('style');
  styleDiv.id = 'tscStyleDiv';
  styleDiv.innerHTML = ' p { font-size: 12pt; } ';
  console.log(styleDiv);
  document.body.appendChild(styleDiv);
}
