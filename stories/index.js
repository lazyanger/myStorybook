import React from 'react';
import ReactDOM from 'react-dom';
import Highcharts from 'highcharts';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Calculator from './Calculator';
import ChartDemo from './ChartDemo';

import './chartStyles.css';

storiesOf('Calculator', module)
	.add('a simple calculator', () => (
		<Calculator />
	));

storiesOf('Highcharts Demo', module)
	.add('3 periods', () => {
		let options = {
			"chart": {
				"zoomType": "xy"
			},
			"title": {
				"text": "This is a title"
			},
			"subtitle": {
				"text": "The interval of xAxis is 14 days"
			},
			"yAxis": [{
				"lineWidth": 1,
				"min": 0,
				"max": 4000
			}, {
				//offset: -600,
				"lineWidth": 1,
				"lineColor": "red",
				"min": 0,
				"max": 200,
				"opposite": true
			}],
			"xAxis": {
				"type": "datetime",
				"plotLines": [{
					"color": "black",
					"dashStyle": "dot",
					"width": 2,
					"value": 1520344219497,
					"label": {
						"rotation": 0,
						"y": 10,
						"x": -280,
						"style": {
							"fontStyle": "italic"
						},
						"text": "past time"
					}
				}, {
					"color": "black",
					"dashStyle": "dot",
					"width": 2,
					"value": 1525441819497,
					"label": {
						"rotation": 0,
						"y": 10,
						"x": -250,
						"style": {
							"fontStyle": "italic"
						},
						"text": "present time"
					}
				}, {
					"width": 0,
					"value": 1525441819497,
					"label": {
						"rotation": 0,
						"y": 10,
						"x": 90,
						"style": {
							"fontStyle": "italic"
						},
						"text": "future time"
					}
				}]
			},
			"series": [{
				//"visible": false,
				//"showInLegend": false,
				"name": "past sampling per forecast group",
				"type": "spline",
				"data": [
					[1513173019497, 970],
					[1513259419497, 967],
					[1513345819497, 954],
					[1513432219497, 959],
					[1513518619497, 984],
					[1513605019497, 973],
					[1513691419497, 985],
					[1513777819497, 959],
					[1513864219497, 1011],
					[1513950619497, 986],
					[1514037019497, 982],
					[1514123419497, 980],
					[1514209819497, 1042],
					[1514296219497, 1032],
					[1514382619497, 1048],
					[1514469019497, 1038],
					[1514555419497, 994],
					[1514641819497, 981],
					[1514728219497, 981],
					[1514814619497, 1010],
					[1514901019497, 962],
					[1514987419497, 1011],
					[1515073819497, 952],
					[1515160219497, 977],
					[1515246619497, 950],
					[1515333019497, 1009],
					[1515419419497, 1041],
					[1515505819497, 1034],
					[1515592219497, 1046],
					[1515678619497, 1045],
					[1515765019497, 995],
					[1515851419497, 999],
					[1515937819497, 1044],
					[1516024219497, 950],
					[1516110619497, 964],
					[1516197019497, 1008],
					[1516283419497, 1044],
					[1516369819497, 1032],
					[1516456219497, 965],
					[1516542619497, 1049],
					[1516629019497, 1016],
					[1516715419497, 1027],
					[1516801819497, 995],
					[1516888219497, 972],
					[1516974619497, 981],
					[1517061019497, 1011],
					[1517147419497, 963],
					[1517233819497, 1034],
					[1517320219497, 960],
					[1517406619497, 1008],
					[1517493019497, 951],
					[1517579419497, 1041],
					[1517665819497, 970],
					[1517752219497, 1014],
					[1517838619497, 987],
					[1517925019497, 1000],
					[1518011419497, 1018],
					[1518097819497, 992],
					[1518184219497, 960],
					[1518270619497, 1040],
					[1518357019497, 1030],
					[1518443419497, 970],
					[1518529819497, 1032],
					[1518616219497, 995],
					[1518702619497, 1027],
					[1518789019497, 967],
					[1518875419497, 1018],
					[1518961819497, 1028],
					[1519048219497, 983],
					[1519134619497, 1032],
					[1519221019497, 1008],
					[1519307419497, 995],
					[1519393819497, 1001],
					[1519480219497, 959],
					[1519566619497, 1040],
					[1519653019497, 1001],
					[1519739419497, 987],
					[1519825819497, 952],
					[1519912219497, 1019],
					[1519998619497, 1012],
					[1520085019497, 979],
					[1520171419497, 962],
					[1520257819497, 1005],
					[1520344219497, 1027]
				]
			}, {
				"name": "current group",
				"type": "spline",
				"dashStyle": "ShortDash",
				"data": [
					[1520344219497, 1027],
					[1520430619497, 1035],
					[1520517019497, 966],
					[1520603419497, 1015],
					[1520689819497, 1035],
					[1520776219497, 1000],
					[1520862619497, 1025],
					[1520949019497, 983],
					[1521035419497, 986],
					[1521121819497, 966],
					[1521208219497, 952],
					[1521294619497, 998],
					[1521381019497, 1006],
					[1521467419497, 1011],
					[1521553819497, 1034],
					[1521640219497, 1034],
					[1521726619497, 996],
					[1521813019497, 1082],
					[1521899419497, 1142],
					[1521985819497, 1146],
					[1522072219497, 1180],
					[1522158619497, 1218],
					[1522245019497, 1265],
					[1522331419497, 1418],
					[1522417819497, 1430],
					[1522504219497, 1442],
					[1522590619497, 1454],
					[1522677019497, 1588],
					[1522763419497, 1643],
					[1522849819497, 1678],
					[1522936219497, 1834],
					[1523022619497, 1868],
					[1523109019497, 1919],
					[1523195419497, 1962],
					[1523281819497, 1995],
					[1523368219497, 2030],
					[1523454619497, 2098],
					[1523541019497, 2230],
					[1523627419497, 2230],
					[1523713819497, 2310],
					[1523800219497, 2504],
					[1523886619497, 3125],
					[1523973019497, 3158],
					[1524059419497, 3425],
					[1524145819497, 3000],
					[1524232219497, 2200],
					[1524318619497, 1300],
					[1524405019497, 800],
					[1524491419497, 810],
					[1524577819497, 820],
					[1524664219497, 850],
					[1524750619497, 900],
					[1524837019497, 980],
					[1524923419497, 1100],
					[1525009819497, 1150],
					[1525096219497, 1100],
					[1525182619497, 1089],
					[1525269019497, 1121],
					[1525355419497, 1143],
					[1525441819497, 1132]
				]
			}, {
				"name": "Canibalization group",
				"type": "area",
				"data": [
					[1521467419497, 0],
					[1521553819497, 0],
					[1521640219497, 0],
					[1521726619497, 50],
					[1521813019497, 113],
					[1521899419497, 120],
					[1521985819497, 130],
					[1522072219497, 135],
					[1522158619497, 200],
					[1522245019497, 250],
					[1522331419497, 300],
					[1522417819497, 350],
					[1522504219497, 400],
					[1522590619497, 450],
					[1522677019497, 500],
					[1522763419497, 550],
					[1522849819497, 600],
					[1522936219497, 650],
					[1523022619497, 700],
					[1523109019497, 750],
					[1523195419497, 759],
					[1523281819497, 770],
					[1523368219497, 756],
					[1523454619497, 734],
					[1523541019497, 756],
					[1523627419497, 786],
					[1523713819497, 753],
					[1523800219497, 730],
					[1523886619497, 720],
					[1523973019497, 734],
					[1524059419497, 756],
					[1524145819497, 798],
					[1524232219497, 650],
					[1524318619497, 600],
					[1524405019497, 400],
					[1524491419497, 200],
					[1524577819497, 150],
					[1524664219497, 100],
					[1524750619497, 50],
					[1524837019497, 45],
					[1524923419497, 40],
					[1525009819497, 35],
					[1525096219497, 30],
					[1525182619497, 25],
					[1525269019497, 20],
					[1525355419497, 10],
					[1525441819497, 0]
				]
			}, {
				"name": "forecast group",
				"type": "spline",
				"data": [
					[1525441819497, 1132],
					[1525528219497, 1162],
					[1525614619497, 1232],
					[1525701019497, 1332],
					[1525787419497, 1432],
					[1525873819497, 1402],
					[1525960219497, 1132],
					[1526046619497, 1311],
					[1526133019497, 1311],
					[1526219419497, 1311],
					[1526305819497, 1132],
					[1526392219497, 1132],
					[1526478619497, 932],
					[1526565019497, 1132],
					[1526651419497, 1132],
					[1526737819497, 1200],
					[1526824219497, 1400],
					[1526910619497, 1990],
					[1526997019497, 1900],
					[1527083419497, 1900],
					[1527169819497, 1632],
					[1527256219497, 1732],
					[1527342619497, 1682],
					[1527429019497, 1532],
					[1527515419497, 1632],
					[1527601819497, 1832],
					[1527688219497, 2022],
					[1527774619497, 2022],
					[1527861019497, 2222],
					[1527947419497, 2022],
					[1528033819497, 2422],
					[1528120219497, 2022],
					[1528206619497, 2022],
					[1528293019497, 2822],
					[1528379419497, 3022]
				]
			},]
		};
		return (<ChartDemo options={options} />);
	})
	.add('4 yAxises', () => {
		Highcharts.setOptions({
			// colors: [
			// 	"#f1c40f", "#f39c12",
			// 	"#e67e22", "#e74c3c"
			// ],
		});
		let options = {
			chart: {
				zoomType: 'xy',
				//animation: false
			},
			title: {
				text: 'Weather'
			},
			subtitle: {
				text: 'DataSource: WorldClimate.com'
			},
			xAxis: [{
				categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
					'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
				],
				crosshair: true
			}],
			yAxis: [{
				lineWidth: 1,
				lineColor: Highcharts.getOptions().colors[0],
				tickWidth: 1,
				tickColor: Highcharts.getOptions().colors[0],
				offset: 100,
				min: 0,
				max: 24,
				title: {
					text: 'Humidity',
					align: "high",
					rotation: 0,
					y: -20,
					x: 50,
					style: {
						color: Highcharts.getOptions().colors[0]
					}
				},
				labels: {
					format: '{value}%',
					style: {
						color: Highcharts.getOptions().colors[0]
					}
				},
				//offset: 100
			}, {
				gridLineWidth: 0,
				lineWidth: 1,
				lineColor: Highcharts.getOptions().colors[1],
				tickWidth: 1,
				tickPosition: "inside",
				tickAmount: 10,
				tickColor: Highcharts.getOptions().colors[1],
				offset: 90,
				min: 0,
				max: 270,
				title: {
					align: "high",
					rotation: 0,
					y: -20,
					x: 40,
					//enabled: false,
					text: 'Rainfall',
					style: {
						color: Highcharts.getOptions().colors[1]
					}
				},
				labels: {
					x: 60,
					format: '{value}mm',
					style: {
						color: Highcharts.getOptions().colors[1]
					}
				}
			}, {
				gridLineWidth: 0,
				lineWidth: 1,
				lineColor: Highcharts.getOptions().colors[2],
				tickWidth: 1,
				tickPosition: "inside",
				tickAmount: 10,
				tickColor: Highcharts.getOptions().colors[2],
				offset: 60,
				min: 0,
				max: 32,
				labels: {
					format: '{value}°C',
					x: -40,
					style: {
						color: Highcharts.getOptions().colors[2]
					}
				},
				title: {
					text: 'Temp',
					align: "high",
					rotation: 0,
					y: -20,
					x: -40,
					style: {
						color: Highcharts.getOptions().colors[2]
					}
				},
				opposite: true
			}, {
				gridLineWidth: 0,
				lineWidth: 1,
				lineColor: Highcharts.getOptions().colors[3],
				tickWidth: 1,
				tickColor: Highcharts.getOptions().colors[3],
				offset: 60,
				min: 1000,
				max: 1020,
				title: {
					text: 'SLP',
					align: "high",
					rotation: 0,
					y: -20,
					x: -70,
					style: {
						color: Highcharts.getOptions().colors[3]
					}
				},
				labels: {
					format: '{value}mb',
					style: {
						color: Highcharts.getOptions().colors[3]
					}
				},
				opposite: true
			}],
			tooltip: {
				shared: true
			},
			series: [{
				name: 'Humidity',
				type: 'column',
				yAxis: 0,
				data: [17.0, 16.9, 19.5, 14.5, 18.2, 21.5, 2.2, 6.5, 3.3, 8.3, 3.9, 19.6]
			}, {
				name: 'Rainfall',
				type: 'column',
				yAxis: 1,
				data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
				tooltip: {
					valueSuffix: ' mm'
				}
			}, {
				name: 'Temp',
				type: 'column',
				yAxis: 2,
				data: [7.0, 6.9, 9.5, 4.5, 8.2, 1.5, 5.2, 26.5, 23.3, 18.3, 13.9, 9.6],
				tooltip: {
					valueSuffix: ' °C'
				}
			}, {
				name: 'SLP',
				type: 'column',
				yAxis: 3,
				data: [1016, 1016, 1015.9, 1015.5, 1012.3, 1009.5, 1009.6, 1010.2, 1013.1, 1016.9, 1018.2, 1016.7],
				marker: {
					enabled: false
				},
				dashStyle: 'shortdot',
				tooltip: {
					valueSuffix: ' mb'
				}
			}]
		};
		return (<ChartDemo options={options} />);
	})
	.add('3 zones with events on chart', () => {
		let options = {
			"chart": {
				"type": "scatter",
				"zoomType": "xy",
				//"plotBackgroundColor": "#d1f6ca",
				events: {
					click: function (event) {
						var label = this.renderer.label(
							'x: ' + Highcharts.numberFormat(event.xAxis[0].value, 2) + ', y: ' + Highcharts.numberFormat(event.yAxis[0].value, 2),
							event.xAxis[0].axis.toPixels(event.xAxis[0].value),
							event.yAxis[0].axis.toPixels(event.yAxis[0].value)
						)
							.attr({
								fill: Highcharts.getOptions().colors[0],
								padding: 10,
								r: 5,
								zIndex: 8
							})
							.css({
								color: '#FFFFFF'
							})
							.add();
						setTimeout(function () {
							label.fadeOut();
						}, 1000);
					},
					selection: function (event) {
						var text,
							label;
						if (event.xAxis) {
							text = 'min: ' + Highcharts.numberFormat(event.xAxis[0].min, 2) + ', max: ' + Highcharts.numberFormat(event.xAxis[0].max, 2);
						} else {
							text = 'Selection reset';
						}
						label = this.renderer.label(text, 100, 120)
							.attr({
								fill: Highcharts.getOptions().colors[0],
								padding: 10,
								r: 5,
								zIndex: 8
							})
							.css({
								color: '#FFFFFF'
							})
							.add();
						setTimeout(function () {
							label.fadeOut();
						}, 1000);
					}
				}
			},
			"legend": {
				"enabled": false
			},
			tooltip: {
				enabled: false
			},
			"xAxis": {
				"max": 1,
				"title": { "text": "business value" },
				plotBands: [{
					color: "#c6c6ff",
					from: 0,
					to: 0.2
				}, {
					color: "#caffca",
					from: 0.2,
					to: 0.6
				}, {
					color: "#ffffc6",
					from: 0.6,
					to: 1
				}]
			},
			"yAxis": {
				"gridLineWidth": 0,
				"lineWidth": 1,
				"max": 1.2,
				"title": {
					"text": "forecast accuracy indexes"
				}
			},
			"plotOptions": {
				// "scatter": {
				// 	"tooltip": {
				// 		"headerFormat": "<b>{series.name}</b><br>",
				// 		"pointFormat": "accuracy: {point.x},<br> value: {point.y}"
				// 	}
				// },
				"series": {
					"allowPointSelect": true,
				}
			},
			"series": [{
				"name": "value x accuracy",
				"marker": {
					"symbol": "circle"
				},
				"data": [
					[0.0883543030496564, 0.1457277778375944],
					[0.10514169722228507, 0.16842804390526985],
					[0.1040187425930491, 0.1160209262646289],
					[0.12598392965579424, 0.1397762869297567],
					[0.1389294800783096, 0.1659061383158835],
					[0.1611450649358704, 0.1882278008302291],
					[0.1887084729210672, 0.15416750015167584],
					[0.1016752132709554, 0.9631089576755073],
					[0.1733507440275247, 0.635862622153632],
					[0.15052892797919686, 0.9588723426367896],
					[0.19493847329942026, 0.8254741863093559],
					[0.11929432862653756, 0.5650740272142227],
					[0.14862052613121347, 0.8255288447413701],
					[0.11802144739600263, 0.525520589713444],
					[0.13949399080215916, 0.7992704830841448],
					[0.14106050238305213, 0.5269238610483703],
					[0.09672043080115245, 0.8305070569709324],
					[0.1959208290242425, 0.9964780320424731],
					[0.04627466553366202, 0.505849378198131],
					[0.14109462085484693, 0.8454673988573662],
					[0.1345580153504752, 0.6038740755204978],
					[0.1931816440855671, 0.9794792920464082],
					[0.1667718687905615, 0.5621013243452364],
					[0.19030735777687373, 0.8541855592821026],
					[0.17872648754763916, 0.8783749987952043],
					[0.17272384062365695, 0.8847134918469594],
					[0.1018070236889127, 0.5978928934941896],
					[0.2771728056161304, 0.1358696133886844],
					[0.5887466017222362, 0.1623659200173637],
					[0.2515244889324113, 0.13090720395168275],
					[0.4906597197776214, 0.10565227298513017],
					[0.2327785644898082, 0.1808045261336894],
					[0.2639149079842604, 0.17378162143270834],
					[0.3897218640929283, 0.11697034188807732],
					[0.6465289284496952, 0.18730522842691595],
					[0.7097621581898033, 0.15734773218263766],
					[0.2867417923468893, 0.1065233170796965],
					[0.5285120012066443, 0.1733141515268568],
					[0.6566134650211386, 0.17262859229540736],
					[0.534184535161541, 0.110316285731834],
					[0.5857845675133236, 0.1091904041253941],
					[0.5706866649874588, 0.17925899674211894],
					[0.3971725740421206, 0.1151064049664754],
					[0.371182766485744, 0.1476473793893802],
					[0.3382066789017471, 0.1817378275722624],
					[0.2362867819942999, 0.2800587409045966],
					[0.9250917558404357, 0.2880692306467724],
					[0.3955191225434673, 0.5810230922687009],
					[0.3843542063559196, 0.3521423140903339],
					[0.8440701923488607, 0.5495055792743067],
					[0.3213439087807934, 0.3628966807270899],
					[0.3103476832711552, 0.8932349591357659],
					[0.2839365128467775, 0.5484436958000685],
					[0.6085713175405294, 0.8497201683902922],
					[0.8937681499955771, 0.6486675151080482],
					[0.5232909669785007, 0.6004159006214549],
					[0.2472180215530461, 0.5801887900210825],
					[0.8040487363301709, 0.340836860107851],
					[0.3417127270655196, 0.3959602625446589],
					[0.6225853407499471, 0.3569862959778909],
					[0.3835861714511981, 0.6962735421078832],
					[0.8913238391040564, 0.688711428303891],
					[0.3978140352293926, 0.8898638564571067],
					[0.8049071954122257, 0.8542953264557003],
					[0.3166385943769606, 0.6459837231535379],
					[0.8887481832518038, 0.3571064549077347],
					[0.2212423620023984, 0.4339793774271747],
					[0.8885583903728138, 0.3495452129732113],
					[0.2630221323783436, 0.3775232408716831],
					[0.8630899490604098, 0.3408647173788229],
					[0.2285614292235596, 0.3538530441830881],
					[0.9832972478600804, 0.5840088561738594],
					[0.6156047663661612, 0.8976512574899647],
					[0.9560232109228153, 0.3253860194091091],
					[0.9666846981852958, 0.6990937717723197],
					[0.407924272648889, 0.6298025676179151],
					[0.6282760511422218, 0.6241768525822982],
					[0.4657992560660023, 0.5900444889806028],
					[0.2788458000306113, 0.801875934496079],
					[0.480049975596043, 0.6977391885281748],
					[0.4914274858697115, 0.8632438786323157],
					[0.6751896742752957, 0.7120797591623026],
					[0.7178827529241887, 0.4848478436619534],
					[0.830190697395524, 0.4656751123790981],
					[0.4809501783864074, 0.7024936544496254],
					[0.486731327487964, 0.7976509974204868],
					[0.7548415596931335, 0.6685662849487878],
					[0.5247113530326775, 0.4208011494284835],
					[0.4465667151212929, 0.4877455326729091],
					[0.6882577112466007, 0.4016915275356],
					[0.5019986147776846, 0.7428934485174027],
					[0.4664942474790509, 0.8120361430047378],
					[0.6822851901911545, 0.7794498149527475],
					[0.6862371439229196, 0.6245414494232641],
					[0.7035458678377721, 0.4482305202875024],
					[0.9017943633518404, 0.9547593111264837],
					[0.7489018344581299, 0.7240733611725856],
					[0.8910521565950437, 0.8562793889595199],
					[0.5933712608546139, 0.7220593962037816],
					[0.6640100064296749, 0.7082108921190511]
				],
				zoneAxis: "x",
				zones: [{
					value: 0.2,
					color: '#f7a35c'
				}, {
					value: 0.6,
					color: '#7cb5ec'
				}, {
					color: '#ff8080'
				}]
			}],
		};
		return (<ChartDemo options={options} />);
	})
	.add('4 quadrants', () => {
		let options = {
			"chart": {
				"type": "scatter",
				"zoomType": "xy"
			},
			"legend": {
				"enabled": false
			},
			"colors": [
				"#f39c12", "#f1c40f",
				"#e74c3c", "#e67e22"
			],
			"xAxis": {
				"max": 1,
				"title": {
					"text": "business value"
				},
				"plotLines": [{
					"color": "black",
					"dashStyle": "dot",
					"width": 2,
					"value": 0.2,
					"label": {
						"rotation": 0,
						"y": 15,
						"style": {
							"fontStyle": "italic"
						},
						"text": "第三象限"
					}
				}]
			},
			"yAxis": {
				gridLineWidth: 0,
				lineWidth: 1,
				"max": 1.2,
				"title": {
					"text": "forecast accuracy indexes"
				},
				"plotLines": [{
					"color": "black",
					"dashStyle": "dot",
					"width": 2,
					"value": 0.25,
					"label": {
						"rotation": 0,
						"y": 15,
						"style": {
							"fontStyle": "italic"
						},
						"text": "第一象限"
					}
				}]
			},
			"plotOptions": {
				"scatter": {
					"tooltip": {
						"headerFormat": "<b>{series.name}</b><br>",
						"pointFormat": "accuracy: {point.x},<br> value: {point.y}"
					}
				}
			},
			"series": [{
				"name": "value x accuracy",
				"marker": {
					"symbol": "circle"
				},
				"data": [
					[0.0883543030496564, 0.1457277778375944],
					[0.10514169722228507, 0.16842804390526985],
					[0.1040187425930491, 0.1160209262646289],
					[0.12598392965579424, 0.1397762869297567],
					[0.1389294800783096, 0.1659061383158835],
					[0.1611450649358704, 0.1882278008302291],
					[0.1887084729210672, 0.15416750015167584]
				]
			}, {
				"name": "value x accuracy",
				"marker": {
					"symbol": "circle"
				},
				"data": [
					[0.1016752132709554, 0.9631089576755073],
					[0.1733507440275247, 0.635862622153632],
					[0.15052892797919686, 0.9588723426367896],
					[0.19493847329942026, 0.8254741863093559],
					[0.11929432862653756, 0.5650740272142227],
					[0.14862052613121347, 0.8255288447413701],
					[0.11802144739600263, 0.525520589713444],
					[0.13949399080215916, 0.7992704830841448],
					[0.14106050238305213, 0.5269238610483703],
					[0.09672043080115245, 0.8305070569709324],
					[0.1959208290242425, 0.9964780320424731],
					[0.04627466553366202, 0.505849378198131],
					[0.14109462085484693, 0.8454673988573662],
					[0.1345580153504752, 0.6038740755204978],
					[0.1931816440855671, 0.9794792920464082],
					[0.1667718687905615, 0.5621013243452364],
					[0.19030735777687373, 0.8541855592821026],
					[0.17872648754763916, 0.8783749987952043],
					[0.17272384062365695, 0.8847134918469594],
					[0.1018070236889127, 0.5978928934941896]
				]
			}, {
				"name": "value x accuracy",
				"marker": {
					"symbol": "circle"
				},
				"data": [
					[0.2771728056161304, 0.1358696133886844],
					[0.5887466017222362, 0.1623659200173637],
					[0.2515244889324113, 0.13090720395168275],
					[0.4906597197776214, 0.10565227298513017],
					[0.2327785644898082, 0.1808045261336894],
					[0.2639149079842604, 0.17378162143270834],
					[0.3897218640929283, 0.11697034188807732],
					[0.6465289284496952, 0.18730522842691595],
					[0.7097621581898033, 0.15734773218263766],
					[0.2867417923468893, 0.1065233170796965],
					[0.5285120012066443, 0.1733141515268568],
					[0.6566134650211386, 0.17262859229540736],
					[0.534184535161541, 0.110316285731834],
					[0.5857845675133236, 0.1091904041253941],
					[0.5706866649874588, 0.17925899674211894],
					[0.3971725740421206, 0.1151064049664754],
					[0.371182766485744, 0.1476473793893802],
					[0.3382066789017471, 0.1817378275722624]
				]
			}, {
				"name": "value x accuracy",
				"marker": {
					"symbol": "circle"
				},
				"data": [
					[0.2362867819942999, 0.2800587409045966],
					[0.9250917558404357, 0.2880692306467724],
					[0.3955191225434673, 0.5810230922687009],
					[0.3843542063559196, 0.3521423140903339],
					[0.8440701923488607, 0.5495055792743067],
					[0.3213439087807934, 0.3628966807270899],
					[0.3103476832711552, 0.8932349591357659],
					[0.2839365128467775, 0.5484436958000685],
					[0.6085713175405294, 0.8497201683902922],
					[0.8937681499955771, 0.6486675151080482],
					[0.5232909669785007, 0.6004159006214549],
					[0.2472180215530461, 0.5801887900210825],
					[0.8040487363301709, 0.340836860107851],
					[0.3417127270655196, 0.3959602625446589],
					[0.6225853407499471, 0.3569862959778909],
					[0.3835861714511981, 0.6962735421078832],
					[0.8913238391040564, 0.688711428303891],
					[0.3978140352293926, 0.8898638564571067],
					[0.8049071954122257, 0.8542953264557003],
					[0.3166385943769606, 0.6459837231535379],
					[0.8887481832518038, 0.3571064549077347],
					[0.2212423620023984, 0.4339793774271747],
					[0.8885583903728138, 0.3495452129732113],
					[0.2630221323783436, 0.3775232408716831],
					[0.8630899490604098, 0.3408647173788229],
					[0.2285614292235596, 0.3538530441830881],
					[0.9832972478600804, 0.5840088561738594],
					[0.6156047663661612, 0.8976512574899647],
					[0.9560232109228153, 0.3253860194091091],
					[0.9666846981852958, 0.6990937717723197],
					[0.407924272648889, 0.6298025676179151],
					[0.6282760511422218, 0.6241768525822982],
					[0.4657992560660023, 0.5900444889806028],
					[0.2788458000306113, 0.801875934496079],
					[0.480049975596043, 0.6977391885281748],
					[0.4914274858697115, 0.8632438786323157],
					[0.6751896742752957, 0.7120797591623026],
					[0.7178827529241887, 0.4848478436619534],
					[0.830190697395524, 0.4656751123790981],
					[0.4809501783864074, 0.7024936544496254],
					[0.486731327487964, 0.7976509974204868],
					[0.7548415596931335, 0.6685662849487878],
					[0.5247113530326775, 0.4208011494284835],
					[0.4465667151212929, 0.4877455326729091],
					[0.6882577112466007, 0.4016915275356],
					[0.5019986147776846, 0.7428934485174027],
					[0.4664942474790509, 0.8120361430047378],
					[0.6822851901911545, 0.7794498149527475],
					[0.6862371439229196, 0.6245414494232641],
					[0.7035458678377721, 0.4482305202875024],
					[0.9017943633518404, 0.9547593111264837],
					[0.7489018344581299, 0.7240733611725856],
					[0.8910521565950437, 0.8562793889595199],
					[0.5933712608546139, 0.7220593962037816],
					[0.6640100064296749, 0.7082108921190511]
				]
			}]
		};
		return (<ChartDemo options={options} />);
	})
	.add('basic column with events on checkbox/legend', () => {
		let options = {
			chart: {
				type: 'column'
			},
			title: {
				text: '各洲不同时间的人口条形图'
			},
			subtitle: {
				text: '数据来源: Wikipedia.org'
			},
			xAxis: {
				categories: ['非洲', '美洲', '亚洲', '欧洲', '大洋洲'],
				title: {
					text: null
				}
			},
			yAxis: {
				min: 0,
				title: {
					text: '人口总量 (百万)',
					align: 'high'
				}
			},
			tooltip: {
				valueSuffix: ' 百万'
			},
			plotOptions: {
				column: {
					dataLabels: {
						enabled: true,
						allowOverlap: true
					}
				},
				series: {
					allowPointSelect: true,
					events: {
						click: function (event) {
							
							console.log(this);

							// var legendItem = document.getElementsByClassName("highcharts-legend-item");
							// var itemText = legendItem[this.index].getElementsByTagName("text");
							// itemText.className = "selectedLegendItem";
							// console.log(itemText);
							//this.legendItem.element.classList.push("selectedLegendItem")
						},
						legendItemClick: function () {
							var visibility = this.visible ? 'visible' : 'hidden';
							if (!confirm('The series is currently ' +
								visibility + '. Do you want to change that?')) {
								return false;
							}

							if (this.visible) {
								this.checkbox.checked = false;
							} else {
								this.checkbox.checked = true;
							}
						},
						mouseOver: function () {
							//action('Moused over');
						},
						mouseOut: function () {
							//action('Moused out');
						},
						checkboxClick: function (event) {
							if (event.checked) {
								this.show();
							} else {
								this.hide();
							}

							var text = 'The checkbox is now ' + event.checked;
							if (!this.chart.lbl) {
								this.chart.lbl = this.chart.renderer.label(text, 100, 70)
									.attr({
										padding: 10,
										r: 5,
										fill: Highcharts.getOptions().colors[1],
										zIndex: 5
									})
									.css({
										color: '#FFFFFF'
									})
									.add();
							} else {
								this.chart.lbl.attr({
									text: text
								});
							}

							return false;	//prevent default checkbox event
						}
					},
					showCheckbox: true
				}
			},
			legend: {
				layout: 'vertical',
				align: 'right',
				verticalAlign: 'top',
				x: -40,
				y: 100,
				floating: true,
				borderWidth: 1,
				backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
				shadow: true
			},
			credits: {
				enabled: false
			},
			series: [{
				name: '1800 年',
				data: [107, 31, 335, 203, 42],
				selected: true
			}, {
				name: '1900 年',
				data: [133, 156, 447, 408, 66],
				selected: true
			}, {
				name: '2008 年',
				data: [273, 314, 654, 732, 94],
				selected: true
			}]
		};
		return (<ChartDemo options={options} />);
	})
	.add('basic column with updatable title and lenged', () => {
		let options = {
			chart: {
				type: 'column'
			},
			xAxis: {
				categories: ['非洲', '美洲', '亚洲', '欧洲', '大洋洲'],
				title: {
					text: null
				}
			},
			yAxis: {
				min: 0,
				title: {
					text: '人口总量 (百万)',
					align: 'high'
				},
				labels: {
					overflow: 'justify'
				}
			},
			tooltip: {
				valueSuffix: ' 百万'
			},
			plotOptions: {
				bar: {
					dataLabels: {
						enabled: true,
						allowOverlap: true
					}
				},
				series: {
					allowPointSelect: true,
					events: {
						click: function (event) {		
							console.log(this.data);
						}
					},
					point: {
						cusor: "pointer",
						events: {
							click: function (event) {
								console.log(this);

								// ----------------------------------------------------------------------
								// To change the chart title
								// 1. use html element as title
								// 2. use api: update title/chart
								// ----------------------------------------------------------------------

								// this.series.chart.title.update({
								// 	text: this.category,
								// 	style: {
								// 		color: 'red'
								// 	}
								// });
											
								this.series.chart.update({
									title: {
										text: this.category,
										style: {
											color: 'red',
											fontWeight: 'bold'
										}
									},
									legend: {
										title: {
											text: 'Selected<br/><span style="font-size: 12px; color: red; font-weight: normal">'+ this.series.name +'</span>',
											//text: this.series.name,
											color: 'red'
										},
										//backgroundColor: 'red'
									}
								});
							}
						}
					}
				}
			},
			legend: {
				title: {
					text: 'Selected<br/><span style="font-size: 12px; color: red; font-weight: normal;">current</span>',
					style: {
						//fontStyle: 'italic',
						//color: 'red'
					}
				},
				layout: 'vertical',
				align: 'right',
				verticalAlign: 'top',
				x: -40,
				y: 100,
				floating: true,
				borderWidth: 1,
				backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
				shadow: true
			},
			credits: {
				enabled: false
			},
			series: [{
				name: '1800 年',
				data: [107, 31, 635, 203, 2]
			}, {
				name: '1900 年',
				data: [133, 156, 947, 408, 6]
			}, {
				name: '2008 年',
				data: [973, 914, 4054, 732, 34]
			}]
		};
		return (<ChartDemo options={options} />);
	})
	.add('basic bar with updatable html title', () => {
		let options = {
			chart: {
				type: 'bar'
			},
			title: {
				text: null
			},
			xAxis: {
				categories: ['非洲', '美洲', '亚洲', '欧洲', '大洋洲'],
				title: {
					text: null
				}
			},
			yAxis: {
				min: 0,
				title: {
					text: '人口总量 (百万)',
					align: 'high'
				},
				labels: {
					overflow: 'justify'
				}
			},
			tooltip: {
				valueSuffix: ' 百万'
			},
			plotOptions: {
				bar: {
					dataLabels: {
						enabled: true,
						allowOverlap: true
					}
				},
				series: {
					allowPointSelect: true,
					events: {
						click: function (event) {		
							console.log(this.data);
						}
					},
					point: {
						cusor: "pointer",
						events: {
							click: function (event) {
								document.getElementsByClassName("chartTitle")[0].innerText = this.category;
							}
						}
					}
				}
			},
			legend: {
				layout: 'vertical',
				align: 'right',
				verticalAlign: 'top',
				x: -80,
				floating: true,
				borderWidth: 1,
				backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
				shadow: true
			},
			credits: {
				enabled: false
			},
			series: [{
				name: '1800 年',
				data: [107, 31, 635, 203, 2]
			}, {
				name: '1900 年',
				data: [133, 156, 947, 408, 6]
			}, {
				name: '2008 年',
				data: [973, 914, 4054, 732, 34]
			}]
		};
		return (
			<div className="chartContainer">
				<h3 className="chartTitle">This is a custom title</h3>
				<ChartDemo options={options} />
			</div>
		);
	})
	.add('auto rotation of xAxis', () => {
		let options = {
			title: {
				text: 'Auto rotated X axis labels'
			},
			subtitle: {
				text: 'Drag slider to change the chart width'
			},
			xAxis: {
				categories: ['January', 'February', 'March', 'April', 'May', 'June',
							 'July', 'August', 'September', 'October', 'November', 'December']
			},
			series: [{
				data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
			}]
		};
		return (<ChartDemo options={options} />);
	});