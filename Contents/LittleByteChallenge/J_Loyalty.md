# J - Loyalty

> **Problem Summary:** Calculate the maximum loyalty points a customer can earn.

> **问题摘要：** 计算顾客可以获得的最大忠诚积分。

## Background

A store offers a loyalty program where customers earn points based on their purchases. Each item has a price and a loyalty point value. Customers have a budget and want to maximize the loyalty points they can earn.

一家商店提供一个忠诚计划，顾客根据购买的商品获得积分。每件商品都有价格和忠诚积分值。顾客有一个预算，希望最大化可以获得的忠诚积分。

## Problem Description

You are given $n$ items, each with a price $p_i$ and loyalty points $l_i$. You have a budget $B$. Determine the maximum loyalty points you can earn without exceeding your budget.

给定 $n$ 件商品，每件商品的价格为 $p_i$，忠诚积分为 $l_i$。你有一个预算 $B$。确定在不超出预算的情况下可以获得的最大忠诚积分。

## Input Format

The first line contains two integers $n$ and $B$ ($1 \leq n \leq 10^5$, $1 \leq B \leq 10^9$), the number of items and your budget.

第一行包含两个整数 $n$ 和 $B$ ($1 \leq n \leq 10^5$, $1 \leq B \leq 10^9$)，表示商品数量和你的预算。

The next $n$ lines each contain two integers $p_i$ and $l_i$ ($1 \leq p_i, l_i \leq 10^9$), the price and loyalty points of each item.

接下来的 $n$ 行每行包含两个整数 $p_i$ 和 $l_i$ ($1 \leq p_i, l_i \leq 10^9$)，表示每件商品的价格和忠诚积分。

## Output Format

Output a single integer, the maximum loyalty points you can earn.

输出一个整数，表示可以获得的最大忠诚积分。

## Sample Input

```
3 50
20 60
30 100
10 20
```

## Sample Output

```
120
```

## Sample Explanation

1. Buy the first and third items:
   - Total price: $20 + 10 = 30$
   - Total loyalty points: $60 + 20 = 120$.
2. Cannot buy the second item as it exceeds the budget.

1. 购买第一件和第三件商品：
   - 总价格：$20 + 10 = 30$
   - 总忠诚积分：$60 + 20 = 120$。
2. 无法购买第二件商品，因为它超出了预算。

## Constraints

- Each item can be purchased at most once.

- 每件商品最多只能购买一次。

## Standard Code

```cpp

// Note that there's a lot of pre-defined functions in this code that're very useful in terms of ICPC.

#include <bits/stdc++.h>
#define N 1000005
#define max(a, b) a > b ? a : b
#define f1(i, n, m) for (int i = n; i <= m; ++i)
#define f2(i, n, m) for (int i = n; i >= m; --i)
#define ll long long
#define reset(a, b) memset(a, b, sizeof(a))
#define INF 0x3f3f3f
using namespace std;
template <typename T>
void read(T &x)
{
	int w = 1;
	x = 0;
	char c = getchar();
	while (c < '0' || c > '9')
	{
		if (c == '-')
			w = -1;
		c = getchar();
	}
	while (c >= '0' && c <= '9')
	{
		x = (x << 1) + (x << 3) + (c ^ 48);
		c = getchar();
	}
	x *= w;
}
template <typename T, typename... more>
void read(T &x, more &...y) { read(x), read(y...); }
int n, m;
ll l, r, mid;
ll v[5][N], pre1[N], pre2[N], pre3[N];
ll s1[N], s2[N], s3[N];
int dp[N];
inline bool check(ll lim)
{
	pre1[0] = pre2[0] = pre3[0] = 0;
	f1(i, 1, n)
	{
		pre1[i] = pre1[i - 1], pre2[i] = pre2[i - 1], pre3[i] = pre3[i - 1];
		while (s1[i] - s1[pre1[i]] > lim)
			pre1[i]++;
		while (s2[i] - s2[pre2[i]] > lim)
			pre2[i]++;
		while (s3[i] - s3[pre3[i]] > lim)
			pre3[i]++;
	} // 预处理出较每一列在限制条件下能向前跳的最远位置
	reset(dp, INF);
	dp[0] = 0;
	int step, p1, p2;
	f1(i, 1, n)
	{
		dp[i] = min(dp[i], dp[pre3[i]] + 1); // 以第一种情况更新状态
		p1 = p2 = i, step = 0;
		while (step <= m && (p1 || p2))
		{ //
			if (p1 > p2)
				p1 = pre1[p1];
			else
				p2 = pre2[p2];
			step++;
			dp[i] = min(dp[i], dp[max(p1, p2)] + step); // 横向块向前跳
		}
		if (dp[i] > m)
			return false;
	}
	return true;
}
signed main()
{
	read(n, m);
	f1(i, 1, 2) f1(j, 1, n) read(v[i][j]), l = max(v[i][j], l);
	f1(i, 1, n)
	{
		s1[i] = s1[i - 1] + v[1][i];
		s2[i] = s2[i - 1] + v[2][i];
		s3[i] = s1[i] + s2[i];
	}
	r = s3[n];
	while (l < r)
	{
		mid = (l + r) >> 1;
		if (check(mid))
			r = mid;
		else
			l = mid + 1;
	}
	printf("%lld\n", r);
	return 0;
}
```
