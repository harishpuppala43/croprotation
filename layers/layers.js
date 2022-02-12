var wms_layers = [];

var format_Wheat_suitability_0 = new ol.format.GeoJSON();
var features_Wheat_suitability_0 = format_Wheat_suitability_0.readFeatures(json_Wheat_suitability_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wheat_suitability_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wheat_suitability_0.addFeatures(features_Wheat_suitability_0);
var lyr_Wheat_suitability_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Wheat_suitability_0, 
                style: style_Wheat_suitability_0,
                interactive: true,
    title: 'Wheat_suitability<br />\
    <img src="styles/legend/Wheat_suitability_0_0.png" /> Highly suitable<br />\
    <img src="styles/legend/Wheat_suitability_0_1.png" /> Moderately suitable<br />\
    <img src="styles/legend/Wheat_suitability_0_2.png" /> Marginally suitable<br />'
        });
var format_Sugarcane_suitability_1 = new ol.format.GeoJSON();
var features_Sugarcane_suitability_1 = format_Sugarcane_suitability_1.readFeatures(json_Sugarcane_suitability_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sugarcane_suitability_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sugarcane_suitability_1.addFeatures(features_Sugarcane_suitability_1);
var lyr_Sugarcane_suitability_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sugarcane_suitability_1, 
                style: style_Sugarcane_suitability_1,
                interactive: true,
    title: 'Sugarcane_suitability<br />\
    <img src="styles/legend/Sugarcane_suitability_1_0.png" /> Highly suitable<br />\
    <img src="styles/legend/Sugarcane_suitability_1_1.png" /> Moderately suitable<br />'
        });
var format_Sorghum_suitability_2 = new ol.format.GeoJSON();
var features_Sorghum_suitability_2 = format_Sorghum_suitability_2.readFeatures(json_Sorghum_suitability_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sorghum_suitability_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sorghum_suitability_2.addFeatures(features_Sorghum_suitability_2);
var lyr_Sorghum_suitability_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sorghum_suitability_2, 
                style: style_Sorghum_suitability_2,
                interactive: true,
    title: 'Sorghum_suitability<br />\
    <img src="styles/legend/Sorghum_suitability_2_0.png" /> Highly suitable <br />\
    <img src="styles/legend/Sorghum_suitability_2_1.png" /> Moderately suitable<br />\
    <img src="styles/legend/Sorghum_suitability_2_2.png" /> Marginally suitable<br />'
        });
var format_Rice_suitability_3 = new ol.format.GeoJSON();
var features_Rice_suitability_3 = format_Rice_suitability_3.readFeatures(json_Rice_suitability_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rice_suitability_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rice_suitability_3.addFeatures(features_Rice_suitability_3);
var lyr_Rice_suitability_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rice_suitability_3, 
                style: style_Rice_suitability_3,
                interactive: true,
    title: 'Rice_suitability<br />\
    <img src="styles/legend/Rice_suitability_3_0.png" /> Highly suitable<br />\
    <img src="styles/legend/Rice_suitability_3_1.png" /> Moderately suitable<br />\
    <img src="styles/legend/Rice_suitability_3_2.png" /> Marginally suitable<br />'
        });
var format_Potato_suitability_4 = new ol.format.GeoJSON();
var features_Potato_suitability_4 = format_Potato_suitability_4.readFeatures(json_Potato_suitability_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Potato_suitability_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Potato_suitability_4.addFeatures(features_Potato_suitability_4);
var lyr_Potato_suitability_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Potato_suitability_4, 
                style: style_Potato_suitability_4,
                interactive: true,
    title: 'Potato_suitability<br />\
    <img src="styles/legend/Potato_suitability_4_0.png" /> Highly suitable<br />\
    <img src="styles/legend/Potato_suitability_4_1.png" /> Moderately suitable<br />\
    <img src="styles/legend/Potato_suitability_4_2.png" /> Marginally suitable<br />'
        });
var format_Mustard_suitability_5 = new ol.format.GeoJSON();
var features_Mustard_suitability_5 = format_Mustard_suitability_5.readFeatures(json_Mustard_suitability_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mustard_suitability_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mustard_suitability_5.addFeatures(features_Mustard_suitability_5);
var lyr_Mustard_suitability_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mustard_suitability_5, 
                style: style_Mustard_suitability_5,
                interactive: true,
    title: 'Mustard_suitability<br />\
    <img src="styles/legend/Mustard_suitability_5_0.png" /> Highly suitable<br />\
    <img src="styles/legend/Mustard_suitability_5_1.png" /> Moderately suitable<br />\
    <img src="styles/legend/Mustard_suitability_5_2.png" /> Marginally suitable<br />'
        });
var format_Maize_suitability_6 = new ol.format.GeoJSON();
var features_Maize_suitability_6 = format_Maize_suitability_6.readFeatures(json_Maize_suitability_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Maize_suitability_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Maize_suitability_6.addFeatures(features_Maize_suitability_6);
var lyr_Maize_suitability_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Maize_suitability_6, 
                style: style_Maize_suitability_6,
                interactive: true,
    title: 'Maize_suitability<br />\
    <img src="styles/legend/Maize_suitability_6_0.png" /> Highly suitable<br />\
    <img src="styles/legend/Maize_suitability_6_1.png" /> Moderately suitable<br />\
    <img src="styles/legend/Maize_suitability_6_2.png" /> Marginally suitable<br />'
        });
