Ext.onReady(function() {

    Ext.create('Ext.container.Viewport', {
        padding: 5,
        layout: {
            type: 'border',
            animate: true
        },
        defaults: {
            frame: true,
            split: true
        },
        items: [{
            title: 'North Panel',
            region: 'north',
            height: 100,
            minHeight: 100,
            maxHeight: 150,
            collapsible: true
        },{
            title: 'South Panel',
            region: 'south',
            height: 75,
            split: false,
            margins: {
                top: 5
            }
        },{
            title: 'East Panel',
            region: 'east',
            width: 100,
            minWidth: 75,
            maxWidth: 150,
            collapsible: true
        },{
            title: 'West Panel',
            region: 'west',
            width: 100,
            collapsible: true
        // collapseMode: 'mini'
        },{
            xtype: 'container',
            region: 'center',
            layout: 'fit',
            id: 'centerRegion',
            items: [{
                id: 'centerPanel',
                title: 'Center Region',
                html: 'I am disposable',
                frame: true
            }]

        }]
    });


});
