// Function_01//
const allPosts = async (product = '') => {
  // console.log(inputF)
  const response = await fetch(`https://fakestoreapi.com/products/${product}`);
  const data = await response.json();
  // console.log(data)
  const allPostsArray = data;
  const cardContainer = document.getElementById("cardContainer")
  cardContainer.textContent = '';
  allPostsArray.forEach(item => {
    // console.log(item)my_modal_4.showModal()

    const div = document.createElement("div")

    div.innerHTML = `
    
         <div class="border p-5 m-4 rounded-xl gap-y-2">
        <img class="h-96 w-full object-contain" src="${item.image}" alt="">
        <div class="flex justify-between">
          <button>${item.category}</button>
          <p><i class="fa-regular fa-star"></i> ${item.rating.rate} <span>(${item.rating.count})</span></p>
        </div>
        <h3>${item.title}</h3>
        <h3><i class="fa-solid fa-dollar-sign">${item.price}</i></h3>
        <div class="flex justify-between">
          <button onclick="loadWordDetails(${item.id})" type="submit" class="btn"><i class="fa-regular fa-eye"></i>Details</button>
          <button class="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i> add</button>
        </div>
      </div>

 `;
    cardContainer.append(div)
  });
  const loaderS = document.getElementById('loading_spinner')
  loaderS.classList.add('hidden')
}

allPosts()

const loadWordDetails = async (id) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await response.json();
  displyDetails(data)
  // console.log(id);
}
const displyDetails = (detail) => {
console.log(detail);
const detailsBox = document.getElementById("details_Container");
console.log(detailsBox);
detailsBox.innerHTML = `
<div class="bg-white w-full rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
        
        <div class="bg-gray-50 p-6 rounded-t-xl">
          <img src="${detail.image}" 
               alt="${detail.title}" 
               class="h-96 w-full object-contain">
        </div>

        <div class="p-5">

          <h2 class="text-sm font-semibold mb-2">
            ${detail.title}
          </h2>

          <p class="text-xs text-gray-600 mb-3">
            ${detail.description}
          </p>

          <div class="flex items-center justify-between mb-3">
            <span class="text-lg font-bold text-gray-800">
              $${detail.price}
            </span>
            <span class="text-yellow-500 text-sm">
              ⭐ ${detail.rating.rate} (${detail.rating.count})
            </span>
          </div>

          <button class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Add to Cart
          </button>

        </div>
      </div>

`;
document.getElementById("my_modal").showModal();
}



handleAll = () => {
  allPosts("")
  console.log("yse");
}
handleElectronics = () => {
  allPosts("/category/electronics")
  console.log("yse");
}
handleJewwlery = () => {
  allPosts("/category/jewelery")
  console.log("yse");
}
handleMen = () => {
  allPosts("/category/men's clothing")
  console.log("yse");
}
handleWomen = () => {
  allPosts("/category/women's clothing")
  console.log("yse");
}
