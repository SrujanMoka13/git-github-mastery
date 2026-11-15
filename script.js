const searchInput = document.getElementById("searchTask");

searchInput.addEventListener("input", 
    function(){
        const query = searchInput.value.toLowerCase();

        console.log("Searching for:", query);
    }
);