import browserLocale from 'browser-locale'
let curLocale = browserLocale()
let aLocale = curLocale.split('-')

curLocale = aLocale[0]
export const locale = curLocale

export const getSchema = () => {
  let schema = 'prod'
  if (window.location.hostname === 'localhost')  schema = 'dev'
  return schema
}

export const formatDate = (date) => {
  if (!date) return null
  let [year, month, day] = date.split('-')
  day = day.split(' ')[0]
  return `${day}/${month}/${year}`
}

export const parseDate = (date) => {
  // console.log('---- parse', date)
  if (!date) return null
  const [month, day, year] = date.split('/')
  return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
}

export const timePickerOptions = (start='08:30', step='00:30', end='23:30') => {
  return {
    start,
    step,
    end
  }
}


export const getToday = () => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return today
}

export const notBeforeToday = (date) => {
  return date < today;
}

export const today = getToday()

export const timeList = () => {
  let res = []

  for(let i = 0; i<20; i++) {
    res.push
  }
}
