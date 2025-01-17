import { defineStore } from 'pinia'
import type Service from '~/models/Service'
import { collection, getDocs, addDoc } from 'firebase/firestore'

export const useServicesStore = defineStore({
  id: 'servicesStore',
  state: () => ({ services: [] as Service[] }),
  actions: {
    async fetchServices() {
      const { $db } = useNuxtApp()
      const servicesCollection = collection($db, 'ourservices')
      const servicesSnapshot = await getDocs(servicesCollection)
      this.services = servicesSnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      })) as Service[];
    },

    async addService(service: Partial<Service>) {
      const { $db } = useNuxtApp()
      const servicesCollection = collection($db, 'ourservices')
      const docRef = await addDoc(servicesCollection, service)
      const newService = { ...service, id: docRef.id } as Service
      this.services.push(newService)
    },
    
    async useMyServicesStore() {
      const { $db } = useNuxtApp()
      const servicesCollection = collection($db, 'services')
      const servicesSnapshot = await getDocs(servicesCollection)
      this.services = servicesSnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      })) as Service[];
    }
  }
})