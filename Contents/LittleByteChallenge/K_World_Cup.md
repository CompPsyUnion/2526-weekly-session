# K - World Cup

> **Problem Summary:** Predict the winner of the World Cup based on team strengths.

> **问题摘要：** 根据球队实力预测世界杯冠军。

## Background

The World Cup is a knockout tournament where teams compete in matches. Each match is decided based on the strengths of the two teams. The stronger team always wins.

世界杯是一项淘汰赛，球队通过比赛一决高下。每场比赛的胜负取决于两队的实力。实力更强的球队总是获胜。

## Problem Description

You are given $n$ teams, each with a strength $s_i$. The tournament is structured as a single-elimination bracket. Predict the winner of the tournament.

给定 $n$ 支球队，每支球队的实力为 $s_i$。比赛以单淘汰赛形式进行。预测比赛的冠军。

## Input Format

The first line contains an integer $n$ ($2 \leq n \leq 2^{20}$), the number of teams. $n$ is always a power of $2$.

第一行包含一个整数 $n$ ($2 \leq n \leq 2^{20}$)，表示球队数量。$n$ 总是 $2$ 的幂。

The second line contains $n$ integers $s_1, s_2, \dots, s_n$ ($1 \leq s_i \leq 10^9$), the strengths of the teams.

第二行包含 $n$ 个整数 $s_1, s_2, \dots, s_n$ ($1 \leq s_i \leq 10^9$)，表示球队的实力。

## Output Format

Output a single integer, the strength of the winning team.

输出一个整数，表示冠军球队的实力。

## Sample Input

```
4
10 20 30 40
```

## Sample Output

```
40
```

## Sample Explanation

1. In the first round:
   - Match 1: $10$ vs $20$, winner is $20$.
   - Match 2: $30$ vs $40$, winner is $40$.
2. In the final round:
   - Match: $20$ vs $40$, winner is $40$.

1. 第一轮：
   - 比赛 1：$10$ 对 $20$，胜者是 $20$。
   - 比赛 2：$30$ 对 $40$，胜者是 $40$。
2. 决赛：
   - 比赛：$20$ 对 $40$，胜者是 $40$。

## Constraints

- The tournament is perfectly balanced, with no byes.

- 比赛完全平衡，没有轮空。

## Standard Code

```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long ll;

int main()
{
    int n;
    ll m;
    cin >> n >> m;

    vector<ll> cost(n);
    for (int i = 0; i < n; i++)
    {
        cin >> cost[i];
    }

    // Split into two halves for meet-in-the-middle
    int n1 = n / 2;
    int n2 = n - n1;

    // Generate all subset sums for first half
    vector<ll> sum1;
    for (int mask = 0; mask < (1 << n1); mask++)
    {
        ll s = 0;
        for (int i = 0; i < n1; i++)
        {
            if (mask & (1 << i))
            {
                s += cost[i];
            }
        }
        sum1.push_back(s);
    }

    // Generate all subset sums for second half
    vector<ll> sum2;
    for (int mask = 0; mask < (1 << n2); mask++)
    {
        ll s = 0;
        for (int i = 0; i < n2; i++)
        {
            if (mask & (1 << i))
            {
                s += cost[n1 + i];
            }
        }
        sum2.push_back(s);
    }

    // Sort second half
    sort(sum2.begin(), sum2.end());

    // For each sum in first half, find how many sums in second half can be added
    ll answer = 0;
    for (ll s1 : sum1)
    {
        if (s1 > m)
            continue;
        ll remaining = m - s1;
        // Count how many elements in sum2 are <= remaining
        ll count = upper_bound(sum2.begin(), sum2.end(), remaining) - sum2.begin();
        answer += count;
    }

    cout << answer << endl;

    return 0;
}

```
