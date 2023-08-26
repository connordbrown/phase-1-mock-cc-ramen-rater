document.addEventListener("DOMContentLoaded", () => {
    fetchRamen();
})


function fetchRamen() {
    fetch("http://localhost:3000/ramens")
      .then(response => response.json())
      .then(data => {
        // destructuring assignment - first element in data array
        const [firstRamen] = data;
        displayRamenInfo(firstRamen.name, firstRamen.restaurant, firstRamen.image, firstRamen.rating, firstRamen.comment);
        displayRamenPics(data)}
        )
      .then(submitNewRamen())
}


function displayRamenPics(ramenData) {
    const ramenMenu = document.querySelector('#ramen-menu');
    ramenData.forEach(ramen => {
        const {name, restaurant, image, rating, comment} = ramen;
        const ramenPic = document.createElement('img');
            ramenPic.src = image;
            ramenPic.addEventListener('click', () => displayRamenInfo(name, restaurant, image, rating, comment))
        ramenMenu.appendChild(ramenPic);
    })
}


function displayRamenInfo(ramenName, ramenRestaurant, ramenImage, ramenRating, ramenComment) {
    const name = document.querySelector('.name');
        name.textContent = ramenName;
    const restaurant = document.querySelector('.restaurant');
        restaurant.textContent = ramenRestaurant;
    const picture = document.querySelector('.detail-image');
        picture.src = ramenImage;
        picture.alt = ramenName;
    const rating = document.querySelector('#rating-display');
        rating.textContent = ramenRating;
    const comment = document.querySelector('#comment-display');
        comment.textContent = ramenComment;
}


function submitNewRamen() {
    const ramenMenu = document.querySelector('#ramen-menu');

    const form = document.querySelector('#new-ramen')

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = event.target[0].value;
        const restaurant = event.target[1].value;
        const image = event.target[2].value;
        const rating = event.target[3].value;
        const comment = event.target[4].value;
        const img = document.createElement('img');
            img.src = image;
            img.addEventListener('click', () => displayRamenInfo(name, restaurant, image, rating, comment));
        ramenMenu.appendChild(img);

        form.reset();
    })

}