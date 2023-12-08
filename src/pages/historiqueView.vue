<template>
<div class="frame">
    <div class="card">
  	    <div class="header">
			<span class="title big">Weekly report</span>
			<span class="date small">01. Feb - 07. Feb</span>
			<span class="type small">Revenue</span>
			<span class="value">3621.79</span>
		</div>
		<div class="clearfix"></div>
		<div class="parameter">
			<span class="red">Views</span>
			<span class="blue">Purchases</span>
		</div>
        <canvas id="myChart" width="400" height="400"></canvas>
    </div>
    <div class="card">
  	    <div class="header">
			<span class="title big">Weekly report</span>
			<span class="date small">01. Feb - 07. Feb</span>
			<span class="type small">Revenue</span>
			<span class="value">3621.79</span>
		</div>
		<div class="clearfix"></div>
		<div class="parameter">
			<span class="red">Views</span>
			<span class="blue">Purchases</span>
		</div>
        <canvas id="myChart2" width="400" height="400"></canvas>
    </div>
</div>
</template>

<script>
import Chart from 'chart.js/auto';
export default {
  name: 'historique',
  mounted() {
    const ctx = document.getElementById("myChart");
    const ctx2 = document.getElementById("myChart2");
    const myChart = new Chart(ctx, { // Fix the object structure
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    const myChart2 = new Chart(ctx2, { // Fix the object structure
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    myChart;
    myChart2;
    myChart.data.datasets[0].data = [1, 2, 3, 4, 5, 6];
    myChart.update();
  }
};

</script>

<style scoped>
.frame {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap; /* Permet le retour à la ligne des éléments si l'espace est insuffisant */
}

.card {
  border: 1px solid #ccc;
  padding: 20px;
  width: 45%; /* Ajustez la largeur selon vos besoins */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px; /* Ajoutez de l'espace entre les cartes */
  margin: 10px;
}

.header {
  text-align: center;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.date,
.type,
.value {
  display: block;
  font-size: 14px;
  margin-top: 5px;
}

.clearfix {
  clear: both;
}

.parameter {
  text-align: center;
  margin-top: 15px;
}

.red,
.blue {
  display: inline-block;
  font-weight: bold;
  margin-right: 10px;
}

canvas {
  width: 100%;
  height: auto;
  border: 1px solid #eee;
  margin-top: 15px;
  max-width: 100%; /* Pour garantir que le canvas reste dans la largeur de son contenant */
  max-height: 60%;
}

@media (max-width: 768px) {
  .card {
    width: 100%; /* Ajustez la largeur pour les petits écrans */
  }
}

</style>