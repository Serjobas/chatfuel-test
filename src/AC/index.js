export const editUser = (id, value, imgURL) => ({
    type: 'EDIT_USER',
    id,
    value,
    api: {
        method: 'post',
        url: '/api/users/' + id,
        data: {
            name: value,
            avatarUrl: imgURL
        }
    }
});

export const loadUsers = () => ({
    type: 'LOAD_USERS',
    api: {
        method: 'get',
        url: '/users/get'
    }
})