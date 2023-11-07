// filme.js (para filme.html)

document.addEventListener("DOMContentLoaded", function() {
    const filmeInfoSection = document.querySelector(".filme-info");

    const urlParams = new URLSearchParams(window.location.search);
    const filmeIndex = urlParams.get("filme");

    if (filmeIndex !== null) {
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
                titulo: "O Exorcista - O Devoto",
                genero: "Terror",
                duracao: "2h01",
                classificacao: "16",
                imgSrc: "/img/filmes_templates/o-exorcista-o-devoto_46537_home.jpg",
                linkTrailer: "https://www.youtube.com/watch?v=96RCGOaNuCM"
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
            },
            {
                titulo: "Jogos Vorazes – A Cantiga dos Pássaros e das Serpentes",
                genero: "Aventura",
                duracao: "2h45",
                classificacao: "14",
                imgSrc: "/img/filmes_templates/jogos-vorazes-a-cantiga-dos-passaros-e-das-serpentes_28791_home.jpg",
                linkTrailer: ""
              }
        ];

        if (filmes[filmeIndex]) {
            const filme = filmes[filmeIndex];
            document.getElementById("filme-titulo").textContent = filme.titulo;
            document.getElementById("filme-imagem").src = filme.imgSrc;
            document.getElementById("filme-genero").textContent = filme.genero;
            document.getElementById("filme-duracao").textContent = filme.duracao;

            // Adicione a classe CSS com base na classificação
            const classificacaoElement = document.getElementById("filme-classificacao");
            classificacaoElement.textContent = filme.classificacao;
            classificacaoElement.classList.add(`classificacao-${filme.classificacao}`);

            document.getElementById("filme-trailer").href = filme.linkTrailer;
        }
    }
});
