 export function response (res, msg, ok, object, status){
    res.status(status).json({
        ok: ok, 
        status: status,
        msg: msg, 
        body: object
    })
}