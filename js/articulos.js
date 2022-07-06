
$(document).ready(function () {
  
  
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", "../js/articles.json", true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let response = JSON.parse(this.responseText);
  
        let main = document.querySelector('.main');
  
  
        /* Asignar id*/
        let url = document.URL;
        console.log(url);
        url = url.split('art0');
        artId = Number(url[1][0] + url[1][1]);
        console.log(artId);
  
        let category = response[artId - 1].category;
        files = response[artId - 1].files;
    
      switch(category){
        case 'Mobilelegends':
             
          if(response[artId - 1].code == "018"){

            console.log()
  
          main.innerHTML = `
          <div class="card">
          <h2 class="display-2">${response[artId - 1].name}</h2>
          <div class="links-categories">
          <a href="../${category.toLowerCase()}.html">Mobile Legends</a>
          <span class="blue">${response[artId - 1].role}</span>
          <span>Autor: <strong>Janeiro Placido</strong></span>
  
          </div>
          <img src="${response[artId - 1].image}" width="100px" id="img-art" class="card-img-top" alt="...">
  
            <div class="card-body">
           
  
              <h3 class="card-title display-5">${response[artId - 1].title}</h3>
              <p class="card-text">${response[artId - 1].content}</p><br>
              <img src="${response[artId - 1].image2}" width="100px" id="img-art" class="card-img-top" alt="...">
              
              <h4 class="card-title">${response[artId - 1].subtitle1}</h4>
              <p class="card-text">${response[artId - 1].paragraph1}</p><br>
  
              <h4 class="card-title">${response[artId - 1].subtitle2}</h4>
              <p class="card-text">${response[artId - 1].paragraph2}</p><br>
              
              <h4 class="card-title">${response[artId - 1].subtitle3}</h4>
              <p class="card-text">${response[artId - 1].paragraph3}</p><br>
  
              <h4 class="card-title">${response[artId - 1].subtitle4}</h4>
              <p class="card-text">${response[artId - 1].paragraph4}</p><br>
  
              <h4 class="card-title">${response[artId - 1].subtitle5}</h4>
              <p class="card-text">${response[artId - 1].paragraph5}</p><br>
              <img src="${response[artId - 1].image3}" width="100px" id="img-art" class="card-img-top" alt="...">
  
              <h4 class="card-title">${response[artId - 1].subtitle6}</h4>
              <p class="card-text">${response[artId - 1].paragraph6}</p><br>            
              
              <h4 class="card-title">Skins</h4>
              <p class="card-text">Aqui una vista de las increibles Skins de este héroe:</p><br>
              <video controls type="video/mp4" src="${response[artId - 1].video1}" width="100px" id="img-art" class="card-img-top" alt="..." ></video>
  
  
              <p class="card-text"><small class="text-muted">Last updated ${response[artId - 1].date} ago</small></p><br>
            </div>
          </div>
  
                      `

          }else{
            main.innerHTML = `
            <div class="card">
            <h2 class="display-2">${response[artId - 1].name}</h2>
            <div class="links-categories">
            <a href="../${category.toLowerCase()}.html">Mobile Legends</a>
            <span class="blue">${response[artId - 1].role}</span>
            <span>Autor: <strong>Janeiro Placido</strong></span>
    
            </div>
            <img src="${response[artId - 1].image}" width="100px" id="img-art" class="card-img-top" alt="...">
    
              <div class="card-body">
             
    
                <h3 class="card-title display-5">${response[artId - 1].title}</h3>
                <p class="card-text">${response[artId - 1].content}</p><br>
                <img src="${response[artId - 1].image2}" width="100px" id="img-art" class="card-img-top" alt="...">
                
                <h4 class="card-title">${response[artId - 1].subtitle1}</h4>
                <p class="card-text">${response[artId - 1].paragraph1}</p><br>
    
                <h4 class="card-title">${response[artId - 1].subtitle2}</h4>
                <p class="card-text">${response[artId - 1].paragraph2}</p><br>
                <video controls type="video/mp4" src="${response[artId - 1].video1}" width="100px" id="img-art" class="card-img-top" alt="..." ></video>
                
                <h4 class="card-title">${response[artId - 1].subtitle3}</h4>
                <p class="card-text">${response[artId - 1].paragraph3}</p><br>
                <video controls type="video/mp4" src="${response[artId - 1].video2}" width="100px" id="img-art" class="card-img-top" alt="..." ></video>
    
                <h4 class="card-title">${response[artId - 1].subtitle4}</h4>
                <p class="card-text">${response[artId - 1].paragraph4}</p><br>
                <p class="card-text">${response[artId - 1].paragraph5}</p><br>
                <video controls type="video/mp4" src="${response[artId - 1].video3}" width="100px" id="img-art" class="card-img-top" alt="..." ></video>
    
                <h4 class="card-title">${response[artId - 1].subtitle5}</h4>
                <p class="card-text">${response[artId - 1].paragraph6}</p><br>            
                <img src="${response[artId - 1].image3}" width="100px" id="img-art" class="card-img-top" alt="...">
    
                <h4 class="card-title">${response[artId - 1].subtitle6}</h4>
                <p class="card-text">${response[artId - 1].paragraph7}</p><br>   
                
                <h4 class="card-title">Skins</h4>
                <p class="card-text">Aqui una vista de las increibles Skins de este héroe:</p><br>
                <video controls type="video/mp4" src="${response[artId - 1].video4}" width="100px" id="img-art" class="card-img-top" alt="..." ></video>
    
    
                <p class="card-text"><small class="text-muted">Last updated ${response[artId - 1].date} ago</small></p><br>
              </div>
            </div>
    
                        `
          }
  
          break;

          
          case 'Descargas':

            if(files == true){

              console.log(files);
              main.innerHTML = `
      
              <div class="card">
              <h3>${response[artId - 1].name}</h3>
              <div class="links-categories">
              <a href="../${category.toLowerCase()}.html">Descargas</a>
              </div>
              <img src="${response[artId - 1].image}" width="100px" id="img-art" class="card-img-top" alt="...">
        
                <div class="card-body">
        
                <h3 class="card-title display-5">${response[artId - 1].title}</h3>
                <p class="card-text">${response[artId - 1].content}</p>

                  <h6>#Team Kakashi</h6>
                  <img src="${response[artId - 1].image2}" width="100px" id="img-art" class="card-img-top" alt="...">
                  <button class="btn btn-danger"><a href="${response[artId - 1].image2}" download="${response[artId - 1].image2}" ">Descarga archivo</a></button>
                  
                  <h6>#Team Oroshimaru</h6>
                  <img src="${response[artId - 1].image3}" width="100px" id="img-art" class="card-img-top" alt="...">
                  <button class="btn btn-danger"><a href="${response[artId - 1].image3}" download="${response[artId - 1].image3}" ">Descarga archivo</a></button>
                  
                  <h6>#Team Naturo</h6>
                  <img src="${response[artId - 1].image4}" width="100px" id="img-art" class="card-img-top" alt="...">
                  <button class="btn btn-danger"><a href="${response[artId - 1].image4}" download="${response[artId - 1].image4}" ">Descarga archivo</a></button>
                  
                  <h6>#Team Demonios</h6>
                  <img src="${response[artId - 1].image5}" width="100px" id="img-art" class="card-img-top" alt="...">
                  <button class="btn btn-danger"><a href="${response[artId - 1].image5}" download="${response[artId - 1].image5}" ">Descarga archivo</a></button>
                  
                  <h6>#Team Gara</h6>
                  <img src="${response[artId - 1].image}" width="100px" id="img-art" class="card-img-top" alt="...">
                  <button class="btn btn-danger"><a href="${response[artId - 1].image}" download="${response[artId - 1].image}" ">Descarga archivo</a></button>

                  <h6>#Team Kurenai</h6>
                  <img src="${response[artId - 1].image6}" width="100px" id="img-art" class="card-img-top" alt="...">
                  <button class="btn btn-danger"><a href="${response[artId - 1].image6}" download="${response[artId - 1].image6}" ">Descarga archivo</a></button>


            
                  <p class="card-text"><small class="text-muted">Last updated ${response[artId - 1].date} ago</small></p>
                </div>
              </div>


                          
                          `
            }else{
              main.innerHTML = `
      
            <div class="card">
            <h3>${response[artId - 1].name}</h3>
            <div class="links-categories">
            <a href="../${category.toLowerCase()}.html">Descargas</a>
            </div>
            <img src="${response[artId - 1].image}" width="100px" id="img-art" class="card-img-top" alt="...">
      
              <div class="card-body">
      
              <h3 class="card-title display-5">${response[artId - 1].title}</h3>
                <p class="card-text">${response[artId - 1].content}</p><br>
                <img src="${response[artId - 1].image2}" width="100px" id="img-art" class="card-img-top" alt="...">
                <p class="card-text">${response[artId - 1].paragraph2}</p><br>
                <p class="card-text">${response[artId - 1].paragraph3}</p><br>
                <button class="btn btn-warning"><a href="${response[artId - 1].download}">Descarga aqui</a></button>
                <p class="card-text"><small class="text-muted">Last updated ${response[artId - 1].date} ago</small></p><br>
              </div>
            </div>
                        
                        `
            }
            break;
            case 'Noticias':
              if(response[artId - 1].code == '017'){
                main.innerHTML = `

                <div class="card">
                    <h2 class="display-2">Dieta para ganar masa muscular </h2>
                    <div class="links-categories">
                        <a href="../${category.toLowerCase()}.html">Noticias</a>
                        <span>Autor: <strong>Janeiro Placido</strong></span>
                    </div>
                    <img src="${response[artId - 1].image}" width="100px" id="img-art" class="card-img-top"
                        alt="...">

                    <div class="card-body">
                        <h3 class="card-title display-5">${response[artId - 1].title}</h3>
                        <p class="card-text">${response[artId - 1].content}</p><br>

                        <p class="card-text">${response[artId - 1].paragraph1}</p><br>

                        <p class="card-text">${response[artId - 1].paragraph2}</p><br>

                        <h4>He aquí una dieta fácil, rápida y efectiva, que elimina las escusas de que comer sano es
                            caro o aburrido: </h4>

                        <img src="${response[artId - 1].image2}" width="100px" id="img-art" class="card-img-top"
                            alt="...">

                        <h5>Desayuno: </h5>
                        <h6>Opción 1 </h6>
                        <ul class="card">
                            <li>-Una taza de cereal con alto contenido de fibra
                            </li>
                            <li>-Almendras y hojuelas de avena
                            </li>
                            <li>-8 onzas de leche semi-descremada
                            </li>
                            <li>-Una fruta de tu elección
                            </li>
                        </ul>

                        <h6>Opción 2 </h6>
                        <ul class="card">
                            <li>-3 huevos revueltos
                            </li>
                            <li>-Jamón de pavo
                            </li>
                            <li>-Pan + Mantequilla de maní
                            </li>
                            <li>-Jugo de naranja (zumo)
                            </li>
                        </ul>

                        <h6>Opción 3 </h6>
                        <ul class="card">
                            <li>-Batido de Plátano, fresas, almendras, leche semi-descremada (agregar suplemento si lo desea)
                            </li>
                            <li>-Casabe
                            </li>
                            <li>-Tocino
                            </li>
                           
                        </ul>
<br>
<br>
<br>
                        <h5>Almuerzo: </h5>
                        <h6>Opción 1 </h6>
                        <ul class="card">
                            <li>-Ajíes Morrón rellenos de pechuga de pollo
                            </li>
                            <li>-Puré de papas con verduras
                            </li>
                            <li>-Nueces
                            </li>
                           
                        </ul>

                        <h6>Opción 2 </h6>
                        <ul class="card">
                            <li>-Pasta 
                            </li>
                            <li>-Salmón a la plancha u (otro pescado con alto contenido nutricional) 
                            </li>
                            <li>-Ensalada verde
                            </li>
                            <li>-Aguacate
                            </li>
                        </ul>
                        <br>
                        <br>
                        <br>
                        <h5>Media mañana y Merienda:
                        </h5>
                        <h6>Opción 1 </h6>
                        <ul class="card">
                            <li>-Yogur natural
                            </li>
                            <li>-Una fruta de su elección
                            </li>
                            <li>-8 onzas de leche semi-descremada
                            </li>
                            <li>-Frutos secos
                            </li>
                        </ul>

                        <h6>Opción 2 </h6>
                        <ul class="card">
                            <li>-Mini arepas rellenas de queso bajo en grasa
                            </li>
                            <li>-Zumo de naranja
                            </li>
                          
                        </ul>

                        <h6>Opción 3 </h6>
                        <ul class="card">
                            <li>-Tortilla de avena (hecha de huevos, avena, leche, un poco de azúcar o miel) con mantequilla baja en grasa
                            </li>
                            <li>-Mantequilla de maní o jalea natural
                            </li>
                            <li>-Pasas al gusto
                            </li>
                           
                        </ul>
                        <br>
                        <br>
                        <br>
                        <h5>Cena:
                        </h5>
                        <h6>Opción 1 </h6>
                        <ul class="card">
                            <li>-Gambas salteadas con ajo
                            </li>
                            <li>-Vegetales salteados
                            </li>
                            <li>-Jugo de Tamarindo
                            </li>
                           
                        </ul>

                        <h6>Opción 2 </h6>
                        <ul class="card">
                            <li>-Ensalada Rusa con queso crema en lugar de mayonesa
                            </li>
                            <li>-Pechuga desmenuzada 
                            </li>
                            <li>-Mazorca de maíz asada 
                            </li>
                        
                          
                        </ul>

                        <br>
                        <br>
                       




                        <p class="card-text">${response[artId - 1].paragraph3}</p><br>
                        <p class="card-text">${response[artId - 1].paragraph4}</p><br>

                    </div>
                </div>`
              }else{

              
                main.innerHTML = `
                <div class="card">
                <h2 class="display-2">${response[artId - 1].name}</h2>
                <div class="links-categories">
                <a href="../${category.toLowerCase()}.html">Noticias</a>
                <span>Autor: <strong>Janeiro Placido</strong></span>
                </div>
                <img src="${response[artId - 1].image}" width="100px" id="img-art" class="card-img-top" alt="...">
        
                  <div class="card-body">
                   <h3 class="card-title display-5">${response[artId - 1].title}</h3>
                   <p class="card-text">${response[artId - 1].content}</p><br>
                   <h4 class="card-title">${response[artId - 1].subtitle1}</h4>
                   <h4 class="card-title">${response[artId - 1].subtitle2}</h4>

                   <p class="card-text">${response[artId - 1].paragraph1}</p><br>

                   <img src="${response[artId - 1].image2}" width="100px" id="img-art" class="card-img-top" alt="...">
                   <h4 class="card-title">${response[artId - 1].subtitle3}</h4>
                   <p class="card-text">${response[artId - 1].paragraph2}</p><br>

                   <h4 class="card-title">${response[artId - 1].subtitle4}</h4>
                   <p class="card-text">${response[artId - 1].paragraph3}</p><br>

                   <h4 class="card-title">${response[artId - 1].subtitle5}</h4>
                   <p class="card-text">${response[artId - 1].paragraph4}</p><br>
                   
                  </div>
                  </div>
                  `

                }
                break;

                case 'Juegos':
                  main.innerHTML = `
                  <div class="card">
                  <h2 class="display-2">${response[artId - 1].name}</h2>
                  <div class="links-categories">
                  <a href="../${category.toLowerCase()}.html">Juegos</a>
                  <span>Autor: <strong>Janeiro Placido</strong></span>
                  </div>
                  <img src="${response[artId - 1].image}" width="100px" id="img-art" class="card-img-top" alt="...">
          
                    <div class="card-body">
                    <div class="first-block row">
                    <div class="col-xxl-4 col-md-5 bigclass colordiv">Calificacion  <i class="fa-solid fa-star">${response[artId - 1].rate}</i></div>
                    <div class="col-xxl-3 col-md-5 bigclass colordiv">${response[artId - 1].age}</div>
                    <div class="col-xxl-4 col-md-5 colordiv"><span>Genero: </span><h4 >${response[artId - 1].info1}</h4></div>
                    <div class="col-xxl-4 col-md-5 colordiv"><span>Tamaño: </span><h4 >${response[artId - 1].info2}</h4></div>
                    <div class="col-xxl-4 col-md-5 colordiv"><span>Platafomas: </span><h4 >${response[artId - 1].info3}</h4></div>
                    <div class="col-xxl-3 col-md-5 colordiv"><span>Dificultad: </span><h4 >${response[artId - 1].info4}</h4></div>
                  </div>

                     
                  <h4 class="card-title">${response[artId - 1].subtitle1}</h4>
                  <p class="card-text">${response[artId - 1].content}</p><br>
                  <p class="card-text">${response[artId - 1].paragraph1}</p><br>
                  <h4 class="card-title greencolor">${response[artId - 1].subtitle2}</h4>
                  <p class="card-text">${response[artId - 1].paragraph2}</p><br>
                  <p class="card-text">${response[artId - 1].paragraph2_1}</p><br>

  
                     <img src="${response[artId - 1].image2}" width="100px" id="img-art" class="card-img-top" alt="...">
  
                     

                     <h4 class="card-title redcolor">${response[artId - 1].subtitle3}</h4>
                     <p class="card-text">${response[artId - 1].paragraph3}</p><br>
                     <h4 class="card-title">${response[artId - 1].subtitle4}</h4>
                     <p class="card-text">${response[artId - 1].paragraph4}</p><br>

                    
  
                     
                     
                    </div>
                    </div>
                    `
                  break;
      }
  
    }
    };
  
  });
  