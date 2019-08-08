module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.name) {
        switch(req.query.name){
            case "DarioKozicki":
                context.res = {
                    // status: 200, /* Defaults to 200 */
                    body: req.query.name+"'s birthday is 21st of February."
                };
                break;
            case "ElonMusk":
                 context.res = {
                    body: req.query.name+"'s birthday is 28th of June."
                 };
                break;
            case "IronMan":
                  context.res = {
                      body: req.query.name+"'s birthday is 29th of May."
                  };
                break;              
        }
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string"
        };
    }
};