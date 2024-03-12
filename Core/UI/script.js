document.addEventListener("DOMContentLoaded", function(event) {
  // setTimeout(function() {
  //   document.querySelector('.loading-screen').style.display = 'none';
  // }, 5000);

  $('#show').on('click', function () {
    $('.center').show();
    $(this).hide();
  })

  $('#close').on('click', function () {
    $('.center').hide();
    $('#show').show();
  })

  let embeds = document.getElementsByTagName('chat-room');
  let classToHide = 'css-1ps3nxk';

  for (let i = 0; i < embeds.length; i++) {
    try {
      let embedsDocuments = embeds[i].contentDocument || embeds[i].contentWindow.document;
        if (embedsDocuments) {
          let elements = embedsDocuments.getElementsByClassName(classToHide);
          for (let j = 0; j < elements.length; j++) {
            elements[j].style.display = 'none';
          }
        }
    } catch (e) {
      console.error('Error accessing iframe content:', e);
    }
  }
});

let embeds = document.getElementsByTagName('chat-room');
let classToHide = 'css-1ps3nxk';

for (let i = 0; i < embeds.length; i++) {
  try {
    let embedsDocuments = embeds[i].contentDocument || embeds[i].contentWindow.document;
      if (embedsDocuments) {
        let elements = embedsDocuments.getElementsByClassName(classToHide);
        for (let j = 0; j < elements.length; j++) {
          elements[j].style.display = 'none';
        }
      }
  } catch (e) {
    console.error('Error accessing iframe content:', e);
  }
}