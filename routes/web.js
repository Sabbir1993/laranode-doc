const Route = use('laranode/Support/Facades/Route');

Route.get('/', 'DocsController@index').name('docs');