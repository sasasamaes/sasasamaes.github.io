$(function () {
	var $contenedor = $('#portafolio');
	var template =  '<div class="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">'+
                    	
                    '<div class="mdl-card__title">'+
                        '<h2 class="mdl-card__title-text">:name:</h2>'+
                    '</div>'+
                    '<div class="mdl-card__supporting-text">'+
                        '<p>:descripcion:</p>'+
                    '</div>'+
                    '<div class="mdl-card__actions mdl-card--border">'+
                        '<a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent" href=":enlace:">Ver</a>'+
                        '<a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent" href=":git:">GIT</a>'+
                    '</div>'+
                '</div>';
	function renderRepo(repos) {
		repos.forEach(function (repo) {
			var post = template
				.replace(':name:', repo.name)
				.replace(':enlace:', repo.homepage)
				.replace(':git:', repo.svn_url)
				.replace(':descripcion:', repo.descripcion);

			var $post = $(post);
			$contenedor.append($post.show())

		});
	}

	

    

    $.ajax('https://api.github.com/users/sasasamaes/repos')
    	.then(function (repos) {
    		renderRepo(repos)
    	})
})