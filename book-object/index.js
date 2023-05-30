let myLibrary = [];

function Book(title = "unknown", author = "unknown", pages = "unknown", index) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
    this.idx = index;

    this.info = function () {
        const read = (this.read) ? "already read" : "not read yet";
        return `The ${this.title} by ${this.author}, ${this.pages} pages, ${read}`;
    }
}

function addBookToLibrary(title, author, pages, read) {
    let index = myLibrary.length;
    let book = new Book(title, author, pages, index, read);
    myLibrary.push(book);
    return index;
}

function handleSubmit(event) {
    event.preventDefault();
    const title = event.target[0].value;
    const author = event.target[1].value;
    const pages = event.target[2].value;
    const read = event.target[3].checked;
    const index = addBookToLibrary(title, author, pages, read);

    const tbody = document.querySelectorAll('tbody')[0];
    const tr = document.createElement('tr');
    const data = [title, author, pages];
    for(let i = 0; i < 3; i++) {
        const td = document.createElement('td');
        td.innerText = data[i];
        tr.appendChild(td);
    }
    const td = document.createElement('td');
    const text = read ? 'unread': 'readed'; 
    td.setAttribute('class', 'center-flex');
    td.innerHTML = `<button data-ns-idx="${index}" onclick="handleChange(event)">${text}</button>`;
    tr.appendChild(td); 
    const td2 = document.createElement('td');
    td2.innerHTML = `<button style="margin:auto" data-ns-idx="${index}" onclick="handleDelete(event)">Delete</button>`;
    tr.appendChild(td2);
    tbody.appendChild(tr);
}

const model = document.getElementById("model");
document.getElementById("addBook").addEventListener("click", () => {
    model.style.display = "block";
})

window.onclick = function (event) {
    if (event.target === model) {
        model.style.display = "none";
    }
}

document.onkeydown = (e) => {
    if (e.key == 'Escape') model.style.display = "none";
}

document.getElementById("form").addEventListener("submit", handleSubmit);

function handleChange(event) {
    const index = Number(event.target.attributes['data-ns-idx'].value);
    myLibrary[index].read = !myLibrary[index].read;
    const read = myLibrary[index].read;
    const text = read ? 'unread': 'readed'; 
    event.target.innerText = text;
    console.log(myLibrary);
}

function handleDelete(event) {
    const index = Number(event.target.attributes['data-ns-idx'].value);
    myLibrary[index] = null;
    event.target.parentNode.parentNode.remove();
}