import { MMKV } from "react-native-mmkv";

// // in package.json mmkv 2.x.x means version (2.00 to 2.9.9)

// // Create a new isntance and give id and enccption key for it


// btw id and encryption key is imaginary write it if youo have 
export const storage = new MMKV({
    id: 'my-app-storage',
    encryptionKey: 'some_encryption_key'
})



// Here we created a function then in those function(and gave two params so that we can use it later 
// basically for storing that thing that we want cause MMKV is key:value storing storage ) 
// then we wrote  function of seItem , getItem and removeItem  

export const mmkvStorage ={
    setItem:(key:string , value:string)=>{
        storage.set(key, value)
//         // We didn't need to stringfy cause it's already in string

    },
    getItem:(key:string)=>{
        // we don't need value cause we can get that by key
        const value = storage.getString(key)
        return value ?? null
        // Know why did we use ?? 
    },
    removeItem:(key:string)=>{
        storage.delete(key)
    }
}









// Here is how we do with zustand
// Objects snippets https://github.com/mrousavy/react-native-mmkv/blob/main/docs/WRAPPER_ZUSTAND_PERSIST_MIDDLEWARE.md
// import { MMKV } from 'react-native-mmkv'

// const storage = new MMKV()
// https://github.com/mrousavy/react-native-mmkv?tab=readme-ov-file
// Now if we want to store something the store it

// const zustandStorage = {
//     // store it
//   setItem: (name, value) => {
//     return storage.set(name, value)
//   },
//   getItem: (name) => {
//     const value = storage.getString(name)
// // get string is use for converting JSOON object into object
//     return value ?? null
//   },
//   removeItem: (name) => {
//     return storage.delete(name)
//   },
// }


