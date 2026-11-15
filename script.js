const searchInput = document.getElementById("searchTask");

searchInput.addEventListener("input", 
    function(){
        const query = searchInput.value.toLowerCase();

        console.log("This is query after the search:", query);
    }
);