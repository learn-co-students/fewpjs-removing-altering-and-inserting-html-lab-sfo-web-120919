// document.addEventListener('DOMContentLoaded', function() {
    

// })

function removeMain(){
    document.getElementById('main').remove();
}
removeMain();
const newHeader = document.createElement('h1');
newHeader.id = 'victory'
newHeader.textContent = 'DAVID is the champion'
document.querySelector('body').append(newHeader)