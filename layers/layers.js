ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-40.076806, -19.858520, -40.020462, -19.823904]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_FundeadourosLongoPrazo_1 = new ol.format.GeoJSON();
var features_FundeadourosLongoPrazo_1 = format_FundeadourosLongoPrazo_1.readFeatures(json_FundeadourosLongoPrazo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosLongoPrazo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosLongoPrazo_1.addFeatures(features_FundeadourosLongoPrazo_1);
var lyr_FundeadourosLongoPrazo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosLongoPrazo_1, 
                style: style_FundeadourosLongoPrazo_1,
                popuplayertitle: 'Fundeadouros - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosLongoPrazo_1.png" /> Fundeadouros - Longo Prazo '
            });
var format_FundeadourosMdioPrazo_2 = new ol.format.GeoJSON();
var features_FundeadourosMdioPrazo_2 = format_FundeadourosMdioPrazo_2.readFeatures(json_FundeadourosMdioPrazo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosMdioPrazo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosMdioPrazo_2.addFeatures(features_FundeadourosMdioPrazo_2);
var lyr_FundeadourosMdioPrazo_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosMdioPrazo_2, 
                style: style_FundeadourosMdioPrazo_2,
                popuplayertitle: 'Fundeadouros - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosMdioPrazo_2.png" /> Fundeadouros - Médio Prazo '
            });
var format_FundeadourosCurtoPrazo_3 = new ol.format.GeoJSON();
var features_FundeadourosCurtoPrazo_3 = format_FundeadourosCurtoPrazo_3.readFeatures(json_FundeadourosCurtoPrazo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosCurtoPrazo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosCurtoPrazo_3.addFeatures(features_FundeadourosCurtoPrazo_3);
var lyr_FundeadourosCurtoPrazo_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosCurtoPrazo_3, 
                style: style_FundeadourosCurtoPrazo_3,
                popuplayertitle: 'Fundeadouros - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosCurtoPrazo_3.png" /> Fundeadouros - Curto Prazo '
            });
var format_FundeadourosSituaoAtual_4 = new ol.format.GeoJSON();
var features_FundeadourosSituaoAtual_4 = format_FundeadourosSituaoAtual_4.readFeatures(json_FundeadourosSituaoAtual_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosSituaoAtual_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosSituaoAtual_4.addFeatures(features_FundeadourosSituaoAtual_4);
var lyr_FundeadourosSituaoAtual_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosSituaoAtual_4, 
                style: style_FundeadourosSituaoAtual_4,
                popuplayertitle: 'Fundeadouros - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosSituaoAtual_4.png" /> Fundeadouros - Situação Atual '
            });
var format_BaciasdeEvoluoLongoPrazo_5 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoLongoPrazo_5 = format_BaciasdeEvoluoLongoPrazo_5.readFeatures(json_BaciasdeEvoluoLongoPrazo_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciasdeEvoluoLongoPrazo_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoLongoPrazo_5.addFeatures(features_BaciasdeEvoluoLongoPrazo_5);
var lyr_BaciasdeEvoluoLongoPrazo_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoLongoPrazo_5, 
                style: style_BaciasdeEvoluoLongoPrazo_5,
                popuplayertitle: 'Bacias de Evolução - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoLongoPrazo_5.png" /> Bacias de Evolução - Longo Prazo '
            });
var format_BaciasdeEvoluoMdioPrazo_6 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoMdioPrazo_6 = format_BaciasdeEvoluoMdioPrazo_6.readFeatures(json_BaciasdeEvoluoMdioPrazo_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciasdeEvoluoMdioPrazo_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoMdioPrazo_6.addFeatures(features_BaciasdeEvoluoMdioPrazo_6);
var lyr_BaciasdeEvoluoMdioPrazo_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoMdioPrazo_6, 
                style: style_BaciasdeEvoluoMdioPrazo_6,
                popuplayertitle: 'Bacias de Evolução - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoMdioPrazo_6.png" /> Bacias de Evolução - Médio Prazo '
            });
var format_BaciasdeEvoluoCurtoPrazo_7 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoCurtoPrazo_7 = format_BaciasdeEvoluoCurtoPrazo_7.readFeatures(json_BaciasdeEvoluoCurtoPrazo_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciasdeEvoluoCurtoPrazo_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoCurtoPrazo_7.addFeatures(features_BaciasdeEvoluoCurtoPrazo_7);
var lyr_BaciasdeEvoluoCurtoPrazo_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoCurtoPrazo_7, 
                style: style_BaciasdeEvoluoCurtoPrazo_7,
                popuplayertitle: 'Bacias de Evolução - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoCurtoPrazo_7.png" /> Bacias de Evolução - Curto Prazo '
            });
var format_BaciasdeEvoluoSituaoAtual_8 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoSituaoAtual_8 = format_BaciasdeEvoluoSituaoAtual_8.readFeatures(json_BaciasdeEvoluoSituaoAtual_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciasdeEvoluoSituaoAtual_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoSituaoAtual_8.addFeatures(features_BaciasdeEvoluoSituaoAtual_8);
var lyr_BaciasdeEvoluoSituaoAtual_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoSituaoAtual_8, 
                style: style_BaciasdeEvoluoSituaoAtual_8,
                popuplayertitle: 'Bacias de Evolução - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoSituaoAtual_8.png" /> Bacias de Evolução - Situação Atual '
            });
var format_CanaisdeAcessoLongoPrazo_9 = new ol.format.GeoJSON();
var features_CanaisdeAcessoLongoPrazo_9 = format_CanaisdeAcessoLongoPrazo_9.readFeatures(json_CanaisdeAcessoLongoPrazo_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoLongoPrazo_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoLongoPrazo_9.addFeatures(features_CanaisdeAcessoLongoPrazo_9);
var lyr_CanaisdeAcessoLongoPrazo_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoLongoPrazo_9, 
                style: style_CanaisdeAcessoLongoPrazo_9,
                popuplayertitle: 'Canais de Acesso - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoLongoPrazo_9.png" /> Canais de Acesso - Longo Prazo '
            });
var format_CanaisdeAcessoMdioPrazo_10 = new ol.format.GeoJSON();
var features_CanaisdeAcessoMdioPrazo_10 = format_CanaisdeAcessoMdioPrazo_10.readFeatures(json_CanaisdeAcessoMdioPrazo_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoMdioPrazo_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoMdioPrazo_10.addFeatures(features_CanaisdeAcessoMdioPrazo_10);
var lyr_CanaisdeAcessoMdioPrazo_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoMdioPrazo_10, 
                style: style_CanaisdeAcessoMdioPrazo_10,
                popuplayertitle: 'Canais de Acesso - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoMdioPrazo_10.png" /> Canais de Acesso - Médio Prazo '
            });
var format_CanaisdeAcessoCurtoPrazo_11 = new ol.format.GeoJSON();
var features_CanaisdeAcessoCurtoPrazo_11 = format_CanaisdeAcessoCurtoPrazo_11.readFeatures(json_CanaisdeAcessoCurtoPrazo_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoCurtoPrazo_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoCurtoPrazo_11.addFeatures(features_CanaisdeAcessoCurtoPrazo_11);
var lyr_CanaisdeAcessoCurtoPrazo_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoCurtoPrazo_11, 
                style: style_CanaisdeAcessoCurtoPrazo_11,
                popuplayertitle: 'Canais de Acesso - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoCurtoPrazo_11.png" /> Canais de Acesso - Curto Prazo '
            });
