<template>
  <div id="app">
    <div class="data">
      <div class="pagination">
        <el-pagination
          :current-page.sync="page"
          background
          :page-size="offset"
          layout="prev, pager, next"
          :total="users.length">
        </el-pagination>
      </div>
  <table>
  <thead>
    <tr>
      <th class="sortable" @click="e => sortTable(e, 'id')">
      Id
      <i :class="'fas fa-' + (field === 'id' ? order === 'asc' ? 'sort-down' : 'sort-up' : 'sort')"></i>
    </th>
    <th class="sortable" @click="e => sortTable(e, 'name')">
      Name
      <i :class="'fas fa-' + (field === 'name' ? order === 'asc' ? 'sort-down' : 'sort-up' : 'sort')"></i>
    </th>
    <th class="sortable" @click="e => sortTable(e, 'salary')">
      Salary
      <i :class="'fas fa-' + (field === 'salary' ? order === 'asc' ? 'sort-down' : 'sort-up' : 'sort')"></i>
    </th>
    <th class="sortable" @click="e => sortTable(e, 'date')">
      Date of birth
      <i :class="'fas fa-' + (field === 'date' ? order === 'asc' ? 'sort-down' : 'sort-up' : 'sort')"></i>
    </th>
  </tr>
  </thead>
  <tbody>
    <tr v-for="user in paginateUsers" :key="user.id">
      <td>
        {{ user.id }}
      </td>
      <td>
        {{ user.name }}
      </td>
      <td>
        {{ user.salary }}
      </td>
      <td>
        {{ user.date }}
      </td>
    </tr>
  </tbody>
</table>
<div class="pagination">
  <el-pagination
    :current-page.sync="page"
    background
    :page-size="offset"
    layout="prev, pager, next"
    :total="users.length">
  </el-pagination>
</div>
</div>
  </div>
</template>

<script>
import {functions} from './lib/functions';

export default {
  name: 'app',
  data: function () {
    return {
      users: [],
      field: 'id',
      order: 'asc',
      page: 1,
      offset: 20
    }
  },
  computed: {
    filteredUsers () {
      var field = this.field;
      function sortAsc (a, b) {
        return a[field] < b[field] ? -1 : 1;
      }
      function sortDesc (a, b) {
        return a[field] > b[field] ? -1 : 1;
      }
      if (this.order === 'asc') {
        return this.users.slice().sort(sortAsc);
      } else {
        return this.users.slice().sort(sortDesc);
      }
    },
    paginateUsers () {
      let offset = this.offset * (this.page - 1);
      return this.filteredUsers.slice(offset, offset + this.offset);
    }
  },
  watch: {
    field () {
      this.page = 1;
    },
    order () {
      this.page = 1;
    }
  },
  mounted () {
    for (let i = 1; i <= 500; i++) {
        this.users.push({
        id: i,
        name: functions.getName(),
        salary: functions.getSalary(),
        date: functions.getDate()
      });
    }
  },
  methods: {
    sortTable (e, field) {
      if (this.field === field) {
        this.order = this.order === 'asc' ? 'desc' : 'asc';
      } else {
        this.field = field;
        this.order = 'asc';
      }
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto');

$white: #fff;

$offset: #111;

body {
  font-family: Roboto;
}
table {
  margin: 0 auto;
  border-collapse: collapse;
}
th {
  color: #327;
}
td {
  color: #102;
}
table, th, td {
  border: 1px solid #214;
  padding: 10px 50px;
}
.sortable {
  cursor: pointer;
  transition: background 0.5s ease;
  &:hover {
    background: $white - $offset * 2;
    transition: background 0.3s ease;
  }
}

.pagination {
  margin: 2rem auto;
  display: flex;
  justify-content: center;
}

</style>
