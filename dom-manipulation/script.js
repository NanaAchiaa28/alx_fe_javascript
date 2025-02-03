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

// Function to Populate Categories Dynamically
function populateCategories() {
    const categoryFilter = document.getElementById("categoryFilter");
    categoryFilter.innerHTML = `<option value="all">All Categories</option>`; // Reset dropdown

    const uniqueCategories = [...new Set(quotes.map(q => q.category.toLowerCase()))];

    uniqueCategories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        categoryFilter.appendChild(option);
    });

    // Restore last selected filter
    const lastFilter = localStorage.getItem("lastCategoryFilter");
    if (lastFilter) {
        categoryFilter.value = lastFilter;
        filterQuotes();
    }
}

// Function to Filter Quotes Based on Selected Category
function filterQuotes() {
    const selectedCategory = document.getElementById("categoryFilter").value;

    // Store the selected filter in local storage
    localStorage.setItem("lastCategoryFilter", selectedCategory);

    if (selectedCategory === "all") {
        showRandomQuote();
    } else {
        showRandomQuote(selectedCategory);
    }
}

// Function to Show a Random Quote Based on Category
function showRandomQuote(category = "") {
    let filteredQuotes = quotes;

    if (category && category !== "all") {
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

// Function to Add a New Quote and Update Categories
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

    // Update categories dynamically
    populateCategories();

    // Update the DOM immediately
    document.getElementById("quoteDisplay").textContent = `"${quoteText}" - [${quoteCategory}]`;

    // Clear input fields
    document.getElementById("newQuoteText").value = "";
    document.getElementById("newQuoteCategory").value = "";

    alert("Quote added successfully!");
}

// Event Listener for "Show New Quote" Button
document.getElementById("newQuote").addEventListener("click", () => {
    const selectedCategory = document.getElementById("categoryFilter").value;
    showRandomQuote(selectedCategory);
});

// Load Categories and Apply Last Filter on Page Load
populateCategories();

const API_URL = "https://jsonplaceholder.typicode.com/posts"; // Mock API endpoint

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

// Function to Populate Categories Dynamically
function populateCategories() {
    const categoryFilter = document.getElementById("categoryFilter");
    categoryFilter.innerHTML = `<option value="all">All Categories</option>`;

    const uniqueCategories = [...new Set(quotes.map(q => q.category.toLowerCase()))];

    uniqueCategories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        categoryFilter.appendChild(option);
    });

    const lastFilter = localStorage.getItem("lastCategoryFilter");
    if (lastFilter) {
        categoryFilter.value = lastFilter;
        filterQuotes();
    }
}

// Function to Filter Quotes Based on Selected Category
function filterQuotes() {
    const selectedCategory = document.getElementById("categoryFilter").value;
    localStorage.setItem("lastCategoryFilter", selectedCategory);

    if (selectedCategory === "all") {
        showRandomQuote();
    } else {
        showRandomQuote(selectedCategory);
    }
}

