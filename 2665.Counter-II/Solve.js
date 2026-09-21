var createCounter = (init) =>
{
    let MyOldVar = init;
    let MyVar = init;
    return {

        increment: function()
        {
            MyVar += 1;
            return MyVar;
        },
        decrement: function()
        {
            MyVar -= 1;
            return (MyVar);
        },
        reset: function()
        {
            MyVar = MyOldVar;
            return (MyOldVar);
        }
    }
};

