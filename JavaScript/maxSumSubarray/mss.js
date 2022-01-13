function maxSum(arr, size)
{
    let max=-(Math.pow(2,53)-1);
    for(let i=0;i<size;i++)
    {
        let total=0;
        for(let j=i;j<size;j++)
        {
            total+=arr[j];
            if(total>max)
                max=total;
        }
    }
    return max;
}