let products = [];

$.getJSON( "https://jsonplaceholder.typicode.com/albums", function( data ) {
    albums = data;
    console.log(albums);

    let items = [];
    $.each( data, function( key, albums ) {
        let likes = Math.floor(Math.random() * 100);
        items.push( "<p id='" + key + "'>" + albums.title + " " + " " +
            albums.body + " Likes " +likes+ "<button>Load pictures</button>" + "</p>" );
    });

    $( "<ul/>", {
        "class": "my-new-list",
        html: items.join( "" )
    }).appendTo( "body" );

});

let photos = [];

$.getJSON( "https://jsonplaceholder.typicode.com/photos", function( data ) {
    photos = data;
    console.log(photos);

    let pho = [];
    $.each( data, function( key, photos ) {
        $("body").delegate("button", "click", function () {
            $(this).after( "<p id='" + key + "'>" + photos.title + " " + " " + photos.thumbnailUrl + "</p>"


        );
        })
    })
});