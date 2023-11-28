let tablerow = document.getElementById('table1');
tablerow.addEventListener('click',removeData);
let list = document.getElementById('category');
list.addEventListener("change",showProduct);
function showProduct(e){
    let search = list.options[list.selectedIndex].textContent;
    fetch(`https://fakestoreapi.com/products/category/${search.toLowerCase()}`)
            .then(res=>res.json())
            .then(json=>showTable(json))
    //console.log(list.options[list.selectedIndex].textContent);
}
function showTable(data){
    let table = document.getElementById('table');
    table.innerHTML="";
    let i=0;
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
        <span>Product ID : L-${id}</span>
        <h6>${desc}</h6>
        <h4><bold> PRICE : ${price} $ </bold></h4>
        <th><button class="addToCart">Add To Cart </button></th>
        </tr>`
        let table = document.getElementById('table');
        table.innerHTML += ht;
        // //console.log(element);
        // let addCart = document.getElementsByClassName("addToCart");
        // console.log(addCart);
        // addCart[i].addEventListener("click",addProductToCart);
        // console.log(addCart[i]);
        // i=i+1;
    });
    let btns = document.querySelectorAll('button');

    for (i of btns) {
        i.addEventListener('click', addProductToCart);
    }
}
//addCart.addEventListener('click',addProductToCart);
function addProductToCart(e){
    let x = e.target.parentElement.parentElement;
    //console.log(x);
    let imgtag = x.getElementsByTagName("th")[0].getElementsByTagName("img")[0].src;
    let prodName = x.getElementsByTagName("h3")[0].innerHTML;
    //console.log(x.getElementsByTagName("h3")[0]);
    //console.log(imgtag);
    let text = `<tr>
        <th><img src="${imgtag}" width="250" height="160"></img></th>
        <th>${prodName}</th>
        <th><button class="remove" background-color="red">remove</button></th>
    </tr>`;
    let table = document.getElementById('table1');
    table.innerHTML+=text;
}
function removeData(e){
    if(e.target.hasAttribute("class")){
        let ele = e.target.parentElement;
        let val = ele.previousElementSibling.previousElementSibling.parentElement;
        
        if(confirm("Are You Sure?")){
            val.remove();
        }
    }
    console.log();
}
