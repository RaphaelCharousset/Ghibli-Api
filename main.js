let url = "https://ghibliapi.herokuapp.com/films";
let container = document.getElementById('container');
let select = document.getElementById('ghibli-movies');

fetch(url)
.then(response => response.json())
.then(data => {
    data.forEach(e => {

        //create option in select
        let option = document.createElement('option');

        //create DOM
        let newArticle = document.createElement('article');
        container.appendChild(newArticle);

        let h3 = document.createElement('h3');
        h3.classList.add('eng-title');

        let articleHeader = document.createElement('div');
        articleHeader.classList.add('article-header');

        let h3Span = document.createElement('span');
        h3Span.classList.add('jap-title');

        let infos = document.createElement('div');
        infos.classList.add('infos');
            let director = document.createElement('span');
            infos.appendChild(director);
            director.classList.add('director');
            let releaseDate = document.createElement('span');
            infos.appendChild(releaseDate);
            releaseDate.classList.add('release-date');
            let runningTime = document.createElement('span');
            infos.appendChild(runningTime);
            runningTime.classList.add('running-time');

        let description = document.createElement('p');
        description.classList.add('description');

        newArticle.appendChild(h3);
        newArticle.appendChild(articleHeader);
        newArticle.appendChild(h3Span);
        newArticle.appendChild(infos);
        newArticle.appendChild(description);

        //DOM content
        h3.innerText = e.title;
        h3Span.innerHTML = `${e.original_title_romanised} </br> ${e.original_title}`;
        director.innerText = e.director;
        releaseDate.innerText = e.release_date;
        runningTime.innerText = e.running_time + "min";
        description.innerText = e.description;

        //articleHeader bckImg
            //in array I stock link to background-img and trailer
        let myData = [
            {
                title : "Castle in the Sky",
                img : "https://tse2.mm.bing.net/th?id=OIP.2VyCqyFgU_3oLZTElRTRogHaK9&pid=Api",
                trailer : "https://www.youtube.com/embed/cos8fmZraIE"
            },
            {
                title : "Grave of the Fireflies",
                img : "https://fanart.tv/fanart/movies/12477/movieposter/grave-of-the-fireflies-54d45663d8fcb.jpg",
                trailer : "https://www.youtube.com/embed/4vPeTSRd580"
            },
            {
                title : "My Neighbor Totoro",
                img : "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781421561226/my-neighbor-totoro-picture-book-new-edition-9781421561226_hr.jpg",
                trailer : "https://youtube.com/embed/92a7Hj0ijLs"
            },
            {
                title : "Kiki's Delivery Service",
                img : "https://tse3.mm.bing.net/th?id=OIP.GYqfGUeUcVeqluNixaDV-wHaLH&pid=Api",
                trailer : "https://youtube.com/embed/4bG17OYs-GA"
            },
            {
                title : "Only Yesterday",
                img : "https://tse1.mm.bing.net/th?id=OIP.cNlZ2YBLO7xc5Zf48oK99wHaLH&pid=Api",
                trailer : "https://youtube.com/embed/x0ZrjocXVJ4"
            },
            {
                title : "Porco Rosso",
                img : "https://tse3.mm.bing.net/th?id=OIP.JIK4L9VKlNJDPkdyUG0tOwHaKp&pid=Api",
                trailer : "https://youtube.com/embed/awEC-aLDzjs"
            },
            {
                title : "Pom Poko",
                img : "https://tse1.mm.bing.net/th?id=OIP.p681FJUnbuR0mKe2BAndHwAAAA&pid=Api",
                trailer : "https://youtube.com/embed/_7cowIHjCD4"
            },
            {
                title : "Whisper of the Heart",
                img : "https://tse3.mm.bing.net/th?id=OIP.gdYNnbwp-yRo2DjqBWTP6gHaLH&pid=Api",
                trailer : "https://youtube.com/embed/0pVkiod6V0U"
            },
            {
                title : "Princess Mononoke",
                img : "https://tse1.mm.bing.net/th?id=OIP.d1WRCJP6BBu8KI4dw-LRoQHaJ5&pid=Api",
                trailer : "https://youtube.com/embed/4OiMOHRDs14"
            },
            {
                title : "My Neighbors the Yamadas",
                img : "https://tse1.mm.bing.net/th?id=OIP.ylFTucG-UUAYF6nc0uZCrwHaJ2&pid=Api",
                tailer : "https://youtube.com/embed/1C9ujuCPlnY"
            },
            {
                title : "Spirited Away",
                img : "https://tse2.mm.bing.net/th?id=OIP.JwhQ1ILrBzV7E0eSMpts0AHaKX&pid=Api",
                trailer : "https://youtube.com/embed/ByXuk9QqQkk"
            },
            {
                title : "The Cat Returns",
                img : "https://tse4.mm.bing.net/th?id=OIP.xzS1PeFriaaYcN_5xZ4tnQHaKj&pid=Api",
                trailer : "https://youtube.com/embed/Gp-H_YOcYTM"
            },
            {
                title : "Howl's Moving Castle",
                img : "https://tse1.mm.bing.net/th?id=OIP.a6Yr_bBTuJMUwINpbW_5rAHaLc&pid=Api",
                trailer : "https://youtu.be/iwROgK94zcM"
            },
            {
                title : "Tales from Earthsea",
                img : "https://tse1.mm.bing.net/th?id=OIP.P2lIt2uvzttdFMmqc3c9PwHaKj&pid=Api",
                trailer : "https://youtube.com/embed/8hxYx3Jq3kI?t=3"
            },
            {
                title : "Ponyo",
                img : "https://tse3.mm.bing.net/th?id=OIP.jg7XsfK-1g7QaYXTV92ZXAHaLH&pid=Api",
                trailer : "https://youtube.com/embed/CsR3KVgBzSM"
            },
            {
                title : "Arrietty",
                img : "https://tse3.mm.bing.net/th?id=OIP.qLIwaZ8YHib2J0P4fqvb4gHaKj&pid=Api",
                trailer : "https://youtube.com/embed/9CtIXPhPo0g"
            },
            {
                title : "From Up on Poppy Hill",
                img : "https://tse1.mm.bing.net/th?id=OIP.JvJbekBKegvkq2hOOPI6yQAAAA&pid=Api",
                trailer: "https://youtube.com/embed/9-rhgSCAqDU"
            },
            {
                title : "The Wind Rises",
                img : "https://tse1.mm.bing.net/th?id=OIP.MbWv7x2Rz4JOdxmg1I24aAHaKj&pid=Api",
                trailer : "https://youtube.com/embed/2QFBZgAZx7g"
            },
            {
                title : "The Tale of the Princess Kaguya",
                img : "https://tse3.mm.bing.net/th?id=OIP.wP-wyyOJt_6A3gGW53IA8QHaLH&pid=Api",
                trailer : "https://youtube.com/embed/W71mtorCZDw"
            },
            {
                title : "When Marnie Was There",
                img : "https://tse1.mm.bing.net/th?id=OIP.SHlBn9lrgVgAY9N8w2kkoAHaK0&pid=Api",
                trailer : "https://youtube.com/embed/jjmrxqcQdYg"
            },
            {
                title : "The Red Turtle",
                img : "https://tse3.mm.bing.net/th?id=OIP.Yfv_EJvv-_p02Ib5_8lYeAHaLH&pid=Api",
                trailer : "https://youtube.com/embed/Sw7BggqBpTk"
            },
        ]

        myData.forEach( elt => {
            if (elt.title == e.title) {
                articleHeader.style.backgroundImage = `url(${elt.img})`;
            }
        });
        
        //sur le click d'un article, ouvrir en grand pour plus d'info   
        let articles = document.querySelectorAll("#container article");
        for (const article of articles) {
            article.addEventListener('click', () => {
                let section = document.querySelector('.section');
                section.style.right = "0";
                container.style.width = "60%";
                container.style.transform = "translateX(-27%)";
                section.querySelector('.eng-title').innerText = article.querySelector('.eng-title').innerText;

                // iframe src and content               
                myData.forEach( elt => {
                    if (elt.title == article.firstElementChild.textContent) {
                        section.querySelector('#frame').setAttribute('src', elt.trailer)
                    }
                })
                
                section.querySelector('.jap-title').innerText = article.querySelector('.jap-title').innerText;
                section.querySelector('.director').innerText = article.querySelector('.director').innerText;
                section.querySelector('.release-date').innerText = article.querySelector('.release-date').innerText;
                section.querySelector('.running-time').innerText = article.querySelector('.running-time').innerText;
                section.querySelector('.description').innerText = article.querySelector('.description').innerText;
            })
        };
    });
});


