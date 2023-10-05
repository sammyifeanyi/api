const div = document.querySelector("div");
fetch("./data.json", {mode:"no-cors", headers:{"Content-Type" : "application/json"}})
.then((res) => res.json())
.then((data) => console.log(data))
.catch((error) => console.log(error))