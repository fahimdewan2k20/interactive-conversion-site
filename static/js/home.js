document.addEventListener("DOMContentLoaded", () => {
  const request = new XMLHttpRequest();
  request.open("GET", "./../php/home.php", true);
  request.onload = () => {
    console.log(request.responseText);
    let data = JSON.parse(request.responseText);

    data.forEach(index => {
      const option = document.createElement('option');
      option.setAttribute("value", index.id);
      option.innerHTML = `from ${index.convert_from} to ${index.convert_to}`
      document.querySelector('#select').appendChild(option);
    })
  };
  request.send();
  document.querySelector("#convert").onclick = () => {
    const id = document.querySelector("#select").value;
    const value = document.querySelector("#input").value;

    request.open("GET", `./../php/home.php?id=${id}`, true);
    request.onload = () => {
      console.log(request.responseText);
      data = JSON.parse(request.responseText);

      document.querySelector("#output").value = parseInt(data.rate)*value;
    };
    request.send();
  }
})