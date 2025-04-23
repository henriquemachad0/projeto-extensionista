<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-icon name="business" class="q-mr-sm" />
          MakeValue
        </q-toolbar-title>

        <q-btn flat label="Início" to="/" />
        <q-btn flat label="Serviços" to="/services" />
        <q-btn flat label="Contato" to="/contact" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-grey-2 text-black q-pa-md">
      <div class="text-center">
        &copy; {{ new Date().getFullYear() }} MakeValue. Todos os direitos reservados.
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
</script>

