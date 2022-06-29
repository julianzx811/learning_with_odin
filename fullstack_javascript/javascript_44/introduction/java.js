let books = []
let leido = []

//making a book object
function Book(tittle,author,pages){
    this.tittle = tittle
    this.author = author
    this.pages = pages
}


//prototipe: define ur function on the prototype if ur using constructors

Book.prototype.sayAuthor = function(){
    return this.author
}

//prototype is used for inherit between objects but this inherit cant go in circles

function addBookToLibrary(tittle,author,pages){
  const newbook = new Book(tittle,author,pages)
  books.push(newbook)
  if (books.length == 1) {
    createTable()  
  }else{
    
  }
  
}

function createTable(){
  const horizontal = document.createElement("tr")
  apend_element.appendChild(horizontal)
  //columna horizontal
  horizontal.appendChild(document.createElement("th"))
    for(let i = 0;i<books.length;i++){
    const vertical = document.createElement("th")
    num = i +1
    vertical.textContent = "libro " + num
    horizontal.appendChild(vertical)    
    }
  //columna vertical para titulo
  const horizonta1 = document.createElement("tr")
  horizonta1.textContent = "titulo"
  apend_element.appendChild(horizonta1)
  for(let i = 0;i<books.length;i++){
    const vertical = document.createElement("th")
    vertical.textContent = books[i].tittle 
    horizonta1.appendChild(vertical) 
  } 
 //columna vertical para autor
  const horizonta2 = document.createElement("tr")
  horizonta2.textContent = "autor"
  apend_element.appendChild(horizonta2)
  for(let i = 0;i<books.length;i++){
    const vertical = document.createElement("th")
    vertical.textContent = books[i].author 
    horizonta2.appendChild(vertical) 
  }
  //columna vertical para paginas
  const horizonta3 = document.createElement("tr")
  horizonta3.textContent = "paginas"
  apend_element.appendChild(horizonta3)
  for(let i = 0;i<books.length;i++){
    const vertical = document.createElement("th")
    vertical.textContent = books[i].pages
    horizonta3.appendChild(vertical) 
  }
 
}
if (books.length == 0) {
  document.getElementById("empty_books").textContent = "usted no ha registrado libros"
}

function processdata(){
  let data = new FormData();
  autor = document.getElementById("autor")
  tittle = document.getElementById("nombre_libro")
  pages =document.getElementById("Npaginas")
  data.append("autor",autor.value)
  data.append("tittle",tittle.value)
  data.append("pages",pages.value)
  addBookToLibrary(data.get("tittle"),data.get("autor"),data.get("pages"))
  let radio = document.querySelector('input[name="sera"]:checked').value
  if(radio == "leido"){
    leido.push(1)    
  }
  else if(radio == "noleido"){
    leido.push(0)
  }
  autor.value= ""
  tittle.value= ""
  pages.value= ""
  return false
} 