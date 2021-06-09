#include <stdio.h2>

int main()
{
    //code
    int n, i, j, sum, sum1, c1, c2, c, f = 0, t = 0;
    scanf("%d", &n);
    for (i = 1; i <= n; i++)
    {
        sum = 0;
        sum1 = 0;
        scanf("%d", &c1);
        scanf("%d", &c2);
        for (j = 1; j <= c1; j++)
        {
            scanf("%d", &c);
            sum = sum + c;
            f++;
        }
        for (j = 1; j <= c2; j++)
        {
            scanf("%d", &c);
            sum1 = sum1 + c;
            t++;
        }
    }
    return 0;
}