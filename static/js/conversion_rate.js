const request = new XMLHttpRequest();
request.open("GET", "./../php/conversion_rate.php", true);
request.onload = () => {
  let data = JSON.parse(request.responseText);

  data.forEach(index => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${index.id}</td><td>${index.convert_from}</td><td>${index.convert_to}</td><td>1</td><td><input type='number' id=${index.id} value=${index.rate}></td><td><button id='update'>update</button></td>`
    document.querySelector('#conversion_table').appendChild(tr);
  })
};
request.send();

document.addEventListener('click', event => {
  const element = event.target;
  
  if (event.target.id === "update") {
    const id = event.target.parentNode.parentNode.children[0].innerHTML;
    const rate = event.target.parentNode.parentNode.children[4].children[0].value;
    
    request.open("GET", `./../php/conversion_rate.php?id=${id}&rate=${rate}`, true);
      request.onload = () => {
      console.log(request.responseText);
      let data = JSON.parse(request.responseText);
      
      document.querySelector("#msg").innerHTML = `update ${data.status}`;
      document.querySelector("#msg").removeAttribute("hidden");
    }

    request.send();
  }
});