let a=document.getElementsByTagName("div")[0]
a.insertAdjacentHTML("afterbegin","<h1>this is h1 tag</h1>")
a.insertAdjacentHTML("afterend","<h2>this is h2 tag</h2>")
a.insertAdjacentHTML("beforebegin","<h3>this is h3 tag</h3>")
a.insertAdjacentHTML("beforeend","<h4>this is h4 tag</h4>")
//there is also a function callled remove it will remove your tag along with data
a.remove()