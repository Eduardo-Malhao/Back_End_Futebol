const userMock = {
        id: 2,
        username: 'User',
        role: 'user',
        email: 'user@user.com',
        password: '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO'
    }

const userFailBody = {
    email: 'user@.com',
    password: 'secret_user'
}

const userBody = {
    email: 'user@userBody.com',
    password: 'secret_user'
}

export {
    userMock,
    userFailBody,
    userBody
}