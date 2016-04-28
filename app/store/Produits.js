Ext.define("borne.store.Produits", {
    extend: 'Ext.data.Store',
    alias: 'store.Produits',
    config: {
        model: 'borne.model.Produit',
        clearOnPageLoad: true,
        pageSize: 10,
        proxy: {
            type: 'ajax',
            useDefaultXhrHeader: false,
            url: borne.utils.Config.getStoreProduit(),
            method: 'POST',
            actionMethods: {
                create : 'POST',
                read   : 'POST', // by default GET
                update : 'POST',
                destroy: 'POST'
            },
            reader: {
                type: 'json',
                rootProperty: 'data'
            }
        }
        /*data:[ {"id":1,"name":"Re"},{"id":2,"name":"Cus"},{"id":3,"name":"Voit"},{"id":4,"name":"Cli"}]*/
    }
});
