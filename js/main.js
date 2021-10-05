$(document).ready(function () {

    /*=====================================
        Page loader Out / Main page In
    =====================================*/
    $('.page-loader').fadeToggle(1500);
    setTimeout(function () {
        $('.main').addClass('scale');
    }, 0);
    setTimeout(function () {
        $('.main').removeClass('scale');
    }, 3000);

    /*=====================================
        Particles background
    =====================================*/
    // particlesJS.load('particles-js', 'js/particles.json', function() {
    // 	console.log('callback - particles.js config loaded');
    // });
    const partJson = {
        "particles": {
            "number": {
                "value": 70,
                "density": {
                    "enable": true,
                    "value_area": 510
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#2f0000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.1122388442605866,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 112.2388442605866,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1.2827296486924182
            },
            "move": {
                "enable": true,
                "speed": 3,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "bounce",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 1282.7296486924183,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "repulse"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    };

    const jsonUri = "data:text/plain;base64," + window.btoa(JSON.stringify(partJson));
    particlesJS.load('particles-js', jsonUri, function () {
        console.log('callback - particles.js config loaded');
    });
});



