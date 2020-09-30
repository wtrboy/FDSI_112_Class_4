
function fetchData() {
    /**
     * create an ajax get to /api/movies
     * travel the response array
     * display each movie on the HTML
     */

     $.ajax({
        type: 'GET',
        url: '/api/movies',
        success: function(res) {
            console.log(res.objects);
            for (let i =0; i< res.objects.length; i++) {
                displayMovie(res.objects[i]);
            }
        },
        error: function(details) {
            console.log("Error", details);
        }
     });
}

function displayMovie(movie) {
    let syntax = 
    `
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${movie.image_url}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <a href="/details/${movie.id}" class="btn btn-primary">View details</a>
        </div>
    </div>
    `;

    let container = $(".catalog-container");
    container.append(syntax);
}

function init() {
    console.log("catalog CSR page");

    fetchData();
}



window.onload = init;

