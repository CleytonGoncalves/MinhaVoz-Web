<template>

  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-card>

        <v-toolbar flat color="white">
          <v-toolbar-title>Pacientes</v-toolbar-title>
          <v-divider class="mx-3" inset vertical></v-divider>

          <NovoPacienteDialog :itemToEdit="itemToEdit" @clearEdited="clearEdited" />
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
            <!-- <td v-for="(column, i) in headers" :key="i"  ></td> -->
            <td class="text-capitalize">{{ props.item.nome }}</td>
            <td class="text-uppercase">{{ props.item.sexo }}</td>
            <td class="text-capitalize">{{ props.item.fluxoPrancha }}</td>
            <td class="justify-center layout px-0">
              <v-icon medium class="mr-2" @click="editItem(props.item)">edit</v-icon>
              <v-icon medium @click="deleteItem(props.item)">delete</v-icon>
            </td>
          </template>

        </v-data-table>

      </v-card>
    </v-slide-y-transition>
  </v-container>

</template>

<script>
import NovoPacienteDialog from "../components/NovoPacienteDialog";

export default {
  name: "Pacientes",

  components: { NovoPacienteDialog },

  data() {
    return {
      search: "",
      itemToEdit: {},
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
          text: "Ações",
          value: "name",
          sortable: false,
          align: "center"
        }
      ],
      items: [
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
      ]
    };
  },

  methods: {
    editItem(item) {
      this.itemToEdit = Object.assign({}, item);
    },

    deleteItem(item) {
      const index = this.items.indexOf(item);
      confirm("Tem certeza que deseja remover este paciente?") &&
        this.items.splice(index, 1);
    },

    clearEdited() {
      this.itemToEdit = {};
    }
  }
};
</script>
