const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

function addItem(e) {
  e.preventDefault();
  
  const newItem = itemInput.value;
  
  // Validate input
  if (newItem === '') {
    alert('Please add an item');
    return;
  }

  // Create list item
  const addToList = document.createElement('li');
  addToList.appendChild(document.createTextNode(newItem));

  const button = createButton('remove-item btn-link text-red')
  addToList.appendChild(button);
  itemList.appendChild(addToList);

  itemInput.value = '';
}

function createButton(btnClass) {
  const button = document.createElement('button');
  button.className = btnClass;

  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);
  return button;
}

function createIcon(iconClass) {
  const icon = document.createElement('i');
  icon.className = iconClass;
  return icon;
}

// Event listeners
itemForm.addEventListener('submit', addItem);