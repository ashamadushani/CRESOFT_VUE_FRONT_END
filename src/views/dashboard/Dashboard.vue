<template>
  <v-container
      id="dashboard"
      fluid
      tag="section"
  >
    <v-row style="margin-top:30px">

      <v-col
          cols="12"
          lg="4"
      >
        <base-material-chart-card
            :data="customerCountryChart.data"
            :options="customerCountryChart.options"
            :responsive-options="customerCountryChart.responsiveOptions"
            color="#E91E63"
            hover-reveal
            type="Bar"
        >
          <h4 class="card-title font-weight-light mt-2 ml-2">
            Countries
          </h4>

          <p class="d-inline-flex font-weight-light ml-2 mt-1">
            Countries of the customers
          </p>

          <template v-slot:actions>
            <v-icon
                class="mr-1"
                small
            >
              mdi-clock-outline
            </v-icon>
            <span class="caption grey--text font-weight-light">updated 10 minutes ago</span>
          </template>
        </base-material-chart-card>
      </v-col>

      <v-col
          cols="12"
          lg="4"
      >
        <base-material-chart-card
            :data="customerCityChart.data"
            :options="customerCityChart.options"
            :responsive-options="customerCityChart.responsiveOptions"
            color="grey"
            hover-reveal
            type="Bar"
        >
          <h4 class="card-title font-weight-light mt-2 ml-2">
            Cities
          </h4>

          <p class="d-inline-flex font-weight-light ml-2 mt-1">
            Living cities of the customers
          </p>

          <template v-slot:actions>
            <v-icon
                class="mr-1"
                small
            >
              mdi-clock-outline
            </v-icon>
            <span class="caption grey--text font-weight-light">updated 10 minutes ago</span>
          </template>
        </base-material-chart-card>

      </v-col>

      <v-col
          cols="12"
          lg="4"
      >
        <base-material-chart-card
            :data="currencyChart.data"
            :options="currencyChart.options"
            hover-reveal
            color="info"
            type="Bar"
        >

          <h3 class="card-title font-weight-light mt-2 ml-2">
            Currency
          </h3>

          <p class="d-inline-flex font-weight-light ml-2 mt-1">
            Currency type of customers
          </p>

          <template v-slot:actions>
            <v-icon
                class="mr-1"
                small
            >
              mdi-clock-outline
            </v-icon>
            <span class="caption grey--text font-weight-light">campaign sent 26 minutes ago</span>
          </template>
        </base-material-chart-card>
      </v-col>

      <v-col
          style="margin-top:30px"
          cols="12"
          md="12"
      >
        <base-material-card
            color="info"
            class="px-5 py-3"
        >
          <template v-slot:heading>
            <div class="text-x3 font-weight-light">
              Customers ({{ customerCount }})
            </div>
          </template>
          <v-card-text>
            <v-data-table
                :headers="headers"
                :items="items"
                hide-default-footer
            />
          </v-card-text>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import $ from 'jquery'


