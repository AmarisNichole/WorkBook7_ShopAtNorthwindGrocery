const categoriesData = [
    {
        "categoryId": 1,
        "description": "Soft drinks, coffees, teas, beers, and ales",
        "name": "Beverages"
    },
    {
        "categoryId": 2,
        "description": "Sweet and savory sauces, relishes, spreads, and seasonings",
        "name": "Condiments"
    },
    {
        "categoryId": 3,
        "description": "Desserts, candies, and sweet breads",
        "name": "Confections"
    },
    {
        "categoryId": 4,
        "description": "Cheeses",
        "name": "Dairy Products"
    },
    {
        "categoryId": 5,
        "description": "Breads, crackers, pasta, and cereal",
        "name": "Grains/Cereals"
    },
    {
        "categoryId": 6,
        "description": "Prepared meats",
        "name": "Meat/Poultry"
    },
    {
        "categoryId": 7,
        "description": "Dried fruit and bean curd",
        "name": "Produce"
    },
    {
        "categoryId": 8,
        "description": "Seaweed and fish",
        "name": "Seafood"
    }
];

async function fetchCategories() {
    // Simulate fetching data from the API
    return categoriesData;
}

async function fetchProductsByCategory(category) {
    // Simulate fetching product data from the API based on the category
    // Replace this with actual API call if available
    return [];
}

async function populateCategoryDropdown() {
    const categoryDropdown = document.getElementById("category");
    const categories = await fetchCategories();

    categories.forEach(category => {
        const option = document.createElement("option");
        option.value = category.name;
        option.text = `${category.name} - ${category.description}`;
        categoryDropdown.add(option);
    });
}

async function searchProducts() {
    const searchMethod = document.getElementById("searchMethod").value;
    const category = document.getElementById("category").value;

    document.getElementById("results").innerHTML = "";

    if (searchMethod === "viewAll") {
        const allProducts = await fetchProductsByCategory('');
        displayResults(allProducts);
    } else if (searchMethod === "searchByCategory") {
        const productsByCategory = await fetchProductsByCategory(category);
        displayResults(productsByCategory);
    }
}

function displayResults(results) {
    const resultsContainer = document.getElementById("results");

    results.forEach(product => {
        const resultDiv = document.createElement("div");
        resultDiv.innerHTML = `<strong>ID:</strong> ${product.id}, <strong>Name:</strong> ${product.name}, <strong>Price:</strong> ${product.price} <a href="details.html?id=${product.id}">See details</a>`;
        resultsContainer.appendChild(resultDiv);
    });
}

document.getElementById("searchMethod").addEventListener("change", async function() {
    const categoryDropdown = document.getElementById("categoryDropdown");
    if (this.value === "searchByCategory") {
        categoryDropdown.style.display = "block";
        await populateCategoryDropdown();
    } else {
        categoryDropdown.style.display = "none";
    }
});