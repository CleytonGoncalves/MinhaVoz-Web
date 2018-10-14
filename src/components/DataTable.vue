<template>
  <v-card>

    <v-toolbar flat color="white">
      <v-toolbar-title>Pacientes</v-toolbar-title>
      <v-divider class="mx-3" inset vertical></v-divider>

      <!-- Dialog Novo Paciente -->
      <v-dialog v-model="dialog" max-width="500px">
        <v-btn slot="activator" color="primary" class="mb-2" id="btnNovo">Novo</v-btn>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.name" label="Dessert name"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.calories" label="Calories"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.fat" label="Fat (g)"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.carbs" label="Carbs (g)"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.protein" label="Protein (g)"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-spacer />

      <v-text-field v-model="search" append-icon="search" label="Buscar nome" single-line hide-details />

    </v-toolbar>

    <v-data-table :headers="headers" :items="items" :search="search" must-sort class="elevation-1">
      <template slot="items" slot-scope="props">
        <td>
          <v-flex xs4 sm2 md1>
            <v-avatar size="56px" class="mt-1 mb-1">
              <img v-if="props.item.imagemUrl" :src="`http://localhost:8090/${props.item.imagemUrl}`" :alt="`Foto d${props.item.sexo == 'M' ? 'o' : 'a'} ${props.item.nome}`">
              <img v-else src="http://localhost:8090/capivara.jpg" alt="Sem foto">
            </v-avatar>
          </v-flex>
        </td>
        <td class="text-capitalize">{{ props.item.nome }}</td>
        <td class="text-uppercase">{{ props.item.sexo }}</td>
        <td>{{ props.item.fluxoPrancha }}</td>
        <td class="justify-center layout px-0">
          <v-icon medium class="mr-2" @click="editItem(props.item)">edit</v-icon>
          <v-icon medium @click="deleteItem(props.item)">delete</v-icon>
        </td>
      </template>
    </v-data-table>

  </v-card>
</template>

<script>
export default {
  name: "DataTable",
  data: () => ({
    search: "",
    dialog: false,

    headers: [
      {
        text: "Imagem",
        align: "left",
        sortable: false,
        value: "imagem"
      },
      { text: "Nome", value: "nome" },
      { text: "Sexo", value: "sexo" },
      { text: "Fluxo", value: "fluxo" },
      {
        text: "Actions",
        value: "name",
        sortable: false,
        align: "center"
      }
    ],
    items: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0
    },
    defaultItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Novo" : "Editar";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.items = [
        {
          id: 11,
          imagemUrl: "menino7.jpg",
          nome: "jon jones",
          sexo: "M",
          velocidadeVoz: 50,
          velocidadeSelecao: 1000,
          fluxoPrancha: "SUJEITO-VERBO-COMPLEMENTO",
          falarCadaPalavraSeletor: false
        },
        {
          id: 12,
          imagemUrl: "menina.jpg",
          nome: "Curie",
          sexo: "F",
          velocidadeVoz: 50,
          velocidadeSelecao: 2000,
          fluxoPrancha: "LIVRE",
          falarCadaPalavraSeletor: true
        }
      ];
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.desserts.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.desserts.splice(index, 1);
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>

<style scoped>
#btnNovo {
  margin-left: 0;
  margin-right: 0;
}
</style>