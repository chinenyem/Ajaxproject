
var posttmpNote = [
"<%_.each(notes, function (element,index, list) {%>",
"<article data-messageId=\" <%element._id %> \" class=\"post\">",
      "<p><%= element.content %></p>",

       "<form class=\"editForm\" action=\">",
      "<img src = \'images/xmark.png\' class=\'xmark\'>",
      "<img src=\'images/checkmark2.png\' class=\'check\'>",
      "<input type=\"text\" class=\"editNotes\" name=\"title\" value=\"<%= element.content %>\">",
      "<button class=\"noteSubmit\">Submit</button>",
      "</form>",
    "</article>",
        "<% }); %>"
    ].join("\n");
