var wms_layers = [];

var format_Communes_Ganzourgou_0 = new ol.format.GeoJSON();
var features_Communes_Ganzourgou_0 = format_Communes_Ganzourgou_0.readFeatures(json_Communes_Ganzourgou_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Communes_Ganzourgou_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communes_Ganzourgou_0.addFeatures(features_Communes_Ganzourgou_0);
var lyr_Communes_Ganzourgou_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Communes_Ganzourgou_0, 
                style: style_Communes_Ganzourgou_0,
                interactive: true,
    title: 'Communes_Ganzourgou<br />\
    <img src="styles/legend/Communes_Ganzourgou_0_0.png" /> No<br />\
    <img src="styles/legend/Communes_Ganzourgou_0_1.png" /> Yes<br />\
    <img src="styles/legend/Communes_Ganzourgou_0_2.png" /> <br />'
        });

lyr_Communes_Ganzourgou_0.setVisible(true);
var layersList = [lyr_Communes_Ganzourgou_0];
lyr_Communes_Ganzourgou_0.set('fieldAliases', {'NOM': 'NOM', 'POPULATION': 'POPULATION', 'SUPERFICIE': 'SUPERFICIE', 'PERIMETRE': 'PERIMETRE', 'Com_Interv': 'Com_Interv', });
lyr_Communes_Ganzourgou_0.set('fieldImages', {'NOM': 'TextEdit', 'POPULATION': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'PERIMETRE': 'TextEdit', 'Com_Interv': 'TextEdit', });
lyr_Communes_Ganzourgou_0.set('fieldLabels', {'NOM': 'header label', 'POPULATION': 'no label', 'SUPERFICIE': 'no label', 'PERIMETRE': 'no label', 'Com_Interv': 'header label', });
lyr_Communes_Ganzourgou_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});