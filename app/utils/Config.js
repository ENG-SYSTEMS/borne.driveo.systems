Ext.define('borne.utils.Config', {
    singleton : true,
    mixins: ['Ext.mixin.Observable'],
    alias : 'utils.Config',
    config : {

        storeProduit: 'http://app.ecluse.local/Boutique/Produit/getJson.json'
    },
    constructor: function(config) {
        this.initConfig(config);
        this.callParent([config]);
    }
});
