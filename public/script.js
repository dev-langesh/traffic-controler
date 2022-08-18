const form = document.getElementById("form");
const image = document.getElementById("image");
const process = document.getElementById("process");
const chunk = document.getElementById("chunk");
const processBar = document.getElementById("processbar");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const xhr = new XMLHttpRequest();

  xhr.open("POST", "/post");

  xhr.upload.addEventListener("progress", (e) => {
    chunk.innerText = "Chunk :" + e.loaded;
    process.innerText = "Processed :" + Math.ceil((e.loaded / e.total) * 100);
    console.log("Current Chunk : ", e.loaded);
    console.log("Loaded : " + Math.ceil((e.loaded / e.total) * 100));
    processBar.style.width = Math.ceil((e.loaded / e.total) * 100) + "%";
  });

  const formData = new FormData(form);

  xhr.send(formData);
});

image.addEventListener("change", (e) => {
  console.log(e.target.value);
});
