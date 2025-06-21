function checkInput() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';

  input.onchange = e => {
    const file = e.target.files[0];
    if (file) {
      showLoaderBar(); // ← バーを表示
      analyzeImage(file);
    }
  };

  input.click();
}

function showLoaderBar() {
  let bar = document.getElementById('loaderBar');
  if (!bar) {
    bar = document.createElement('div');
    bar.id = 'loaderBar';
    bar.style.width = '0%';
    bar.style.height = '8px';
    bar.style.background = '#0078D7';
    bar.style.transition = 'width 0.1s linear';
    document.getElementById('contents').prepend(bar);
  } else {
    bar.style.width = '0%';
  }
}

function analyzeImage(file) {
  const reader = new FileReader();

  reader.onprogress = e => {
    if (e.lengthComputable) {
      const percent = (e.loaded / e.total) * 100;
      const bar = document.getElementById('loaderBar');
      if (bar) bar.style.width = percent.toFixed(1) + '%';
    }
  };

  reader.onload = e => {
    const bar = document.getElementById('loaderBar');
    if (bar) bar.style.width = '100%';

    const img = new Image();
    img.onload = () => {
      // ...ここに画像処理・グラフ描画などの処理...
      setTimeout(() => {
        if (bar) bar.remove();
      }, 500);
    };
    img.src = e.target.result;
  };

  reader.onerror = () => {
    const bar = document.getElementById('loaderBar');
    if (bar) bar.style.background = 'red';
  };

  reader.readAsDataURL(file);
}
