Ext.onReady(function() {

    var childPnl1 = {
        frame: true,
        height: 50,
        html: 'Meu Primeiro Painel Filho',
        title: 'Primeiro Painel Filho'
    };

    var childPnl2 = {
        xtype: 'panel',
        width: 150,
        html: 'Segundo filho',
        title: 'Segundo Filho'
    };

    Ext.create('Ext.window.Window', {
        height: 300,
        width: 300,
        title: 'Janela com container layout',
        autoScroll: true,
        items: [
        childPnl1,
        childPnl2
        ],
        tbar: [{
            text: 'Adicionar filho',
            handler: function() {
                var window = this.ownerCt.ownerCt;
                var numItems = window.items.getCount() + 1;
                window.add({
                    title: 'Child number ' + numItems,
                    height: 60,
                    frame: true,
                    collapsible: true,
                    collapsed: false,
                    html: 'Outro painel filho'
                });
            }
        }]
    }).show();

});