<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated class="bg-white text-black">
      <q-toolbar class="q-px-xl q-py-lg">
        <q-toolbar-title class="q-mx-xl">
          <q-img 
            src="~assets/logo1.webp" 
            alt="MakeValue Logo" 
            style="height: 50px; max-width: 250px" 
          />
        </q-toolbar-title>

        <q-space />

        <q-input
          v-model="search"
          dense
          outlined
          placeholder="Pesquise por algo"
          class="q-mr-xl"
          style="width: 500px; font-size: 16px"
        >
          <template v-slot:append>
            <q-img
              src="~assets/lupa.png"
              style="height: 20px; width: 20px; cursor: pointer"
              @click="pesquisar"
            />
          </template>
        </q-input>
      </q-toolbar>

      <div class="barra-inferior-header">
        <div class="custom-padding row items-center full-height">
          <q-btn
            label="HOME"
            flat
            class="bg-primary text-white home-btn"
            style="border-radius: 0px"
            :to="{ name: 'home' }"
          />
          <q-btn
            label="SOBRE NÓS"
            flat
            class="text-white home-btn"
            :to="{ name: 'about' }"
          />
          <q-btn
            label="SERVIÇOS"
            flat
            class="text-white home-btn"
            :to="{ name: 'services' }"
          />
          <q-btn
            label="CONTATO"
            flat
            class="text-white home-btn"
            :to="{ name: 'contact' }"
          />
        </div>
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-9 text-white">
      <div class="row justify-between items-start q-gutter-xs q-px-xl q-pt-xs q-pb-xs">
        <div class="col-12 col-md-3">
          <h6 class="text-h6 q-mb-sm">
            <q-img
              src="~assets/logo2.png"
              alt="Logo Coluna"
              style="width: 180px;"
              contain
            />
          </h6>
          <div class="row items-center q-gutter-sm q-mb-xs">
            <q-icon name="phone" />
            <span>(47) 1234-56789</span>
          </div>
          <div class="row items-start q-gutter-sm q-mb-xs">
            <q-icon name="place" class="q-mt-xs" style="margin-top: 10px;" />
            <div class="col">
              Dr. João Colin, 1872 - América, Joinville, SC
            </div>
          </div>
        </div>

        <div class="col-12 col-md-3">
          <h6 class="text-h6 q-mb-sm">Informações</h6>
          <a href="https://example.com/home" class="text-white q-mb-xs block" target="_blank" style="text-decoration: none;">
            Home
          </a>
          <a href="https://example.com/sobre" class="text-white q-mb-xs block" target="_blank" style="text-decoration: none;">
            Sobre nós
          </a>
          <a href="https://example.com/contato" class="text-white q-mb-xs block" target="_blank" style="text-decoration: none;">
            Contato
          </a>
        </div>

        <div class="col-12 col-md-3">
          <h6 class="text-h6 q-mb-sm">Artigos</h6>
          <a href="https://example.com/artigo" class="text-white q-mb-xs block" target="_blank" style="text-decoration: underline; max-width: 200px; display: block;">
            Como a Verzani & Sandrini Automatizou sua Conciliação de Depósitos com a MakeValue
          </a>
        </div>

        <div class="col-12 col-md-3">
          <h6 class="text-h6 q-mb-sm">Mídias Sociais</h6>
          <div class="row justify-start q-gutter-sm">
            <q-img
              src="~assets/linkedin.png"
              style="width: 32px; height: 32px; cursor: pointer;"
            />
            <q-img
              src="~assets/instagram.png"
              style="width: 32px; height: 32px; cursor: pointer;"
            />
          </div>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      search: '' as string,
    };
  },
  methods: {
    pesquisar(): void {
      console.log('Pesquisando por:', this.search);
    },
  },
});
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

.q-footer h6.text-h6 {
  margin-top: 0 !important;
  padding-top: 0 !important;
}

.q-footer > div > div {
  margin: 0 !important;
  padding: 2vw !important;
}

.q-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

.q-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

.q-page-container {
  flex: 1;
  padding-top: calc(85px + 60px) !important;
  padding-bottom: 100px !important;
  overflow-y: auto;
}

.barra-inferior-header {
  height: 60px;
  background-color: #58585a;
  width: 100%;
  position: fixed;
  top: 85px;
  z-index: 99;
}

.home-btn {
  height: 60px !important;
  min-height: 60px !important;
  display: flex;
  align-items: center;
}

.custom-padding {
  padding-left: 100px !important;
  padding-right: 100px !important;
}

.banner-container {
  width: 100%;
  overflow: hidden;
}

.banner-img {
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
}

@media (max-width: 1024px) {
  .custom-padding {
    padding-left: 50px !important;
    padding-right: 50px !important;
  }
}

@media (max-width: 600px) {
  .barra-inferior-header {
    height: 50px;
    top: 60px;
  }

  .custom-padding {
    padding-left: 20px !important;
    padding-right: 20px !important;
  }

  .home-btn {
    height: 50px !important;
    min-height: 50px !important;
    font-size: 14px;
  }

  .q-page-container {
    padding-top: calc(60px + 50px) !important;
  }
}
</style>