// Function to Show a Random Quote Based on Category
function showRandomQuote(category = "") {
    let filteredQuotes = quotes;

    if (category && category !== "all") {
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

    quotes.push({ text: quoteText, category: quoteCategory });
    saveQuotesToLocalStorage();
    populateCategories();

    document.getElementById("quoteDisplay").textContent = `"${quoteText}" - [${quoteCategory}]`;

    document.getElementById("newQuoteText").value = "";
    document.getElementById("newQuoteCategory").value = "";

    alert("Quote added successfully!");
}

// Function to Sync with Server (Simulated)
async function syncWithServer() {
    const syncStatus = document.getElementById("syncStatus");
    syncStatus.textContent = "Syncing with server...";

    try {
        const response = await fetch(API_URL);
        const serverData = await response.json();

        // Simulating getting new quotes from the server
        const newQuotes = serverData.slice(0, 5).map(post => ({
            text: post.title,
            category: "General"
        }));

        let conflictResolved = false;

        newQuotes.forEach(serverQuote => {
            const exists = quotes.some(q => q.text === serverQuote.text);
            if (!exists) {
                quotes.push(serverQuote);
                conflictResolved = true;
            }
        });

        saveQuotesToLocalStorage();
        populateCategories();

        if (conflictResolved) {
            syncStatus.textContent = "Sync complete. New quotes added.";
        } else {
            syncStatus.textContent = "No new quotes found. Everything is up-to-date.";
        }
    } catch (error) {
        syncStatus.textContent = "Sync failed. Check your connection.";
    }
}

// Event Listener for "Show New Quote" Button
document.getElementById("newQuote").addEventListener("click", () => {
    const selectedCategory = document.getElementById("categoryFilter").value;
    showRandomQuote(selectedCategory);
});

// Load Categories and Apply Last Filter on Page Load
populateCategories();
const API_URL = "https://jsonplaceholder.typicode.com/posts"; // Mock API endpoint

// Load Quotes from Local Storage or Use Default
let quotes = JSON.parse(localStorage.getItem("quotes")) || [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", category: "Motivation" },
    { text: "In the middle of every difficulty lies opportunity.", category: "Inspiration" },
    { text: "Do what you can, with what you have, where you are.", category: "Success" }
];

// Function to Save Quotes to Local Storage
function saveQuotesToLocalStorage() {
    localStorage.setItem("quotes", JSON.stringify(quotes));
}

// Function to Populate Categories Dynamically
function populateCategories() {
    const categoryFilter = document.getElementById("categoryFilter");
    categoryFilter.innerHTML = `<option value="all">All Categories</option>`;

    const uniqueCategories = [...new Set(quotes.map(q => q.category.toLowerCase()))];

    uniqueCategories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        categoryFilter.appendChild(option);
    });

    const lastFilter = localStorage.getItem("lastCategoryFilter");
    if (lastFilter) {
        categoryFilter.value = lastFilter;
        filterQuotes();
    }
}

// Function to Filter Quotes Based on Selected Category
function filterQuotes() {
    const selectedCategory = document.getElementById("categoryFilter").value;
    localStorage.setItem("lastCategoryFilter", selectedCategory);

    if (selectedCategory === "all") {
        showRandomQuote();
    } else {
        showRandomQuote(selectedCategory);
    }
}

