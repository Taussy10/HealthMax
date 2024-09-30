import { create } from 'zustand'
import { mmkvStorage,  } from './Storage'
import {persist , createJSONStorage} from 'zustand/middleware'


interface WaterStore {
  waterDrinkStamps: string[],
//   It's a intial value that will many things in array in the form of strings
  addWaterIntake: (timeStamp: string) => void,
//   hello: () => {} (for void in ts no need to use void)
// When we have to write function inside object this kinda syntax is use
// curly braces are optional they are use for blocking that fromt this to funciton body exist

// in that we have written void(that it doesn't return any value)

//   timeStamp has string
  resetWaterIntake: () => void 
}

export const useWaterStore = create<WaterStore>()(
    persist(
      // persist middleware(something) helps us to manage our local(MMKV , async storage) Storage data 
      // https://zustand.docs.pmnd.rs/integrations/persisting-store-data#persisting-store-data
    (set , get) =>({
        waterDrinkStamps: [],
    addWaterIntake: (timeStamp)=>{
        const waterDrinkStamps = [...get().waterDrinkStamps, timeStamp]
        set({waterDrinkStamps})
    },
    resetWaterIntake: () => {
 set({waterDrinkStamps: []})
    }


}),{
            name: 'water-storage',
            storage: createJSONStorage(()=>mmkvStorage)
        }
    )

)