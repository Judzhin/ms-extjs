Ext.onReady(function() {

    var handler = function(btn) {
        var activeItem = window.layout.activeItem,
        index = window.items.indexOf(activeItem),
        count = window.items.getCount(),
        indicatorEl = Ext.getCmp('indicator').el;

        if (btn.text == 'Forward' && index < count - 1) {
            index++;
            window.layout.setActiveItem(index);
            index++;
            indicatorEl.update(index + ' of ' + count);
        } else if (btn.text == 'Back' && index > 0) {
            window.layout.setActiveItem(index - 1);
            indicatorEl.update(index + ' of ' + count);
        }
    };

    var window = Ext.create('Ext.window.Window', {
        height : 200,
        width: 300,
        autoScroll: true,
        id: 'myWin',
        title: 'A Window with a Card layout',
        layout: 'card',
        activeItem: 0,
        defaults: {
            border: false
        },
        items: [{
            xtype: 'form',
            title: 'General info',
            bodyStyle: 'padding: 5px',
            defaultType: 'field',
            layout: {
                type: 'anchor'
            },
            defaults: {
                labelWidth: 50
            },
            items: [{
                fieldLabel: 'Name',
                anchor: '-10'
            },{
                xtype: 'numberfield',
                fieldLabel: 'Age',
                width: 100
            },{
                xtype: 'combo',
                fieldLabel: 'Location',
                anchor: '-10',
                store: [ 'Here', 'There', 'Anywhere' ]
            }]
        },{
            xtype: 'panel',
            title: 'Bio',
            layout: 'fit',
            items: {
                xtype: 'textarea',
                emptyText: 'Tell us about yourself'
            }
        },{
            title: 'Congratulations',
            html: 'Thank you for filling out our form!'
        }],
        dockedItems: [{
            xtype: 'toolbar',
            dock: 'bottom',
            items: [{
                text: 'Back',
                handler: handler
            }, '-', {
                text: 'Forward',
                handler: handler
            }, '->', {
                xtype: 'box',
                id: 'indicator',
                style: 'margin-right: 5px',
                autoEl: {
                    tag: 'div',
                    html: '1 of 3'
                }
            }]
        }]

    });

    window.show();
});