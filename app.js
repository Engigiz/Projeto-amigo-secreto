let amigos = [];

//Capturar o valor do campo de entrada: Utilize document.getElementById ou document.querySelector para obter o texto inserido pelo usuário.
function adicionarAmigo() {
    let nome = document.getElementById('amigo').value.trim();

    if (nome === '' ) {  //Validar a entrada: Implemente uma validação para garantir que o campo não esteja vazio.
        alert('Por favor, insira um nome.');  //Se estiver vazio, exiba um alerta com a mensagem de erro: "Por favor, insira um nome."
        return;
    } else {
        amigos.push(nome);  //Atualizar o array de amigos: Se o valor for válido, adicione-o ao array que armazena os nomes dos amigos usando o método .push().
    }
    document.getElementById('amigo').value = '';  //Limpar o campo de entrada: Após adicionar o nome, redefina o campo de texto para uma string vazia. 

    atualizarLista()
}
 
function atualizarLista() {

  const lista = document.getElementById('listaAmigos');  //document.querySelector() para selecionar a lista onde os amigos serão exibidos.


  lista.innerHTML = '';  //Limpar a lista existente: Defina lista.innerHTML = "" para garantir que não haja duplicados ao atualizar.

  for (let i = 0; i < amigos.length; i++) {  //Percorrer o array: Use um loop for para percorrer o array amigos e criar elementos de lista (<li>) para cada nome.
    const li = document.createElement('li');
    li.textContent = amigos[i];

    lista.appendChild(li); //Adicionar elementos à lista: Para cada amigo, crie um novo elemento de lista.
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {  //Validar que há amigos disponíveis: Antes de sortear, verificar se o array amigos não está vazio.
    alert("Adicione pelo menos um amigo antes de sortear!");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);  //Gerar um índice aleatório: Usar Math.random() e Math.floor() para selecionar um índice aleatório do array.

  const amigoSorteado = amigos[indiceAleatorio];  //Obter o nome sorteado: Utilizar o índice aleatório para acessar o nome correspondente no array.

  const resultado = document.getElementById("resultado");  //Mostrar o resultado: Atualizar o conteúdo do elemento de resultado usando document.getElementById() e innerHTML para exibir o amigo sorteado.
  resultado.innerHTML = `<li>O amigo sorteado é: <strong>${amigoSorteado}</strong></li>`;
}
