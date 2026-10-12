var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_pandharpur_city_road_2 = new ol.format.GeoJSON();
var features_pandharpur_city_road_2 = format_pandharpur_city_road_2.readFeatures(json_pandharpur_city_road_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pandharpur_city_road_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pandharpur_city_road_2.addFeatures(features_pandharpur_city_road_2);
var lyr_pandharpur_city_road_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pandharpur_city_road_2, 
                style: style_pandharpur_city_road_2,
                popuplayertitle: 'pandharpur_city_road',
                interactive: true,
                title: '<img src="styles/legend/pandharpur_city_road_2.png" /> pandharpur_city_road'
            });
var format_pandharpurcity_3 = new ol.format.GeoJSON();
var features_pandharpurcity_3 = format_pandharpurcity_3.readFeatures(json_pandharpurcity_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pandharpurcity_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pandharpurcity_3.addFeatures(features_pandharpurcity_3);
var lyr_pandharpurcity_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pandharpurcity_3, 
                style: style_pandharpurcity_3,
                popuplayertitle: 'pandharpurcity',
                interactive: true,
                title: '<img src="styles/legend/pandharpurcity_3.png" /> pandharpurcity'
            });
var format_Hospitals_kmz_4 = new ol.format.GeoJSON();
var features_Hospitals_kmz_4 = format_Hospitals_kmz_4.readFeatures(json_Hospitals_kmz_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hospitals_kmz_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hospitals_kmz_4.addFeatures(features_Hospitals_kmz_4);
var lyr_Hospitals_kmz_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hospitals_kmz_4, 
                style: style_Hospitals_kmz_4,
                popuplayertitle: 'Hospitals_kmz',
                interactive: true,
                title: '<img src="styles/legend/Hospitals_kmz_4.png" /> Hospitals_kmz'
            });
var format_railways_5 = new ol.format.GeoJSON();
var features_railways_5 = format_railways_5.readFeatures(json_railways_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_railways_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_railways_5.addFeatures(features_railways_5);
var lyr_railways_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_railways_5, 
                style: style_railways_5,
                popuplayertitle: 'railways',
                interactive: true,
                title: '<img src="styles/legend/railways_5.png" /> railways'
            });
var format_Buildings_6 = new ol.format.GeoJSON();
var features_Buildings_6 = format_Buildings_6.readFeatures(json_Buildings_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buildings_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buildings_6.addFeatures(features_Buildings_6);
var lyr_Buildings_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buildings_6, 
                style: style_Buildings_6,
                popuplayertitle: 'Buildings',
                interactive: true,
                title: '<img src="styles/legend/Buildings_6.png" /> Buildings'
            });
var format_Waterways_7 = new ol.format.GeoJSON();
var features_Waterways_7 = format_Waterways_7.readFeatures(json_Waterways_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Waterways_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waterways_7.addFeatures(features_Waterways_7);
var lyr_Waterways_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waterways_7, 
                style: style_Waterways_7,
                popuplayertitle: 'Waterways',
                interactive: true,
                title: '<img src="styles/legend/Waterways_7.png" /> Waterways'
            });
var format_gis_osm_water_a_free_1_8 = new ol.format.GeoJSON();
var features_gis_osm_water_a_free_1_8 = format_gis_osm_water_a_free_1_8.readFeatures(json_gis_osm_water_a_free_1_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gis_osm_water_a_free_1_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gis_osm_water_a_free_1_8.addFeatures(features_gis_osm_water_a_free_1_8);
var lyr_gis_osm_water_a_free_1_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gis_osm_water_a_free_1_8, 
                style: style_gis_osm_water_a_free_1_8,
                popuplayertitle: 'gis_osm_water_a_free_1',
                interactive: true,
                title: '<img src="styles/legend/gis_osm_water_a_free_1_8.png" /> gis_osm_water_a_free_1'
            });
