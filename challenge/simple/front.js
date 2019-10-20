devDefine(
    ['challenge/simple/data'],
    function(data) {
        return {
            message: "Okay, now sort getToKnowBo.data case insensitive and put it to getToKnowBo.answer",
            onLoad : function() {
                getToKnowBo.data = data.list;
                DevCli.params = data;
            }
        };
    }
);
