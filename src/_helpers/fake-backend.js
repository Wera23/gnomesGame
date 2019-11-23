export function configureFakeBackend() {
    let users = [
        { id: 1, username: 'Wera', password: 'Wera', firstName: 'Wera', lastName: 'Chodanionek', level: 'Begginer player' }
    ];
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {

                if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
                    let params = JSON.parse(opts.body);

                    let filteredUsers = users.filter(user => {
                        return user.username === params.username && user.password === params.password;
                    });

                    if (filteredUsers.length) {
                        let user = filteredUsers[0];
                        let responseJson = {
                            id: user.id,
                            username: user.username,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            level: user.level
                           
                        };
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) });
                    } else {
                        reject('Username or password is incorrect');
                    }

                    return;
                }

                if (url.endsWith('/users') && opts.method === 'GET') {
                    let user = JSON.parse(localStorage.getItem('user'));
                    if (opts.headers && opts.headers.Authorization === `Basic ${user.authdata}`) {
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(users)) });
                    } else {
                        resolve({ status: 401, text: () => Promise.resolve() });
                    }

                    return;
                }

                realFetch(url, opts).then(response => resolve(response));

            }, 500);
        });
    }
}