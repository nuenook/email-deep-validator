let Emails = require('./lib/index')


const test = async () => {
    var e = new Emails()
    try {
     const res = await e.verify('ittipon@mycostech.com') 
     console.log(res)
   } catch(err) {
    console.log(err)
    }
}

test()