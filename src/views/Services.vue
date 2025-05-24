 <template>
  <q-page class="q-pa-md">

    <!-- Lista de serviços -->
    <div class="row no-wrap scroll-x q-gutter-md">
      <q-card
        v-for="(servico, index) in servicos"
        :key="index"
        class="q-ma-sm shadow-2"
        style="min-width: 320px; max-width: 320px; height: 320px; border-radius: 18px;"
        flat
        bordered
        hover
      >
        <q-img
          :src="servico.imagem"
          height="240px"
          style="object-fit: cover; border-top-left-radius: 18px; border-top-right-radius: 18px;"
        />
        <q-card-section class="text-center">
          <div class="text-h6 q-mt-sm">{{ servico.nome }}</div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
interface Servico {
  nome: string
  imagem: string
}

const servicos: Servico[] = [
  {
    nome: 'Fluxo de Caixa',
    imagem: new URL('../assets/fluxo-de-caixa.png', import.meta.url).href
  },
  {
    nome: 'Recursos Bancários',
    imagem: new URL('../assets/recursos-bancarios.png', import.meta.url).href
  },
  {
    nome: 'Operações Financeiras',
    imagem: new URL('../assets/transacoes-financeiras.png', import.meta.url).href
  },
  {
    nome: 'Extrato Online',
    imagem: new URL('../assets/extrato-online.png', import.meta.url).href
  },
  {
    nome: 'Conciliação de Cartão',
    imagem: new URL('../assets/conciliacao-cartao.png', import.meta.url).href
  },
  {
    nome: 'IFRS 16',
    imagem: new URL('../assets/IFRS16.png', import.meta.url).href
  },
  {
    nome: 'Atualização de Moedas',
    imagem: new URL('../assets/atualizacao-moedas.png', import.meta.url).href
  }
]
</script>

<style scoped>
.scroll-x {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
</style>

