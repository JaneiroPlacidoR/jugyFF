$(document).ready(function () {


    

    let res = document.querySelector('#articles-group');

    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", "./js/articles.json", true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(this.responseText);

            let previous = document.querySelector('#previous-pagination');
            let next = document.querySelector('#next-pagination');
            let page = 0;
            let elements = [];



            response.forEach(element => {

                let article = document.createElement("div");
                article.setAttribute("class", "col");
                article.setAttribute("id", `art${element.code}`);
                article.innerHTML = `
                <div class="card">
                <img src="${element.image}" class="card-img-top" id="img-pr" alt="...">
                <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">${element.preview}</p>
                <p class="card-text"><small class="text-muted">Last updated ${element.date} ago</small></p>
                </div>
                </div>
                
                `
                elements.push(article)
            });


            for (let i = 0; i < 9; i++) {
                res.appendChild(elements[i])
            }

            next.addEventListener('click', () => {
                page == elements.length - 9 ? page = 0 : page += 9;
                res.innerHTML = "";
                for (let i = page; i < page + 9; i++) {
                    res.appendChild(elements[i])
                }
                $(".col").click(function () {
                    window.location.href = `/articles/${this.id}.html`

                });

            });

            previous.addEventListener('click', () => {
                page == 0 ? page == elements.length - 9 : page -= 9;
                res.innerHTML = "";
                for (let i = page; i < page + 9; i++) {
                    res.appendChild(elements[i])
                }
                $(".col").click(function () {
                    window.location.href = `/articles/${this.id}.html`

                });

            });
            $(".col").click(function () {
                window.location.href = `/articles/${this.id}.html`

            });



        }


        


    };

    // Get the input field
let input = document.querySelector(".search_inp");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.querySelector(".tosearchbtn").click();
    console.log('enter funciona');
  }
});

    $('.tosearchbtn').on('click', function () {


        let wordSearch = document.querySelector('.search_inp').value;
        wordSearch = wordSearch.toLowerCase();
        console.log(wordSearch)

        res.innerHTML = `<h3 class="result">Resultados para "${wordSearch}"</h3>`;



        let xhttps = new XMLHttpRequest();
        xhttps.open("GET", "./js/articles.json", true);
        xhttps.send();
        xhttps.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let response = JSON.parse(this.responseText);

                let elements = [];
                let toSearch = " ";

                response.forEach(element => {

                    toSearch = element.category + " " + element.name + " " + element.date + " " + element.title + " " +
                        element.content + " " + element.subtitle1 + " " + element.subtitle2 + " " + element.subtitle3 + " " +
                        element.subtitle4 + " " + element.paragraph1 + " " + element.paragraph2 + " " + element.paragrap3 + " " +
                        element.paragrap4 + " " + element.paragraph5 + " " + element.paragraph6 + " " + element.paragraph7 
                        + " " + element.searchkeys + " " + element.role;
                    toSearch = toSearch.toLowerCase();

                    console.log(toSearch)

                    if (toSearch.includes(wordSearch)) {
                        console.log("la incluye", element)

                        let article = document.createElement("div");
                        article.setAttribute("class", "col");
                        article.setAttribute("id", `art${element.code}`);
                        article.innerHTML = `
                       <div class="card">
                       <img src="${element.image}" class="card-img-top" id="img-pr" alt="...">
                       <div class="card-body">
                       <h5 class="card-title">${element.title}</h5>
                       <p class="card-text">${element.preview}</p>
                       <p class="card-text"><small class="text-muted">Last updated ${element.date} ago</small></p>
                       </div>
                       </div>
                
                            `
                        elements.push(article)
                    }
                });


                for (let i = 0; i < elements.length; i++) {
                    res.appendChild(elements[i])
                }

                $(".col").click(function () {
                    window.location.href = `/articles/${this.id}.html`

                });

            }


        };

    });

    


});







