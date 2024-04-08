class CatResponser{
    sendGetResponse(req, res){
        if(!res.error)
            res.json(res.result);
        else
            res.json({
                error: res.error,
                status: res.status
            });
    }
}

module.exports = new CatResponser();