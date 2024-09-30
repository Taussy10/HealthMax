import { create } from 'zustand'
import { mmkvStorage, storage,  } from './Storage'
import {persist , createJSONStorage} from 'zustand/middleware'


interface PedometerStorage{
    stepCount: number
    // one more thing either write number or number if by mistake it conflict 
    // then you can get into problems My opinion; always write in small letter

    dailyGoal: number
    distance: string
    // why string

    startDate: string
// startDate is string when date is number know it by chaning 
// it to number
addSteps: (steps:number , distance: string) => void
initalizeStepsForTheDay: () => void ,
// function for intializing steps for each day
resetSteps: () => void ,
// Fn for reseting steps
setDailyGoals: (goal: number) => void
// Fn for setting daily goals and why goal as params so that we can 
// how many counts a person will set goal
  
}

export const usePedometerStore = create<PedometerStorage>() (
    persist(
        (set,get) => ({
        stepCount: 0,
        dailyGoal: 2000,
        distance: '' ,
        startDate: new Date().toISOString().split('T')[0],
        initalizeStepsForTheDay: () => {
            // first we need to check whetere is it initalDate
            const todayDate = new Date().toISOString().split('T')[0];
            const {startDate} = get()
            if (todayDate !== startDate) {
                set({stepCount: 0 , startDate: todayDate , distance: ''})
                }
            },
            addSteps: (steps , distance) => {
                get().initalizeStepsForTheDay()
                set((state) => ({
                    stepCount: state.stepCount + steps
                })
            )
            },
            // resetSteps:() => {}
            // resetSteps:() => 
             resetSteps:() => set({stepCount: 0}),
            setDailyGoals: (goal) => set({dailyGoal: goal})

            

            
            }),
        {
           name:'pedometer-storage',
           storage: createJSONStorage(()=> mmkvStorage)
        }
    )
    

)





