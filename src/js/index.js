
const $ = (selector) => document.querySelector(selector);

function App() {

    // Menu list Edit button setting
    $("#espresso-menu-list").addEventListener("click", (e) => {
      
      if (e.target.classList.contains("menu-edit-button")) {
        const $menuName = e.target.closest("li").querySelector(".menu-name");
        const updatedMenuName = prompt("Please, edit menu name.", $menuName.innerText );
        $menuName.innerText = updatedMenuName;
      }

    });


    // form tag prevent default setting
    $("#espresso-menu-form").addEventListener("submit", (e) => {
        e.preventDefault();
    });

    const addMenuName = () => {
      // Preventing entry of empty values
      if ($("#espresso-menu-name").value === "") {
        
        alert("Please, enter menu name.");
        return;
      }
        
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

            // Menu name counting
            const menuCount = $("#espresso-menu-list").querySelectorAll("li").length
            $(".menu-count").innerText = `Quantity : ${menuCount}`;
            // Menu name reset
            $("#espresso-menu-name").value = "";
            
       
        
    };

    $("#espresso-menu-submit-button").addEventListener("click", () => {
      addMenuName();
    });

    // fetch Menu input value
    $("#espresso-menu-name")
    .addEventListener("keypress", (e) => {
      if (e.key !== "Enter") {
        return;
      }
      addMenuName();
    });
}

App();