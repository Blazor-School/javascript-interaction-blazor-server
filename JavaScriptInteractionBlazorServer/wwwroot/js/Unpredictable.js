export class Unpredictable
{
    returnValueSometimes(inputFactor)
    {
        switch (inputFactor)
        {
            case 1:
                return 100;
            case 2:
                return "Blazor School";
            default:
        }
    };

    async hang()
    {
        await sleep(3);
        console.info("Execution on the client side has done!");

        return "Done";
    }
}

function sleep(seconds)
{
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}