var format_MIWR_7 = new ol.format.GeoJSON();
var features_MIWR_7 = format_MIWR_7.readFeatures(json_MIWR_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MIWR_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MIWR_7.addFeatures(features_MIWR_7);
var lyr_MIWR_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MIWR_7, 
                style: style_MIWR_7,
                interactive: true,
    title: 'MIWR<br />\
    <img src="styles/legend/MIWR_7_0.png" /> NSP<br />\
    <img src="styles/legend/MIWR_7_1.png" /> Rice-Wheat-Fallow<br />\
    <img src="styles/legend/MIWR_7_2.png" /> Sorghum-Mustard-Fallow<br />\
    <img src="styles/legend/MIWR_7_3.png" /> Sorghum-Wheat-Fallow<br />\
    <img src="styles/legend/MIWR_7_4.png" /> Rice-Mustard-Fallow<br />'
        });
var format_MIR_8 = new ol.format.GeoJSON();
var features_MIR_8 = format_MIR_8.readFeatures(json_MIR_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MIR_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MIR_8.addFeatures(features_MIR_8);
var lyr_MIR_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MIR_8, 
                style: style_MIR_8,
                interactive: true,
    title: 'MIR<br />\
    <img src="styles/legend/MIR_8_0.png" /> NSP<br />\
    <img src="styles/legend/MIR_8_1.png" /> Sorghum-Wheat-Fallow<br />\
    <img src="styles/legend/MIR_8_2.png" /> Rice-Potato-Sugarcane-Wheat-Fallow<br />\
    <img src="styles/legend/MIR_8_3.png" /> Rice-Potato-Maize-Potato-Fallow<br />\
    <img src="styles/legend/MIR_8_4.png" /> Maize-Potato-Sugarcane-Fallow<br />'
        });
var format_CO_9 = new ol.format.GeoJSON();
var features_CO_9 = format_CO_9.readFeatures(json_CO_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CO_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CO_9.addFeatures(features_CO_9);
var lyr_CO_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CO_9, 
                style: style_CO_9,
                interactive: true,
    title: 'CO<br />\
    <img src="styles/legend/CO_9_0.png" /> NSP<br />\
    <img src="styles/legend/CO_9_1.png" /> Sorghum-Mustard-Fallow<br />\
    <img src="styles/legend/CO_9_2.png" /> Sorghum-Wheat-Fallow<br />\
    <img src="styles/legend/CO_9_3.png" /> Rice-Potato-Sugarcane-Wheat-Fallow<br />\
    <img src="styles/legend/CO_9_4.png" /> Rice-Potato-Maize-Potato-Fallow<br />'
        });

lyr_Wheat_suitability_0.setVisible(true);lyr_Sugarcane_suitability_1.setVisible(true);lyr_Sorghum_suitability_2.setVisible(true);lyr_Rice_suitability_3.setVisible(true);lyr_Potato_suitability_4.setVisible(true);lyr_Mustard_suitability_5.setVisible(true);lyr_Maize_suitability_6.setVisible(true);lyr_MIWR_7.setVisible(true);lyr_MIR_8.setVisible(true);lyr_CO_9.setVisible(true);
var layersList = [lyr_Wheat_suitability_0,lyr_Sugarcane_suitability_1,lyr_Sorghum_suitability_2,lyr_Rice_suitability_3,lyr_Potato_suitability_4,lyr_Mustard_suitability_5,lyr_Maize_suitability_6,lyr_MIWR_7,lyr_MIR_8,lyr_CO_9];
lyr_Wheat_suitability_0.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', });
lyr_Sugarcane_suitability_1.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', });
lyr_Sorghum_suitability_2.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', });
lyr_Rice_suitability_3.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', });
lyr_Potato_suitability_4.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', });
lyr_Mustard_suitability_5.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', });
lyr_Maize_suitability_6.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', });
lyr_MIWR_7.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', });
lyr_MIR_8.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', });
lyr_CO_9.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', });
lyr_Wheat_suitability_0.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', });
lyr_Sugarcane_suitability_1.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', });
lyr_Sorghum_suitability_2.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', });
lyr_Rice_suitability_3.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', });
lyr_Potato_suitability_4.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', });
lyr_Mustard_suitability_5.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', });
lyr_Maize_suitability_6.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', });
lyr_MIWR_7.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', });
lyr_MIR_8.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', });
lyr_CO_9.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', });
lyr_Wheat_suitability_0.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', });
lyr_Sugarcane_suitability_1.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', });
lyr_Sorghum_suitability_2.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', });
lyr_Rice_suitability_3.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', });
lyr_Potato_suitability_4.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', });
lyr_Mustard_suitability_5.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', });
lyr_Maize_suitability_6.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', });
lyr_MIWR_7.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', });
lyr_MIR_8.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', });
lyr_CO_9.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', });
lyr_CO_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});