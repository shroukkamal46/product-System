  var productIdInput=document.querySelector("#productId");

  var productNameInput = document.querySelector("#productName");

  var productPriceInput = document.querySelector("#productPrice");

  var productDescInput= document.querySelector("#productDesc");

  var productRateInput = document.querySelector("#productRate");

  var productQuantityInput = document.querySelector("#productQuantity");

  var addBtn=document.querySelector("#addBtn");

  var allProducts = [] ;

  function addproduct(){
   var product = {
      id:productIdInput.value ,
      productname:productNameInput.value ,
      description:productDescInput.value,
      price:productPriceInput.value,
      rate:productRateInput.value,
      quantity:productQuantityInput.value
   }
   allProducts.push(product);
   showProductData();
   setFormEmpty();
   localStorage.setItem('product', JSON.stringify(allProducts))
  }
addBtn.addEventListener("click",addproduct)

function showProductData(){
var productData =``;

for ( var i = 0 ; i <allProducts.length; i ++)
{
productData+=`
 <tr>
              <td>${allProducts[i].id}</td>
            <td>${allProducts[i].productname}</td>
            <td>${allProducts[i].price}</td>
            <td>${allProducts[i].description}</td>
            <td>${allProducts[i].rate}</td>
            <td>${allProducts[i].quantity}</td>
            <td><button class="btn btn-danger"onclick="updateData(${i})" >Update</button></td>
            <td><button class="btn btn-info" onclick="deleteData(${i})">Delete</button></td>
            </tr>
`
}
document.getElementById("tableBody").innerHTML = productData;
}

function setFormEmpty(){
 
   productIdInput.value ="";
   productNameInput.value ="";
   productDescInput.value ="";
   productPriceInput.value ="";
   productRateInput.value ="";
   productQuantityInput.value ="";
}
// Update
function updateData(i)
{
   productIdInput.value=allProducts[i].id;
   productNameInput.value=allProducts[i].productname;
   productPriceInput.value = allProducts[i].price;
   productDescInput.value =allProducts[i].description;
   productRateInput.value = allProducts[i].rate;
  productQuantityInput.value =allProducts[i].quantity;

   localStorage.setItem('products', JSON.stringify(allProducts));
}
// delete 
function deleteData(i)
{
   allProducts .splice(i,1)
   showProductData();
   localStorage.setItem('products', JSON.stringify(allProducts));
}