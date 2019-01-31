import {messages} from 'src/utils/messages'

export const toFarsiGender = (gender) => {
  if (gender === 'f') {
    return messages.WOMAN
  } else {
    return messages.MAN
  }
}

export const booleanToGender = (needMale, needFemale) => {
  if (needFemale && needMale) {
    return messages.WOMAN + ' و ' + messages.MAN
  } else if (needFemale && !needMale) {
    return messages.WOMAN
  } else if (needMale && !needFemale) {
    return messages.MAN
  }
}

export const abilityIDToName = (id, abilites) => {
  return abilites[id]['name']
}