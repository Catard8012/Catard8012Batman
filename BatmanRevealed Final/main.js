var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
    document.querySelector(".header").style.height = window.innerHeight + "px";
})

setTimeout(function() {
	$('#demo-modal').modal();
}, 500);

$('.navbar a').on('click', function (e) {
    if (this.hash !== '') {
        e.preventDefault();
        const hash = this.hash;
        $('html, body')
        .animate({
            scrollTop: $(hash).offset().top
        },800);
    }
});