// Function to Show a Random Quote Based on Category
function showRandomQuote(category = "") {
    let filteredQuotes = quotes;

    if (category && category !== "all") {
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

// Function to Fetch Quotes from Server
async function fetchQuotesFromServer() {
    try {
        const response = await fetch(API_URL);
        const serverData = await response.json();

        // Simulate fetching new quotes
        const newQuotes = serverData.slice(0, 5).map(post => ({
            text: post.title,
            category: "General"
        }));

        return newQuotes;
    } catch (error) {
        console.error("Failed to fetch quotes:", error);
        return [];
    }
}

// Function to Post a Quote to the Server
async function postQuoteToServer(quote) {
    try {
        await fetch(API_URL, {
            method: "POST",
            body: JSON.stringify(quote),
            headers: { "Content-Type": "application/json" }
        });
    } catch (error) {
        console.error("Failed to post quote:", error);
    }
}

// Function to Sync with Server (Fetch & Resolve Conflicts)
async function syncQuotes() {
    const syncStatus = document.getElementById("syncStatus");
    syncStatus.textContent = "Syncing with server...";

    const serverQuotes = await fetchQuotesFromServer();
    let conflictResolved = false;

    serverQuotes.forEach(serverQuote => {
        const exists = quotes.some(q => q.text === serverQuote.text);
        if (!exists) {
            quotes.push(serverQuote);
            conflictResolved = true;
        }
    });

    saveQuotesToLocalStorage();
    populateCategories();

    syncStatus.textContent = conflictResolved ? "Sync complete. New quotes added." : "No new quotes found. Everything is up-to-date.";
}

// Function to Add a New Quote
function addQuote() {
    const quoteText = document.getElementById("newQuoteText").value.trim();
    const quoteCategory = document.getElementById("newQuoteCategory").value.trim();

    if (quoteText === "" || quoteCategory === "") {
        alert("Please enter both quote text and category.");
        return;
    }

    const newQuote = { text: quoteText, category: quoteCategory };

    quotes.push(newQuote);
    saveQuotesToLocalStorage();
    populateCategories();

    postQuoteToServer(newQuote);

    document.getElementById("quoteDisplay").textContent = `"${quoteText}" - [${quoteCategory}]`;

    document.getElementById("newQuoteText").value = "";
    document.getElementById("newQuoteCategory").value = "";

    alert("Quote added successfully!");
}

// Periodic Syncing Every 30 Seconds
setInterval(syncQuotes, 30000);

// Event Listener for "Show New Quote" Button
document.getElementById("newQuote").addEventListener("click", () => {
    const selectedCategory = document.getElementById("categoryFilter").value;
    showRandomQuote(selectedCategory);
});

// Load Categories and Apply Last Filter on Page Load
populateCategories();
const API_URL = "https://jsonplaceholder.typicode.com/posts"; // Mock API

// Load Quotes from Local Storage or Use Default
let quotes = JSON.parse(localStorage.getItem("quotes")) || [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", category: "Motivation" },
    { text: "In the middle of every difficulty lies opportunity.", category: "Inspiration" },
    { text: "Do what you can, with what you have, where you are.", category: "Success" }
];

// Function to Save Quotes to Local Storage
function saveQuotesToLocalStorage() {
    localStorage.setItem("quotes", JSON.stringify(quotes));
}

// Function to Display Sync Notifications
function updateSyncStatus(message) {
    document.getElementById("syncStatus").textContent = message;
}

// Function to Fetch Quotes from Server
async function fetchQuotesFromServer() {
    try {
        const response = await fetch(API_URL);
        const serverData = await response.json();

        // Simulate fetching new quotes
        return serverData.slice(0, 5).map(post => ({
            text: post.title,
            category: "General"
        }));
    } catch (error) {
        updateSyncStatus("Error fetching quotes from server.");
        return [];
    }
}

// Function to Post a Quote to the Server
async function postQuoteToServer(quote) {
    try {
        await fetch(API_URL, {
            method: "POST",
            body: JSON.stringify(quote),
            headers: { "Content-Type": "application/json" }
        });
        updateSyncStatus("Quote added and synced with server!");
    } catch (error) {
        updateSyncStatus("Failed to sync new quote with server.");
    }
}

// Function to Sync with Server (Fetch & Resolve Conflicts)
async function syncQuotes() {
    updateSyncStatus("Syncing with server...");

    const serverQuotes = await fetchQuotesFromServer();
    let conflictResolved = false;

    serverQuotes.forEach(serverQuote => {
        if (!quotes.some(q => q.text === serverQuote.text)) {
            quotes.push(serverQuote);
            conflictResolved = true;
        }
    });

    saveQuotesToLocalStorage();

    if (conflictResolved) {
        updateSyncStatus("Quotes synced with server!");
    } else {
        updateSyncStatus("No new quotes found. Everything is up-to-date.");
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

    const newQuote = { text: quoteText, category: quoteCategory };

    quotes.push(newQuote);
    saveQuotesToLocalStorage();

    postQuoteToServer(newQuote);

    document.getElementById("quoteDisplay").textContent = `"${quoteText}" - [${quoteCategory}]`;

    document.getElementById("newQuoteText").value = "";
    document.getElementById("newQuoteCategory").value = "";

    alert("Quote added successfully!");
}

// Periodic Syncing Every 30 Seconds
setInterval(syncQuotes, 30000





