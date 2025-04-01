const tableBody = document.querySelector("#conteudotabela")

const buttonLogin = document.querySelector("#button-login")

buttonLogin.addEventListener("click", () =>{
    alert("Deslogando");
    window.location.href = "http://127.0.0.1:5500/index.html"
})

fetch("https://reqres.in/api/users")//usou o fetch para conectar com a lista de usuários e os dados dela foram armazenados no json
  .then(resp => resp.json())
  .then(resp => {
    console.log(resp.data);

    let respostaApi = resp.data;// atribui a resp.data para respApi e usa do laço de repetição para rodar toda a tabela 
    console.log(respostaApi.length)
    for(let i = 0; i < respostaApi.length; i++){
      console.log(respostaApi[i])
      const tableRow = document.createElement("tr");

      const tableDataImagem = document.createElement("td");//cria a parte do avatar da tabela e adciona com o append a tableDataImage
      const imagem = document.createElement("img");
      imagem.className = "imagemUsuario";
      imagem.src = respostaApi[i].avatar;
      tableDataImagem.appendChild(imagem);


      const tableDataNome = document.createElement("td"); // cria a coluna da tabela para nome e percorre toda a tabela preenchendo os nomes concatenados
      tableDataNome.innerHTML = `${respostaApi[i].first_name} ${respostaApi[i].last_name} `


      const tableDataEmail = document.createElement("td");//
      tableDataEmail.innerHTML = respostaApi[i].email;

      tableRow.appendChild(tableDataImagem);
      tableRow.appendChild(tableDataNome); //atribui tudo a tableRow e dps para a tableBody
      tableRow.appendChild(tableDataEmail);
      
      tableBody.appendChild(tableRow);
    } 
      
  })
  .catch(error => {
    console.error(error);
  })