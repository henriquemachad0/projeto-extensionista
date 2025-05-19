<!-- <template>
  <q-page class="q-pa-md">
    <div class="text-h4 q-mb-md">Nossos Serviços</div>
    <ul class="q-pl-md">
      <li class="q-mb-sm">Fluxo de caixa</li>
      <li class="q-mb-sm">Recursos bancários</li>
      <li class="q-mb-sm">Operações financeiras</li>
      <li class="q-mb-sm">IFRS 16</li>
    </ul>
  </q-page>
</template> -->

<template>
  <q-page class="q-pa-md">
    <div class="text-h4 q-mb-md">Nossos Serviços</div>

    <div class="row no-wrap scroll-x q-gutter-md">
      <q-card
        v-for="(servico, index) in servicos"
        :key="index"
        class="q-ma-sm shadow-2"
        style="min-width: 320px; max-width: 320px; height: 400px; border-radius: 18px;"
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
    nome: 'Fluxo de caixa',
    imagem: 'https://images.unsplash.com/photo-1588776814546-ec7d7ffcb4dd?auto=format&fit=crop&w=640&q=80'
  },
  {
    nome: 'Recursos bancários',
    imagem: 'https://images.unsplash.com/photo-1605902711622-cfb43c4437d2?auto=format&fit=crop&w=640&q=80'
  },
  {
    nome: 'Operações financeiras',
    imagem: 'https://images.unsplash.com/photo-1569025690938-a00729c9e1f8?auto=format&fit=crop&w=640&q=80'
  },
  {
    nome: 'Extrato online',
    imagem: 'https://images.unsplash.com/photo-1569025690938-a00729c9e1f8?auto=format&fit=crop&w=640&q=80'
  },
  {
    nome: 'Conciliação de cartão',
    imagem: 'https://images.unsplash.com/photo-1569025690938-a00729c9e1f8?auto=format&fit=crop&w=640&q=80'
  },
  {
    nome: 'IFRS 16',
    imagem: 'https://cdn.pixabay.com/photo/2016/11/29/02/09/business-1863883_1280.jpg'
  },
  {
    nome: 'Atualização de moedas',
    imagem: 'https://images.unsplash.com/photo-1607083206173-06d41b8e4c5e?auto=format&fit=crop&w=640&q=80'
  }
]
</script>

<style scoped>
.scroll-x {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
</style>


