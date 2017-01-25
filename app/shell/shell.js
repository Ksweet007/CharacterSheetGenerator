define(['plugins/router', 'durandal/app', 'durandal/events'], function (router, app, events) {
    var self = this;
    self.searchTerm = ko.observable();
    return {
        router: router,
        search: function() {
          router.activeItem().search(self.searchTerm());
          //app.showMessage('Search not yet implemented...');
        },
        activate: function () {
            router.map([
                { route: '', title:'Class List', moduleId: 'selectclass/selectclass', nav: true },
								{ route: 'race', title: 'Race List', moduleId: 'selectrace/selectrace', nav: true }

            ]).buildNavigationModel();

            return router.activate();
        }
    };
});
