// Load Quotes from Local Storage or Use Default
const quotes = JSON.parse(localStorage.getItem("quotes")) || [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", category: "Motivation" },
    { text: "In the middle of every difficulty lies opportunity.", category: "Inspiration" },
    { text: "Do what you can, with what you have, where you are.", category: "Success" }
];

// Function to Save Quotes to Local Storage
function saveQuotesToLocalStorage() {
    localStorage.setItem("quotes", JSON.stringify(quotes));
}

// Function to Show a Random Quote
function showRandomQuote(category = "") {
    let filteredQuotes = quotes;

    if (category) {
        filteredQuotes = quotes.filter(quote => quote.category.toLowerCase() === category.toLowerCase());
    }

    if (filteredQuotes.length === 0) {
        alert("No quotes available for this category. Please add one.");
        return;
    }

    const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
    const quoteDisplay = document.getElementById("quoteDisplay");
    quoteDisplay.textContent = `"${filteredQuotes[randomIndex].text}" - [${filteredQuotes[randomIndex].category}]`;
}

// Function to Add a New Quote
function addQuote() {
    const quoteText = document.getElementById("newQuoteText").value.trim();
    const quoteCategory = document.getElementById("newQuoteCategory").value.trim();

    if (quoteText === "" || quoteCategory === "") {
        alert("Please enter both quote text and category.");
        return;
    }

    // Add new quote to array and save to local storage
    quotes.push({ text: quoteText, category: quoteCategory });
    saveQuotesToLocalStorage(); // Save to Local Storage

    // Clear input fields
    document.getElementById("newQuoteText").value = "";
    document.getElementById("newQuoteCategory").value = "";

    alert("Quote added successfully!");
    updateCategoryOptions(); // Refresh category dropdown
}

// Function to Update Category Dropdown
function updateCategoryOptions() {
    const categoryDropdown = document.getElementById("categorySelect");
    categoryDropdown.innerHTML = `<option value="">All Categories</option>`; // Reset dropdown

    const uniqueCategories = [...new Set(quotes.map(q => q.category.toLowerCase()))];

    uniqueCategories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        categoryDropdown.appendChild(option);
    });
}

// Event Listener for Showing a Random Quote
document.getElementById("newQuote").addEventListener("click", () => {
    const selectedCategory = document.getElementById("categorySelect").value;
    showRandomQuote(selectedCategory);
});

// Populate Categories on Page Load
updateCategoryOptions();
