$(document).ready(function () {
  myNotes.init();
});


var myNotes = {
  init: function () {
    this.initStyling();
    this.initEvents();
  },
  initStyling:function(){
    myNotes.getMessage();
  },
  
  initEvents:function(){
    $('form').on('button', function (event){
      event.preventDefault();
      var newMessage ={
        content:$('#messageContent').val()
      };


      myNotes.createMessage(newMessage);
      
    });


$(".alltextcontainer").on("click", ".noteSubmit", function (event){
	event.preventDefault();
	var messageId =$(this).closest("article").data("messageId");
	var updatedMessage={
		content:$(this).closest("article").find(".editNotes").val()
	};
	myNotes.updateMessage(messageId, updatedMessage);
})

  },









render: function (template, data, $el) {
    var markup = _.template(template, data);

    $el.html(markup);
},
url:"http://tiy-fee-rest.herokuapp.com/collections/chinenyem",
getMessage: function(){

  $.ajax({
    url: myNotes.url,
    type: 'GET',
    success:function(response){
      var notes=window.notes = response;

      myNotes.render(posttmpNote, notes, $("section"));
    }

  });

},

  createMessage:function(newMessage){
    $.ajax({
      url:myNotes.url,
      data:newMessage,
      type:'POST',
      success:function(response){
        myNotes.getMessage();
      }

    });
  },

  deleteMessage:function(messageId){
    $.ajax({
      url:myNotes.url + '/' + messageId,
      type:'DELETE',
      success:function(){
         myNotes.getMessage();
      }
    });
  },

  updateMessage:function (messageId, updatedMessage){
    $.ajax({
      url: myNotes.url + '/' + messageId,
      type:"PUT",
      data: updatedMessage,
      success:function(response){
        console.log(response);
          myNotes.getMessage();

      }
    });
  }



};






