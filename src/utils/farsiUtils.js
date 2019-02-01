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

export const toWeekDay = (num) => {
  switch (num) {
    case 0:
      return messages.MON
    case 1:
      return messages.TUE
    case 2:
      return messages.WED
    case 3:
      return messages.THU
    case 4:
      return messages.FRI
    case 5:
      return messages.SAT
    case 6:
      return messages.SUN
    default:
      return ''
  }
}

export const toTime = (num) => {
  switch (num) {
    case 0:
      return messages.MORNING
    case 1:
      return messages.NOON
    case 2:
      return messages.AFTERNOON
    case 3:
      return messages.NIGHT
  }
}