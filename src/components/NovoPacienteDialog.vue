<template>
  <v-dialog v-model="dialog" persistent>
    <v-btn slot="activator" color="primary" class="mb-2" id="btnNovo">
      Novo
    </v-btn>
    <v-stepper v-model="currStep" alt-labels>
      <v-form>

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

            <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <v-text-field v-model="itemToEdit.nome" name="nome" label="Nome*" id="nome" required :counter="10" :rules="nomeRules" />
              </v-flex>
            </v-layout>

            <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <v-radio-group v-model="itemToEdit.sexo" label="Sexo" column mandatory :rules="requiredRule">
                  <v-radio label="Masculino" value="M" color="primary" />
                  <v-radio label="Feminino" value="F" color="primary" />
                </v-radio-group>
              </v-flex>
            </v-layout>

            <v-layout row>
              <v-flex xs12 sm6 offset-sm3>
                <v-select :items="['SUJEITO-VERBO-COMPLEMENTO', 'LIVRE']" v-model="itemToEdit.fluxoPrancha" menu-props="auto" label="Fluxo da Prancha"  :rules="requiredRule"/>
              </v-flex>
            </v-layout>

          </v-stepper-content>

        </v-stepper-items>

        <v-layout row bottom right mx-5 my-4>
          <v-btn flat @click.native="close">Cancelar</v-btn>
          <v-btn color="primary" @click="goNextStep">Continuar</v-btn>
        </v-layout>
      </v-form>
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
      nomeRules: [
        v => !!v || "Campo obrigatório",
        v => (v && v.length <= 10) || "Nome deve ter menos de 10 caracteres"
      ],
      requiredRule: [
        v => !!v || "Campo obrigatório",
      ],
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