export default {
  data() {
    return {
      citiesChart: {
        dataentry: null,
        datalabel: null,
        labels: [],
        dataset: [],
      },
      currencyChart: {
        data: {
          labels: ['RS', 'GBP', 'USD', 'CAD', 'AUD'],
          series: [
            [],
          ],
        },
        options: {
          lineSmooth: this.$chartist.Interpolation.cardinal({
            tension: 0,
          }),
          low: 0,
          high: 3, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        },
      },
      customerCountryChart: {
        data: {
          labels: ['LK', 'SC', 'USA', 'UK', 'CAN', 'AUS'],
          series: [
            [],
          ],
        },
        options: {
          axisX: {
            showGrid: false,
          },
          low: 0,
          high: 5,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0,
          },
        },
        responsiveOptions: [
          ['screen and (max-width: 640px)', {
            seriesBarDistance: 5,
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0]
              },
            },
          }],
        ],
      },
      customerCityChart: {
        data: {
          labels: ['Colombo', 'Edinburgh', 'NewYork', 'London', 'Toronto', 'Melbourne'],
          series: [
            [],
          ],
        },
        options: {
          horizontalBars: true,

          axisX: {

            showGrid: false,
          },
          axisY: {
            offset: 70
          },
          low: 0,
          high: 4,
          chartPadding: {
            top: 0,
            right: 7,
            bottom: 0,
            left: 2,
          },
        },
        responsiveOptions: [
          ['screen and (max-width: 640px)', {
            seriesBarDistance: 5,
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0]
              },
            },
          }],
        ],
      },
      headers: [
        {
          sortable: false,
          text: 'ID',
          value: 'id',
        },
        {
          sortable: false,
          text: 'Name',
          value: 'name',
        },
        {
          sortable: false,
          text: 'Country',
          value: 'country',
          align: 'right',
        },
        {
          sortable: false,
          text: 'City',
          value: 'city',
          align: 'right',
        },
        {
          sortable: false,
          text: 'Currency',
          value: 'currency',
          align: 'right',
        },
        {
          sortable: false,
          text: 'Contact',
          value: 'contact',
          align: 'right',
        },
      ],
      items: [],
      customerCount: 0,
      countryCount: {
        lkCount: 0,
        scCount: 0,
        usaCount: 0,
        ukCount: 0,
        canCount: 0,
        ausCount: 0,
      },
      currencyCount: {
        rsCount: 0,
        gbpCount: 0,
        usdCount: 0,
        cadCount: 0,
        ausCount: 0,
      },
      cityCount: {
        ColomboCount: 0,
        EdinburghCount: 0,
        NewYorkCount: 0,
        LondonCount: 0,
        TorontoCount: 0,
        MelbourneCount: 0,
      },
    }
  },
  created() {
    this.loadCustomers()
  },
  methods: {
    loadCustomers() {
      // console.log("loading Customers")
      $.ajax({
        url: 'http://localhost:8080/api/v1/customer',
        method: 'GET',
      }).done(resp => {
        // console.log(resp)
        this.items = resp
        this.customerCount = this.items.length
        // console.log(this.items)
        this.loadCountryBarGraph();
        this.loadCurrencyBarGraph();
        this.loadCityChart();
      })

    },
    loadCountryBarGraph() {
      this.items.forEach(this.loopCountries)
      this.customerCountryChart.data.series[0].push(this.countryCount.lkCount)
      this.customerCountryChart.data.series[0].push(this.countryCount.scCount)
      this.customerCountryChart.data.series[0].push(this.countryCount.usaCount)
      this.customerCountryChart.data.series[0].push(this.countryCount.ukCount)
      this.customerCountryChart.data.series[0].push(this.countryCount.canCount)
      this.customerCountryChart.data.series[0].push(this.countryCount.ausCount)
    },
    loopCountries(item, index) {
      //'SC', 'USA', 'UK', 'CAN', 'AUS'
      switch (item.country) {
        case 'LK':
          this.countryCount.lkCount++;
          break;
        case 'SC':
          this.countryCount.scCount++;
          break;
        case 'USA':
          this.countryCount.usaCount++;
          break;
        case 'UK':
          this.countryCount.ukCount++;
          break;
        case 'CAN':
          this.countryCount.canCount++;
          break;
        case 'AUS':
          this.countryCount.ausCount++;
          break;
      }

    },
    loadCurrencyBarGraph() {
      this.items.forEach(this.loopCurrency)
      this.currencyChart.data.series[0].push(this.currencyCount.rsCount)
      this.currencyChart.data.series[0].push(this.currencyCount.gbpCount)
      this.currencyChart.data.series[0].push(this.currencyCount.usdCount)
      this.currencyChart.data.series[0].push(this.currencyCount.cadCount)
      this.currencyChart.data.series[0].push(this.currencyCount.ausCount)
    },
    loopCurrency(item, index) {
      //'SC', 'USA', 'UK', 'CAN', 'AUS'
      switch (item.currency) {
        case 'RS':
          this.currencyCount.rsCount++;
          break;
        case 'GBP':
          this.currencyCount.gbpCount++;
          break;
        case 'USD':
          this.currencyCount.usdCount++;
          break;
        case 'CAD':
          this.currencyCount.cadCount++;
          break;
        case 'AUD':
          this.currencyCount.ausCount++;
          break;
      }

    },
    loadCityChart() {
      // this.citiesChart.dataentry = null;
      // this.citiesChart.datalabel = null;
      // this.citiesChart.labels = ['Colombo', 'Edinburgh', 'New York', 'London', 'Toronto', 'Melbourne'];
      // this.citiesChart.dataset = [5, 10, 15, 25,3,20];
      this.items.forEach(this.loopCities)
      this.customerCityChart.data.series[0].push(this.cityCount.ColomboCount)
      this.customerCityChart.data.series[0].push(this.cityCount.EdinburghCount)
      this.customerCityChart.data.series[0].push(this.cityCount.NewYorkCount)
      this.customerCityChart.data.series[0].push(this.cityCount.LondonCount)
      this.customerCityChart.data.series[0].push(this.cityCount.TorontoCount)
      this.customerCityChart.data.series[0].push(this.cityCount.MelbourneCount)
    },
    loopCities(item, index) {
      switch (item.city) {
        case 'Colombo':
          this.cityCount.ColomboCount++;
          break;
        case 'Edinburgh':
          this.cityCount.EdinburghCount++;
          break;
        case 'New York':
          this.cityCount.NewYorkCount++;
          break;
        case 'London':
          this.cityCount.LondonCount++;
          break;
        case 'Toronto':
          this.cityCount.TorontoCount++;
          break;
        case 'Melbourne':
          this.cityCount.MelbourneCount++;
          break;
      }

    },
  },
}
</script>
