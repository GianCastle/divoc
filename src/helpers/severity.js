import { constant, stubTrue, cond } from 'lodash'

export const isRuined = confirmeds => confirmeds > 1000
export const isInDanger = confirmeds => confirmeds > 100 && confirmeds <= 1000
export const isStillControled = confirmeds => confirmeds < 100
export const isCountryAlmostDeath = confirmeds => confirmed > 500

export const otherwise = stubTrue()

export const getSeverityColor = cond([
  [isRuined, constant('#fa3252')],
  [isInDanger, constant('#fa394c')],
  [isStillControled, constant('#fa503c')],

    [otherwise, constant('black')]
])
