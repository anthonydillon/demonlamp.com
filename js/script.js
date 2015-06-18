$(document).ready(function() {
	var siteHeader = $('.site-header'),
		currentRow = false;

	function checkNav() {
		var scroll = $(document).scrollTop() + 60,
			buyRow = $('#buy').position().top,
			shippingRow = $('#shipping').position().top,
			galleryRow = $('#gallery').position().top,
			faqRow = $('#faq').position().top,
			contactRow = $('#contact').position().top,
			cRow = false;

		if (scroll > 150) {
			siteHeader.addClass('scrolled');
		} else {
			siteHeader.removeClass('scrolled');
		}

		if (scroll > contactRow) {
			cRow = 'contact';
		} else if (scroll > faqRow) {
			cRow = 'faq';
		} else if (scroll > galleryRow) {
			cRow = 'gallery';
		} else if (scroll > shippingRow) {
			cRow = 'shipping';
		} else if (scroll > buyRow) {
			cRow = 'buy';
		} else {
			cRow = false;
		}

		if(currentRow != cRow) {
			currentRow = cRow;
			$('.site-nav a').removeClass('active');
			if (cRow) {
				$('.site-nav a[href="#'+currentRow+'"]').addClass('active');
			}
		}
	}

	$(document).scroll(function() {
		checkNav();
	});

	checkNav();

	setTimeout(function() {
		checkNav();
	}, 500);

	$('.slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('.slider-right a').click(function(e) {
    	e.preventDefault();
    });

    $('.slider-left a').click(function(e) {
    	e.preventDefault();
    });

});
