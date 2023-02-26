const alertMsg = (message, type) => {
    const alertPlaceholder = document.getElementById('liveAlertPlaceholder'); 
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('');

    alertPlaceholder.append(wrapper); 
  } 
  Template.ON.events ({
    'click #liveAlertBtn'(){
        console.log("Order Placed");
        alertMsg('Your order Has Been Placed', 'success'); 
       }, 
       'click .js-delete1'() {
        $("#OModal").modal("hide");
       }
     

     })