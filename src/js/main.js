window.onload = function() {
    ctx = document.getElementById("canvas").getContext("2d");
    window.myBar = new Chart(ctx, {
        type: 'bar', // ここは bar にする必要があります
        data: barChartData,
        options: complexChartOption
    });
};

var barChartData = {
  labels: ['8/26','8/27','8/28','8/29','8/30','8/31','9/1',
      '9/2','9/3','9/4','9/5','9/6','9/7','9/8',
      '9/9','9/10','9/11','9/12','9/13','9/14',
      '9/15','9/16','9/17','9/18','9/19','9/20','9/21','9/22'
  ],
  datasets: [
  {
      type: 'line',
      label: 'sample-line',
      data: ['0.155','0.118','0.121','0.068','0.083','0.060','0.067',
          '0.121','0.121','0.150','0.118','0.097','0.078','0.127',
          '0.155','0.140','0.101','0.140','0.041','0.093','0.189',
          '0.146','0.134','0.127','0.116','0.111','0.125','0.116'
      ],
      borderColor : "rgba(254,97,132,0.8)",
      backgroundColor : "rgba(254,97,132,0.5)",
  },
  {
      type: 'line',
      label: 'sample-line2',
      data: ['015.5','011.8','012.1','006.8','008.3','006.0','006.7',
          '012.1','012.1','015.0','011.8','009.7','007.8','012.7',
          '015.5','014.0','010.1','014.0','004.1','009.3','018.9',
          '014.6','013.4','012.7','011.6','011.1','012.5','011.6'
      ],
      borderColor : "rgba(254,97,132,0.8)",
      backgroundColor : "rgba(254,97,132,0.5)",
  },
  {
      type: 'bar',
      label: 'sample-bar',
      data: ['0.3','0.2','0.2','0.3','0.4','0.2','0.0',
          '0.2','0.3','0.11','0.5','0.2','0.5','0.4',
          '0.0','0.3','0.7','0.3','0.6','0.4','0.9',
          '0.7','0.4','0.8','0.7','0.4','0.7','0.8'
      ],
      borderColor : "rgba(54,164,235,0.8)",
      backgroundColor : "rgba(54,164,235,0.5)",
  },
  ],
};

var complexChartOption = {
  responsive: true,
  scales: {
    yAxes: [{
        id: "y-axis-1",   // Y軸のID
        type: "linear",   // linear固定
        position: "left", // どちら側に表示される軸か？
        ticks: {          // スケール
            max: 20,
            min: 0,
            stepSize: 1
        },
    }, {
        id: "y-axis-2",
        type: "linear",
        position: "right",
        ticks: {
            max: 1.5,
            min: 0,
            stepSize: .5
        },
    }],
  }
};
