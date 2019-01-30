import {messages} from 'src/utils/messages'

export const toFarsiGender = (gender) => {
  if (gender === 'f') {
    return messages.WOMAN
  } else {
    return messages.Man
  }
}