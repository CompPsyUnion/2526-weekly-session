# M - Polygon

> **Problem Summary:** Determine if a polygon is convex.

> **问题摘要：** 判断一个多边形是否是凸的。

## Background

A polygon is convex if all its interior angles are less than $180^\circ$. Given the vertices of a polygon in order, determine if it is convex.

如果一个多边形的所有内角都小于 $180^\circ$，则该多边形是凸的。给定一个多边形的顶点顺序，判断它是否是凸的。

## Problem Description

You are given the vertices of a polygon in order. Determine if the polygon is convex.

给定一个多边形的顶点顺序，判断该多边形是否是凸的。

## Input Format

The first line contains an integer $n$ ($3 \leq n \leq 10^5$), the number of vertices.

第一行包含一个整数 $n$ ($3 \leq n \leq 10^5$)，表示顶点的数量。

The next $n$ lines each contain two integers $x_i$ and $y_i$ ($-10^9 \leq x_i, y_i \leq 10^9$), the coordinates of the $i$-th vertex.

接下来的 $n$ 行每行包含两个整数 $x_i$ 和 $y_i$ ($-10^9 \leq x_i, y_i \leq 10^9$)，表示第 $i$ 个顶点的坐标。

## Output Format

Output `YES` if the polygon is convex, otherwise output `NO`.

如果多边形是凸的，输出 `YES`，否则输出 `NO`。

## Sample Input

```
4
0 0
0 1
1 1
1 0
```

## Sample Output

```
YES
```

## Sample Explanation

1. The polygon is a square, which is convex.

1. 该多边形是一个正方形，它是凸的。

## Constraints

- The vertices are given in order, either clockwise or counterclockwise.

- 顶点按顺序给出，可以是顺时针或逆时针。

## Standard Code

```cpp
#include <bits/stdc++.h>
using namespace std;
using ll = long long;

struct Point
{
    ll x, y;
};

// cross product (b - a) x (c - a)
static inline ll cross(const Point &a, const Point &b, const Point &c)
{
    return (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x);
}

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    if (!(cin >> n))
        return 0;
    vector<Point> p(n);
    for (int i = 0; i < n; ++i)
        cin >> p[i].x >> p[i].y;

    // Find sign of first non-zero cross product
    int sign = 0; // 0 = unknown, +1 = positive, -1 = negative
    for (int i = 0; i < n; ++i)
    {
        ll z = cross(p[i], p[(i + 1) % n], p[(i + 2) % n]);
        if (z == 0)
            continue; // collinear, ignore
        int s = (z > 0) ? 1 : -1;
        if (sign == 0)
            sign = s;
        else if (sign != s)
        {
            cout << "false\n";
            return 0;
        }
    }

    // If all cross products are zero (degenerate but allowed as simple polygon? here points are unique and polygon simple),
    // treat as convex (all points collinear -> polygon is not strictly a polygon but we'll say convex for this check).
    cout << "true\n";
    return 0;
}

```
