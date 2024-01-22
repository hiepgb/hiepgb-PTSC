// banner
const swiper = new Swiper('.swiper-1', {
  // autoplay: {
  //   delay: 8000,
  // },
  // loop: true,
  spaceBetween: 30,
});

// news
const swiperVertical = new Swiper('.swiper-2', {
  direction: 'vertical',
  // autoplay: {
  //   delay: 8000,
  // },
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
});

const swiper3 = new Swiper('.swiper-3', {
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    375: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

const swiper4 = new Swiper('.swiper-4', {
  // autoplay: {
  //   delay: 8000,
  // },
  // loop: true,
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
  spaceBetween: 30,
});

const swiper5 = new Swiper('.swiper-5', {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    375: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

const swiper6 = new Swiper('.swiper-6', {
  slidesPerView: 5,
  spaceBetween: 20,
  autoplay: {
    delay: 5000,
  },
  loop: true,
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    375: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});
// click Search
$(document).ready(function () {
  // addClass
  $('#show-modal').click(function () {
    $('.modal__overlay').addClass('modal__overlay-active');
  });

  // removeClass
  $('#close-modal').click(function () {
    $('.modal__overlay').removeClass('modal__overlay-active');
  });
});

// remove title when hover image
$(document).ready(function () {
  $('.image-slider').hover(
    function () {
      $(this).attr('rel', $(this).attr('title'));
      $(this).removeAttr('title');
    },
    function () {
      $(this).attr('title', $(this).attr('rel'));
      $(this).removeAttr('rel');
    }
  );
});

// carousel cloud9
$(function () {
  var showcase = $('#showcase');

  showcase.Cloud9Carousel({
    yOrigin: 235,
    xOrigin: 500,
    xRadius: 441,
    yRadius: 340,

    farScale: 0.5,

    autoPlay: true,
    bringToFront: true,
    frontItemClass: 'active',
    onRendered: showcaseUpdated,
    onLoaded: function () {
      showcase.css('overflow', 'visible');
      showcase.css('visibility', 'visible');
      showcase.css('display', 'none');
      showcase.fadeIn(1500);
    },
  });
  function showcaseUpdated(showcase) {
    var title = $('#service__content-title').text(
      showcase.nearestItem().element.alt
    );
    var description = $('#service__content-description').text(
      showcase.nearestItem().element.title
    );

    var c = Math.cos((showcase.floatIndex() % 1) * 2 * Math.PI);
    title.css('opacity', 0.5 + 0.5 * c);
    description.css('opacity', 0.5 + 0.5 * c);
  }
});

// position aware
$(function () {
  $('.btn-position')
    .on('mouseenter', function (e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find('.animate').css({ top: relY, left: relX });
    })
    .on('mouseout', function (e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find('.animate').css({ top: relY, left: relX });
    });
});

// clock time update
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('quote-update-time').innerHTML =
    'Cập nhật lúc ' + h + ':' + m + ':' + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = '0' + i;
  } // add zero in front of numbers < 10
  return i;
}

// chart js
am5.ready(function () {
  // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  var root = am5.Root.new('chart');

  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  root.setThemes([am5themes_Animated.new(root)]);

  root.dateFormatter.setAll({
    dateFormat: 'yyyy',
    dateFields: ['valueX'],
  });

  var data = [
    {
      date: '2012-07-27',
      value: 13,
    },
    {
      date: '2012-07-28',
      value: 11,
    },
    {
      date: '2012-07-29',
      value: 15,
    },
    {
      date: '2012-07-30',
      value: 16,
    },
    {
      date: '2012-07-31',
      value: 18,
    },
    {
      date: '2012-08-01',
      value: 13,
    },
    {
      date: '2012-08-02',
      value: 22,
    },
    {
      date: '2012-08-03',
      value: 23,
    },
    {
      date: '2012-08-04',
      value: 20,
    },
    {
      date: '2012-08-05',
      value: 17,
    },
    {
      date: '2012-08-06',
      value: 16,
    },
    {
      date: '2012-08-07',
      value: 18,
    },
    {
      date: '2012-08-08',
      value: 21,
    },
    {
      date: '2012-08-09',
      value: 26,
    },
    {
      date: '2012-08-10',
      value: 24,
    },
    {
      date: '2012-08-11',
      value: 29,
    },
    {
      date: '2012-08-12',
      value: 32,
    },
    {
      date: '2012-08-13',
      value: 18,
    },
    {
      date: '2012-08-14',
      value: 24,
    },
    {
      date: '2012-08-15',
      value: 22,
    },
    {
      date: '2012-08-16',
      value: 18,
    },
    {
      date: '2012-08-17',
      value: 19,
    },
    {
      date: '2012-08-18',
      value: 14,
    },
    {
      date: '2012-08-19',
      value: 15,
    },
    {
      date: '2012-08-20',
      value: 12,
    },
    {
      date: '2012-08-21',
      value: 8,
    },
    {
      date: '2012-08-22',
      value: 9,
    },
    {
      date: '2012-08-23',
      value: 8,
    },
    {
      date: '2012-08-24',
      value: 7,
    },
    {
      date: '2012-08-25',
      value: 5,
    },
    {
      date: '2012-08-26',
      value: 11,
    },
    {
      date: '2012-08-27',
      value: 13,
    },
    {
      date: '2012-08-28',
      value: 18,
    },
    {
      date: '2012-08-29',
      value: 20,
    },
    {
      date: '2012-08-30',
      value: 29,
    },
    {
      date: '2012-08-31',
      value: 33,
    },
    {
      date: '2012-09-01',
      value: 42,
    },
    {
      date: '2012-09-02',
      value: 35,
    },
    {
      date: '2012-09-03',
      value: 31,
    },
    {
      date: '2012-09-04',
      value: 47,
    },
    {
      date: '2012-09-05',
      value: 52,
    },
    {
      date: '2012-09-06',
      value: 46,
    },
    {
      date: '2012-09-07',
      value: 41,
    },
    {
      date: '2012-09-08',
      value: 43,
    },
    {
      date: '2012-09-09',
      value: 40,
    },
    {
      date: '2012-09-10',
      value: 39,
    },
    {
      date: '2012-09-11',
      value: 34,
    },
    {
      date: '2012-09-12',
      value: 29,
    },
    {
      date: '2012-09-13',
      value: 34,
    },
    {
      date: '2012-09-14',
      value: 37,
    },
    {
      date: '2012-09-15',
      value: 42,
    },
    {
      date: '2012-09-16',
      value: 49,
    },
    {
      date: '2012-09-17',
      value: 46,
    },
    {
      date: '2012-09-18',
      value: 47,
    },
    {
      date: '2012-09-19',
      value: 55,
    },
    {
      date: '2012-09-20',
      value: 59,
    },
    {
      date: '2012-09-21',
      value: 58,
    },
    {
      date: '2012-09-22',
      value: 57,
    },
    {
      date: '2012-09-23',
      value: 61,
    },
    {
      date: '2012-09-24',
      value: 59,
    },
    {
      date: '2012-09-25',
      value: 67,
    },
    {
      date: '2012-09-26',
      value: 65,
    },
    {
      date: '2012-09-27',
      value: 61,
    },
    {
      date: '2012-09-28',
      value: 66,
    },
    {
      date: '2012-09-29',
      value: 69,
    },
    {
      date: '2012-09-30',
      value: 71,
    },
    {
      date: '2012-10-01',
      value: 67,
    },
    {
      date: '2012-10-02',
      value: 63,
    },
    {
      date: '2012-10-03',
      value: 46,
    },
    {
      date: '2012-10-04',
      value: 32,
    },
    {
      date: '2012-10-05',
      value: 21,
    },
    {
      date: '2012-10-06',
      value: 18,
    },
    {
      date: '2012-10-07',
      value: 21,
    },
    {
      date: '2012-10-08',
      value: 28,
    },
    {
      date: '2012-10-09',
      value: 27,
    },
    {
      date: '2012-10-10',
      value: 36,
    },
    {
      date: '2012-10-11',
      value: 33,
    },
    {
      date: '2012-10-12',
      value: 31,
    },
    {
      date: '2012-10-13',
      value: 30,
    },
    {
      date: '2012-10-14',
      value: 34,
    },
    {
      date: '2012-10-15',
      value: 38,
    },
    {
      date: '2012-10-16',
      value: 37,
    },
    {
      date: '2012-10-17',
      value: 44,
    },
    {
      date: '2012-10-18',
      value: 49,
    },
    {
      date: '2012-10-19',
      value: 53,
    },
    {
      date: '2012-10-20',
      value: 57,
    },
    {
      date: '2012-10-21',
      value: 60,
    },
    {
      date: '2012-10-22',
      value: 61,
    },
    {
      date: '2012-10-23',
      value: 69,
    },
    {
      date: '2012-10-24',
      value: 67,
    },
    {
      date: '2012-10-25',
      value: 72,
    },
    {
      date: '2012-10-26',
      value: 77,
    },
    {
      date: '2012-10-27',
      value: 75,
    },
    {
      date: '2012-10-28',
      value: 70,
    },
    {
      date: '2012-10-29',
      value: 72,
    },
    {
      date: '2012-10-30',
      value: 70,
    },
    {
      date: '2012-10-31',
      value: 72,
    },
    {
      date: '2012-11-01',
      value: 73,
    },
    {
      date: '2012-11-02',
      value: 67,
    },
    {
      date: '2012-11-03',
      value: 68,
    },
    {
      date: '2012-11-04',
      value: 65,
    },
    {
      date: '2012-11-05',
      value: 71,
    },
    {
      date: '2012-11-06',
      value: 75,
    },
    {
      date: '2012-11-07',
      value: 74,
    },
    {
      date: '2012-11-08',
      value: 71,
    },
    {
      date: '2012-11-09',
      value: 76,
    },
    {
      date: '2012-11-10',
      value: 77,
    },
    {
      date: '2012-11-11',
      value: 81,
    },
    {
      date: '2012-11-12',
      value: 83,
    },
    {
      date: '2012-11-13',
      value: 80,
    },
    {
      date: '2012-11-14',
      value: 81,
    },
    {
      date: '2012-11-15',
      value: 87,
    },
    {
      date: '2012-11-16',
      value: 82,
    },
    {
      date: '2012-11-17',
      value: 86,
    },
    {
      date: '2012-11-18',
      value: 80,
    },
    {
      date: '2012-11-19',
      value: 87,
    },
    {
      date: '2012-11-20',
      value: 83,
    },
    {
      date: '2012-11-21',
      value: 85,
    },
    {
      date: '2012-11-22',
      value: 84,
    },
    {
      date: '2012-11-23',
      value: 82,
    },
    {
      date: '2012-11-24',
      value: 73,
    },
    {
      date: '2012-11-25',
      value: 71,
    },
    {
      date: '2012-11-26',
      value: 75,
    },
    {
      date: '2012-11-27',
      value: 79,
    },
    {
      date: '2012-11-28',
      value: 70,
    },
    {
      date: '2012-11-29',
      value: 73,
    },
    {
      date: '2012-11-30',
      value: 61,
    },
    {
      date: '2012-12-01',
      value: 62,
    },
    {
      date: '2012-12-02',
      value: 66,
    },
    {
      date: '2012-12-03',
      value: 65,
    },
    {
      date: '2012-12-04',
      value: 73,
    },
    {
      date: '2012-12-05',
      value: 79,
    },
    {
      date: '2012-12-06',
      value: 78,
    },
    {
      date: '2012-12-07',
      value: 78,
    },
    {
      date: '2012-12-08',
      value: 78,
    },
    {
      date: '2012-12-09',
      value: 74,
    },
    {
      date: '2012-12-10',
      value: 73,
    },
    {
      date: '2012-12-11',
      value: 75,
    },
    {
      date: '2012-12-12',
      value: 70,
    },
    {
      date: '2012-12-13',
      value: 77,
    },
    {
      date: '2012-12-14',
      value: 67,
    },
    {
      date: '2012-12-15',
      value: 62,
    },
    {
      date: '2012-12-16',
      value: 64,
    },
    {
      date: '2012-12-17',
      value: 61,
    },
    {
      date: '2012-12-18',
      value: 59,
    },
    {
      date: '2012-12-19',
      value: 53,
    },
    {
      date: '2012-12-20',
      value: 54,
    },
    {
      date: '2012-12-21',
      value: 56,
    },
    {
      date: '2012-12-22',
      value: 59,
    },
    {
      date: '2012-12-23',
      value: 58,
    },
    {
      date: '2012-12-24',
      value: 55,
    },
    {
      date: '2012-12-25',
      value: 52,
    },
    {
      date: '2012-12-26',
      value: 54,
    },
    {
      date: '2012-12-27',
      value: 50,
    },
    {
      date: '2012-12-28',
      value: 50,
    },
    {
      date: '2012-12-29',
      value: 51,
    },
    {
      date: '2012-12-30',
      value: 52,
    },
    {
      date: '2012-12-31',
      value: 58,
    },
    {
      date: '2013-01-01',
      value: 60,
    },
    {
      date: '2013-01-02',
      value: 67,
    },
    {
      date: '2013-01-03',
      value: 64,
    },
    {
      date: '2013-01-04',
      value: 66,
    },
    {
      date: '2013-01-05',
      value: 60,
    },
    {
      date: '2013-01-06',
      value: 63,
    },
    {
      date: '2013-01-07',
      value: 61,
    },
    {
      date: '2013-01-08',
      value: 60,
    },
    {
      date: '2013-01-09',
      value: 65,
    },
    {
      date: '2013-01-10',
      value: 75,
    },
    {
      date: '2013-01-11',
      value: 77,
    },
    {
      date: '2013-01-12',
      value: 78,
    },
    {
      date: '2013-01-13',
      value: 70,
    },
    {
      date: '2013-01-14',
      value: 70,
    },
    {
      date: '2013-01-15',
      value: 73,
    },
    {
      date: '2013-01-16',
      value: 71,
    },
    {
      date: '2013-01-17',
      value: 74,
    },
    {
      date: '2013-01-18',
      value: 78,
    },
    {
      date: '2013-01-19',
      value: 85,
    },
    {
      date: '2013-01-20',
      value: 82,
    },
    {
      date: '2013-01-21',
      value: 83,
    },
    {
      date: '2013-01-22',
      value: 88,
    },
    {
      date: '2013-01-23',
      value: 85,
    },
    {
      date: '2013-01-24',
      value: 85,
    },
    {
      date: '2013-01-25',
      value: 80,
    },
    {
      date: '2013-01-26',
      value: 87,
    },
    {
      date: '2013-01-27',
      value: 84,
    },
    {
      date: '2013-01-28',
      value: 83,
    },
    {
      date: '2013-01-29',
      value: 84,
    },
    {
      date: '2013-01-30',
      value: 81,
    },
  ];

  // Create chart
  // https://www.amcharts.com/docs/v5/charts/xy-chart/
  var chart = root.container.children.push(
    am5xy.XYChart.new(root, {
      focusable: true,
      panX: true,
      panY: true,
      wheelX: 'panX',
      wheelY: 'zoomX',
      pinchZoomX: true,
      paddingLeft: 0,
    })
  );

  var easing = am5.ease.linear;

  // Create axes
  // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
  var xAxis = chart.xAxes.push(
    am5xy.DateAxis.new(root, {
      maxDeviation: 0.1,
      groupData: false,
      baseInterval: {
        timeUnit: 'day',
        count: 1,
      },
      renderer: am5xy.AxisRendererX.new(root, {
        minorGridEnabled: true,
        minGridDistance: 70,
      }),
      tooltip: am5.Tooltip.new(root, {}),
    })
  );

  var yAxis = chart.yAxes.push(
    am5xy.ValueAxis.new(root, {
      maxDeviation: 0.2,
      renderer: am5xy.AxisRendererY.new(root, {}),
    })
  );

  // Add series
  // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
  var series = chart.series.push(
    am5xy.LineSeries.new(root, {
      minBulletDistance: 10,
      connect: false,
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: 'value',
      valueXField: 'date',
      tooltip: am5.Tooltip.new(root, {
        pointerOrientation: 'horizontal',
        labelText: '{valueY}',
      }),
    })
  );

  series.fills.template.setAll({
    fillOpacity: 0.2,
    visible: true,
  });

  series.strokes.template.setAll({
    strokeWidth: 2,
  });

  // Set up data processor to parse string dates
  // https://www.amcharts.com/docs/v5/concepts/data/#Pre_processing_data
  series.data.processor = am5.DataProcessor.new(root, {
    dateFormat: 'yyyy-MM-dd',
    dateFields: ['date'],
  });

  series.data.setAll(data);

  series.bullets.push(function () {
    var circle = am5.Circle.new(root, {
      radius: 4,
      fill: root.interfaceColors.get('background'),
      stroke: series.get('fill'),
      strokeWidth: 2,
    });

    return am5.Bullet.new(root, {
      sprite: circle,
    });
  });

  // Add cursor
  // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
  var cursor = chart.set(
    'cursor',
    am5xy.XYCursor.new(root, {
      xAxis: xAxis,
      behavior: 'none',
    })
  );
  cursor.lineY.set('visible', false);

  // add scrollbar
  // chart.set(
  //   'scrollbarX',
  //   am5.Scrollbar.new(root, {
  //     orientation: 'horizontal',
  //   })
  // );

  // Make stuff animate on load
  // https://www.amcharts.com/docs/v5/concepts/animations/
  chart.appear(1000, 100);
});

// tab-item click
const tabs = document.querySelectorAll('.event__tab-item');
const panes = document.querySelectorAll('.event__tab-pane');

tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.onclick = function () {
    document
      .querySelector('.event__tab-item.active')
      .classList.remove('active');
    document
      .querySelector('.event__tab-pane.active')
      .classList.remove('active');

    this.classList.add('active');
    pane.classList.add('active');
  };
});

// remove active of menu mobile
$('.nav__overlay').on('click', function (event) {
  document.querySelector('.bars').classList.remove('active');
});
