chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------

		// alert("start");
		// alert( $('body').html() );

		// #side


		var wamini = "WhatsApp Mini";
		var keyset = false;

		setInterval(function(){


		}, 1000)






		// setInterval(function(){
		// 	var title = $('title').text('WhatsApp Mini');
		// 	if(title != wamini) {
		// 		$('title').text(wamini);
		// 	}
		// 	$('title').text('WhatsApp Mini');
		// }, 1000);

		// $('.i5ly3').css('flex', 'none');
		// $('.i5ly3').css('width', '90px');



		$('body').keyup(function(e) {

			return;

			// console.log('body:' + event.which);

			// if ( event.which == 13 ) {
				// alert(window.innerWidth);

				// var creds = ' - Sent with ❤️ WhatsApp Mini';
				var creds = '-Sent with bit.do/WhatsApp-Mini';
				var input = $('#main [contenteditable="true"]');
				var value = input.text();
				var iscrd = value.substr(value.length - creds.length);

				console.log ('iscrd: ' + iscrd)

				if(iscrd == creds) {


				} else {
					// insert credits
					if(window.innerWidth < 650) {
						input.append("\n" + creds);
					}
				}

				// var cred =
				// $('[contenteditable="true"]').append(' - Sent with WhatsApp Mini');
			// }


			// var shift = event.shiftKey
			// // console.log(shift);
			//
			// // if ( shift == false ) {
			//
			// 	if ( event.which == 13 ) {
			//
			// 		console.log('-----');
			// 		console.log('shift: ' + shift);
			//
			// 		// event.preventDefault();
			// 		var cred = 'This extension was built by vimanatech.ch - ';
			//
			// 		$('[contenteditable="true"]').prepend(cred);
			//
			// 		// var shift = event.shiftKey
			// 		// console.log(shift);
			//
			// 	}
			//
			// // }

		});

	}
	}, 10);
});

function onkey() {

	console.log('ONKEY!!');
}


//
//
// function simulateKeyPress(character) {
//   jQuery.event.trigger({ type : 'keypress', which : character.charCodeAt(0) });
// }
//
// $(function() {
//
//   $('[contenteditable="true"]').keypress(function(e) {
// 	alert(e.which);
//   });
//
//   // simulateKeyPress("e");
// });

	// alert("end");
