var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'Stamen Terrain',
    'type': 'base',
    source: new ol.source.Stamen({
        layer: 'terrain'
    })
})
]
});
var lyr_Precipitaciones_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Precipitaciones",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Precipitaciones_0.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-723598.841410, 4414855.850201, -93000.535510, 5057692.972416]
                            })
                        });var format_Lneasmunicipales_1 = new ol.format.GeoJSON();
var features_Lneasmunicipales_1 = format_Lneasmunicipales_1.readFeatures(json_Lneasmunicipales_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lneasmunicipales_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Lneasmunicipales_1.addFeatures(features_Lneasmunicipales_1);var lyr_Lneasmunicipales_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lneasmunicipales_1, 
                style: style_Lneasmunicipales_1,
                title: '<img src="styles/legend/Lneasmunicipales_1.png" /> Líneas municipales'
            });var format_Lneasprovinciales_2 = new ol.format.GeoJSON();
var features_Lneasprovinciales_2 = format_Lneasprovinciales_2.readFeatures(json_Lneasprovinciales_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lneasprovinciales_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Lneasprovinciales_2.addFeatures(features_Lneasprovinciales_2);var lyr_Lneasprovinciales_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lneasprovinciales_2, 
                style: style_Lneasprovinciales_2,
                title: '<img src="styles/legend/Lneasprovinciales_2.png" /> Líneas provinciales'
            });var format_Datosestaciones_3 = new ol.format.GeoJSON();
var features_Datosestaciones_3 = format_Datosestaciones_3.readFeatures(json_Datosestaciones_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Datosestaciones_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Datosestaciones_3.addFeatures(features_Datosestaciones_3);var lyr_Datosestaciones_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Datosestaciones_3, 
                style: style_Datosestaciones_3,
                title: '<img src="styles/legend/Datosestaciones_3.png" /> Datos estaciones'
            });

lyr_Precipitaciones_0.setVisible(true);lyr_Lneasmunicipales_1.setVisible(true);lyr_Lneasprovinciales_2.setVisible(true);lyr_Datosestaciones_3.setVisible(true);
var layersList = [baseLayer,lyr_Precipitaciones_0,lyr_Lneasmunicipales_1,lyr_Lneasprovinciales_2,lyr_Datosestaciones_3];
lyr_Lneasmunicipales_1.set('fieldAliases', {'INSPIREID': 'INSPIREID', 'COUNTRY': 'COUNTRY', 'NATLEVEL': 'NATLEVEL', 'NATCODE': 'NATCODE', 'NAMEUNIT': 'NAMEUNIT', 'CODNUT1': 'CODNUT1', 'CODNUT2': 'CODNUT2', 'CODNUT3': 'CODNUT3', });
lyr_Lneasprovinciales_2.set('fieldAliases', {'INSPIREID': 'INSPIREID', 'NATIONALCO': 'NATIONALCO', 'COUNTRY': 'COUNTRY', 'NATIONALLE': 'NATIONALLE', 'NAME_BOUND': 'NAME_BOUND', 'DATE_BOUND': 'DATE_BOUND', 'URL_RESOUR': 'URL_RESOUR', });
lyr_Datosestaciones_3.set('fieldAliases', {'Localidad': 'Localidad', 'X': 'X', 'Y': 'Y', 'Z': 'Z', });
lyr_Lneasmunicipales_1.set('fieldImages', {'INSPIREID': 'Hidden', 'COUNTRY': 'Hidden', 'NATLEVEL': 'Hidden', 'NATCODE': 'Hidden', 'NAMEUNIT': 'TextEdit', 'CODNUT1': 'Hidden', 'CODNUT2': 'Hidden', 'CODNUT3': 'Hidden', });
lyr_Lneasprovinciales_2.set('fieldImages', {'INSPIREID': 'TextEdit', 'NATIONALCO': 'TextEdit', 'COUNTRY': 'TextEdit', 'NATIONALLE': 'TextEdit', 'NAME_BOUND': 'TextEdit', 'DATE_BOUND': 'TextEdit', 'URL_RESOUR': 'TextEdit', });
lyr_Datosestaciones_3.set('fieldImages', {'Localidad': 'TextEdit', 'X': 'Hidden', 'Y': 'Hidden', 'Z': 'TextEdit', });
lyr_Lneasmunicipales_1.set('fieldLabels', {'NAMEUNIT': 'no label', });
lyr_Lneasprovinciales_2.set('fieldLabels', {'INSPIREID': 'no label', 'NATIONALCO': 'no label', 'COUNTRY': 'no label', 'NATIONALLE': 'no label', 'NAME_BOUND': 'no label', 'DATE_BOUND': 'no label', 'URL_RESOUR': 'no label', });
lyr_Datosestaciones_3.set('fieldLabels', {'Localidad': 'no label', 'Z': 'no label', });
lyr_Datosestaciones_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});