// listener pour fermer la section
let closeDiv = document.querySelector('.section .close');
closeDiv.addEventListener('click', () => {
    let section = document.querySelector('.section');

    section.style.right = "-100vw";
    container.style.width = "90%";
    container.style.transform = "none";
});

//Sort per

let sortPerNumber = (inputStyle, CSSClass) => {
    if (inputStyle.firstElementChild.checked) {
        let articles = container.getElementsByTagName('article');
        for (let i = 0; i < articles.length; i++) {
            const article = articles[i];
            if (article.nextElementSibling != null) {
                if (parseInt(article.querySelector(`.infos .${CSSClass}`).textContent) > parseInt(article.nextElementSibling.querySelector(`.infos .${CSSClass}`).textContent) ) {
                    container.insertBefore(article.nextElementSibling, article);
                    i = -1;
                };
            };
        };
    };
}


let releaseIn = document.getElementById('release-in').parentElement;
releaseIn.addEventListener('click', () => {
    sortPerNumber(releaseIn, "release-date");
});

let alphabetical = document.getElementById('alphabetical').parentElement;
alphabetical.addEventListener('click', () => {
    if (alphabetical.firstElementChild.checked) {
        let articles = container.getElementsByTagName('article');
        for (let i = 0; i < articles.length; i++) {

            let letter = 0;
            let orderByLetter = () => {
                if (article.querySelector(`.eng-title`).textContent.split(' ')[letter] > article.nextElementSibling.querySelector(`.eng-title`).textContent.split(' ')[letter]) {
                    container.insertBefore(article.nextElementSibling, article);
                    i = -1;
                } else if (article.querySelector(`.eng-title`).textContent.split(' ')[letter] === article.nextElementSibling.querySelector(`.eng-title`).textContent.split(' ')[letter]) {
                    letter++;
                    orderByLetter();
                };
            };

            const article = articles[i];
            if (article.nextElementSibling != null) {
                orderByLetter();
            }
        };
    };
});

let duration = document.getElementById('duration').parentElement;
duration.addEventListener('click', () => {
    sortPerNumber(duration, "running-time");
});




//convertir duration en heures