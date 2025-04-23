  <template>
    <q-page class="q-pa-md">
      <div class="q-gutter-md text-center">
        <q-img
          src="https://via.placeholder.com/1200x400.png?text=Bem-vindo+à+Nossa+Empresa"
          alt="Banner institucional"
          class="rounded-borders"
        />
        <div class="text-h4 q-mt-md">Somos especialistas em soluções inovadoras</div>
        <div class="text-subtitle1 q-mb-md">
          Ajudamos empresas a crescer com tecnologia e estratégia.
        </div>
        <q-btn label="Saiba Mais" color="primary" to="/services" />
      </div>
  
      <div class="q-mt-xl">
        <div class="text-h5 text-center q-mb-md">Nossos Diferenciais</div>
        <div class="row q-col-gutter-md justify-center">
          <div class="col-xs-12 col-sm-4">
            <q-card>
              <q-card-section>
                <div class="text-h6">Atendimento Personalizado</div>
                <div class="text-caption">Cada cliente é único e merece atenção especial.</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-xs-12 col-sm-4">
            <q-card>
              <q-card-section>
                <div class="text-h6">Tecnologia de Ponta</div>
                <div class="text-caption">Utilizamos as melhores ferramentas do mercado.</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-xs-12 col-sm-4">
            <q-card>
              <q-card-section>
                <div class="text-h6">Resultados Reais</div>
                <div class="text-caption">Foco em desempenho, métricas e crescimento.</div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </q-page>
  </template>
  
  <script setup lang="ts">

  </script>
  
  <style scoped>
  .q-img {
    max-width: 100%;
  }
  </style>
  