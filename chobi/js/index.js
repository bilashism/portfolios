document.addEventListener('DOMContentLoaded', () => {
    // make it as accordion for smaller screens
    if (window.innerWidth > 992) {

        document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem) {

            everyitem.addEventListener('mouseover', function(e) {

                let el_link = this.querySelector('a[data-bs-toggle]');

                if (el_link != null) {
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.add('show');
                    nextEl.classList.add('show');
                }

            });
            everyitem.addEventListener('mouseleave', function(e) {
                let el_link = this.querySelector('a[data-bs-toggle]');

                if (el_link != null) {
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.remove('show');
                    nextEl.classList.remove('show');
                }


            })
        });

    }
    // end if innerWidth
    document.querySelector('.main-nav-toggler-icon').addEventListener('click', event => {
        event.currentTarget.classList.toggle('opened');
    });

    lightGallery(document.getElementById('animated-thumbnails-gallery'), {
        selector: '.gallery-item',
        plugins: [
            lgZoom,
            lgAutoplay,
            lgComment,
            lgFullscreen,
            lgHash,
            lgPager,
            lgRotate,
            lgShare,
            lgThumbnail,
            lgVideo,
            // lgMediumZoom
        ],
        speed: 500,
        thumbnail: true
    });

    //#region - start of superLazy
    (function superLazy() {
        let targets = document.querySelectorAll('#xpCounter, #projectsCounter');
        targets.forEach(targetElem => targetElem.classList.add('sleeping'));
        if ('IntersectionObserver' in window) {
            (function lazyLoad() {
                let options = {
                    threshold: 0.15
                };
                const loadRes = target => {
                    const intersectObs = new IntersectionObserver((entries, observer) => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {

                                function counter(id, start, end, duration) {
                                    let obj = document.getElementById(id),
                                        current = start,
                                        range = end - start,
                                        increment = end > start ? 1 : -1,
                                        step = Math.abs(Math.floor(duration / range)),
                                        timer = setInterval(() => {
                                            current += increment;
                                            obj.textContent = current + '+';
                                            if (current == end) {
                                                clearInterval(timer);
                                            }
                                        }, step);
                                }
                                counter("xpCounter", 00, 15, 1500);
                                counter("projectsCounter", 000, 984, 1500);


                                // observer.disconnect();
                            }
                        });
                    }, options);
                    intersectObs.observe(target);
                };
                targets.forEach(loadRes);
            })();
        }
    })();
    //#endregion - end of superLazy 
    // start of - footer dynamic year 
    document.querySelector('.footer-year').textContent = `${ new Date().getFullYear() }`;
    // end of - footer dynamic year 
});