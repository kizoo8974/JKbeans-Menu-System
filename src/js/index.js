
const $ = (selector) => document.querySelector(selector);

function App() {

    // counting menu name
    const updateMenuCount = () => {
      const menuCount = $("#espresso-menu-list").querySelectorAll("li").length
            $(".menu-count").innerText = `Quantity : ${menuCount}`;
    };

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
            
           
            $("#espresso-menu-list").insertAdjacentHTML("beforeend", menuItemTemplate(espressoMenuName));

            // Menu name counting
            updateMenuCount();
            // Menu name reset
            $("#espresso-menu-name").value = "";
            
    };

    const updateMenuName = (e) => {
        const $menuName = e.target.closest("li").querySelector(".menu-name");
        const updatedMenuName = prompt("Please, edit menu name.", $menuName.innerText );
        $menuName.innerText = updatedMenuName;
    }

    const removeMenuName = (e) => {
      if (confirm("Are you sure you want to remove it?")) {
        e.target.closest("li").remove();
        updateMenuCount();
      }
    }

    // Menu list Edit button setting
    $("#espresso-menu-list").addEventListener("click", (e) => {
      
      if (e.target.classList.contains("menu-edit-button")) {
        updateMenuName(e);
      }

      // Remove menu setting
      if (e.target.classList.contains("menu-remove-button")) {
        removeMenuName(e);
      }
    });

    // form tag prevent default setting
    $("#espresso-menu-form").addEventListener("submit", (e) => {
        e.preventDefault();
    });

    $("#espresso-menu-submit-button").addEventListener("click", addMenuName);

    // fetch Menu input value
    $("#espresso-menu-name").addEventListener("keypress", (e) => {
      if (e.key !== "Enter") {
        return;
      }
      addMenuName();
    });  

}

App();