var format_CanaisdeAcessoSituaoAtual_12 = new ol.format.GeoJSON();
var features_CanaisdeAcessoSituaoAtual_12 = format_CanaisdeAcessoSituaoAtual_12.readFeatures(json_CanaisdeAcessoSituaoAtual_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoSituaoAtual_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoSituaoAtual_12.addFeatures(features_CanaisdeAcessoSituaoAtual_12);
var lyr_CanaisdeAcessoSituaoAtual_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoSituaoAtual_12, 
                style: style_CanaisdeAcessoSituaoAtual_12,
                popuplayertitle: 'Canais de Acesso - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoSituaoAtual_12.png" /> Canais de Acesso - Situação Atual '
            });
var format_TerminaldeUsoPrivado_13 = new ol.format.GeoJSON();
var features_TerminaldeUsoPrivado_13 = format_TerminaldeUsoPrivado_13.readFeatures(json_TerminaldeUsoPrivado_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TerminaldeUsoPrivado_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerminaldeUsoPrivado_13.addFeatures(features_TerminaldeUsoPrivado_13);
var lyr_TerminaldeUsoPrivado_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerminaldeUsoPrivado_13, 
                style: style_TerminaldeUsoPrivado_13,
                popuplayertitle: 'Terminal de Uso Privado ',
                interactive: true,
                title: '<img src="styles/legend/TerminaldeUsoPrivado_13.png" /> Terminal de Uso Privado '
            });
var format_AcessosDutoviriosExternos_14 = new ol.format.GeoJSON();
var features_AcessosDutoviriosExternos_14 = format_AcessosDutoviriosExternos_14.readFeatures(json_AcessosDutoviriosExternos_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosDutoviriosExternos_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosDutoviriosExternos_14.addFeatures(features_AcessosDutoviriosExternos_14);
var lyr_AcessosDutoviriosExternos_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosDutoviriosExternos_14, 
                style: style_AcessosDutoviriosExternos_14,
                popuplayertitle: 'Acessos Dutoviários Externos',
                interactive: true,
                title: '<img src="styles/legend/AcessosDutoviriosExternos_14.png" /> Acessos Dutoviários Externos'
            });
var format_AcessosFerroviriosExternos_15 = new ol.format.GeoJSON();
var features_AcessosFerroviriosExternos_15 = format_AcessosFerroviriosExternos_15.readFeatures(json_AcessosFerroviriosExternos_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosFerroviriosExternos_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosExternos_15.addFeatures(features_AcessosFerroviriosExternos_15);
var lyr_AcessosFerroviriosExternos_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosExternos_15, 
                style: style_AcessosFerroviriosExternos_15,
                popuplayertitle: 'Acessos Ferroviários Externos ',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosExternos_15.png" /> Acessos Ferroviários Externos '
            });
var format_AcessosRodoviriosInternosLongoPrazo_16 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosLongoPrazo_16 = format_AcessosRodoviriosInternosLongoPrazo_16.readFeatures(json_AcessosRodoviriosInternosLongoPrazo_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosInternosLongoPrazo_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosLongoPrazo_16.addFeatures(features_AcessosRodoviriosInternosLongoPrazo_16);
var lyr_AcessosRodoviriosInternosLongoPrazo_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosLongoPrazo_16, 
                style: style_AcessosRodoviriosInternosLongoPrazo_16,
                popuplayertitle: 'Acessos Rodoviários Internos - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosLongoPrazo_16.png" /> Acessos Rodoviários Internos - Longo Prazo '
            });
var format_AcessosRodoviriosInternosMdioPrazo_17 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosMdioPrazo_17 = format_AcessosRodoviriosInternosMdioPrazo_17.readFeatures(json_AcessosRodoviriosInternosMdioPrazo_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosInternosMdioPrazo_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosMdioPrazo_17.addFeatures(features_AcessosRodoviriosInternosMdioPrazo_17);
var lyr_AcessosRodoviriosInternosMdioPrazo_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosMdioPrazo_17, 
                style: style_AcessosRodoviriosInternosMdioPrazo_17,
                popuplayertitle: 'Acessos Rodoviários Internos - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosMdioPrazo_17.png" /> Acessos Rodoviários Internos - Médio Prazo '
            });
var format_AcessosRodoviriosInternosCurtoPrazo_18 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosCurtoPrazo_18 = format_AcessosRodoviriosInternosCurtoPrazo_18.readFeatures(json_AcessosRodoviriosInternosCurtoPrazo_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosInternosCurtoPrazo_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosCurtoPrazo_18.addFeatures(features_AcessosRodoviriosInternosCurtoPrazo_18);
var lyr_AcessosRodoviriosInternosCurtoPrazo_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosCurtoPrazo_18, 
                style: style_AcessosRodoviriosInternosCurtoPrazo_18,
                popuplayertitle: 'Acessos Rodoviários Internos - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosCurtoPrazo_18.png" /> Acessos Rodoviários Internos - Curto Prazo '
            });
var format_AcessosRodoviriosInternosSituaoAtual_19 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosSituaoAtual_19 = format_AcessosRodoviriosInternosSituaoAtual_19.readFeatures(json_AcessosRodoviriosInternosSituaoAtual_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosInternosSituaoAtual_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosSituaoAtual_19.addFeatures(features_AcessosRodoviriosInternosSituaoAtual_19);
var lyr_AcessosRodoviriosInternosSituaoAtual_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosSituaoAtual_19, 
                style: style_AcessosRodoviriosInternosSituaoAtual_19,
                popuplayertitle: 'Acessos Rodoviários Internos - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosSituaoAtual_19.png" /> Acessos Rodoviários Internos - Situação Atual '
            });
var format_AcessosRodoviriosExternos_20 = new ol.format.GeoJSON();
var features_AcessosRodoviriosExternos_20 = format_AcessosRodoviriosExternos_20.readFeatures(json_AcessosRodoviriosExternos_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosExternos_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosExternos_20.addFeatures(features_AcessosRodoviriosExternos_20);
var lyr_AcessosRodoviriosExternos_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosExternos_20, 
                style: style_AcessosRodoviriosExternos_20,
                popuplayertitle: 'Acessos Rodoviários Externos ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosExternos_20.png" /> Acessos Rodoviários Externos '
            });
var format_reasNoAfetassOperaesPorturiasLongoPrazo_21 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasLongoPrazo_21 = format_reasNoAfetassOperaesPorturiasLongoPrazo_21.readFeatures(json_reasNoAfetassOperaesPorturiasLongoPrazo_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_21.addFeatures(features_reasNoAfetassOperaesPorturiasLongoPrazo_21);
var lyr_reasNoAfetassOperaesPorturiasLongoPrazo_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_21, 
                style: style_reasNoAfetassOperaesPorturiasLongoPrazo_21,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasLongoPrazo_21.png" /> Áreas Não Afetas às Operações Portuárias - Longo Prazo '
            });
var format_reasNoAfetassOperaesPorturiasMdioPrazo_22 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasMdioPrazo_22 = format_reasNoAfetassOperaesPorturiasMdioPrazo_22.readFeatures(json_reasNoAfetassOperaesPorturiasMdioPrazo_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_22.addFeatures(features_reasNoAfetassOperaesPorturiasMdioPrazo_22);
var lyr_reasNoAfetassOperaesPorturiasMdioPrazo_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_22, 
                style: style_reasNoAfetassOperaesPorturiasMdioPrazo_22,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasMdioPrazo_22.png" /> Áreas Não Afetas às Operações Portuárias - Médio Prazo'
            });
var format_reasNoAfetassOperaesPorturiasCurtoPrazo_23 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasCurtoPrazo_23 = format_reasNoAfetassOperaesPorturiasCurtoPrazo_23.readFeatures(json_reasNoAfetassOperaesPorturiasCurtoPrazo_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_23.addFeatures(features_reasNoAfetassOperaesPorturiasCurtoPrazo_23);
var lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_23, 
                style: style_reasNoAfetassOperaesPorturiasCurtoPrazo_23,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasCurtoPrazo_23.png" /> Áreas Não Afetas às Operações Portuárias - Curto Prazo '
            });
