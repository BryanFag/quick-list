// Seleciona elementos do DOM
const addButton = document.querySelector('.add');
const itemInput = document.querySelector('#item');
const itemsList = document.querySelector('.items ul');

// Função para adicionar um item
function addItem(event) {
  event.preventDefault(); // Previne o comportamento padrão do botão

  const itemText = itemInput.value.trim();

  if (itemText) {
    // Cria os elementos necessários
    const listItem = document.createElement('li');
    listItem.classList.add('checkclass');

    const container = document.createElement('div');
    container.classList.add('container');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('space-check');

    const textElement = document.createElement('p');
    textElement.textContent = itemText;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('dump');

    const deleteImage = document.createElement('img');
    deleteImage.src = '/assets/item/Frame.svg';

    // Estrutura o botão de exclusão
    deleteButton.appendChild(deleteImage);

    // Adiciona o evento de exclusão ao botão
    deleteButton.addEventListener('click', deleteItem);

    // Estrutura o item completo
    container.appendChild(checkbox);
    container.appendChild(textElement);
    container.appendChild(deleteButton);
    listItem.appendChild(container);

    // Adiciona o item na lista
    itemsList.appendChild(listItem);

    // Limpa o campo de entrada
    itemInput.value = '';
  } else {
    alert('Por favor, insira um item válido.');
  }
}

// Função para excluir um item
function deleteItem(event) {
  const listItem = event.target.closest('li'); // Encontra o item pai mais próximo (li)
  if (listItem) {
    listItem.remove(); // Remove o item da lista
  }
}

// Adiciona evento de clique ao botão de adicionar
addButton.addEventListener('click', addItem);

// Adiciona evento de clique aos botões de exclusão existentes
document.querySelectorAll('.dump').forEach((button) => {
  button.addEventListener('click', deleteItem);
});
