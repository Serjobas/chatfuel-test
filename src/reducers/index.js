// import * as types from '../constants/app'

const initialState = {
    users: [],
}

const data = {
    result: [
    {
        id: '1',
        name: 'Node',
        imgURL: 'https://ih1.redbubble.net/image.109336634.1604/flat,550x550,075,f.u1.jpg'
    },
    {
        id: '2',
        name: 'YouTube',
        imgURL: 'https://www.youtube.com/yt/about/media/images/brand-resources/logos/YouTube-logo-full_color_light.svg'
    },
    {
        id: '3',
        name: 'Reddit',
        imgURL: 'http://i.imgur.com/sdO8tAw.png'
    },
    {
        id: '4',
        name: 'React',
        imgURL: 'http://www.iconninja.com/files/962/247/638/react-js-react-logo-js-icon.svg'
    },
    {
        id: '5',
        name: 'JavaScript',
        imgURL: 'https://fiu-assets-2-syitaetz61hl2sa.stackpathdns.com/static/use-media-items/17/16215/full-1052x1052/56702c8b/js.png?resolution=0'
    },
    {
        id: '6',
        name: 'Angular',
        imgURL: 'https://angular.io/assets/images/logos/angular/angular.png'
    },
    {
        id: '7',
        name: 'Webpack',
        imgURL: 'https://webpack.js.org/6bc5d8cf78d442a984e70195db059b69.svg'
    },
    {
        id: '8',
        name: 'HTML',
        imgURL: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png'
    },
    {
        id: '11',
        name: 'Node',
        imgURL: 'https://ih1.redbubble.net/image.109336634.1604/flat,550x550,075,f.u1.jpg'
    },
    {
        id: '21',
        name: 'YouTube',
        imgURL: 'https://www.youtube.com/yt/about/media/images/brand-resources/logos/YouTube-logo-full_color_light.svg'
    },
    {
        id: '31',
        name: 'Reddit',
        imgURL: 'http://i.imgur.com/sdO8tAw.png'
    },
    {
        id: '41',
        name: 'React',
        imgURL: 'http://www.iconninja.com/files/962/247/638/react-js-react-logo-js-icon.svg'
    },
    {
        id: '51',
        name: 'JavaScript',
        imgURL: 'https://fiu-assets-2-syitaetz61hl2sa.stackpathdns.com/static/use-media-items/17/16215/full-1052x1052/56702c8b/js.png?resolution=0'
    },
    {
        id: '61',
        name: 'Angular',
        imgURL: 'https://angular.io/assets/images/logos/angular/angular.png'
    },
    {
        id: '71',
        name: 'Webpack',
        imgURL: 'https://webpack.js.org/6bc5d8cf78d442a984e70195db059b69.svg'
    },
    {
        id: '81',
        name: 'HTML',
        imgURL: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png'
    },
    {
        id: '12',
        name: 'Node',
        imgURL: 'https://ih1.redbubble.net/image.109336634.1604/flat,550x550,075,f.u1.jpg'
    },
    {
        id: '22',
        name: 'YouTube',
        imgURL: 'https://www.youtube.com/yt/about/media/images/brand-resources/logos/YouTube-logo-full_color_light.svg'
    },
    {
        id: '32',
        name: 'Reddit',
        imgURL: 'http://i.imgur.com/sdO8tAw.png'
    },
    {
        id: '42',
        name: 'React',
        imgURL: 'http://www.iconninja.com/files/962/247/638/react-js-react-logo-js-icon.svg'
    },
    {
        id: '52',
        name: 'JavaScript',
        imgURL: 'https://fiu-assets-2-syitaetz61hl2sa.stackpathdns.com/static/use-media-items/17/16215/full-1052x1052/56702c8b/js.png?resolution=0'
    },
    {
        id: '62',
        name: 'Angular',
        imgURL: 'https://angular.io/assets/images/logos/angular/angular.png'
    },
    {
        id: '72',
        name: 'Webpack',
        imgURL: 'https://webpack.js.org/6bc5d8cf78d442a984e70195db059b69.svg'
    },
    {
        id: '82',
        name: 'HTML',
        imgURL: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png'
    },
    ]
}


export default (state = initialState, action) => {
    const { type, payload, id, value } = action;

    switch (type) {
        case 'LOAD_USERS_SUCCESS': 
            return {
                ...state,
                users: payload
            }
        case 'LOAD_USERS_FAIL':  // if REQUEST is failing ( API is not working) then data is taken from local variable
            return {
                ...state,
                users: data.result
            }    
        case 'EDIT_USER_START':

            let obj = state.users.find(user => user.id === id ? user : null);
            obj.name = value;
            

            return {
                ...state,
                obj
            }     

        default:
            return state
    }
}
