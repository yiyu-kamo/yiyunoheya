function checkInput() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.onchange = e => {
    const file = e.target.files[0];
    if (file) {
      startLoading();
      setTimeout(() => analyzeImage(file), 100); // 少し遅らせてUIが先に表示されるように
    }
  };
  input.click();
}

function startLoading() {
  const contents = document.getElementById('contents');
  let loader = document.getElementById('loaderBar');
  if (!loader) {
    loader = document.createElement('div');
    loader.id = 'loaderBar';
    loader.style.height = '8px';
    loader.style.background = '#0078D7';
    loader.style.width = '0%';
    loader.style.transition = 'width 0.3s ease-out';
    contents.insertBefore(loader, contents.firstChild);
  }
  loader.style.width = '0%';
  setTimeout(() => loader.style.width = '90%', 50);
}

function stopLoading() {
  const loader = document.getElementById('loaderBar');
  if (loader) loader.style.width = '100%';
  setTimeout(() => {
    if (loader) loader.remove();
  }, 500);
}

function analyzeImage(file) {
  const reader = new FileReader();
  reader.onload = e => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      const colorMap = {};
      for (let i = 0; i < data.length; i += 4) {
        const hex = rgbToHex(data[i], data[i + 1], data[i + 2]);
        colorMap[hex] = (colorMap[hex] || 0) + 1;
      }

      const sorted = Object.entries(colorMap)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10);

      const labels = sorted.map(e => e[0]);
      const counts = sorted.map(e => e[1]);
      const total = counts.reduce((a, b) => a + b, 0);

      renderCharts(labels, counts);
      renderColorTable(sorted, total);
      stopLoading();
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function rgbToHex(r, g, b) {
  return (
    '#' +
    [r, g, b]
      .map(x => x.toString(16).padStart(2, '0'))
      .join('')
      .toUpperCase()
  );
}

function renderCharts(labels, data) {
  const pieCtx = document.getElementById('pieChart')?.getContext('2d');
  const barCtx = document.getElementById('barChart')?.getContext('2d');

  if (pieCtx) new Chart(pieCtx, {
    type: 'pie',
    data: {
      labels,
      datasets: [{ data, backgroundColor: labels }]
    },
    options: { responsive: true }
  });

  if (barCtx) new Chart(barCtx, {
    type: 'bar',
    data: {
      labels,
      datasets: [{ data, backgroundColor: labels }]
    },
    options: {
      responsive: true,
      scales: { y: { beginAtZero: true } }
    }
  });
}

function renderColorTable(colorData, total) {
  const list = document.getElementById('colorList');
  if (!list) return;
  list.innerHTML = '';

  const table = document.createElement('table');
  table.style.borderCollapse = 'collapse';
  table.style.marginTop = '1em';

  const header = table.insertRow();
  ['色', 'コード', '割合'].forEach(text => {
    const th = document.createElement('th');
    th.textContent = text;
    th.style.borderBottom = '2px solid #888';
    th.style.padding = '4px 8px';
    header.appendChild(th);
  });

  colorData.forEach(([hex, count]) => {
    const row = table.insertRow();
    const percent = ((count / total) * 100).toFixed(1) + '%';

    const boxCell = row.insertCell();
    boxCell.innerHTML = `<div style="width:20px; height:20px; background:${hex}; border:1px solid #444;"></div>`;
    boxCell.style.padding = '4px';

    const codeCell = row.insertCell();
    codeCell.textContent = hex;
    codeCell.style.padding = '4px';

    const percentCell = row.insertCell();
    percentCell.textContent = percent;
    percentCell.style.padding = '4px';
  });

  list.appendChild(table);
}
