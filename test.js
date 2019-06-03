let Emails = require('./lib/index')


const test = async () => {
    var e = new Emails()

    const res = await e.verify('ittipon@mycostech.com')
    console.log(res)
}

test()