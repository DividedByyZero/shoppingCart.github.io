let list = document.getElementById('category')
list.addEventListener("change",showProduct);
function showProduct(e){
    let search = list.options[list.selectedIndex].textContent;
    fetch(`https://fakestoreapi.com/products/category/${search.toLowerCase()}`)
            .then(res=>res.json())
            .then(json=>showTable(json))
    console.log(list.options[list.selectedIndex].textContent);
}
function showTable(data){
    let table = document.getElementById('table');
    table.innerHTML="";
    data.forEach((element)=> {
        let productName = element.title;
        let img = element.image;
        let price = element.price;
        let desc = element.description;
        let id = element.id;
        let ht =`<tr>
        <th><img src="${img}" width="250" height="160"></img></th>
        <th>
        <h3>${productName}</h3>
        <span>CODE : L-${id}</span>
        <h6>${desc}</h6>
        <h4><bold> PRICE : ${price} $ </bold></h4>
        <th><button id="addToCart">Add To Cart </button></th>
        </tr>`
        let table = document.getElementById('table');
        table.innerHTML += ht;
        console.log(element)
    });
}
