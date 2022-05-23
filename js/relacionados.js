
$(document).ready(function () {


    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", "../js/articles.json", true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(this.responseText);
            console.log(response);

            let resD = document.querySelector('#rels-groupD');
            let resN = document.querySelector('#rels-groupN');
            let resM = document.querySelector('#rels-groupM');
            let resJ = document.querySelector('#rels-groupJ');

            let elements = [];


            let url = document.URL;
            let thisPage = url.split('/');
            thisPage = thisPage[4].split('.');
            thisPage = thisPage[0].split('art');
            let thisCode = thisPage[1]
            console.log(thisCode);


            if (resD) {


                response.forEach(element => {
                    console.log(element)
                    console.log(element.category)
                    if (element.category.toLowerCase() == 'descargas' && element.code !== thisCode) {
                        let rel = document.createElement("div");
                        rel.setAttribute("class", "div-rel");
                        rel.setAttribute("id", `art${element.code}`);
                        rel.innerHTML = `
        <div class="card">
          <img src="${element.image}" class="card-img-top" id="img-pr" alt="...">
          <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">${element.preview}</p>
            <p class="card-text"><small class="text-muted">Last updated ${element.date} ago</small></p>
          </div>
        </div>
        
                    
                    `
                        elements.push(rel)
                        console.log(elements)
                    }

                });



                for (let i = 0; i < elements.length; i++) {
                    resD.appendChild(elements[i])
                }

            }else if(resN){
                response.forEach(element => {
                    console.log(element)
                    console.log(element.category)
                    if (element.category.toLowerCase() == 'noticias' && element.code !== thisCode) {
                        let rel = document.createElement("div");
                        rel.setAttribute("class", "div-rel");
                        rel.setAttribute("id", `art${element.code}`);
                        rel.innerHTML = `
        <div class="card">
          <img src="${element.image}" class="card-img-top" id="img-pr" alt="...">
          <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">${element.preview}</p>
            <p class="card-text"><small class="text-muted">Last updated ${element.date} ago</small></p>
          </div>
        </div>
                    
                    `
                        elements.push(rel)
                        console.log(elements)
                    }

                });



                for (let i = 0; i < elements.length; i++) {
                    resN.appendChild(elements[i])
                }
            }else if(resM){
                response.forEach(element => {
                    console.log(element)
                    console.log(element.category)
                    if (element.category.toLowerCase() == 'mobilelegends' && element.code !== thisCode) {
                        let rel = document.createElement("div");
                        rel.setAttribute("class", "div-rel");
                        rel.setAttribute("id", `art${element.code}`);
                        rel.innerHTML = `
        <div class="card">
          <img src="${element.image}" class="card-img-top" id="img-pr" alt="...">
          <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">${element.preview}</p>
            <p class="card-text"><small class="text-muted">Last updated ${element.date} ago</small></p>
          </div>
        </div>
                    
                    `
                        elements.push(rel)
                        console.log(elements)
                    }

                });



                for (let i = 0; i < elements.length; i++) {
                    resM.appendChild(elements[i])
                }
            }else if(resJ){
                response.forEach(element => {
                    console.log(element)
                    console.log(element.category)
                    if (element.category.toLowerCase() == 'juegos' && element.code !== thisCode) {
                        let rel = document.createElement("div");
                        rel.setAttribute("class", "div-rel");
                        rel.setAttribute("id", `art${element.code}`);
                        rel.innerHTML = `
        <div class="card">
          <img src="${element.image}" class="card-img-top" id="img-pr" alt="...">
          <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">${element.preview}</p>
            <p class="card-text"><small class="text-muted">Last updated ${element.date} ago</small></p>
          </div>
        </div>
                    
                    `
                        elements.push(rel)
                        console.log(elements)
                    }

                });



                for (let i = 0; i < elements.length; i++) {
                    resJ.appendChild(elements[i])
                }
            }

        }

        $(".div-rel").click(function () {
            window.location.href = `/articles/${this.id}.html`

        });
    };




});