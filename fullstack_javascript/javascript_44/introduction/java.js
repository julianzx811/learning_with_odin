let books = []
let leido = []
let current_book = 0

//making a book object
function Book(tittle,author,pages){
    this.tittle = tittle
    this.author = author
    this.pages = pages
}
//global doms
const table = document.getElementById("item1") 


//prototipe: define ur function on the prototype if ur using constructors
Book.prototype.sayAuthor = function(){
    return this.author
}

function createTable(){
  //create the 1 column
    const tr1 = document.createElement("tr")
    const th0 = document.createElement("th")
    const th1 = document.createElement("th")
    th1.textContent = "titulo"
    const th2 = document.createElement("th")
    th2.textContent = "paginas"
    const th3 = document.createElement("th")
    th3.textContent = "autor"
    const th4 = document.createElement("th")
    th4.textContent = "leido?"
    const th5 = document.createElement("th")
    table.appendChild(tr1) 
    tr1.appendChild(th0) 
    tr1.appendChild(th1)
    tr1.appendChild(th2)
    tr1.appendChild(th3)
    tr1.appendChild(th4)
    tr1.appendChild(th5)
}

function addBookTable(newbook){
  const tr1 = document.createElement("tr")
  const th1 = document.createElement("th")
  th1.textContent = "libro " + (current_book+1)
  tr1.appendChild(th1)
  const th2 = document.createElement("th")
  th2.textContent = newbook.tittle
  tr1.appendChild(th2)
  const th3 = document.createElement("th")
  th3.textContent = newbook.pages
  tr1.appendChild(th3)
  const th4 = document.createElement("th")
  th4.textContent = newbook.author
  tr1.appendChild(th4)
  const th5 = document.createElement("th")
  if (leido[current_book] === 0) {
    th5.textContent = "no leido"
  }
  else if(leido[current_book] === 1){
    th5.textContent = "leido" 
  }
  tr1.appendChild(th5)
  const th6 = document.createElement("th")
  const boton = document.createElement("input")
  boton.type = "button"
  boton.value = "eliminar libro"
  boton.id = current_book
  boton.onclick = function(e) {
    table.removeChild(document.getElementById("tr"+e.target.id))
  }
  th6.appendChild(boton)
  tr1.appendChild(th6)
  //adding the book to the table
  tr1.id = "tr"+current_book
  table.appendChild(tr1)
  current_book++
}

function addBookToLibrary(tittle,author,pages){
  const newbook = new Book(tittle,author,pages)
  books.push(newbook)
  document.getElementById("empty_books").textContent = ""
  if (books.length == 1) {
    createTable()     
    addBookTable(newbook)
  }else{
    addBookTable(newbook)
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
  let radio = document.querySelector('input[name="sera"]:checked').value
  if(radio == "leido"){
    leido.push(1)    
  }
  else if(radio == "noleido"){
    leido.push(0)
  }
  addBookToLibrary(data.get("tittle"),data.get("autor"),data.get("pages"))
  autor.value= ""
  tittle.value= ""
  pages.value= ""
  return false
} 