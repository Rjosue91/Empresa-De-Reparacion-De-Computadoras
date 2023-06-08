jQuery(function ($) {

    "use strict";
    
    
  
    function hexToRgbA(hex, opacity) {
        var c;
        if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
            c = hex.substring(1).split('');
            if (c.length === 3) {
                c = [c[0], c[0], c[1], c[1], c[2], c[2]];
            }
            c = '0x' + c.join('');
            return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + opacity + ')';
        } else {
            return 'rgba("0,0,0,' + opacity + '")';
        }
    }
    



    

    
    

    if ($(".section-custom-bg").length) {

        $(".section-custom-bg").each(function () {

            var $this = $(this);

            var bg_img = "images/section_custom_bg.webp",
                    bg_color = "#000000",
                    bg_opacity = "0.5",
                    bg_color_2 = "#000000",
                    bg_opacity_2 = "0.8",
                    bg_position = "center center",
                    bg_repeat = "no-repeat",
                    bg_size = "cover",
                    bg_overflow = "hidden",
                    bg_attachment = "inherit";
                    
            if ($this.is('[data-bg_img]')) {
                bg_img = ', url("' + $this.data('bg_img') + '")';
            } else {
                bg_img = ', url("' + bg_img + '")';
            }

            

            if ($this.is('[data-bg_color]')) {
                bg_color = $this.data('bg_color');
            }

            if ($this.is('[data-bg_opacity]')) {
                bg_opacity = $this.data('bg_opacity');
            }

            var $color_overlay = hexToRgbA(bg_color, bg_opacity);

            $color_overlay_2 = $color_overlay;

            if ($this.is('[data-gardient]') && $this.data('gardient') === true) {

                if ($this.is('[data-bg_color_2]')) {
                    bg_color_2 = $this.data('bg_color_2');
                }

                if ($this.is('[data-bg_opacity_2]')) {
                    bg_opacity_2 = $this.data('bg_opacity_2');
                }

                var $color_overlay_2 = hexToRgbA(bg_color_2, bg_opacity_2);

            }

            

            var $bg_position = "";

            if ($this.is('[data-bg_position]')) {
                $bg_position += 'background-position: ' + $this.data('bg_position') + ';';
            } else {
                $bg_position += 'background-position: ' + bg_position + '; ';
            }

            

            var $bg_repeat = "";

            if ($this.is('[data-bg_repeat]')) {
                $bg_repeat += 'background-repeat: ' + $this.data('bg_repeat') + ';';
            } else {
                $bg_repeat += 'background-repeat: ' + bg_repeat + '; ';
            }

            

            var $bg_size = "";

            if ($this.is('[data-bg_size]')) {
                $bg_size += 'background-size: ' + $this.data('bg_size') + ';';
            } else {
                $bg_size += 'background-size: ' + bg_size + '; ';
            }

            

            var $bg_attachment = "";

            if ($this.is('[data-bg_attachment]')) {
                $bg_attachment += 'background-attachment: ' + $this.data('bg_attachment') + ';';
            } else {
                $bg_attachment += 'background-attachment: ' + bg_attachment + '; ';
            }

            

            var $bg_overflow = "";

            if ($this.is('[data-bg_overflow]')) {
                $bg_overflow += 'overflow: ' + $this.data('bg_overflow') + ';';
            } else {
                $bg_overflow += 'overflow: ' + bg_overflow + '; ';
            }

            $this.attr("style", "background:linear-gradient( " + $color_overlay + ",  " + $color_overlay_2 + " )" + bg_img + "; " + $bg_position + " " + $bg_repeat + " " + $bg_attachment + " " + $bg_size + " " + $bg_overflow + "");

        });

    }
    
    
    
     
    
    if ($(".gallery-carousel").length ) {
        
        var $gallery_carousel = $('.gallery-carousel');
        
        $gallery_carousel.each(function () {

            var $this = $(this);

            $this.owlCarousel({
                items: 1,
                loop: true,
                autoplay: false,
                autoplayHoverPause: true,
                dots: false,
                nav: false,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                responsive: {
                    0: {
                        items: 2,
                        nav: false
                    },
                    600: {
                        items: 3,
                        nav: false
                    },
                    1000: {
                        items: 1
                    }
                }
            });

        });
        
    }
    

    

    if ($('#map_canvas').length) {

        var map;

        $('#map_canvas').css({
            'height': '400px'
        });

        map = new GMaps({
            div: '#map_canvas',
            lat: 14.0624123,
            lng: -87.2230056
        });
        
        map.addMarker({
            lat: 14.0624123,
            lng: -87.2230056,
            title: 'Reparax'
        });

    }
    
    
    
       $(document).ready(function(){
            $('.venobox').venobox();   
        });  
  
    


});