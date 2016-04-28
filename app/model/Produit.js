Ext.define('borne.model.Produit', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: 'id',          type: 'int'},
            {name: 'price',        type: 'float'},
            {name: 'name',        type: 'string', defaultValue: 'Truc'},
            {name: 'description',        type: 'string', defaultValue: 'Description du produit'},
            {name: 'image',        type: 'string',     defaultValue: 'resources/images/default-avatar.jpg', convert: function (value,record) {
                var tt = new Date().getTime();
                return value ? value+'?_dc='+tt : 'resources/images/default-avatar.jpg';
            }}
        ]
    }
});