var format_reasNoAfetassOperaesPorturiasSituaoAtual_24 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasSituaoAtual_24 = format_reasNoAfetassOperaesPorturiasSituaoAtual_24.readFeatures(json_reasNoAfetassOperaesPorturiasSituaoAtual_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_24.addFeatures(features_reasNoAfetassOperaesPorturiasSituaoAtual_24);
var lyr_reasNoAfetassOperaesPorturiasSituaoAtual_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_24, 
                style: style_reasNoAfetassOperaesPorturiasSituaoAtual_24,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasSituaoAtual_24.png" /> Áreas Não Afetas às Operações Portuárias - Situação Atual'
            });
var format_AcostagemLongoPrazo_25 = new ol.format.GeoJSON();
var features_AcostagemLongoPrazo_25 = format_AcostagemLongoPrazo_25.readFeatures(json_AcostagemLongoPrazo_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemLongoPrazo_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemLongoPrazo_25.addFeatures(features_AcostagemLongoPrazo_25);
var lyr_AcostagemLongoPrazo_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemLongoPrazo_25, 
                style: style_AcostagemLongoPrazo_25,
                popuplayertitle: 'Acostagem - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemLongoPrazo_25.png" /> Acostagem - Longo Prazo '
            });
var format_AcostagemMdioPrazo_26 = new ol.format.GeoJSON();
var features_AcostagemMdioPrazo_26 = format_AcostagemMdioPrazo_26.readFeatures(json_AcostagemMdioPrazo_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemMdioPrazo_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemMdioPrazo_26.addFeatures(features_AcostagemMdioPrazo_26);
var lyr_AcostagemMdioPrazo_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemMdioPrazo_26, 
                style: style_AcostagemMdioPrazo_26,
                popuplayertitle: 'Acostagem - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemMdioPrazo_26.png" /> Acostagem - Médio Prazo '
            });
var format_AcostagemCurtoPrazo_27 = new ol.format.GeoJSON();
var features_AcostagemCurtoPrazo_27 = format_AcostagemCurtoPrazo_27.readFeatures(json_AcostagemCurtoPrazo_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemCurtoPrazo_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemCurtoPrazo_27.addFeatures(features_AcostagemCurtoPrazo_27);
var lyr_AcostagemCurtoPrazo_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemCurtoPrazo_27, 
                style: style_AcostagemCurtoPrazo_27,
                popuplayertitle: 'Acostagem - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemCurtoPrazo_27.png" /> Acostagem - Curto Prazo '
            });
var format_AcostagemSituaoAtual_28 = new ol.format.GeoJSON();
var features_AcostagemSituaoAtual_28 = format_AcostagemSituaoAtual_28.readFeatures(json_AcostagemSituaoAtual_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemSituaoAtual_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemSituaoAtual_28.addFeatures(features_AcostagemSituaoAtual_28);
var lyr_AcostagemSituaoAtual_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemSituaoAtual_28, 
                style: style_AcostagemSituaoAtual_28,
                popuplayertitle: 'Acostagem - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemSituaoAtual_28.png" /> Acostagem - Situação Atual '
            });
var format_ArmazenagemLongoPrazo_29 = new ol.format.GeoJSON();
var features_ArmazenagemLongoPrazo_29 = format_ArmazenagemLongoPrazo_29.readFeatures(json_ArmazenagemLongoPrazo_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemLongoPrazo_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemLongoPrazo_29.addFeatures(features_ArmazenagemLongoPrazo_29);
var lyr_ArmazenagemLongoPrazo_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemLongoPrazo_29, 
                style: style_ArmazenagemLongoPrazo_29,
                popuplayertitle: 'Armazenagem - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemLongoPrazo_29.png" /> Armazenagem - Longo Prazo '
            });
var format_ArmazenagemMdioPrazo_30 = new ol.format.GeoJSON();
var features_ArmazenagemMdioPrazo_30 = format_ArmazenagemMdioPrazo_30.readFeatures(json_ArmazenagemMdioPrazo_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemMdioPrazo_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemMdioPrazo_30.addFeatures(features_ArmazenagemMdioPrazo_30);
var lyr_ArmazenagemMdioPrazo_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemMdioPrazo_30, 
                style: style_ArmazenagemMdioPrazo_30,
                popuplayertitle: 'Armazenagem - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemMdioPrazo_30.png" /> Armazenagem - Médio Prazo '
            });
var format_ArmazenagemCurtoPrazo_31 = new ol.format.GeoJSON();
var features_ArmazenagemCurtoPrazo_31 = format_ArmazenagemCurtoPrazo_31.readFeatures(json_ArmazenagemCurtoPrazo_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemCurtoPrazo_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemCurtoPrazo_31.addFeatures(features_ArmazenagemCurtoPrazo_31);
var lyr_ArmazenagemCurtoPrazo_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemCurtoPrazo_31, 
                style: style_ArmazenagemCurtoPrazo_31,
                popuplayertitle: 'Armazenagem - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemCurtoPrazo_31.png" /> Armazenagem - Curto Prazo '
            });
var format_ArmazenagemSituaoAtual_32 = new ol.format.GeoJSON();
var features_ArmazenagemSituaoAtual_32 = format_ArmazenagemSituaoAtual_32.readFeatures(json_ArmazenagemSituaoAtual_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemSituaoAtual_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemSituaoAtual_32.addFeatures(features_ArmazenagemSituaoAtual_32);
var lyr_ArmazenagemSituaoAtual_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemSituaoAtual_32, 
                style: style_ArmazenagemSituaoAtual_32,
                popuplayertitle: 'Armazenagem - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemSituaoAtual_32.png" /> Armazenagem - Situação Atual '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_33 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_33 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_33.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_33.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_33);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_33, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_33,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_33.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Longo Prazo '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_34 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_34 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_34.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_34.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_34);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_34, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_34,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_34.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Médio Prazo'
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_35 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_35 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_35.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_35.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_35);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_35, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_35,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_35.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Curto Prazo '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_36 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_36 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_36.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_36.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_36);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_36, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_36,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_36.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Situação Atual '
            });
var format_reasAfetassOperaesPorturiasArrendadasLongoPrazo_37 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasLongoPrazo_37 = format_reasAfetassOperaesPorturiasArrendadasLongoPrazo_37.readFeatures(json_reasAfetassOperaesPorturiasArrendadasLongoPrazo_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasLongoPrazo_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasLongoPrazo_37.addFeatures(features_reasAfetassOperaesPorturiasArrendadasLongoPrazo_37);
var lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasLongoPrazo_37, 
                style: style_reasAfetassOperaesPorturiasArrendadasLongoPrazo_37,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasLongoPrazo_37.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Longo Prazo '
            });
var format_reasAfetassOperaesPorturiasArrendadasMdioPrazo_38 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasMdioPrazo_38 = format_reasAfetassOperaesPorturiasArrendadasMdioPrazo_38.readFeatures(json_reasAfetassOperaesPorturiasArrendadasMdioPrazo_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasMdioPrazo_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasMdioPrazo_38.addFeatures(features_reasAfetassOperaesPorturiasArrendadasMdioPrazo_38);
var lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasMdioPrazo_38, 
                style: style_reasAfetassOperaesPorturiasArrendadasMdioPrazo_38,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasMdioPrazo_38.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Médio Prazo '
            });
var format_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_39 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_39 = format_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_39.readFeatures(json_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_39.addFeatures(features_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_39);
var lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_39, 
                style: style_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_39,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasCurtoPrazo_39.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Curto Prazo '
            });
