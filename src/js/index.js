
const $ = (selector) => document.querySelector(selector);

function App() {
    // form tag prevent default setting
    $("#espresso-menu-form").addEventListener("submit", (e) => {
        e.preventDefault();
    })
    // fetch Menu input value
    $("#espresso-menu-name")
    .addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            const espressoMenuName =
            $("#espresso-menu-name").value;
            const menuItemTemplate = (espressoMenuName) => { 
                return `
                <li class="menu-list-item d-flex items-center py-2">
            <span class="w-100 pl-2 menu-name">${espressoMenuName}</span>
            <button
              type="button"
              class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
            >
              Edit
            </button>
            <button
              type="button"
              class="bg-gray-50 text-gray-500 text-sm menu-remove-button"
            >
              Delete
            </button>
          </li>`;
            };
            
            // <!-- beforebegin -->
            // <p>
            // <!-- afterbegin -->
            // foo
            // <!-- beforeend -->
            // </p>
            // <!-- afterend -->
            $("#espresso-menu-list").insertAdjacentHTML("beforeend", menuItemTemplate(espressoMenuName));

            // Menu count
            const menuCount = $("#espresso-menu-list").querySelectorAll("li").length
            $(".menu-count").innerText = `Quantity : ${menuCount}`;
            // reset
            $("#espresso-menu-name").value = "";
        }
        
    });
}

App();