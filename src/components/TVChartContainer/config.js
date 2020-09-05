export const TV_CONFIG = {
  disableLogo: true,

  width: '100%',
  height: '100%',
  theme: 'black',
  debug: false,
  toolbar_bg: '#32408f',
  custom_css_url: 'css/trading_view_override.css',
  chartsStorageUrl: 'https://saveload.tradingview.com',
  chartsStorageApiVersion: '1.1',

  disabled_features: [
    'header_symbol_search',
    'delete_button_in_legend',
    'header_compare',
    'adaptive_logo',
    'show_logo_on_all_charts',
    'compare_symbol',
    'go_to_date',
    'edit_buttons_in_legend'
  ],
  enabled_features: ['side_toolbar_in_fullscreen_mode', 'header_saveload_to_the_right', 'narrow_chart_enabled'],
  drawings_access: {
    type: 'black',
    tools: [{ name: 'Regression Trend' }]
  },
  time_frames: [
    { text: '1min', resolution: '1' },
    { text: '5min', resolution: '5' },
    { text: '15min', resolution: '15' },
    { text: '30min', resolution: '30' },
    { text: '1h', resolution: '60' },
    { text: '6h', resolution: '360' },
    { text: '1day', resolution: 'D' }
  ],
  studies_overrides: {
    'volume.volume.transparency': 30,
    'Overlay.style': 2,
    'Overlay.lineStyle.linewidth': 2
  },
  overrides: {
    'mainSeriesProperties.style': 2,

    'paneProperties.background': '#252f69',
    'paneProperties.vertGridProperties.color': '#3f51b5',
    'paneProperties.horzGridProperties.color': '#3f51b5',
    'paneProperties.crossHairProperties.color': '#ffffff',
    'paneProperties.topMargin': 5,
    'paneProperties.bottomMargin': 5,
    'paneProperties.gridProperties.color': '#3f51b5',

    // Candles styles
    'mainSeriesProperties.candleStyle.upColor': '#08620a',
    'mainSeriesProperties.candleStyle.downColor': '#bb080a',
    'mainSeriesProperties.candleStyle.drawWick': true,
    'mainSeriesProperties.candleStyle.drawBorder': true,
    'mainSeriesProperties.candleStyle.borderColor': '#767E83',
    'mainSeriesProperties.candleStyle.borderUpColor': '#066b06',
    'mainSeriesProperties.candleStyle.borderDownColor': '#e01b1c',
    'mainSeriesProperties.candleStyle.wickUpColor': '#767E83',
    'mainSeriesProperties.candleStyle.wickDownColor': '#767E83',
    'mainSeriesProperties.candleStyle.barColorsOnPrevClose': false,

    // Hollow Candles styles
    'mainSeriesProperties.hollowCandleStyle.upColor': '#08620a',
    'mainSeriesProperties.hollowCandleStyle.downColor': '#bb080a',
    'mainSeriesProperties.hollowCandleStyle.drawWick': false,

    // Heiken Ashi styles
    'mainSeriesProperties.haStyle.upColor': '#08620a',
    'mainSeriesProperties.haStyle.downColor': '#bb080a',
    'mainSeriesProperties.haStyle.drawWick': false,

    // Bars styles
    'mainSeriesProperties.barStyle.upColor': '#08620a',
    'mainSeriesProperties.barStyle.downColor': '#bb080a',

    // Line styles
    'mainSeriesProperties.lineStyle.color': '#FFFFFF',

    'symbolWatermarkProperties.transparency': 90,

    'scalesProperties.textColor': '#FFFFFF',
    'scalesProperties.lineColor': '#303030',
    'scalesProperties.showLeftScale': !1,
    'scalesProperties.showRightScale': !1,
    'scalesProperties.showSymbolLabels': !1,
    'scalesProperties.backgroundColor': '#141414',

    volumePaneSize: 'large'
  }
};
