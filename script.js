// Мокап объектов, эмулирующих данные из API
let items = [
    { id: 1, title: 'Task 1', description: 'Description 1' },
    { id: 2, title: 'Task 2', description: 'Description 2' },
    { id: 3, title: 'Task 3', description: 'Description 3' }
  ];
  
  function createItem() {
    let title = document.getElementById("inputTitle").value;
    let description = document.getElementById("inputDescription").value;
  
    if (title && description) {
      let newItem = {
        id: Date.now(),
        title: title,
        description: description
      };
  
      items.push(newItem);
      displayItems();
      clearInputs();
    } else {
      alert("Please fill in both fields");
    }
  }
  
  function displayItems() {
    let tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";
  
    items.forEach(item => {
      let row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.title}</td>
        <td>${item.description}</td>
        <td>
          <button onclick="editItem(${item.id})">Edit</button>
          <button onclick="deleteItem(${item.id})">Delete</button>
        </td>
      `;
      tableBody.appendChild(row);
    });
  }
  
  function editItem(id) {
    let selectedItem = items.find(item => item.id === id);
    let title = prompt("Enter new title:", selectedItem.title);
    let description = prompt("Enter new description:", selectedItem.description);
  
    if (title !== null && description !== null) {
      selectedItem.title = title;
      selectedItem.description = description;
      displayItems();
    }
  }
  
  function deleteItem(id) {
    items = items.filter(item => item.id !== id);
    displayItems();
  }
  
  function clearInputs() {
    document.getElementById("inputTitle").value = "";
    document.getElementById("inputDescription").value = "";
  }
  
  // Initial display
  displayItems();