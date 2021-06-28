let files = [];

async function selectFiles() {
  let input = document.createElement("input");
  input.multiple = true;
  input.type = "file";
  input.onchange = () => {
    for (let i = 0; i < input.files.length; i++) {
      addFile(input.files[i]);
    }
  };
  input.click();
}

async function uploadFiles() {
  let form = new FormData();

  files.forEach((file) => {
    form.append("file", file);
  });

  fetch("/upload", {
    method: "POST",
    body: form,
  });
}

function dropHandler(ev) {
  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();

  if (ev.dataTransfer.items) {
    // Use DataTransferItemList interface to access the file(s)
    for (var i = 0; i < ev.dataTransfer.items.length; i++) {
      // If dropped items aren't files, reject them
      if (ev.dataTransfer.items[i].kind === "file") {
        var file = ev.dataTransfer.items[i].getAsFile();
        addFile(file);
      }
    }
  } else {
    // Use DataTransfer interface to access the file(s)
    for (var i = 0; i < ev.dataTransfer.files.length; i++) {
      addFile(ev.dataTransfer.files[i]);
    }
  }
  document.getElementById("drop-zone").classList.remove("files-hover");
}

function dragOverHandler(ev) {
  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();
  document.getElementById("drop-zone").classList.add("files-hover");
}

function dragEnterHandler() {
  document.getElementById("drop-zone").classList.add("files-hover");
}

function dragLeaveHandler() {
  document.getElementById("drop-zone").classList.remove("files-hover");
}

function addFile(file) {
  if (files.map((f) => f.name).indexOf(file.name) >= 0) {
    return; // File already added.
  }

  files.push(file);

  refreshFileList();
}

function refreshFileList() {
  let fileListHTML = "";
  for (const i in files) {
    fileListHTML += `
      <div class="file-name">
        <span class="name">${files[i].name}</span>
        <span class="remove" onclick="removeFile(${i})">X</span>
      </div>`;
  }

  document.getElementById("file-list").innerHTML = fileListHTML;
}

function removeFile(index) {
  files.splice(index, 1);

  refreshFileList();
}
