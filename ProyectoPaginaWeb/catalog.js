window.addEventListener("DOMContentLoaded" , () =>{
    const orderButton = document.querySelectorAll("button[data-order]");
    console.log(orderButton);
    orderButton.forEach(item =>{
        item.addEventListener('click', (event) =>{
            const button= event.currentTarget;
           // console.log(button);
            const conteiner = button.parentNode;
           // console.log(conteiner);
            let order = {
                title: conteiner.querySelector('.title').innerText,
                price: conteiner.querySelector('.price').innerText,
                id: button.getAttribute("data-order")
            }
            localStorage.setItem("order", JSON.stringify(order));
            const url = window.location.href.replace("catalog.html","order.html");
            window.location.href = url;

        })
    }); 
});