var format_reasAfetassOperaesPorturiasArrendadasSituaoAtual_40 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasSituaoAtual_40 = format_reasAfetassOperaesPorturiasArrendadasSituaoAtual_40.readFeatures(json_reasAfetassOperaesPorturiasArrendadasSituaoAtual_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasSituaoAtual_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasSituaoAtual_40.addFeatures(features_reasAfetassOperaesPorturiasArrendadasSituaoAtual_40);
var lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasSituaoAtual_40, 
                style: style_reasAfetassOperaesPorturiasArrendadasSituaoAtual_40,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasSituaoAtual_40.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Situação Atual '
            });
var format_GranelLquidoGasoso_41 = new ol.format.GeoJSON();
var features_GranelLquidoGasoso_41 = format_GranelLquidoGasoso_41.readFeatures(json_GranelLquidoGasoso_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelLquidoGasoso_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelLquidoGasoso_41.addFeatures(features_GranelLquidoGasoso_41);
var lyr_GranelLquidoGasoso_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelLquidoGasoso_41, 
                style: style_GranelLquidoGasoso_41,
                popuplayertitle: 'Granel Líquido/Gasoso',
                interactive: true,
                title: '<img src="styles/legend/GranelLquidoGasoso_41.png" /> Granel Líquido/Gasoso'
            });
var format_Multipropsito_42 = new ol.format.GeoJSON();
var features_Multipropsito_42 = format_Multipropsito_42.readFeatures(json_Multipropsito_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Multipropsito_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Multipropsito_42.addFeatures(features_Multipropsito_42);
var lyr_Multipropsito_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Multipropsito_42, 
                style: style_Multipropsito_42,
                popuplayertitle: 'Multipropósito',
                interactive: true,
                title: '<img src="styles/legend/Multipropsito_42.png" /> Multipropósito'
            });
var format_GranelLquidoGasoso_43 = new ol.format.GeoJSON();
var features_GranelLquidoGasoso_43 = format_GranelLquidoGasoso_43.readFeatures(json_GranelLquidoGasoso_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelLquidoGasoso_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelLquidoGasoso_43.addFeatures(features_GranelLquidoGasoso_43);
var lyr_GranelLquidoGasoso_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelLquidoGasoso_43, 
                style: style_GranelLquidoGasoso_43,
                popuplayertitle: 'Granel Líquido/Gasoso',
                interactive: true,
                title: '<img src="styles/legend/GranelLquidoGasoso_43.png" /> Granel Líquido/Gasoso'
            });
var format_Multipropsito_44 = new ol.format.GeoJSON();
var features_Multipropsito_44 = format_Multipropsito_44.readFeatures(json_Multipropsito_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Multipropsito_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Multipropsito_44.addFeatures(features_Multipropsito_44);
var lyr_Multipropsito_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Multipropsito_44, 
                style: style_Multipropsito_44,
                popuplayertitle: 'Multipropósito',
                interactive: true,
                title: '<img src="styles/legend/Multipropsito_44.png" /> Multipropósito'
            });
var format_GranelLquidoGasoso_45 = new ol.format.GeoJSON();
var features_GranelLquidoGasoso_45 = format_GranelLquidoGasoso_45.readFeatures(json_GranelLquidoGasoso_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelLquidoGasoso_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelLquidoGasoso_45.addFeatures(features_GranelLquidoGasoso_45);
var lyr_GranelLquidoGasoso_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelLquidoGasoso_45, 
                style: style_GranelLquidoGasoso_45,
                popuplayertitle: 'Granel Líquido/Gasoso ',
                interactive: true,
                title: '<img src="styles/legend/GranelLquidoGasoso_45.png" /> Granel Líquido/Gasoso '
            });
var format_Multipropsito_46 = new ol.format.GeoJSON();
var features_Multipropsito_46 = format_Multipropsito_46.readFeatures(json_Multipropsito_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Multipropsito_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Multipropsito_46.addFeatures(features_Multipropsito_46);
var lyr_Multipropsito_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Multipropsito_46, 
                style: style_Multipropsito_46,
                popuplayertitle: 'Multipropósito',
                interactive: true,
                title: '<img src="styles/legend/Multipropsito_46.png" /> Multipropósito'
            });
var format_GranelLquidoGasoso_47 = new ol.format.GeoJSON();
var features_GranelLquidoGasoso_47 = format_GranelLquidoGasoso_47.readFeatures(json_GranelLquidoGasoso_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelLquidoGasoso_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelLquidoGasoso_47.addFeatures(features_GranelLquidoGasoso_47);
var lyr_GranelLquidoGasoso_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelLquidoGasoso_47, 
                style: style_GranelLquidoGasoso_47,
                popuplayertitle: 'Granel Líquido/Gasoso ',
                interactive: true,
                title: '<img src="styles/legend/GranelLquidoGasoso_47.png" /> Granel Líquido/Gasoso '
            });
var format_Multipropsito_48 = new ol.format.GeoJSON();
var features_Multipropsito_48 = format_Multipropsito_48.readFeatures(json_Multipropsito_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Multipropsito_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Multipropsito_48.addFeatures(features_Multipropsito_48);
var lyr_Multipropsito_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Multipropsito_48, 
                style: style_Multipropsito_48,
                popuplayertitle: 'Multipropósito',
                interactive: true,
                title: '<img src="styles/legend/Multipropsito_48.png" /> Multipropósito'
            });
var format_reasAfetassOperaesPorturiasLongoPrazo_49 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasLongoPrazo_49 = format_reasAfetassOperaesPorturiasLongoPrazo_49.readFeatures(json_reasAfetassOperaesPorturiasLongoPrazo_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasLongoPrazo_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasLongoPrazo_49.addFeatures(features_reasAfetassOperaesPorturiasLongoPrazo_49);
var lyr_reasAfetassOperaesPorturiasLongoPrazo_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasLongoPrazo_49, 
                style: style_reasAfetassOperaesPorturiasLongoPrazo_49,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasLongoPrazo_49.png" /> Áreas Afetas às Operações Portuárias - Longo Prazo '
            });
var format_reasAfetassOperaesPorturiasMdioPrazo_50 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasMdioPrazo_50 = format_reasAfetassOperaesPorturiasMdioPrazo_50.readFeatures(json_reasAfetassOperaesPorturiasMdioPrazo_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasMdioPrazo_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasMdioPrazo_50.addFeatures(features_reasAfetassOperaesPorturiasMdioPrazo_50);
var lyr_reasAfetassOperaesPorturiasMdioPrazo_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasMdioPrazo_50, 
                style: style_reasAfetassOperaesPorturiasMdioPrazo_50,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasMdioPrazo_50.png" /> Áreas Afetas às Operações Portuárias - Médio Prazo '
            });
var format_reasAfetassOperaesPorturiasCurtoPrazo_51 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasCurtoPrazo_51 = format_reasAfetassOperaesPorturiasCurtoPrazo_51.readFeatures(json_reasAfetassOperaesPorturiasCurtoPrazo_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_51.addFeatures(features_reasAfetassOperaesPorturiasCurtoPrazo_51);
var lyr_reasAfetassOperaesPorturiasCurtoPrazo_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_51, 
                style: style_reasAfetassOperaesPorturiasCurtoPrazo_51,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasCurtoPrazo_51.png" /> Áreas Afetas às Operações Portuárias - Curto Prazo '
            });
var format_reasAfetassOperaesPorturiasSituaoAtual_52 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasSituaoAtual_52 = format_reasAfetassOperaesPorturiasSituaoAtual_52.readFeatures(json_reasAfetassOperaesPorturiasSituaoAtual_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasSituaoAtual_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasSituaoAtual_52.addFeatures(features_reasAfetassOperaesPorturiasSituaoAtual_52);
var lyr_reasAfetassOperaesPorturiasSituaoAtual_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasSituaoAtual_52, 
                style: style_reasAfetassOperaesPorturiasSituaoAtual_52,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasSituaoAtual_52.png" /> Áreas Afetas às Operações Portuárias - Situação Atual '
            });
