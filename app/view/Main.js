Ext.define('borne.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.dataview.List'
    ],
    config: {
        cls: 'borne-list-page',
        layout: {
            type: 'card',
            align: 'center'
        },
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'Nos produits',
                cls: 'header',
                items: [
                    {
                        xtype: 'button',
                        text: '',
                        iconCls: 'fa fa-navicon',
                        cls: 'open-socials',
                        handler: function(){
                            stock.utils.Config.toggleMenu();
                        }
                    },
                    {
                        xtype: 'spacer'
                    }/*,
                     {
                     xtype: 'button',
                     text: '',
                     iconCls: 'fa fa-share-alt',
                     cls: 'open-socials',
                     handler: function(){
                     if(Ext.Viewport.getMenus().right.isHidden()){
                     Ext.Viewport.showMenu('right');
                     }
                     else
                     {
                     Ext.Viewport.hideMenu('right');
                     }
                     }
                     }*/
                ]
            },
            {
                align: 'center',
                items:[
                    {
                        title: 'Produits',
                        iconCls: 'bookmarks',
                        style: 'overflow:hidden',
                        width: '100%',
                        action:'ProduitList',
                        height: '100%',
                        xtype: 'list',
                        store: 'Produits',
                        cls: 'histo-list',
                        /*itemTpl:  '<div class="histo-item">'+
                        '<img src="{vehicule_photo}" class="float-left valet-avatar" alt="img">'+
                        '<span class="valet-dist valet-near">{amount} crédits</span>'+
                        '<h2>{client}</h2>'+
                        '<span class="valet-hours">{vehicule_detail}</span>'+
                        '<span class="valet-hours">{app_time}</span>'+
                        '</div>',*/
                        grouped: false,
                        pinHeaders: false,
                        plugins: [
                            {
                                xclass: 'Ext.plugin.ListPaging',
                                autoPaging: true,
                                loadMoreText: 'Chargement...',
                                noMoreRecordsText: 'Pas plus d\'enregistrements'
                            },
                            {
                                xclass: 'Ext.plugin.PullRefresh',
                                pullText: 'Glissez vers le bas pour rafraichir.',
                                releaseText:'Relachez pour rafraichir.',
                                loadingText: 'Chargement en cours ...',
                                loadedText: 'Chargement reussi.',
                                lastUpdatedText: 'Mise à jour:  '
                            }
                        ]
                    }
                ]
            }
        ]
    }
});
