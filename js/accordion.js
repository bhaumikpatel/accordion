(function ($) {
    $.fn.accordion = function (options) {
        var settings = $.extend({}, { open: false, complete: null, autoStart: false, slideInterval: 3000, onHoverActive: false, duration: 'slow', easing: 'swing' }, options);
        return this.each(function () {
            var dts = $(this).children('dt');
            dts.click(onClick);
            dts.each(reset);
            if (settings.open) $(this).children('dt:first-child').click();
            if (settings.onHoverActive) dts.hover(onClick);

            function trackerObject() {
                this.value = null
            }
            var timerInstance = new trackerObject();
            // -------- Functions ---------------------
            jQuery.fn.findActiveSlide = function () {
                var i = 1;
                this.find('dt').each(function () {
                    if ($(this).hasClass('active')) {
                        activeID = i; // Active slide
                    }
                    i = i + 1;
                });
            };

            jQuery.fn.rotateSlides = function (slideInterval, timerInstance) {
                var accordianInstance = $(this);
                timerInstance.value = setTimeout(function () {
                    accordianInstance.rotateSlides(slideInterval, timerInstance);
                }, slideInterval);
                $(this).findActiveSlide();
                var totalSlides = $(this).find('dt').size();
                var activeSlide = activeID;
                var newSlide = activeSlide + 1;
                if (newSlide > totalSlides) newSlide = 1;
                $(this).find('dt:eq(' + (newSlide - 1) + ')').click(); // activate the new slide
            }

            if (settings.autoStart == true) {
                $(this).children('dt:first-child').addClass('active').click();
                var accordianInstance = $(this);
                var interval = parseInt(settings.slideInterval);
                timerInstance.value = setTimeout(function () {
                    accordianInstance.rotateSlides(interval, timerInstance);
                }, interval);
            }

            if ($.isFunction(settings.complete)) {
                settings.complete.call(this);
            }
        });

        function onClick() {
            $(this).siblings('dt').removeClass('active');
            $(this).siblings('dt').each(hide);
            $(this).addClass('active')
            $(this).next().stop(true, true).slideDown(settings.duration, settings.easing);
            return false;
        }

        function hide() {
            $(this).next().stop(true, true).slideUp(settings.duration, settings.easing);
        }

        function reset() {
            $(this).next().hide();
        }
    }
})(jQuery);