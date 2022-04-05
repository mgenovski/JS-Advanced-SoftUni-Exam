window.addEventListener('load', solve);

function solve() {
    const addButton = document.getElementById('add-btn');
    addButton.addEventListener('click', addSong);

    function addSong(e) {
        e.preventDefault();

        const genre = document.getElementById('genre');
        const name = document.getElementById('name');
        const author = document.getElementById('author');
        const date = document.getElementById('date');

        if (genre.value && name.value && author.value && date.value) {

            const genreValue = genre.value;
            const nameValue = name.value;
            const authorValue = author.value;
            const dateValue = date.value;

            const allHits = document.querySelector('.all-hits-container');
            const div = document.createElement('div');
            div.className = 'hits-info';
            div.innerHTML = `<img src="./static/img/img.png">
                <h2>Genre: ${genre.value}</h2><h2>Name: ${name.value}</h2><h2>Author: ${author.value}</h2><h3>Date: ${date.value}</h3>`;

            const saveButton = document.createElement('button');
            saveButton.className = 'save-btn';
            saveButton.textContent = 'Save song';

            const likeButton = document.createElement('button');
            likeButton.className = 'like-btn';
            likeButton.textContent = 'Like song';

            const deleteButton = document.createElement('button');
            deleteButton.className = 'delete-btn';
            deleteButton.textContent = 'Delete';

            div.appendChild(saveButton);
            div.appendChild(likeButton);
            div.appendChild(deleteButton);

            allHits.appendChild(div);

            genre.value = '';
            name.value = '';
            author.value = '';
            date.value = '';

            saveButton.addEventListener('click', saveSong);
            likeButton.addEventListener('click', likeSong);
            deleteButton.addEventListener('click', deleteSong);

            function saveSong(e) {
                const savedSongs = document.querySelector('.saved-container');


                const div2 = document.createElement('div');
                div2.className = 'hits-info';
                div2.innerHTML = `<img src="./static/img/img.png">
                <h2>Genre: ${genreValue}</h2><h2>Name: ${nameValue}</h2><h2>Author: ${authorValue}</h2><h3>Date: ${dateValue}</h3>`;

                const deleteButton2 = document.createElement('button');
                deleteButton2.className = 'delete-btn';
                deleteButton2.textContent = 'Delete';

                div2.appendChild(deleteButton2);

                savedSongs.appendChild(div2);

                deleteButton2.addEventListener('click', deleteSong);

                e.target.parentElement.remove();
            }
        }
    }

    function deleteSong(e) {
        e.target.parentElement.remove();
    }

    function likeSong(e) {
        const likes = document.querySelector('.likes p');

        let [foo, oldLikes] = likes.textContent.split(': ');
        const newLikes = Number(oldLikes) + 1;
        likes.textContent = 'Total Likes: ' + newLikes;

        e.target.setAttribute("disabled", "");
    }
}