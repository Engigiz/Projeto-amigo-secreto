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
}
 
