document.cookie.__proto__.set=({name,value,days}={})=> {
    if (!days) days = 1024;

    const date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));

    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/;`;
}

document.cookie.__proto__.get=(name)=> {
    const cookies = [...document.cookie.split("; ")];
    for (let c of cookies) {
        c = c.split("=");
        if (c[0] === name)
            return c[1] 
    }

    return undefined;
}

document.cookie.__proto__.delete=(name)=> {
    document.cookie = `${name}=; expires=Wed, Jan 01 1800 00:00:00 UTC; path=/;`;
}