define(['plugins/router', 'durandal/app'], function (router, app,vemod) {
    var self = this;
    self.searchTerm = ko.observable();

    return {
        router: router,
        search: function(data,event) {

            if(router.activeItem() && router.activeItem().search){
                var searchResults = router.activeItem().search(self.searchTerm());
            }
            else{
                app.showMessage('Search not implemented for this view.');
            }

        },
        activate: function () {
            router.map([
                { route: '', title:'Class List', moduleId: 'selectclass/selectclass', nav: true },
				{ route: 'SelectRace', title: 'Race List', moduleId: 'selectrace/selectrace', nav: true },
                { route: 'classdetails/:id', title: 'Class Details', moduleId: 'classdetails/classdetails', hash:'#classdetails', nav: false }

            ]).buildNavigationModel();

            return router.activate();
        }
    };
});
