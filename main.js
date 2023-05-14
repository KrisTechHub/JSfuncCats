function showItems(category) {
    const itemList = document.getElementById("itemList");
    const items = itemList.getElementsByTagName("li");
    
    for (let i = 0; i < items.length; i++) {
      const itemCategory = items[i].getAttribute("data-category");
      
      if (itemCategory === category) {
        items[i].style.display = "block";
      } else {
        items[i].style.display = "none";
      }
    }
  }
  