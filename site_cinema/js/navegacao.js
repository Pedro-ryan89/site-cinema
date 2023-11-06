document.addEventListener("DOMContentLoaded", function() {
    const filmes = [
        {
            titulo: "Five Nights at Freddy's - O Pesadelo Sem Fim",
            genero: "Terror",
            duracao: "01h49",
            classificacao: "14",
            imgSrc: "/img/filmes_templates/five-nights-at-freddys-o-pesadelo-sem-fim_46543_home.jpg",
            linkTrailer: "https://www.youtube.com/watch?v=h2lVX71L_3A&t=1s"
        },
        {
            titulo: "Oppenheimer",
            genero: "Drama",
            duracao: "3h00",
            classificacao: "16",
            imgSrc: "/img/filmes_templates/oppenheimer_39761_home.jpg",
            linkTrailer: "https://www.youtube.com/watch?v=F3OxA9Cz17A"
        },
        {
            titulo: "Patrulha Canina: Um Filme Superpoderoso",
            genero: "Animação",
            duracao: "1h35",
            classificacao: "L",
            imgSrc: "/img/filmes_templates/patrulha-canina-um-filme-superpoderoso_43279_home.jpg",
            linkTrailer: "https://www.youtube.com/watch?v=GviDlxgG38M"
        },
        {
            titulo: "O Exorcista - O Devoto",
            genero: "Terror",
            duracao: "2h01",
            classificacao: "16",
            imgSrc: "/img/filmes_templates/o-exorcista-o-devoto_46537_home.jpg",
            linkTrailer: "https://www.youtube.com/watch?v=96RCGOaNuCM"
        },
        {
            titulo: "Trolls 3 - Juntos Novamente",
            genero: "Animação",
            duracao: "1h32",
            classificacao: "L",
            imgSrc: "/img/filmes_templates/trolls-3-juntos-novamente_40025_home.jpg",
            linkTrailer: "https://youtu.be/E1pkNoojLus"
        },
        {
            titulo: "Mussum, o filmis",
            genero: "Comédia",
            duracao: "2h02",
            classificacao: "12",
            imgSrc: "/img/filmes_templates/mussum-o-filmis_46539_home.jpg",
            linkTrailer: ""
        },
        {
          titulo: "As Marvels",
          genero: "Ação",
          duracao: "1h45",
          classificacao: "L",
          imgSrc: "/img/filmes_templates/as-marvels_42247_home.jpg",
          linkTrailer: ""
        }
    ];

    const main = document.querySelector("main");

    function criarPaginaFilme(filme) {
        main.innerHTML = "";

        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = "/css/style.css";
        document.head.appendChild(link);

        const h1 = document.createElement("h1");
        h1.textContent = filme.titulo;

        const section = document.createElement("section");
        section.className = "filme";

        section.innerHTML = `
          <img src="${filme.imgSrc}" alt="">
          <ul>
            <li>Gênero: <b>${filme.genero}</b></li>
            <li>Duração: <b>${filme.duracao}</b></li>
            <li>Classificação: <a class="classificacao-${filme.classificacao}">${filme.classificacao}</a></li>
            <li><a class="trailer-button btn-${filme.classificacao}" href="${filme.linkTrailer}" target="_blank">Assistir ao Trailer</a></li>
          </ul>
        `;

        main.appendChild(h1);
        main.appendChild(section);
    }

    // Adicione eventos semelhantes para as outras imagens de filmes
    for (let i = 0; i < filmes.length; i++) {
        const imagem = document.querySelector(`.filmes img[src='${filmes[i].imgSrc}']`);
        imagem.addEventListener("mouseover", function() {
            imagem.style.cursor = "pointer";
        });

        imagem.addEventListener("click", function(event) {
            const carrossel = document.querySelector(".carrossel");
            carrossel.style.display = "none";
            event.preventDefault();
            criarPaginaFilme(filmes[i]);
        });
    }
});
