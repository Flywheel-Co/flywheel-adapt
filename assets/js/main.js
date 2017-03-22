console.log( 'Yup' );

var adapt = {

	navigation: {

		selector: '.main-navigation, .section-nav-title',
		items:    [],

		init: function() {
			var self = this;

			self.items = $('a', self.selector);

			self.setActive();
		},

		setActive: function() {
			var self       = this,
				currentUrl = window.location.pathname;

			$.each( self.items, function() {
				if( $(this).attr( 'href' ) == currentUrl ) {
					$(this).addClass('active');
				}
			});
		}
	}
};

/**
 * Fire Away
 */
$( adapt.navigation.init() );
