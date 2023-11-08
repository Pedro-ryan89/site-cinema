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

            const classificacaoElement = document.getElementById("filme-classificacao");
            classificacaoElement.textContent = filme.classificacao;
            classificacaoElement.classList.add(`classificacao-${filme.classificacao}`);

            document.getElementById("filme-trailer").href = filme.linkTrailer;

            const filmePersonalizado = {
                "0": {
                    dia01: {
                        h4: "Sala 01",
                        h5: "Dublado"
                    },
                    dia02: {
                        h4: "Sala 02",
                        h5: "Legendado"
                    },
                    dia03: {
                        h4: "Sala 03",
                        h5: "Dublado"
                    },
                    dia04: {
                        h4: "Sala 04",
                        h5: "Legendado"
                    },
                    dia05: {
                        h4: "Sala 04",
                        h5: "Legendado"
                    },
                    dia06: {
                        h4: "Sala 04",
                        h5: "Legendado"
                    }
                },
                "1": {
                    dia01: {
                        h4: "Sala 01",
                        h5: "Dublado"
                    },
                    dia02: {
                        h4: "Sala 02",
                        h5: "Legendado"
                    },
                    dia03: {
                        h4: "Sala 03",
                        h5: "Dublado"
                    },
                    dia04: {
                        h4: "Sala 04",
                        h5: "Legendado"
                    },
                    dia05: {
                        h4: "Sala 04",
                        h5: "Legendado"
                    },
                    dia06: {
                        h4: "Sala 04",
                        h5: "Legendado"
                    }
                },
                // ... (mantenha as outras configurações de filmes personalizadas)
            };

            if (filmePersonalizado.hasOwnProperty(filmeIndex)) {
                const infoPersonalizada = filmePersonalizado[filmeIndex];

                for (let i = 1; i <= 6; i++) {
                    const diaInfo = infoPersonalizada[`dia0${i}`];
                    const diaHorariosSection = document.getElementById(`sala-0${i}-ingressos`);

                    diaHorariosSection.querySelector("h4").textContent = diaInfo.h4;
                    diaHorariosSection.querySelector("h5").textContent = diaInfo.h5;
                }
            }

            const horarios = {
                "0": {
                    dia01: ["15:20", "17:40", "20:10"],
                    dia02: ["14:30", "16:50", "19:20"],
                    dia03: ["16:00", "18:20"],
                    dia04: ["13:45", "15:45", "19:45"],
                    dia05: ["13:45", "16:45"],
                    dia06: ["13:45", "16:45"]
                },
                "1": {
                    dia01: ["17:30", "20:00"],
                    dia02: ["16:45", "19:15"],
                    dia03: ["15:00", "17:30"],
                    dia04: ["14:15", "16:15", "18:45"],
                    dia05: ["13:45", "19:45"],
                    dia06: ["13:45", "19:45"]
                },
                // ... (mantenha as outras configurações de horários)
            };

            if (horarios.hasOwnProperty(filmeIndex)) {
                for (let i = 1; i <= 6; i++) {
                    const horarioButtons = horarios[filmeIndex][`dia0${i}`];
                    const diaHorariosSection = document.getElementById(`sala-0${i}-ingressos`);
                    const horariosSection = diaHorariosSection.querySelector(".horarios");

                    horarioButtons.forEach(horario => {
                        const button = document.createElement("button");
                        button.textContent = horario;
                        horariosSection.appendChild(button);
                    });
                }
            }
        }
    }

    const buttons = document.querySelectorAll('.botoes-dias button');
    const ingressosSections = document.querySelectorAll('.ingressos');

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => {
                btn.classList.remove('ativo');
            });

            button.classList.add('ativo');

            ingressosSections.forEach((section, i) => {
                if (i === index) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });
        });
    });
});
