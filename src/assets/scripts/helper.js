/* eslint-disable no-mixed-spaces-and-tabs */
export default {
	data() {
		return {
			
		}
	},
	methods: {
    getResponsiveState: function() {
			let windowWidth = window.innerWidth;

		// eslint-disable-next-line no-mixed-spaces-and-tabs
    	if(windowWidth > 1380)
			// eslint-disable-next-line no-mixed-spaces-and-tabs
    		return 5; // XXL
		// eslint-disable-next-line no-mixed-spaces-and-tabs
    	if(this.isBetween(windowWidth,1220,1380))
			// eslint-disable-next-line no-mixed-spaces-and-tabs
    		return 4; // XL
		// eslint-disable-next-line no-mixed-spaces-and-tabs
    	if(this.isBetween(windowWidth,1024,1220))
			// eslint-disable-next-line no-mixed-spaces-and-tabs
    		return 3; // L
		// eslint-disable-next-line no-mixed-spaces-and-tabs
    	if(this.isBetween(windowWidth,768,1024))
			// eslint-disable-next-line no-mixed-spaces-and-tabs
    		return 2; // M
		// eslint-disable-next-line no-mixed-spaces-and-tabs
    	if(this.isBetween(windowWidth,480,768))
			// eslint-disable-next-line no-mixed-spaces-and-tabs
    		return 1; // S
		// eslint-disable-next-line no-mixed-spaces-and-tabs
    	if(windowWidth < 480)
			// eslint-disable-next-line no-mixed-spaces-and-tabs
    		return 0; // XS
    },
    isBetween: function(num,from,to) {
		// eslint-disable-next-line no-mixed-spaces-and-tabs
    	return num>from&&num<=to;
		},
		isMobile: function() {
			// eslint-disable-next-line no-mixed-spaces-and-tabs
		  if(this.getResponsiveState() <= 1)

		    return true;

			// eslint-disable-next-line no-mixed-spaces-and-tabs
		  return false;
		},
		scrollTo: function(destination) {
			let target = document.querySelector("#" + destination);

			if(target){
				let scrollToPosition = target.getBoundingClientRect().top + window.pageYOffset;
		
				window.scrollTo({
					top: scrollToPosition, 
					behavior: "smooth"
				});
			}else{
				// eslint-disable-next-line no-unused-vars
				this.$router.push({path: '/home'}).catch((error) => {});
				setTimeout(() => {
          this.scrollTo(destination);
        },750);
			}
		}
  }
};
