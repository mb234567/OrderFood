const alertMsg = (message, type) => {
    const alertPlaceholder = document.getElementById('AlertPlaceholder'); 
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('');

    alertPlaceholder.append(wrapper); 
  }
    


Template.ADT.events ({
    'click .js-Added'(){
        console.log("Order Placed"); 
        alert("Added");
    }
})
