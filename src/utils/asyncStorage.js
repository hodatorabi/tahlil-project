import {AsyncStorage} from 'react-native'

export const AsyncStorageGetItem = (key) => {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(key)
            .then(async (res) => {
                resolve(res)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

export const AsyncStorageRemoveItem = (key) => {
    return new Promise((resolve, reject) => {
        AsyncStorage.removeItem(key)
            .then(async (res) => {
                resolve(res)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

export const AsyncStorageSetItem = (key, value) => {
    return new Promise((resolve, reject) => {
        AsyncStorage.setItem(key, value)
            .then(async (res) => {
                resolve(res)
            })
            .catch((error) => {
                reject(error)
            })
    })
}