$(document).ready(function(){

	$.getJSON('https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop&callback=?', function(data){
		console.log(data)
		var results = data.results
		var userSearch = $( '#searchInput').attr( "value" )

		$( '#userSearch').append(`"${userSearch}"`)
		$('#numResults').append(`(${data.count})`)


		

		document.getElementById("#resultsList")
		for(var i = 0; i<results.length; i ++){
			console.log(results[i].Images.url_570xN	)

			//41
			var title = results[i].title

			// Tennessee Whiskey Barrel and Ebony Woo...

			if( title.length > 41 ){
				title = title.slice(0,37) + "..."
			}

			if ( i < 24 ){
				$( '#resultsList' ).append(
					`<li class="resultThumbnail">
										
						<div class="resultThumbnailPic">
							<img class="thumbnailImage" src=${results[i].Images[0].url_570xN}>
						</div>

						<div class="resultThumbnailInfo">
							<p class="resultThumbnailTitle">${results[i].title}</p></br>

							<div class="resultInfoBottom">
								<p class="resultThumbnailSeller">${results[i].Shop.shop_name}</p>
								<p class="resultThumbnailPrice">$${results[i].price}</p>
							</div>
						</div>

					</li>`
				)
			}

		}
	})
		
})


