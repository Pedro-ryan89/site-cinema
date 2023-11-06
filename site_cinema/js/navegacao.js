document.addEventListener("DOMContentLoaded", function() {
    // Obtém as imagens clicáveis
    const fnafImage = document.querySelector(".filmes a[href='fnaf.html']");
    const oppenheimerImage = document.querySelector(".filmes img[src='/img/filmes_templates/oppenheimer_39761_home.jpg']");
    const patrulhaCaninaImage = document.querySelector(".filmes img[src='/img/filmes_templates/patrulha-canina-um-filme-superpoderoso_43279_home.jpg']");
    const exorcistaImage = document.querySelector(".filmes img[src='/img/filmes_templates/o-exorcista-o-devoto_46537_home.jpg']");
  
    // Função para criar uma página de filme
    function createFilmePage(titulo, genero, duracao, classificacao, imgSrc, trailerLink) {
        const main = document.querySelector("main");
        main.innerHTML = ""; // Limpa o conteúdo atual do elemento main
    
        // Cria um link para o arquivo CSS compartilhado
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = "/css/style.css"; // Nome do arquivo CSS compartilhado
        document.head.appendChild(link);
    
        const h1 = document.createElement("h1");
        h1.textContent = titulo;
    
        const section = document.createElement("section");
        section.className = "filme";
        section.innerHTML = `
          <img src="${imgSrc}" alt="">
          <ul>
            <li>Gênero: <b>${genero}</b></li>
            <li>Duração: <b>${duracao}</b></li>
            <li>Classificação: <a class="classificacao-${classificacao}">${classificacao}</a></li>
            <li><a class="trailer-button btn-${classificacao}" href="${trailerLink}">Assistir ao Trailer</a></li>
          </ul>
    `;

    main.appendChild(h1);
    main.appendChild(section);
  }
  
  fnafImage.addEventListener("click", function(event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    createFilmePage(
      "Five Nights at Freddy's - O Pesadelo Sem Fim",
      "Terror",
      "01h49",
      "14",
      "/img/filmes_templates/five-nights-at-freddys-o-pesadelo-sem-fim_46543_home.jpg",
      "https://www.youtube.com/watch?v=FRffQncR1HQ" // Link para o trailer de Five Nights at Freddy's
    );
  });
  
    oppenheimerImage.addEventListener("mouseover", function() {
      oppenheimerImage.style.cursor = "pointer"; // Altera o cursor para indicar que é clicável
    });
  
    oppenheimerImage.addEventListener("click", function(event) {
      event.preventDefault(); // Impede o comportamento padrão do link
      createFilmePage(
        "Oppenheimer",
        "Drama",
        "3h00",
        "16",
        "/img/filmes_templates/oppenheimer_39761_home.jpg"
      );
    });
  
    patrulhaCaninaImage.addEventListener("mouseover", function() {
      patrulhaCaninaImage.style.cursor = "pointer"; // Altera o cursor para indicar que é clicável
    });
  
    patrulhaCaninaImage.addEventListener("click", function(event) {
      event.preventDefault(); // Impede o comportamento padrão do link
      createFilmePage(
        "Patrulha Canina: Um Filme Superpoderoso",
        "Animação",
        "1h35",
        "L",
        "/img/filmes_templates/patrulha-canina-um-filme-superpoderoso_43279_home.jpg"
      );
    });
  
    exorcistaImage.addEventListener("mouseover", function() {
      exorcistaImage.style.cursor = "pointer"; // Altera o cursor para indicar que é clicável
    });
  
    exorcistaImage.addEventListener("click", function(event) {
      event.preventDefault(); // Impede o comportamento padrão do link
      createFilmePage(
        "O Exorcista - O devoto",
        "Terror",
        "2h01",
        "16",
        "/img/filmes_templates/o-exorcista-o-devoto_46537_home.jpg"
      );
    });
  });
