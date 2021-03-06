import * as util from './util';

export enum Languages {
    ko_KR
};

export const Constants = Object.freeze({
    usePlaceholder: true,
    progressRingColors: ['#007bff', '#a0ceff', '#ddd'],

    numberFormat: '1.1-1',
    rankFormat: '1.0-0',

    horizontalBars: {
        height: 20,
        axis: {
            height: 20
        },
        label: {
            height: 15
        },
        circleRadius: 3,
        initiallyVisibleCategories: 50
    },
    punchcard: {
        rowHeight: 20,
        columnWidth: 30,
        legendSize: 200,
        legendPadding: 30,
        swatchHeight: 20,
        label: {
            x: {
                height: 0,
            },
            y: {
                width: 20
            }
        },
        initiallyVisibleCategories: 20
    },
    history: {
        height: 40,
        width: 224
    },
    padding: 5,
    variableHighlightColor: '#f4511e',
    operatorHighlightColor: '#303f9f',
    constantHighlightColor: 'black',
    pointBrushSize: 5,
    lang: Languages.ko_KR,
    USD2KRW: 1125,
    nullValueString: '(값 없음)',
    currency: util.formatKRW
});
