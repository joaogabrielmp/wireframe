function drawWireframe(wireframe, columns, rows) {
  if (!columns) {
    columns = 1
  }

  if (!rows) {
    rows = 1
  }

  if (wireframe) {
    wireframe.innerHTML = '';

    let i = 0;
    let x = columns * rows;
    
    document.documentElement.style.setProperty('--columns', columns);
    document.documentElement.style.setProperty('--rows', rows);

    for (i =  0; i < x ; i++) {
        var div = document.createElement('div');
        document.getElementById('wireframe').appendChild(div);
    }
  }
}