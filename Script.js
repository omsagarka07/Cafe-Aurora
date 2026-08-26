
document.querySelectorAll('.image-slider img').forEach(images => 
    {
        images.onclick = () =>
        {
            var src = images.getAttribute('src');
            document.querySelector('.main-home-image').src = src;
        };
           
    });

    document.addEventListener('DOMContentLoaded', () => 
    {
        console.log('The Moonlit Cafe home page is loaded and ready.');
    });