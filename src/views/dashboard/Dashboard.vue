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
            :data="adviserDepartmentChart.data"
            :options="adviserDepartmentChart.options"
            :responsive-options="adviserDepartmentChart.responsiveOptions"
            color="#E91E63"
            hover-reveal
            type="Bar"
        >
          <h4 class="card-title font-weight-light mt-2 ml-2">
            Departments
          </h4>

          <p class="d-inline-flex font-weight-light ml-2 mt-1">
            Departments of the advisers
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
            :data="reigonChart.data"
            :options="reigonChart.options"
            :responsive-options="reigonChart.responsiveOptions"
            color="grey"
            hover-reveal
            type="Bar"
        >
          <h4 class="card-title font-weight-light mt-2 ml-2">
            Reigon
          </h4>

          <p class="d-inline-flex font-weight-light ml-2 mt-1">
            Reigon of the advisers
          </p>

          <template v-slot:actions>
            <v-icon
                class="mr-1"
                small
            >
              mdi-clock-outline
            </v-icon>
            <span class="caption grey--text font-weight-light">updated 1 second ago</span>
          </template>
        </base-material-chart-card>

      </v-col>

      <v-col
          cols="12"
          lg="4"
      >
        <base-material-chart-card
            :data="marketChart.data"
            :options="marketChart.options"
            hover-reveal
            color="info"
            type="Bar"
        >

          <h3 class="card-title font-weight-light mt-2 ml-2">
            Market
          </h3>

          <p class="d-inline-flex font-weight-light ml-2 mt-1">
            Market type of advisers
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
              Advisers ({{ adviserCount }})
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
      marketChart: {
        data: {
          labels: ['CRM', 'PBA', 'CRA', 'PBB', 'PBX','ITD','CRO'],
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
      adviserDepartmentChart: {
        data: {
          labels: ['CRM1', 'PBA1', 'CRA2', 'PBA2', 'PBB2', 'PBB1','PBX1','CROA'],
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
      reigonChart: {
        data: {
          labels: ['CR', 'PB', 'IT'],
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
          text: 'Code',
          value: 'code',
        },
        {
          sortable: false,
          text: 'Name',
          value: 'name',
          align: 'right',
        },
        {
          sortable: false,
          text: 'Short Name',
          value: 'shortName',
          align: 'right',
        },
        {
          sortable: false,
          text: 'Department',
          value: 'department',
          align: 'right',
        },
        {
          sortable: false,
          text: 'Tel_No.',
          value: 'telNumber',
          align: 'right',
        },
        {
          sortable: false,
          text: 'ATE_ID.',
          value: 'ateId',
          align: 'right',
        },
        {
          sortable: false,
          text: 'Username',
          value: 'username',
          align: 'right',
        },
        {
          sortable: false,
          text: 'DDL_ID',
          value: 'ddlId',
          align: 'right',
        },
        {
          sortable: false,
          text: 'REC_TYP.',
          value: 'recTyp',
          align: 'right',
        },
        {
          sortable: false,
          text: 'Department id.',
          value: 'departmentId',
          align: 'right',
        },
        {
          sortable: false,
          text: 'Record Status',
          value: 'recordStatus',
          align: 'right',
        },
        {
          sortable: false,
          text: 'Request to Delete',
          value: 'requestToDelete',
          align: 'right',
        },
        {
          sortable: false,
          text: 'Request user',
          value: 'requestUser',
          align: 'right',
        },
        {
          sortable: false,
          text: 'Request date',
          value: 'requestDate',
          align: 'right',
        },
        {
          sortable: false,
          text: 'Approve user',
          value: 'approveUser',
          align: 'right',
        },
        {
          sortable: false,
          text: 'Approve Date',
          value: 'approveDate',
          align: 'right',
        },
        {
          sortable: false,
          text: 'Reigon',
          value: 'region',
          align: 'right',
        },
        {
          sortable: false,
          text: 'Market',
          value: 'market',
          align: 'right',
        },
      ],
      items: [],
      adviserCount: 0,
      departmentCount: {
        // 'CRM1', 'PBA1', 'CRA2', 'PBA2', 'PBB2', 'PBB1','PBX1','CROA'
        CRM1Count: 0,
        PBA1Count: 0,
        CRA2Count: 0,
        PBA2Count: 0,
        PBB2Count: 0,
        PBB1Count: 0,
        PBX1Count: 0,
        CROACount: 0,
      },
      marketCount: {
        // 'CRM', 'PBA', 'CRA', 'PBB', 'PBX','ITD','CRO'
        CRMCount: 0,
        PBACount: 0,
        CRACount: 0,
        PBBCount: 0,
        PBXCount: 0,
        ITDCount: 0,
        CROCount: 0,
      },
      reigonCount: {
        CRCount: 0,
        PBCount: 0,
        ITCount: 0,
      },
    }
  },
  created() {
    this.loadAdvisers()
  },
  methods: {
    loadAdvisers() {

      $.ajax({
        url: 'http://localhost:8080/api/v1/adviser',
        method: 'GET',
      }).done(resp => {
        // console.log(resp)
        this.items = resp
        this.adviserCount = this.items.length
        // console.log(this.items)
        this.loadDepartmentBarGraph();
        this.loadCurrencyBarGraph();
        this.loadReigonChart();
      })

    },
    loadDepartmentBarGraph() {
      this.items.forEach(this.loopDepartment)
      this.adviserDepartmentChart.data.series[0].push(this.departmentCount.CRM1Count)
      this.adviserDepartmentChart.data.series[0].push(this.departmentCount.PBA1Count)
      this.adviserDepartmentChart.data.series[0].push(this.departmentCount.CRA2Count)
      this.adviserDepartmentChart.data.series[0].push(this.departmentCount.PBA2Count)
      this.adviserDepartmentChart.data.series[0].push(this.departmentCount.PBB2Count)
      this.adviserDepartmentChart.data.series[0].push(this.departmentCount.PBB1Count)
      this.adviserDepartmentChart.data.series[0].push(this.departmentCount.PBX1Count)
      this.adviserDepartmentChart.data.series[0].push(this.departmentCount.CROACount)
    },
    loopDepartment(item, index) {
     // 'CRM1', 'PBA1', 'CRA2', 'PBA2', 'PBB2', 'PBB1','PBX1','CROA'
      switch (item.department) {
        case 'CRM1':
          this.departmentCount.CRM1Count++;
          break;
        case 'PBA1':
          this.departmentCount.PBA1Count++;
          break;
        case 'CRA2':
          this.departmentCount.CRA2Count++;
          break;
        case 'PBA2':
          this.departmentCount.PBA2Count++;
          break;
        case 'PBB2':
          this.departmentCount.PBB2Count++;
          break;
        case 'PBB1':
         this.departmentCount.PBB1Count++;
         break;
        case 'PBX1':
         this.departmentCount.PBX1Count++;
         break;
        case 'CROA':
         this.departmentCount.CROACount++;
         break;

      }

    },

    loadCurrencyBarGraph() {
      this.items.forEach(this.loopMarket)
      this.marketChart.data.series[0].push(this.marketCount.CRMCount)
      this.marketChart.data.series[0].push(this.marketCount.PBACount)
      this.marketChart.data.series[0].push(this.marketCount.CRACount)
      this.marketChart.data.series[0].push(this.marketCount.PBBCount)
      this.marketChart.data.series[0].push(this.marketCount.PBXCount)
      this.marketChart.data.series[0].push(this.marketCount.ITDCount)
      this.marketChart.data.series[0].push(this.marketCount.CROCount)
    },
    loopMarket(item, index) {
      // 'CRM', 'PBA', 'CRA', 'PBB', 'PBX','ITD','CRO'
      switch (item.market) {
        case 'CRM':
          this.marketCount.CRMCount++;
          break;
        case 'PBA':
          this.marketCount.PBACount++;
          break;
        case 'CRA':
         this.marketCount.CRACount++;
          break;
        case 'PBB':
          this.marketCount.PBBCount++;
          break;
        case 'PBX':
          this.marketCount.PBXCount++;
          break;
        case 'ITD':
          this.marketCount.ITDCount++;
          break;
        case 'CRO':
          this.marketCount.CROCount++;
          break;
      }

    },


    loadReigonChart() {
      this.items.forEach(this.loopReigons)
      this.reigonChart.data.series[0].push(this.reigonCount.CRCount)
      this.reigonChart.data.series[0].push(this.reigonCount.PBCount)
      this.reigonChart.data.series[0].push(this.reigonCount.ITCount)
    },
    loopReigons(item, index) {
      // 'CR', 'PB', 'IT'
      switch (item.region) {
        case 'CR':
          this.reigonCount.CRCount++;
          break;
        case 'PB':
          this.reigonCount.PBCount++;
          break;
        case 'IT':
          this.reigonCount.ITCount++;
          break;
      }

    },
  },
}
</script>