var format_natural_9 = new ol.format.GeoJSON();
var features_natural_9 = format_natural_9.readFeatures(json_natural_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_natural_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_natural_9.addFeatures(features_natural_9);
var lyr_natural_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_natural_9, 
                style: style_natural_9,
                popuplayertitle: 'natural',
                interactive: true,
                title: '<img src="styles/legend/natural_9.png" /> natural'
            });
var format_water_10 = new ol.format.GeoJSON();
var features_water_10 = format_water_10.readFeatures(json_water_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_water_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_water_10.addFeatures(features_water_10);
var lyr_water_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_water_10, 
                style: style_water_10,
                popuplayertitle: 'water',
                interactive: true,
                title: '<img src="styles/legend/water_10.png" /> water'
            });

lyr_GoogleTerrain_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_pandharpur_city_road_2.setVisible(true);lyr_pandharpurcity_3.setVisible(true);lyr_Hospitals_kmz_4.setVisible(true);lyr_railways_5.setVisible(true);lyr_Buildings_6.setVisible(true);lyr_Waterways_7.setVisible(true);lyr_gis_osm_water_a_free_1_8.setVisible(true);lyr_natural_9.setVisible(true);lyr_water_10.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_GoogleSatellite_1,lyr_pandharpur_city_road_2,lyr_pandharpurcity_3,lyr_Hospitals_kmz_4,lyr_railways_5,lyr_Buildings_6,lyr_Waterways_7,lyr_gis_osm_water_a_free_1_8,lyr_natural_9,lyr_water_10];
lyr_pandharpur_city_road_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', 'Shape_Leng': 'Shape_Leng', });
lyr_pandharpurcity_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'OBJECTID_1': 'OBJECTID_1', 'Vill_name': 'Vill_name', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Hospitals_kmz_4.set('fieldAliases', {'name': 'name', 'folder': 'folder', 'styleUrl': 'styleUrl', 'icon_href': 'icon_href', 'marker_col': 'marker_col', 'Type': 'Type', });
lyr_railways_5.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_Buildings_6.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'type': 'type', });
lyr_Waterways_7.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'width': 'width', 'name': 'name', });
lyr_gis_osm_water_a_free_1_8.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_natural_9.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_water_10.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_pandharpur_city_road_2.set('fieldImages', {'OBJECTID': '', 'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'ref': '', 'oneway': '', 'maxspeed': '', 'layer': '', 'bridge': '', 'tunnel': '', 'Shape_Leng': '', });
lyr_pandharpurcity_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'Vill_name': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Hospitals_kmz_4.set('fieldImages', {'name': '', 'folder': '', 'styleUrl': '', 'icon_href': '', 'marker_col': '', 'Type': '', });
lyr_railways_5.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_Buildings_6.set('fieldImages', {'fid': '', 'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'type': '', });
lyr_Waterways_7.set('fieldImages', {'fid': '', 'osm_id': '', 'code': '', 'fclass': '', 'width': '', 'name': '', });
lyr_gis_osm_water_a_free_1_8.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', });
lyr_natural_9.set('fieldImages', {'fid': '', 'osm_id': '', 'code': '', 'fclass': '', 'name': '', });
lyr_water_10.set('fieldImages', {'fid': '', 'osm_id': '', 'code': '', 'fclass': '', 'name': '', });
lyr_pandharpur_city_road_2.set('fieldLabels', {'OBJECTID': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'Shape_Leng': 'no label', });
lyr_pandharpurcity_3.set('fieldLabels', {'OBJECTID': 'no label', 'OBJECTID_1': 'no label', 'Vill_name': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Hospitals_kmz_4.set('fieldLabels', {'name': 'no label', 'folder': 'no label', 'styleUrl': 'no label', 'icon_href': 'no label', 'marker_col': 'no label', 'Type': 'no label', });
lyr_railways_5.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_Buildings_6.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'type': 'no label', });
lyr_Waterways_7.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'width': 'no label', 'name': 'no label', });
lyr_gis_osm_water_a_free_1_8.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', });
lyr_natural_9.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', });
lyr_water_10.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', });
lyr_water_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});