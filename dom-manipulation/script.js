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

// Function to Create the Add Quote Form
function createAddQuoteForm() {
    const formContainer = document.createElement("div");

    // Create input fields
    const quoteInput = document.createElement("input");
    quoteInput.id = "newQuoteText";
    quoteInput.type = "text";
    quoteInput.placeholder = "Enter a new quote";

    const categoryInput = document.createElement("input");
    categoryInput.id = "newQuoteCategory";
    categoryInput.type = "text";
    categoryInput.placeholder = "Enter quote category";

    // Create Add Quote button
    const addButton = document.createElement("button");
    addButton.textContent = "Add Quote";
    addButton.onclick = addQuote;

    // Append elements to form container
    formContainer.appendChild(quoteInput);
    formContainer.appendChild(categoryInput);
    formContainer.appendChild(addButton);

    // Append form to body (or another container)
    document.body.appendChild(formContainer);
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

    // Update the DOM immediately
    document.getElementById("quoteDisplay").textContent = `"${quoteText}" - [${quoteCategory}]`;

    // Clear input fields
    document.getElementById("newQuoteText").value = "";
    document.getElementById("newQuoteCategory").value = "";

    alert("Quote added successfully!");
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

// Event Listener for "Show New Quote" Button
document.getElementById("newQuote").addEventListener("click", () => {
    const selectedCategory = document.getElementById("categorySelect").value;
    showRandomQuote(selectedCategory);
});

// Populate Categories on Page Load
updateCategoryOptions();
createAddQuoteForm(); // Ensure the form is added dynamically
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

    // Store the last displayed quote in Session Storage
    sessionStorage.setItem("lastQuote", quoteDisplay.textContent);
}

// Function to Restore Last Quote from Session Storage
function restoreLastQuote() {
    const lastQuote = sessionStorage.getItem("lastQuote");
    if (lastQuote) {
        document.getElementById("quoteDisplay").textContent = lastQuote;
    }
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
    saveQuotesToLocalStorage();

    // Update the DOM immediately
    document.getElementById("quoteDisplay").textContent = `"${quoteText}" - [${quoteCategory}]`;

    // Clear input fields
    document.getElementById("newQuoteText").value = "";
    document.getElementById("newQuoteCategory").value = "";

    alert("Quote added successfully!");
    updateCategoryOptions();
}

// Function to Update Category Dropdown
function updateCategoryOptions() {
    const categoryDropdown = document.getElementById("categorySelect");
    categoryDropdown.innerHTML = `<option value="">All Categories</option>`;

    const uniqueCategories = [...new Set(quotes.map(q => q.category.toLowerCase()))];

    uniqueCategories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        categoryDropdown.appendChild(option);
    });
}

// Function to Export Quotes as JSON
function exportToJson() {
    const jsonData = JSON.stringify(quotes, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "quotes.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// Function to Import Quotes from JSON File
function importFromJsonFile(event) {
    const fileReader = new FileReader();

    fileReader.onload = function (event) {
        try {
            const importedQuotes = JSON.parse(event.target.result);
            if (Array.isArray(importedQuotes)) {
                quotes.push(...importedQuotes);
                saveQuotesToLocalStorage();
                alert("Quotes imported successfully!");
                updateCategoryOptions();
            } else {
                alert("Invalid JSON file. Please upload a valid quotes file.");
            }
        } catch (error) {
            alert("Error reading JSON file. Please try again.");
        }
    };

    fileReader.readAsText(event.target.files[0]);
}

// Event Listener for "Show New Quote" Button
document.getElementById("newQuote").addEventListener("click", () => {
    const selectedCategory = document.getElementById("categorySelect").value;
    showRandomQuote(selectedCategory);
});

// Restore Last Quote on Page Load
restoreLastQuote();
updateCategoryOptions();


