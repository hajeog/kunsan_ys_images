async function classifyImage() {
    const imageElement = document.getElementById('uploadedImage');
    const mobilenetModel = await mobilenet.load();
    const predictions = await mobilenetModel.classify(imageElement);
    const topPrediction = predictions[0].className;
  
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.textContent = `${topPrediction}`;
  }
  
  document.getElementById('uploadBtn').addEventListener('change', function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();
  
    reader.onload = function (e) {
      const img = document.createElement('img');
      img.id = 'uploadedImage';
      img.src = e.target.result;
      img.className = 'image-preview';
  
      const imageContainer = document.getElementById('imageContainer');
      imageContainer.innerHTML = '';
      imageContainer.appendChild(img);
  
      classifyImage();
    };
  
    reader.readAsDataURL(file);
  });
  