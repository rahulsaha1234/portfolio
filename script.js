// scroll section

window.onscroll = () => {
    // sticky header
    let header = document.querySelector('head')
    header.classList.toggle('sticky',Window.scrolly > 100);
}