<template>
  <v-dialog v-model="dialog" max-width="800px" persistent>
    <v-btn slot="activator" color="primary" class="mb-2" id="btnNovo">Novo</v-btn>

    <v-stepper v-model="currStep" alt-labels>

      <v-stepper-header>
        <v-stepper-step step="1" editable :complete="currStep > 1" :edit-icon="iconCompleted">
          Dados do Paciente
        </v-stepper-step>
        <v-divider />

        <v-stepper-step step="2" editable :complete="currStep > 2" :edit-icon="iconCompleted">
          Sujeito
        </v-stepper-step>
        <v-divider />

        <v-stepper-step step="3" editable :complete="currStep > 3" :edit-icon="iconCompleted">
          Verbo
        </v-stepper-step>
        <v-divider />

        <v-stepper-step step="4" editable :complete="currStep > 4" :edit-icon="iconCompleted">
          Complemento
        </v-stepper-step>
        <v-divider />

        <v-stepper-step step="5" editable :complete="currStep > 5" :edit-icon="iconCompleted">
          Diverso
        </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>

        <!-- Step 1 -->
        <v-stepper-content step="1">
          <v-form>
            <v-card class="mb-5">
              <v-card-text>

                <v-layout row>
                  <v-flex xs12 sm6 offset-sm3>
                    <v-text-field v-model="itemToEdit.nome" name="nome" label="Nome*" id="nome" required :counter="10" :rules="nomeRules"></v-text-field>
                  </v-flex>
                </v-layout>

              </v-card-text>
            </v-card>
          </v-form>

          <v-card-actions>
            <v-spacer />
            <v-btn flat @click.native="close">Cancelar</v-btn>
            <v-btn color="primary" @click="goNextStep">Continuar</v-btn>
          </v-card-actions>

        </v-stepper-content>

        <!-- Step 2 -->
        <v-stepper-content step="2">
          <v-card class="mb-5">
            <v-card-text>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                </v-flex>
              </v-layout>
            </v-card-text>

          </v-card>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat @click.native="close">Cancelar</v-btn>
            <v-btn color="primary" @click="currStep = 3">Continuar</v-btn>
          </v-card-actions>

        </v-stepper-content>

        <!-- Step 3 -->
        <v-stepper-content step="3">
          <v-card class="mb-5">
            <v-card-text>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                </v-flex>
              </v-layout>
            </v-card-text>

          </v-card>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat @click.native="close">Cancelar</v-btn>
            <v-btn color="primary" @click="currStep = 4">Continuar</v-btn>
          </v-card-actions>

        </v-stepper-content>

        <!-- Step 4 -->
        <v-stepper-content step="4">
          <v-card class="mb-5">
            <v-card-text>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                </v-flex>
              </v-layout>
            </v-card-text>

          </v-card>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat @click.native="close">Cancelar</v-btn>
            <v-btn color="primary" @click="currStep = 5">Continuar</v-btn>
          </v-card-actions>

        </v-stepper-content>

        <!-- Step 5 -->
        <v-stepper-content step="5">
          <v-card class="mb-5">
            <v-card-text>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                </v-flex>
              </v-layout>
            </v-card-text>

          </v-card>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat @click.native="close">Cancelar</v-btn>
            <v-btn color="primary" @click="save">Salvar</v-btn>
          </v-card-actions>

        </v-stepper-content>

      </v-stepper-items>

    </v-stepper>

  </v-dialog>

</template>

<script>
export default {
  name: "NovoPacienteDialog",

  props: { itemToEdit: Object },

  data() {
    return {
      dialog: false,
      currStep: 0,
      iconCompleted: "$vuetify.icons.complete",
      valid: false,
      nomeRules: [v => !!v || "Nome é obrigatório"],
      defaultItem: {
        name: "",
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0
      }
    };
  },

  computed: {
    formTitle() {
      return this.isObjEmpty(this.itemToEdit)
        ? "Novo Paciente"
        : "Editar Paciente";
    }
  },

  watch: {
    itemToEdit(newVal) {
      this.dialog = !this.isObjEmpty(newVal);
    }
  },

  methods: {
    goNextStep() {
      // if (this.$validator.validateAll(this.currStep).then(() => )) {
      //   this.currStep++;
      // }
    },

    close() {
      this.dialog = false;
      this.currStep = 1;
      this.$refs.form.reset();
      this.$emit("clearEdited");
    },

    save() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.close();
        }
      });
    },

    isObjEmpty(obj) {
      for (var x in obj) return false;
      return true;
    }
  }
};
</script>