var format_PoligonaldareadoPortoOrganizadodeBarradoRiacho_53 = new ol.format.GeoJSON();
var features_PoligonaldareadoPortoOrganizadodeBarradoRiacho_53 = format_PoligonaldareadoPortoOrganizadodeBarradoRiacho_53.readFeatures(json_PoligonaldareadoPortoOrganizadodeBarradoRiacho_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PoligonaldareadoPortoOrganizadodeBarradoRiacho_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoligonaldareadoPortoOrganizadodeBarradoRiacho_53.addFeatures(features_PoligonaldareadoPortoOrganizadodeBarradoRiacho_53);
var lyr_PoligonaldareadoPortoOrganizadodeBarradoRiacho_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoligonaldareadoPortoOrganizadodeBarradoRiacho_53, 
                style: style_PoligonaldareadoPortoOrganizadodeBarradoRiacho_53,
                popuplayertitle: 'Poligonal da Área do Porto Organizado de Barra do Riacho',
                interactive: true,
                title: '<img src="styles/legend/PoligonaldareadoPortoOrganizadodeBarradoRiacho_53.png" /> Poligonal da Área do Porto Organizado de Barra do Riacho'
            });
var group_PoligonaldareadoPortoOrganizado = new ol.layer.Group({
                                layers: [lyr_PoligonaldareadoPortoOrganizadodeBarradoRiacho_53,],
                                fold: 'open',
                                title: 'Poligonal da Área do Porto Organizado '});
