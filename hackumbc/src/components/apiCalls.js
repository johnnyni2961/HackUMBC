import $ from 'jquery';

export function getCookies() {
    let cookies = {};

    document.cookie.split("; ").map(a => a.split("=")).map(v => cookies[v[0]] = v[1]);

    return cookies;
}

export function loginChecker() {
    
    const cookies = getCookies();

    var toReturn;

    if (cookies.sessionID) {
        $.ajax({
            url: "http://localhost:8090/users/authenticate",
            method: "get",
            async: false,
            data: { sessionID: cookies.sessionID },
            success: (res) => {
                toReturn = res.message == "OK";
            }
        });
        return toReturn;
    }
}

export function getUserByUsername(username) {
    var toReturn;
    $.ajax({
        url: "http://localhost:8090/users/name/",
        data: {username},
        async: false,
        success: (res) => {
            toReturn = res;
        }
    });
    return toReturn;
}

export function signOut() {
    $.post({
        url:"http://localhost:8090/users/logout",
        async:false,
        xhrFields: {
            withCredentials: true,
        },
        success: (res) => {
            console.log(res);
        }
    });
}

export const getUser = () => getCookies().sessionID.split("-")[1];

export function displayName() {
    const user = getUserByUsername(getUser());

    return `${user.fname} ${user.lname}`;
}