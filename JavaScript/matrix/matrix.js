function totalPaths(m, n)
{
    if (m == 1 || n == 1)
        return 1;
    return totalPaths(m - 1, n) + totalPaths(m, n - 1);
}