var group_reasAfetassOperaesPorturias = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasLongoPrazo_49,lyr_reasAfetassOperaesPorturiasMdioPrazo_50,lyr_reasAfetassOperaesPorturiasCurtoPrazo_51,lyr_reasAfetassOperaesPorturiasSituaoAtual_52,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias '});
var group_reasAfetassOperaesPorturiasporPerfildeCargaSituaoAtual = new ol.layer.Group({
                                layers: [lyr_GranelLquidoGasoso_47,lyr_Multipropsito_48,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Situação Atual '});
var group_reasAfetassOperaesPorturiasporPerfildeCargaCurtoPrazo = new ol.layer.Group({
                                layers: [lyr_GranelLquidoGasoso_45,lyr_Multipropsito_46,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Curto Prazo'});
var group_reasAfetassOperaesPorturiasporPerfildeCargaMdioPrazo = new ol.layer.Group({
                                layers: [lyr_GranelLquidoGasoso_43,lyr_Multipropsito_44,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Médio Prazo'});
var group_reasAfetassOperaesPorturiasporPerfildeCargaLongoPrazo = new ol.layer.Group({
                                layers: [lyr_GranelLquidoGasoso_41,lyr_Multipropsito_42,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Longo Prazo'});
var group_reasAfetassOperaesPorturiasArrendadas = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_37,lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_38,lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_39,lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_40,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias Arrendadas '});
var group_reasAfetassOperaesPorturiasDisponveisparaArrendamento = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_33,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_34,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_35,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_36,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento '});
var group_Armazenagem = new ol.layer.Group({
                                layers: [lyr_ArmazenagemLongoPrazo_29,lyr_ArmazenagemMdioPrazo_30,lyr_ArmazenagemCurtoPrazo_31,lyr_ArmazenagemSituaoAtual_32,],
                                fold: 'open',
                                title: 'Armazenagem '});
var group_Acostagem = new ol.layer.Group({
                                layers: [lyr_AcostagemLongoPrazo_25,lyr_AcostagemMdioPrazo_26,lyr_AcostagemCurtoPrazo_27,lyr_AcostagemSituaoAtual_28,],
                                fold: 'open',
                                title: 'Acostagem '});
var group_reasNoAfetassOperaesPorturias = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasLongoPrazo_21,lyr_reasNoAfetassOperaesPorturiasMdioPrazo_22,lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_23,lyr_reasNoAfetassOperaesPorturiasSituaoAtual_24,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias '});
var group_AcessosRodoviriosExternos = new ol.layer.Group({
                                layers: [lyr_AcessosRodoviriosExternos_20,],
                                fold: 'open',
                                title: 'Acessos Rodoviários Externos '});
var group_AcessosRodoviriosInternos = new ol.layer.Group({
                                layers: [lyr_AcessosRodoviriosInternosLongoPrazo_16,lyr_AcessosRodoviriosInternosMdioPrazo_17,lyr_AcessosRodoviriosInternosCurtoPrazo_18,lyr_AcessosRodoviriosInternosSituaoAtual_19,],
                                fold: 'close',
                                title: 'Acessos Rodoviários Internos '});
var group_AcessosFerroviriosExternos = new ol.layer.Group({
                                layers: [lyr_AcessosFerroviriosExternos_15,],
                                fold: 'open',
                                title: 'Acessos Ferroviários Externos '});
var group_AcessosDutoviriosExternos = new ol.layer.Group({
                                layers: [lyr_AcessosDutoviriosExternos_14,],
                                fold: 'open',
                                title: 'Acessos Dutoviários Externos '});
var group_TerminaldeUsoPrivado = new ol.layer.Group({
                                layers: [lyr_TerminaldeUsoPrivado_13,],
                                fold: 'open',
                                title: 'Terminal de Uso Privado '});
var group_CanaisdeAcesso = new ol.layer.Group({
                                layers: [lyr_CanaisdeAcessoLongoPrazo_9,lyr_CanaisdeAcessoMdioPrazo_10,lyr_CanaisdeAcessoCurtoPrazo_11,lyr_CanaisdeAcessoSituaoAtual_12,],
                                fold: 'open',
                                title: 'Canais de Acesso '});
var group_BaciasdeEvoluo = new ol.layer.Group({
                                layers: [lyr_BaciasdeEvoluoLongoPrazo_5,lyr_BaciasdeEvoluoMdioPrazo_6,lyr_BaciasdeEvoluoCurtoPrazo_7,lyr_BaciasdeEvoluoSituaoAtual_8,],
                                fold: 'open',
                                title: 'Bacias de Evolução '});
var group_Fundeadouros = new ol.layer.Group({
                                layers: [lyr_FundeadourosLongoPrazo_1,lyr_FundeadourosMdioPrazo_2,lyr_FundeadourosCurtoPrazo_3,lyr_FundeadourosSituaoAtual_4,],
                                fold: 'open',
                                title: 'Fundeadouros '});

lyr_GoogleSatellite_0.setVisible(true);lyr_FundeadourosLongoPrazo_1.setVisible(false);lyr_FundeadourosMdioPrazo_2.setVisible(false);lyr_FundeadourosCurtoPrazo_3.setVisible(false);lyr_FundeadourosSituaoAtual_4.setVisible(false);lyr_BaciasdeEvoluoLongoPrazo_5.setVisible(false);lyr_BaciasdeEvoluoMdioPrazo_6.setVisible(false);lyr_BaciasdeEvoluoCurtoPrazo_7.setVisible(false);lyr_BaciasdeEvoluoSituaoAtual_8.setVisible(false);lyr_CanaisdeAcessoLongoPrazo_9.setVisible(false);lyr_CanaisdeAcessoMdioPrazo_10.setVisible(false);lyr_CanaisdeAcessoCurtoPrazo_11.setVisible(false);lyr_CanaisdeAcessoSituaoAtual_12.setVisible(false);lyr_TerminaldeUsoPrivado_13.setVisible(false);lyr_AcessosDutoviriosExternos_14.setVisible(false);lyr_AcessosFerroviriosExternos_15.setVisible(false);lyr_AcessosRodoviriosInternosLongoPrazo_16.setVisible(false);lyr_AcessosRodoviriosInternosMdioPrazo_17.setVisible(false);lyr_AcessosRodoviriosInternosCurtoPrazo_18.setVisible(false);lyr_AcessosRodoviriosInternosSituaoAtual_19.setVisible(false);lyr_AcessosRodoviriosExternos_20.setVisible(false);lyr_reasNoAfetassOperaesPorturiasLongoPrazo_21.setVisible(false);lyr_reasNoAfetassOperaesPorturiasMdioPrazo_22.setVisible(false);lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_23.setVisible(false);lyr_reasNoAfetassOperaesPorturiasSituaoAtual_24.setVisible(false);lyr_AcostagemLongoPrazo_25.setVisible(false);lyr_AcostagemMdioPrazo_26.setVisible(false);lyr_AcostagemCurtoPrazo_27.setVisible(false);lyr_AcostagemSituaoAtual_28.setVisible(false);lyr_ArmazenagemLongoPrazo_29.setVisible(false);lyr_ArmazenagemMdioPrazo_30.setVisible(false);lyr_ArmazenagemCurtoPrazo_31.setVisible(false);lyr_ArmazenagemSituaoAtual_32.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_33.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_34.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_35.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_36.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_37.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_38.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_39.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_40.setVisible(false);lyr_GranelLquidoGasoso_41.setVisible(false);lyr_Multipropsito_42.setVisible(false);lyr_GranelLquidoGasoso_43.setVisible(false);lyr_Multipropsito_44.setVisible(false);lyr_GranelLquidoGasoso_45.setVisible(false);lyr_Multipropsito_46.setVisible(false);lyr_GranelLquidoGasoso_47.setVisible(false);lyr_Multipropsito_48.setVisible(false);lyr_reasAfetassOperaesPorturiasLongoPrazo_49.setVisible(false);lyr_reasAfetassOperaesPorturiasMdioPrazo_50.setVisible(false);lyr_reasAfetassOperaesPorturiasCurtoPrazo_51.setVisible(false);lyr_reasAfetassOperaesPorturiasSituaoAtual_52.setVisible(false);lyr_PoligonaldareadoPortoOrganizadodeBarradoRiacho_53.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_Fundeadouros,group_BaciasdeEvoluo,group_CanaisdeAcesso,group_TerminaldeUsoPrivado,group_AcessosDutoviriosExternos,group_AcessosFerroviriosExternos,group_AcessosRodoviriosInternos,group_AcessosRodoviriosExternos,group_reasNoAfetassOperaesPorturias,group_Acostagem,group_Armazenagem,group_reasAfetassOperaesPorturiasDisponveisparaArrendamento,group_reasAfetassOperaesPorturiasArrendadas,group_reasAfetassOperaesPorturiasporPerfildeCargaLongoPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaMdioPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaCurtoPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaSituaoAtual,group_reasAfetassOperaesPorturias,group_PoligonaldareadoPortoOrganizado];
lyr_FundeadourosLongoPrazo_1.set('fieldAliases', {'N_Ident': 'Número de Identificação ', 'Funcao': 'Função ', 'Calado': 'Calado (m) ', });
lyr_FundeadourosMdioPrazo_2.set('fieldAliases', {'N_Ident': 'Número de Identificação ', 'Funcao': 'Função ', 'Calado': 'Calado (m) ', });
lyr_FundeadourosCurtoPrazo_3.set('fieldAliases', {'N_Ident': 'Número de Identificação ', 'Funcao': 'Função ', 'Calado': 'Calado (m) ', });
lyr_FundeadourosSituaoAtual_4.set('fieldAliases', {'N_Ident': 'Número de Identificação ', 'Funcao': 'Função ', 'Calado': 'Calado (m) ', });
lyr_BaciasdeEvoluoLongoPrazo_5.set('fieldAliases', {'Funcao': 'Função ', 'Calado': 'Calado (m) ', });
lyr_BaciasdeEvoluoMdioPrazo_6.set('fieldAliases', {'Funcao': 'Função ', 'Calado': 'Calado (m) ', });
lyr_BaciasdeEvoluoCurtoPrazo_7.set('fieldAliases', {'Funcao': 'Função ', 'Calado': 'Calado (m) ', });
lyr_BaciasdeEvoluoSituaoAtual_8.set('fieldAliases', {'Funcao': 'Função ', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoLongoPrazo_9.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoMdioPrazo_10.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoCurtoPrazo_11.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoSituaoAtual_12.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_TerminaldeUsoPrivado_13.set('fieldAliases', {'Nome': 'Nome', 'T_Produto': 'Tipo de Produto ', 'Companhia': 'Companhia', 'Area': 'Área (m²) ', });
lyr_AcessosDutoviriosExternos_14.set('fieldAliases', {'Nome': 'Nome', 'Mat_Trans': 'Material Transportado ', 'Posicao': 'Posição ', 'Operador': 'Operador', 'T_Duto': 'Tipo de Duto ', });
lyr_AcessosFerroviriosExternos_15.set('fieldAliases', {'Linha': 'Linha', 'Operador': 'Operador', 'Trecho': 'Trecho', 'Descricao': 'Descrição ', });
lyr_AcessosRodoviriosInternosLongoPrazo_16.set('fieldAliases', {'Ident': 'Identificação ', 'NoPistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosInternosMdioPrazo_17.set('fieldAliases', {'Ident': 'Identificação ', 'NoPistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosInternosCurtoPrazo_18.set('fieldAliases', {'Ident': 'Identificação ', 'NoPistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosInternosSituaoAtual_19.set('fieldAliases', {'Ident': 'Identificação ', 'NoPistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosExternos_20.set('fieldAliases', {'Nome': 'Nome', 'Sigla': 'Sigla', 'Jurisdicao': 'Jurisdição ', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_21.set('fieldAliases', {'Nome': 'Nome', 'Destinacao': 'Destinação ', 'Area': 'Área (m²) ', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_22.set('fieldAliases', {'Nome': 'Nome', 'Destinacao': 'Destinação ', 'Area': 'Área (m²) ', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_23.set('fieldAliases', {'Nome': 'Nome', 'Destinacao': 'Destinação ', 'Area': 'Área (m²) ', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_24.set('fieldAliases', {'Nome': 'Nome', 'Destinacao': 'Destinação ', 'Area': 'Área (m²) ', });
lyr_AcostagemLongoPrazo_25.set('fieldAliases', {'Id_Cais': 'Identificador do Cais ', 'Id_berco': 'Identificador do Berço ', 'C_Const': 'Características Construtivas ', 'Comp': 'Comprimento (m) ', 'Profund': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Per_Carga': 'Perfil de Carga ', });
lyr_AcostagemMdioPrazo_26.set('fieldAliases', {'Id_Cais': 'Identificador do Cais ', 'Id_berco': 'Identificador do Berço ', 'C_Const': 'Características Construtivas ', 'Comp': 'Comprimento (m) ', 'Profund': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Per_Carga': 'Perfil de Carga ', });
lyr_AcostagemCurtoPrazo_27.set('fieldAliases', {'Id_Cais': 'Identificador do Cais ', 'Id_berco': 'Identificador do Berço ', 'C_Const': 'Características Construtivas ', 'Comp': 'Comprimento (m) ', 'Profund': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Per_Carga': 'Perfil de Carga ', });
lyr_AcostagemSituaoAtual_28.set('fieldAliases', {'Id_Cais': 'Identificador do Cais ', 'Id_berco': 'Identificador do Berço ', 'C_Const': 'Características Construtivas ', 'Comp': 'Comprimento (m) ', 'Profund': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Per_Carga': 'Perfil de Carga ', });
lyr_ArmazenagemLongoPrazo_29.set('fieldAliases', {'T_Instal': 'Tipo da Instalação ', 'Capacidade': 'Capacidade', 'Area': 'Área (m²) ', 'Volume': 'Volume (m³) ', });
lyr_ArmazenagemMdioPrazo_30.set('fieldAliases', {'T_Instal': 'Tipo da Instalação ', 'Capacidade': 'Capacidade', 'Area': 'Área (m²) ', 'Volume': 'Volume (m³) ', });
lyr_ArmazenagemCurtoPrazo_31.set('fieldAliases', {'T_Instal': 'Tipo da Instalação ', 'Capacidade': 'Capacidade', 'Area': 'Área (m²) ', 'Volume': 'Volume (m³) ', });
lyr_ArmazenagemSituaoAtual_32.set('fieldAliases', {'T_Instal': 'Tipo da Instalação ', 'Capacidade': 'Capacidade ', 'Area': 'Área (m²) ', 'Volume': 'Volume (m³) ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_33.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_34.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_35.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_36.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', });
lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_37.set('fieldAliases', {'Arrend': 'Arrendatário ', 'No_Cont': 'Número do Contrato ', 'D_Inicio': 'Data Início do Contrato ', 'D_Term': 'Data do Término do Contrato ', 'P_Prorrog': 'Possibilidade de Prorrogação ', 'Perfil': 'Perfil de Carga ', 'Area': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_38.set('fieldAliases', {'Arrend': 'Arrendatário ', 'No_Cont': 'Número do Contrato ', 'D_Inicio': 'Data Início do Contrato ', 'D_Term': 'Data do Término do Contrato ', 'P_Prorrog': 'Possibilidade de Prorrogação ', 'Perfil': 'Perfil de Carga ', 'Area': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_39.set('fieldAliases', {'Arrend': 'Arrendatário ', 'No_Cont': 'Número do Contrato ', 'D_Inicio': 'Data Início do Contrato ', 'D_Term': 'Data do Término do Contrato ', 'P_Prorrog': 'Possibilidade de Prorrogação ', 'Perfil': 'Perfil de Carga ', 'Area': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_40.set('fieldAliases', {'Arrend': 'Arrendatário ', 'No_Cont': 'Número do Contrato ', 'D_Inicio': 'Data Início do Contrato ', 'D_Term': 'Data do Término do Contrato ', 'P_Prorrog': 'Possibilidade de Prorrogação ', 'Perfil': 'Perfil de Carga ', 'Area': 'Área (m²) ', });
lyr_GranelLquidoGasoso_41.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_Multipropsito_42.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_GranelLquidoGasoso_43.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_Multipropsito_44.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_GranelLquidoGasoso_45.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_Multipropsito_46.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_GranelLquidoGasoso_47.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_Multipropsito_48.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_49.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_50.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_51.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_52.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_Instal': 'Tipo de Instalação ', });
lyr_PoligonaldareadoPortoOrganizadodeBarradoRiacho_53.set('fieldAliases', {'Ins_Legal': 'Instrumento Legal ', 'Anexo': 'Anexo', });
lyr_FundeadourosLongoPrazo_1.set('fieldImages', {'N_Ident': 'TextEdit', 'Funcao': 'TextEdit', 'Calado': 'TextEdit', });
lyr_FundeadourosMdioPrazo_2.set('fieldImages', {'N_Ident': 'TextEdit', 'Funcao': 'TextEdit', 'Calado': 'TextEdit', });
lyr_FundeadourosCurtoPrazo_3.set('fieldImages', {'N_Ident': 'TextEdit', 'Funcao': 'TextEdit', 'Calado': 'TextEdit', });
lyr_FundeadourosSituaoAtual_4.set('fieldImages', {'N_Ident': 'TextEdit', 'Funcao': 'TextEdit', 'Calado': 'TextEdit', });
lyr_BaciasdeEvoluoLongoPrazo_5.set('fieldImages', {'Funcao': 'TextEdit', 'Calado': 'TextEdit', });
lyr_BaciasdeEvoluoMdioPrazo_6.set('fieldImages', {'Funcao': 'TextEdit', 'Calado': 'TextEdit', });
lyr_BaciasdeEvoluoCurtoPrazo_7.set('fieldImages', {'Funcao': 'TextEdit', 'Calado': 'TextEdit', });
lyr_BaciasdeEvoluoSituaoAtual_8.set('fieldImages', {'Funcao': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoLongoPrazo_9.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoMdioPrazo_10.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoCurtoPrazo_11.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoSituaoAtual_12.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_TerminaldeUsoPrivado_13.set('fieldImages', {'Nome': 'TextEdit', 'T_Produto': 'TextEdit', 'Companhia': 'TextEdit', 'Area': 'TextEdit', });
lyr_AcessosDutoviriosExternos_14.set('fieldImages', {'Nome': 'TextEdit', 'Mat_Trans': 'TextEdit', 'Posicao': 'TextEdit', 'Operador': 'TextEdit', 'T_Duto': 'TextEdit', });
lyr_AcessosFerroviriosExternos_15.set('fieldImages', {'Linha': 'TextEdit', 'Operador': 'TextEdit', 'Trecho': 'TextEdit', 'Descricao': 'TextEdit', });
lyr_AcessosRodoviriosInternosLongoPrazo_16.set('fieldImages', {'Ident': 'TextEdit', 'NoPistas': 'Range', });
lyr_AcessosRodoviriosInternosMdioPrazo_17.set('fieldImages', {'Ident': 'TextEdit', 'NoPistas': 'Range', });
lyr_AcessosRodoviriosInternosCurtoPrazo_18.set('fieldImages', {'Ident': 'TextEdit', 'NoPistas': 'Range', });
lyr_AcessosRodoviriosInternosSituaoAtual_19.set('fieldImages', {'Ident': 'TextEdit', 'NoPistas': 'Range', });
lyr_AcessosRodoviriosExternos_20.set('fieldImages', {'Nome': 'TextEdit', 'Sigla': 'TextEdit', 'Jurisdicao': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_21.set('fieldImages', {'Nome': 'TextEdit', 'Destinacao': 'TextEdit', 'Area': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_22.set('fieldImages', {'Nome': 'TextEdit', 'Destinacao': 'TextEdit', 'Area': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_23.set('fieldImages', {'Nome': 'TextEdit', 'Destinacao': 'TextEdit', 'Area': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_24.set('fieldImages', {'Nome': 'TextEdit', 'Destinacao': 'TextEdit', 'Area': 'TextEdit', });
lyr_AcostagemLongoPrazo_25.set('fieldImages', {'Id_Cais': 'TextEdit', 'Id_berco': 'TextEdit', 'C_Const': 'TextEdit', 'Comp': 'TextEdit', 'Profund': 'Range', 'Calado': 'TextEdit', 'Per_Carga': 'TextEdit', });
lyr_AcostagemMdioPrazo_26.set('fieldImages', {'Id_Cais': 'TextEdit', 'Id_berco': 'TextEdit', 'C_Const': 'TextEdit', 'Comp': 'TextEdit', 'Profund': 'Range', 'Calado': 'TextEdit', 'Per_Carga': 'TextEdit', });
lyr_AcostagemCurtoPrazo_27.set('fieldImages', {'Id_Cais': 'TextEdit', 'Id_berco': 'TextEdit', 'C_Const': 'TextEdit', 'Comp': 'TextEdit', 'Profund': 'Range', 'Calado': 'TextEdit', 'Per_Carga': 'TextEdit', });
lyr_AcostagemSituaoAtual_28.set('fieldImages', {'Id_Cais': 'TextEdit', 'Id_berco': 'TextEdit', 'C_Const': 'TextEdit', 'Comp': 'TextEdit', 'Profund': 'Range', 'Calado': 'TextEdit', 'Per_Carga': 'TextEdit', });
lyr_ArmazenagemLongoPrazo_29.set('fieldImages', {'T_Instal': 'TextEdit', 'Capacidade': 'TextEdit', 'Area': 'TextEdit', 'Volume': 'TextEdit', });
lyr_ArmazenagemMdioPrazo_30.set('fieldImages', {'T_Instal': 'TextEdit', 'Capacidade': 'TextEdit', 'Area': 'TextEdit', 'Volume': 'TextEdit', });
lyr_ArmazenagemCurtoPrazo_31.set('fieldImages', {'T_Instal': 'TextEdit', 'Capacidade': 'TextEdit', 'Area': 'TextEdit', 'Volume': 'TextEdit', });
lyr_ArmazenagemSituaoAtual_32.set('fieldImages', {'T_Instal': 'TextEdit', 'Capacidade': 'TextEdit', 'Area': 'TextEdit', 'Volume': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_33.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_34.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_35.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_36.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_37.set('fieldImages', {'Arrend': 'TextEdit', 'No_Cont': 'TextEdit', 'D_Inicio': 'DateTime', 'D_Term': 'DateTime', 'P_Prorrog': 'TextEdit', 'Perfil': 'TextEdit', 'Area': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_38.set('fieldImages', {'Arrend': 'TextEdit', 'No_Cont': 'TextEdit', 'D_Inicio': 'DateTime', 'D_Term': 'DateTime', 'P_Prorrog': 'TextEdit', 'Perfil': 'TextEdit', 'Area': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_39.set('fieldImages', {'Arrend': 'TextEdit', 'No_Cont': 'TextEdit', 'D_Inicio': 'DateTime', 'D_Term': 'DateTime', 'P_Prorrog': 'TextEdit', 'Perfil': 'TextEdit', 'Area': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_40.set('fieldImages', {'Arrend': 'TextEdit', 'No_Cont': 'TextEdit', 'D_Inicio': 'DateTime', 'D_Term': 'DateTime', 'P_Prorrog': 'TextEdit', 'Perfil': 'TextEdit', 'Area': 'TextEdit', });
lyr_GranelLquidoGasoso_41.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_Multipropsito_42.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_GranelLquidoGasoso_43.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_Multipropsito_44.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_GranelLquidoGasoso_45.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_Multipropsito_46.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_GranelLquidoGasoso_47.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_Multipropsito_48.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_49.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_50.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_51.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_52.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T_Instal': 'TextEdit', });
lyr_PoligonaldareadoPortoOrganizadodeBarradoRiacho_53.set('fieldImages', {'Ins_Legal': 'TextEdit', 'Anexo': 'TextEdit', });
lyr_FundeadourosLongoPrazo_1.set('fieldLabels', {'N_Ident': 'inline label - visible with data', 'Funcao': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_FundeadourosMdioPrazo_2.set('fieldLabels', {'N_Ident': 'inline label - visible with data', 'Funcao': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_FundeadourosCurtoPrazo_3.set('fieldLabels', {'N_Ident': 'inline label - visible with data', 'Funcao': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_FundeadourosSituaoAtual_4.set('fieldLabels', {'N_Ident': 'inline label - visible with data', 'Funcao': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_BaciasdeEvoluoLongoPrazo_5.set('fieldLabels', {'Funcao': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_BaciasdeEvoluoMdioPrazo_6.set('fieldLabels', {'Funcao': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_BaciasdeEvoluoCurtoPrazo_7.set('fieldLabels', {'Funcao': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_BaciasdeEvoluoSituaoAtual_8.set('fieldLabels', {'Funcao': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoLongoPrazo_9.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoMdioPrazo_10.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoCurtoPrazo_11.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoSituaoAtual_12.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_TerminaldeUsoPrivado_13.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T_Produto': 'inline label - visible with data', 'Companhia': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_AcessosDutoviriosExternos_14.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Mat_Trans': 'inline label - visible with data', 'Posicao': 'inline label - visible with data', 'Operador': 'inline label - visible with data', 'T_Duto': 'inline label - visible with data', });
lyr_AcessosFerroviriosExternos_15.set('fieldLabels', {'Linha': 'inline label - visible with data', 'Operador': 'inline label - visible with data', 'Trecho': 'inline label - visible with data', 'Descricao': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosLongoPrazo_16.set('fieldLabels', {'Ident': 'inline label - visible with data', 'NoPistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosMdioPrazo_17.set('fieldLabels', {'Ident': 'inline label - visible with data', 'NoPistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosCurtoPrazo_18.set('fieldLabels', {'Ident': 'inline label - visible with data', 'NoPistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosSituaoAtual_19.set('fieldLabels', {'Ident': 'inline label - visible with data', 'NoPistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosExternos_20.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Sigla': 'inline label - visible with data', 'Jurisdicao': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_21.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_22.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_23.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_24.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_AcostagemLongoPrazo_25.set('fieldLabels', {'Id_Cais': 'inline label - visible with data', 'Id_berco': 'inline label - visible with data', 'C_Const': 'inline label - visible with data', 'Comp': 'inline label - visible with data', 'Profund': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per_Carga': 'inline label - visible with data', });
lyr_AcostagemMdioPrazo_26.set('fieldLabels', {'Id_Cais': 'inline label - visible with data', 'Id_berco': 'inline label - visible with data', 'C_Const': 'inline label - visible with data', 'Comp': 'inline label - visible with data', 'Profund': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per_Carga': 'inline label - visible with data', });
lyr_AcostagemCurtoPrazo_27.set('fieldLabels', {'Id_Cais': 'inline label - visible with data', 'Id_berco': 'inline label - visible with data', 'C_Const': 'inline label - visible with data', 'Comp': 'inline label - visible with data', 'Profund': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per_Carga': 'inline label - visible with data', });
lyr_AcostagemSituaoAtual_28.set('fieldLabels', {'Id_Cais': 'inline label - visible with data', 'Id_berco': 'inline label - visible with data', 'C_Const': 'inline label - visible with data', 'Comp': 'inline label - visible with data', 'Profund': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per_Carga': 'inline label - visible with data', });
lyr_ArmazenagemLongoPrazo_29.set('fieldLabels', {'T_Instal': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Volume': 'inline label - visible with data', });
lyr_ArmazenagemMdioPrazo_30.set('fieldLabels', {'T_Instal': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Volume': 'inline label - visible with data', });
lyr_ArmazenagemCurtoPrazo_31.set('fieldLabels', {'T_Instal': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Volume': 'inline label - visible with data', });
lyr_ArmazenagemSituaoAtual_32.set('fieldLabels', {'T_Instal': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Volume': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_33.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_34.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_35.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_36.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_37.set('fieldLabels', {'Arrend': 'inline label - visible with data', 'No_Cont': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'P_Prorrog': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_38.set('fieldLabels', {'Arrend': 'inline label - visible with data', 'No_Cont': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'P_Prorrog': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_39.set('fieldLabels', {'Arrend': 'inline label - visible with data', 'No_Cont': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'P_Prorrog': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_40.set('fieldLabels', {'Arrend': 'inline label - visible with data', 'No_Cont': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'P_Prorrog': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_GranelLquidoGasoso_41.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_Multipropsito_42.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_GranelLquidoGasoso_43.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_Multipropsito_44.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_GranelLquidoGasoso_45.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_Multipropsito_46.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_GranelLquidoGasoso_47.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_Multipropsito_48.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_49.set('fieldLabels', {'Nome': 'header label - always visible', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_50.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_51.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_52.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_Instal': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizadodeBarradoRiacho_53.set('fieldLabels', {'Ins_Legal': 'inline label - visible with data', 'Anexo': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizadodeBarradoRiacho_53.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});