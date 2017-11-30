import axios from 'axios';

export const START = '_START'
export const SUCCESS = '_SUCCESS'
export const FAIL = '_FAIL'



export default store => next => action => {
    const {
        api,
        type,
        ...rest
  } = action

    if (!api) return next(action)

    next({
        ...rest,
        type: type + START
    })

    axios(api).then(payload => {
        next({
            ...rest,
            payload,
            type: type + SUCCESS
        })
    }).catch(payload => {
        next({
            ...rest,
            payload,
            type: type + FAIL
        })
    });
}
