$('#first').click(() => {
    console.log('Yeah, you clicked me')
});

$('#second').click(() => {
    $('#first').text('Modified');
});

$('#third').click(() => {
    $('button').css('background', 'yellow');
})