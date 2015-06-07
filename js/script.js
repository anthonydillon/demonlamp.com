$(document).ready(function() {
	var siteHeader = $('.site-header'),
		buyRow = $('#buy').position().top,
		productInfoRow = $('#product-info').position().top,
		shippingRow = $('#shipping').position().top,
		galleryRow = $('#gallery').position().top,
		faqRow = $('#faq').position().top,
		contactRow = $('#contact').position().top,
		currentRow = false;

	console.log(contactRow);

	function checkNav() {
		var scroll = $(document).scrollTop() + 50,
			cRow = false;

		if (scroll > 100) {
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
		} else if (scroll > productInfoRow) {
			cRow = 'product-info';
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

});