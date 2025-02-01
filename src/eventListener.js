document.getElementById('visualize-algorithms').addEventListener('click', function() {
    window.location.href = 'https://ulrick1432.github.io/visualize_algorithms/';
});

document.querySelector('.menu-open').addEventListener('click', () => {
    document.querySelector('.sidebar').removeAttribute('hidden');
    document.querySelector('.menu-open').setAttribute('hidden', '');
})

document.querySelector('.menu-close').addEventListener('click', () => {
    document.querySelector('.sidebar').setAttribute('hidden', '');
    document.querySelector('.menu-open').removeAttribute('hidden');
})