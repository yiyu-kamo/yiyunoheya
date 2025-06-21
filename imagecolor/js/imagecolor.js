function checkInput() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";
  input.onchange = (e) => {
    const file = e.target.files[0];
    if (file) {
      showLoader();
      analyzeImage(file);
    }
  };
  input.click();
}

function showLoader() {
  let bar = document.getElementById("loaderBar");
  if (!bar) {
    bar = document.createElement("div");
    bar.id = "loaderBar";
    bar.style.height = "6px";
    bar.style.width = "0%";
    bar.style.background = "#0078D7";
    bar.style.transition = "width 0.2s linear";
    const target = document.getElementById("pieChart");
    if (target && target.parentNode) {
      target.parentNode.insertBefore(bar, target);
    }
  } else {
    bar.style.width = "0%";
  }
}

function updateLoader(percent) {
  const bar = document.getElementById("loaderBar");
  if (bar) bar.style.width = Math.min(percent, 100) + "%";
}

function removeLoader() {
  const bar = document.getElementById("loaderBar");
  if (bar) {
    bar.style.width = "100%";
    setTimeout(() => bar.remove(), 500);
  }
}

function analyzeImage(file) {
  const reader = new FileReader();
  reader.onprogress = (e) => {
    if (e.lengthComputable) {
      const percent = (e.loaded / e.total) * 100;
      updateLoader(percent);
    }
  };

  reader.onload = (e) => {
    updateLoader(100);
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

      const colorCount = {};
      for (let i = 0; i < imageData.length; i += 4) {
        const hex = rgbToHex(imageData[i], imageData[i + 1], imageData[i + 2]);
        colorCount[hex] = (colorCount[hex] || 0) + 1;
      }

      const sortedColors = Object.entries(colorCount).sort((a, b) => b[1] - a[1]);
      const labels = sortedColors.map(([hex]) => hex);
      const counts = sortedColors.map(([, count]) => count);
      const total = counts.reduce((a, b) => a + b, 0);

      drawPieChart(labels.slice(0, 10), counts.slice(0, 10));
      drawBarChart(labels, counts);
      drawColorTable(sortedColors, total);
      removeLoader();
    };
    img.src = e.target.result;
  };

  reader.onerror = () => {
    removeLoader();
    alert("画像の読み込み中にエラーが発生しました。");
  };

  reader.readAsDataURL(file);
}

function rgbToHex(r, g, b) {
  return (
    "#" +
    [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("").toUpperCase()
  );
}

function drawPieChart(labels, data) {
  const ctx = document.getElementById("pieChart")?.getContext("2d");
  if (!ctx) return;
  if (window.pieChart && typeof window.pieChart.destroy === "function") {
    window.pieChart.destroy();
  }
  window.pieChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels,
      datasets: [{ data, backgroundColor: labels }],
    },
    options: { responsive: true },
  });
}

function drawBarChart(labels, data) {
  const wrapper = document.getElementById("barChartWrapper");
  const canvas = document.getElementById("barChart");
  if (!wrapper || !canvas) return;
  wrapper.style.overflowX = "auto";
  wrapper.style.maxHeight = "500px";
  wrapper.style.border = "1px solid #ccc";

  // 1色あたりのバー幅（単位px） ※見やすいサイズ
  const barWidth = 40;
  const totalWidth = labels.length * barWidth;
  canvas.width = totalWidth;
  canvas.height = 500;

  const ctx = canvas.getContext("2d");
  if (window.barChart && typeof window.barChart.destroy === "function") {
    window.barChart.destroy();
  }

  window.barChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels,
      datasets: [{ data, backgroundColor: labels }],
    },
    options: {
      responsive: false,
      maintainAspectRatio: false,
      indexAxis: "x",
      scales: {
        y: { beginAtZero: true },
        x: {
          ticks: {
            autoSkip: false,
            maxRotation: 90,
            minRotation: 45
          }
        }
      },
      plugins: {
        legend: { display: false }
      }
    }
  });
}

function drawColorTable(colorData, total) {
  const container = document.getElementById("colorList");
  if (!container) return;
  container.innerHTML = "";
  container.style.maxHeight = "500px";
  container.style.overflowY = "auto";

  const table = document.createElement("table");
  table.style.borderCollapse = "collapse";
  table.style.marginTop = "1em";
  table.style.width = "100%";

  const thead = document.createElement("tr");
  ["色", "16進カラー", "割合"].forEach((text) => {
    const th = document.createElement("th");
    th.textContent = text;
    th.style.borderBottom = "2px solid #888";
    th.style.padding = "4px 8px";
    thead.appendChild(th);
  });
  table.appendChild(thead);

  colorData.forEach(([hex, count]) => {
    const tr = document.createElement("tr");

    const preview = document.createElement("td");
    preview.innerHTML = `<div style="width:20px;height:20px;background:${hex};border:1px solid #444;"></div>`;
    preview.style.padding = "4px";

    const code = document.createElement("td");
    code.textContent = hex;
    code.style.padding = "4px 8px";

    const percent = document.createElement("td");
    percent.textContent = ((count / total) * 100).toFixed(1) + "%";
    percent.style.padding = "4px 8px";

    [preview, code, percent].forEach((td) => tr.appendChild(td));
    table.appendChild(tr);
  });

  container.appendChild(table);
}
