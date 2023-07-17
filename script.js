const menu = [
    {
        id: 1,
        title: "Spicey Egg Sandwich",
        category: "Breakfast",
        price: 15.99,
        img: "image/egg-sandwich.jpg",
        desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    
    {
        id: 2,
        title: "Creamy Bana-Bread",
        category: "Lunch",
        price: 13.99,
        img: "image/banana-bread.jpg",
        desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
        id: 3,
        title: "Sp. Cheesy Burger Combo",
        category: "Lunch",
        price: 18.99,
        img: "image/burger.jpg",
        desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
    id: 4,
    title: "Prawn Fried Rice",
    category: "Dinner",
    price: 20.99,
    img: "image/fried-rice.jpg",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
        id: 6,
        title: "Strawberry Pancake",
        category: "Breakfast",
        price: 10.99,
        img: "image/pancake.jpg",
        desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },

        {
            id: 7,
            title: "Butter Chicken",
            category: "Dinner",
            price: 25.99,
            img: "image/butter-chicken.jpg",
            desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            },
            {
                id: 8,
                title: "Mozrella Cheese Sandwich",
                category: "Breakfast",
                price: 11.99,
                img: "image/cheese-sandwich.jpg",
                desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                },

                {
                    id: 9,
                    title: "Noodles Soup",
                    category: "Lunch",
                    price: 14.99,
                    img: "image/noodles.jpg",
                    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                    },
                   
                            
                            {
                                id: 11,
                                title: "Pinapple Pizza",
                                category: "Lunch",
                                price: 20.99,
                                img: "image/pineapple-pizza.jpg",
                                desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                                },
                                
                                {
                                    id: 12,
                                    title: "Spicey Lemon Fish Curry",
                                    category: "Dinner",
                                    price: 19.99,
                                    img: "image/fish-curry.jpg",
                                    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                                    } , 
                                    {
                                    id: 13,
                                    title: "Choco Shake",
                                    category: "Drinks",
                                    price: 20.99,
                                    img: "image/choko-shake.jpg",
                                    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                                    },
                                    {
                                      id: 14,
                                      title: "Orange Punch",
                                      category: "Drinks",
                                      price: 12.99,
                                      img: "image/orange-punch.jpg",
                                      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                                      },
                                   
                                              
];


const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.btn-container')



// load items
window.addEventListener("DOMContentLoaded",function(){
  displayMenuItems(menu)  
  displayMenuButtons()

})


// load items
function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){

        return `<article class="menu-item">
              <img src=${item.img} class="photo" alt=${item.title}>
              <div class="item-info">
                  <header>
                      <h4>${item.title}</h4>
                      <h4 class="price">$${item.price}</h4>
                  </header>
                  <p class="item-text">${item.desc}</p>
              </div>
          </article>`
      })
      displayMenu = displayMenu.join("")
      sectionCenter.innerHTML = displayMenu
}
 
function displayMenuButtons(){
  const categories = menu.reduce(function(values, item){
    if(!values.includes(item.category)){
      values.push(item.category)
    }
    return values
  },['all'])
  
  const categoryBtns = categories.map(function(category){
    return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>
    `
  }).join("")
  container.innerHTML = categoryBtns
  const filterBtns = container.querySelectorAll('.filter-btn')
  // filter items
filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
   // console.log(e.currentTarget.dataset.id);
    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter(function (menuItem) {
    //  console.log(menuItem.category);
      if (menuItem.category === category) {
        return menuItem;
      }
    })
    if (category === "all") {
      displayMenuItems(menu)
    } else {
      displayMenuItems(menuCategory);
    }
  })
})
}

