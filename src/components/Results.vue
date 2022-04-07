<template>
    <div class="results">
        <Card v-for="ticket in tickets" :key="ticket.id"/>
        <LoadMore />
    </div>
</template>

<script>
import Card from './Card.vue'
import LoadMore from './LoadMore.vue'

export default {
  name: 'Results',
  components: {
    Card,
    LoadMore
  },
  data() {
    return {
      tickets: [
        {
          "id": "73144831-56ec-4c40-89a8-c3b85ef46713",
          "price": 8100,
          "companyId": "cddfa038-823b-43b1-b18d-395731881077",
          "segments": [
            "885e1a50-305f-4106-b075-6c35f8e1f184",
            "11b11717-c5d0-40bc-832c-671c7ce11374"
          ]
        },
        {
          "id": "cb4d1968-fd11-424f-b7d1-71dcf7bb89f4",
          "price": 47100,
          "companyId": "7dc12d0b-ce42-48a0-8673-0dad4d698764",
          "segments": [
            "eebb2f7b-07c5-4149-ada3-0f1a08c44f1b"
          ]
        },
        {
          "id": "1f8ddf5e-af4b-4513-a58f-786d01d485fd",
          "price": 48700,
          "companyId": "cddfa038-823b-43b1-b18d-395731881077",
          "segments": [
            "e2c2b649-5638-4eac-baed-6707985232a3",
            "d5862f79-bd47-4e8c-972c-bca7e88ab39d"
          ]
        },
        {
          "id": "80935999-de1f-4ea1-949b-237bc92bb6a1",
          "price": 21000,
          "companyId": "7dc12d0b-ce42-48a0-8673-0dad4d698764",
          "segments": [
            "b81a4f37-3176-494c-82b6-70e3a4d38906",
            "e832db7b-5c89-4e58-8365-d97dcb2ec23a"
          ]
        },
        {
          "id": "08768142-4dfb-4198-bf34-4f9985a6dae6",
          "price": 18100,
          "companyId": "cddfa038-823b-43b1-b18d-395731881077",
          "segments": [
            "667e8929-e77c-44db-af0b-5e7906f6daa4",
            "965dee73-9692-462a-9834-b83d6d8cc9a2"
          ]
        },
      ]   
    }
  },
}
</script>

<style lang="scss">
  .results {
    display: flex;
    flex-flow: column nowrap;
  }
</style>
