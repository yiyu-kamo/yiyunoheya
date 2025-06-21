function checkInput() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.onchange = e => {
    const file = e.target.files[0];
    if (file) analyzeImage(file);
  };
  input.click();
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
        const rgb = `rgb(${data[i]},${data[i+1]},${data[i+2]})`;
        colorMap[rgb] = (colorMap[rgb] || 0) + 1;
      }

      const sorted = Object.entries(colorMap)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10);
      const labels = sorted.map(([color]) => color);
      const counts = sorted.map(([, count]) => count);
      const total = counts.reduce((a, b) => a + b, 0);

      drawCharts(labels, counts);
      drawColorList(sorted, total);
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function drawCharts(labels, counts) {
  const pieCtx = document.getElementById('pieChart')?.getContext('2d');
  const barCtx = document.getElementById('barChart')?.getContext('2d');

  if (pieCtx) new Chart(pieCtx, {
    type: 'pie',
    data: {
      labels: labels,
      datasets: [{ data: counts, backgroundColor: labels }]
    },
    options: { responsive: true }
  });

  if (barCtx) new Chart(barCtx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{ data: counts, backgroundColor: labels }]
    },
    options: {
      responsive: true,
      scales: { y: { beginAtZero: true } }
    }
  });
}

function drawColorList(colorData, total) {
  const list = document.getElementById('colorList');
  if (!list) return;
  list.innerHTML = '';

  colorData.forEach(([color, count]) => {
    const percent = ((count / total) * 100).toFixed(1);
    const div = document.createElement('div');
    div.className = 'color-item';
    div.innerHTML = `
      <span class="color-box" style="background:${color}"></span>
      <span>${color} - ${percent}%</span>
    `;
    list.appendChild(div);
  });
}
